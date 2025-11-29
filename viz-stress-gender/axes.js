// axes.js — draws X and Y axes
import { axisBottom, axisLeft } from 'd3';

export function drawAxes(g, xScale, yScale, innerHeight) {
  g.selectAll('.x-axis').remove();
  g.selectAll('.y-axis').remove();

  g.append('g')
    .attr('class', 'x-axis')
    .attr('transform', `translate(0,${innerHeight})`)
    .call(axisBottom(xScale));

  g.append('g')
    .attr('class', 'y-axis')
    .call(axisLeft(yScale));
}
