export default function createD3PolarChart(data, options, generalElements) {
  const {
    colors, innerRadius, outerRadius,
  } = options;
  const { svg } = generalElements;

  const x = d3
    .scaleBand()
    .domain(data.map((d) => d.x))
    .range([0, 2 * Math.PI])
    .padding(0.1);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.y)])
    .range([innerRadius, outerRadius]);

  const colorScale = d3.scaleOrdinal().domain(data.map((d) => d.name)).range(colors);

  const arc = d3
    .arc()
    .innerRadius(0)
    .outerRadius((d) => y(d.y))
    .startAngle((d) => x(d.x))
    .endAngle((d) => x(d.x) + x.bandwidth())
    .padAngle(0.01)
    .padRadius(innerRadius);

  svg
    .selectAll('path')
    .data(data)
    .join('path')
    .attr('d', arc)
    .attr('fill', (d) => colorScale(d.x));

  // Add names
  svg
    .selectAll('text')
    .data(data)
    .join('text')
    .attr('x', (d) => (y(d.y) + 10) * Math.cos((x(d.x) + x.bandwidth() / 2) - Math.PI / 2))
    .attr('y', (d) => (y(d.y) + 10) * Math.sin((x(d.x) + x.bandwidth() / 2) - Math.PI / 2))
    .text((d) => d.x)
    .attr('text-anchor', 'middle')
    .attr('font-size', '12px');
}
