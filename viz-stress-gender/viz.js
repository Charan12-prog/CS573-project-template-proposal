// ---- columns in your Sleep Health & Lifestyle dataset
const COL = {
  gender: 'Gender',
  stress: 'Stress Level',
  disorder: 'Sleep Disorder',
};

// ---- stress binning identical to earlier weeks
const binStress = (v) =>
  v <= 3
    ? 'Low (1–3)'
    : v <= 6
      ? 'Medium (4–6)'
      : 'High (7–10)';

const BIN_ORDER = [
  'Low (1–3)',
  'Medium (4–6)',
  'High (7–10)',
];

// ---- categories + color palette
// Healthy sleep (None) vs Disordered sleep (Insomnia + Sleep Apnea)
const KEYS = ['None', 'Insomnia', 'Sleep Apnea'];
const color = d3
  .scaleOrdinal()
  .domain(KEYS)
  // Healthy = gray, Disordered = two related blues
  .range(['#d9d9d9', '#4a7bb7', '#8fbce6']);

// Helper for grouping in tooltip/legend
const disorderGroup = (k) =>
  k === 'None' ? 'Healthy Sleep' : 'Disordered Sleep';

// ---- SVG + layout
const svg = d3.select('#chart');
const W = 1100,
  H = 520;
const m = { t: 58, r: 220, b: 60, l: 70 };
const w = W - m.l - m.r,
  h = H - m.t - m.b;

const g = svg
  .append('g')
  .attr('transform', `translate(${m.l},${m.t})`);

// tooltip div (must exist in index.html as <div id="tooltip">...</div>)
const tooltip = d3.select('#tooltip');

// -----------------------
// TITLE + SUBTITLE
// -----------------------
const title = g
  .append('text')
  .attr('class', 'title')
  .attr('x', w / 2)
  .attr('y', -30)
  .attr('text-anchor', 'middle')
  .attr('font-weight', 600)
  .text('Sleep Disorders by Stress Level — % of people');

// updated subtitle: mentions 1–10 scale + main takeaway
const subtitle = g
  .append('text')
  .attr('class', 'subtitle')
  .attr('x', w / 2)
  .attr('y', -10)
  .attr('text-anchor', 'middle')
  .text(
    'Stress is measured on a 1–10 scale (binned into Low / Medium / High); higher stress is associated with more Insomnia and Sleep Apnea.',
  );

// -----------------------
// AXES + GRID
// -----------------------
const x = d3
  .scaleBand()
  .domain(BIN_ORDER)
  .range([0, w])
  .padding(0.25);

const y = d3.scaleLinear().domain([0, 1]).range([h, 0]);

g.append('g')
  .attr('class', 'x-axis axis')
  .attr('transform', `translate(0,${h})`)
  .call(d3.axisBottom(x));

g.append('g')
  .attr('class', 'y-axis axis')
  .call(d3.axisLeft(y).tickFormat(d3.format('.0%')));

g.append('g')
  .attr('class', 'y-grid')
  .call(d3.axisLeft(y).tickSize(-w).tickFormat(''));

// X-axis label — now explicitly references the original numeric scale
g.append('text')
  .attr('class', 'axis-label')
  .attr('x', w / 2)
  .attr('y', h + 48)
  .attr('text-anchor', 'middle')
  .text(
    'Stress Level (1–10 scale, binned into Low / Medium / High)',
  );

// Y-axis label
g.append('text')
  .attr('class', 'axis-label')
  .attr('text-anchor', 'middle')
  .attr(
    'transform',
    `translate(${-45}, ${h / 2}) rotate(-90)`,
  )
  .text('Percentage of people (%)');

// ---- global state
let RAW = [];
const state = {
  gender: 'All',
  viewMode: 'all', // 'all' or 'disorders'
  active: new Set(KEYS), // which categories are currently visible
};

// ---- chart container
const cats = g.append('g').attr('class', 'cats');

// ---- summarize data for current gender filter
function summarize(rows) {
  const filtered =
    state.gender === 'All'
      ? rows
      : rows.filter((d) => d[COL.gender] === state.gender);

  const byBin = new Map(
    BIN_ORDER.map((b) => [
      b,
      {
        bin: b,
        total: 0,
        counts: new Map(KEYS.map((k) => [k, 0])),
      },
    ]),
  );

  for (const d of filtered) {
    const bucket = byBin.get(binStress(+d[COL.stress]));
    if (!bucket) continue;

    // normalize unexpected disorder values to "None"
    const cat = KEYS.includes(d[COL.disorder])
      ? d[COL.disorder]
      : 'None';

    bucket.total += 1;
    bucket.counts.set(cat, bucket.counts.get(cat) + 1);
  }

  const data = BIN_ORDER.map((b) => {
    const entry = byBin.get(b);
    const total = Math.max(1, entry.total); // avoid divide-by-zero
    const out = { bin: b, total, counts: {} };

    for (const k of KEYS) {
      const rawCount = entry.counts.get(k);
      out.counts[k] = rawCount; // raw n in this bin
      out[k] = rawCount / total; // % of bin
    }

    return out;
  });

  return { data, n: filtered.length };
}

