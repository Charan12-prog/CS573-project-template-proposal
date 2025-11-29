import { viz } from './viz.js';

export default function App() {
  const svg = d3.select('#chart');
  const W = +svg.attr('width');
  const H = +svg.attr('height');
  const m = { top: 40, right: 160, bottom: 50, left: 70 };

  const g = svg
    .append('g')
    .attr('transform', `translate(${m.left},${m.top})`);

  viz(g, {
    width: W - m.left - m.right,
    height: H - m.top - m.bottom,
  });
}
