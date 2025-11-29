// axesLabels.js — adds centered X and Y labels
export function addAxisLabels(
  g,
  innerWidth,
  innerHeight,
  xText,
  yText,
) {
  // remove old labels so they don't stack
  g.selectAll('.x.axis-label').remove();
  g.selectAll('.y.axis-label').remove();

  // X label (below x-axis)
  g.append('text')
    .attr('class', 'x axis-label')
    .attr('x', innerWidth / 2)
    .attr('y', innerHeight + 48) // if clipped, change to +56 or +64
    .attr('text-anchor', 'middle')
    .attr('font-size', 14)
    .attr('font-weight', 700)
    .text(xText ?? 'X');

  // Y label (left of y-axis)
  g.append('text')
    .attr('class', 'y axis-label')
    .attr('transform', 'rotate(-90)')
    .attr('x', -innerHeight / 2)
    .attr('y', -65) // if clipped, change to -75 or -85
    .attr('text-anchor', 'middle')
    .attr('font-size', 14)
    .attr('font-weight', 700)
    .text(yText ?? 'Y');
}