let rectsSel = null; // for legend highlight and hover reset

function draw({ data, n }) {
  // update chart title with gender + n
  const gLabel =
    state.gender === 'All' ? 'All' : state.gender;
  title.text(
    `Sleep Disorders by Stress Level — % of people · ${gLabel} · n=${n}`,
  );

  // stack only active keys, but ALWAYS in the fixed KEYS order (bottom -> top)
  const activeKeys = KEYS.filter((k) =>
    state.active.has(k),
  );
  const stack = d3.stack().keys(activeKeys);
  const series = stack(data);

  // group <g> for each disorder category
  const groups = cats
    .selectAll('.bin-group')
    .data(series, (s) => s.key)
    .join(
      (enter) =>
        enter
          .append('g')
          .attr('class', 'bin-group')
          .attr('fill', (s) => color(s.key)),
      (update) => update,
      (exit) => exit.remove(),
    );

  // rects for each stress bin in each category
  rectsSel = groups
    .selectAll('rect.bar-seg')
    .data(
      (layer) =>
        layer.map((segment, binIndex) => ({
          0: segment[0],
          1: segment[1],
          key: layer.key,
          binIndex,
        })),
      (d, i) => d.key + ':' + i,
    )
    .join(
      (enter) =>
        enter
          .append('rect')
          .attr('class', 'bar-seg')
          .attr('rx', 2)
          .attr('ry', 2)
          .attr('x', (d) => x(data[d.binIndex].bin))
          .attr('width', x.bandwidth())
          .attr('y', y(0))
          .attr('height', 0)
          .call((sel) =>
            sel
              .transition()
              .duration(450)
              .attr('x', (d) => x(data[d.binIndex].bin))
              .attr('width', x.bandwidth())
              .attr('y', (d) => y(d[1]))
              .attr('height', (d) => y(d[0]) - y(d[1])),
          ),
      (update) =>
        update
          .transition()
          .duration(450)
          .attr('x', (d) => x(data[d.binIndex].bin))
          .attr('width', x.bandwidth())
          .attr('y', (d) => y(d[1]))
          .attr('height', (d) => y(d[0]) - y(d[1])),
      (exit) =>
        exit
          .transition()
          .duration(250)
          .attr('y', y(0))
          .attr('height', 0)
          .remove(),
    );

  // remove native browser <title> tooltip so it doesn't conflict
  rectsSel.selectAll('title').remove();

  // -----------------------
  // HOVER INTERACTION
  // -----------------------
  let hoverLabel = null; // <text> element we draw on the bar

  rectsSel
    .on('mouseover', function (event, d) {
      // fade all bars smoothly
      rectsSel
        .transition()
        .duration(220)
        .attr('opacity', 0.25);

      // emphasize hovered bar segment
      d3.select(this)
        .transition()
        .duration(220)
        .attr('opacity', 1)
        .attr('stroke', '#000')
        .attr('stroke-width', 1.5);

      // data for this stress bin
      const row = data[d.binIndex];

      // compute % and raw count for this slice
      const pctValNum = (d[1] - d[0]) * 100;
      const pctText = pctValNum.toFixed(1) + '%';
      const nCat = row.counts[d.key];
      const nTotal = row.total;

      // position label in middle of slice
      const xPos = x(row.bin) + x.bandwidth() / 2;
      const yTop = y(d[1]);
      const yBottom = y(d[0]);
      const yPos = (yTop + yBottom) / 2;

      // numeric label on the bar segment
      hoverLabel = cats
        .append('text')
        .attr('class', 'hover-label')
        .attr('pointer-events', 'none')
        .attr('x', xPos)
        .attr('y', yPos)
        .attr('text-anchor', 'middle')
        .attr('font-weight', 700)
        .text(`${pctText} (${nCat})`)
        .raise();

      // floating tooltip near cursor for extra detail
      tooltip.style('opacity', 1).html(
        `<div style="font-weight:600; margin-bottom:2px;">${row.bin}</div>
         <div>${d.key}: ${pctText} (n=${nCat}/${nTotal})</div>
         <div style="font-size:11px; color:#555;">
           Group: ${disorderGroup(d.key)}
         </div>`,
      );
    })
    .on('mousemove', function (event) {
      tooltip
        .style('left', event.pageX + 12 + 'px')
        .style('top', event.pageY - 28 + 'px');
    })
    .on('mouseout', function () {
      // remove stroke and restore opacity smoothly
      d3.select(this)
        .transition()
        .duration(200)
        .attr('stroke', 'none')
        .attr('stroke-width', null);

      rectsSel
        .transition()
        .duration(200)
        .attr('opacity', 1);

      // hide tooltip
      tooltip.style('opacity', 0);

      // remove numeric label from bar
      if (hoverLabel) {
        hoverLabel.remove();
        hoverLabel = null;
      }
    });

  // update legend display ("[✓] ON"/"[✗] OFF")
  updateLegendSwatches();
}

// ---- recompute + redraw whole chart
function update() {
  const summary = summarize(RAW);
  draw(summary);
}

// ---- LEGEND (interactive)
const legend = svg
  .append('g')
  .attr('class', 'legend')
  .attr(
    'transform',
    `translate(${m.l + w + -2}, ${m.t + 10})`,
  );

legend
  .append('text')
  .attr('class', 'legend-title')
  .attr('font-weight', 700)
  .attr('y', 0)
  .text('Sleep disorders (click to toggle)');

// NEW: small subtitle to explain Healthy vs Disordered grouping
legend
  .append('text')
  .attr('class', 'legend-subtitle')
  .attr('y', 14)
  .attr('font-size', 11)
  .attr('fill', '#555')
  .text(
    'Healthy: None · Disordered: Insomnia + Sleep Apnea',
  );

// build each legend row
const legendRows = [];
// REVERSED order so the top legend item matches the TOP of the stack
const LEGEND_KEYS = [...KEYS].slice().reverse();

LEGEND_KEYS.forEach((k, i) => {
  const row = legend
    .append('g')
    .attr('transform', `translate(0, ${30 + i * 24})`)
    .attr('tabindex', 0)
    .on('mouseover', () => highlightCategory(k))
    .on('mouseout', clearHighlight)
    .on('click', () => toggleCategory(k))
    .on('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleCategory(k);
      }
    });

  // bigger invisible hit area for easier clicking
  row
    .append('rect')
    .attr('x', -6)
    .attr('y', -6)
    .attr('width', 190)
    .attr('height', 24)
    .attr('fill', 'transparent');

  // color swatch
  row
    .append('rect')
    .attr('class', 'swatch')
    .attr('width', 14)
    .attr('height', 14)
    .attr('rx', 2)
    .attr('stroke-width', 1.5)
    .attr('fill', color(k))
    .attr('stroke', '#333');

  // category label ("None", "Insomnia", etc.)
  row
    .append('text')
    .attr('x', 20)
    .attr('y', 11.5)
    .attr('font-size', 12)
    .attr('fill', '#000')
    .text(k);

  // ON/OFF badge text
  row
    .append('text')
    .attr('class', 'badge')
    .attr('x', 120)
    .attr('y', 11.5)
    .attr('font-size', 11)
    .attr('fill', '#000')
    .text('[✓] ON');

  legendRows.push(row);
});

// legend hover highlight (dim others)
function highlightCategory(cat) {
  if (!rectsSel) return;
  rectsSel
    .transition()
    .duration(120)
    .attr('opacity', (d) => (d.key === cat ? 1 : 0.08));
}

function clearHighlight() {
  if (!rectsSel) return;
  rectsSel.transition().duration(120).attr('opacity', 1);
}

// legend click toggle
function toggleCategory(cat) {
  if (state.active.has(cat)) {
    state.active.delete(cat);
  } else {
    state.active.add(cat);
  }

  // never allow 0 active categories
  if (state.active.size === 0) {
    state.active.add(cat);
  }

  update();
}

// redraw legend row visuals after toggling
function updateLegendSwatches() {
  for (const row of legendRows) {
    const label = row.select('text').text(); // "None", "Insomnia", etc.
    const on = state.active.has(label);

    row
      .select('rect.swatch')
      .attr('fill-opacity', on ? 1 : 0.25)
      .attr('stroke', on ? '#111' : '#999')
      .attr('stroke-width', on ? 1.5 : 2.5);

    row.attr('opacity', on ? 1 : 0.6);

    row
      .select('text.badge')
      .text(on ? '[✓] ON' : '[✗] OFF')
      .attr('fill', '#000');
  }
}

// ---- dropdown interaction (Gender: All / Male / Female)
d3.select('#gender').on('change', (e) => {
  state.gender = e.target.value;
  update();
});

// ---- dropdown interaction (View: All / Disorders only)
d3.select('#viewMode').on('change', (e) => {
  state.viewMode = e.target.value;

  if (state.viewMode === 'all') {
    state.active = new Set(KEYS); // show None + Insomnia + Sleep Apnea
  } else if (state.viewMode === 'disorders') {
    state.active = new Set(['Insomnia', 'Sleep Apnea']); // focus on disorders only
  }

  updateLegendSwatches();
  update();
});

// ---- load data then render first view
d3.csv('data.csv', d3.autoType).then((rows) => {
  RAW = rows;
  update();
});
