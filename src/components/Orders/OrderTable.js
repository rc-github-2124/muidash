import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function D3Graph(props) {
  const svgRef = useRef();
  const containerRef = useRef();
  const loadedWidth = props.loadedWidth || 800; // Default width
  const loadedHeight = props.loadedHeight || 400; // Default height

  useEffect(() => {
    const renderGraph = () => {
      // Ensure containerRef.current is available before accessing its properties
      if (!containerRef.current) return;

      // Clear previous SVG content
      d3.select(svgRef.current).selectAll('*').remove();

      const containerWidth = containerRef.current.offsetWidth || loadedWidth;
      const containerHeight = (containerWidth / loadedWidth) * loadedHeight;

      const margin = { top: 20, right: 30, bottom: 50, left: 50 };
      const width = containerWidth - margin.left - margin.right;
      const height = containerHeight - margin.top - margin.bottom;

      const svg = d3
        .select(svgRef.current)
        .attr('viewBox', `0 0 ${containerWidth} ${containerHeight}`)
        .attr('preserveAspectRatio', 'xMidYMid meet');

      // Create the gradient definition
      const gradient = svg
        .append('defs')
        .append('linearGradient')
        .attr('id', 'barGradient')
        .attr('x1', '0%')
        .attr('x2', '100%')
        .attr('y1', '0%')
        .attr('y2', '100%');

      gradient
        .append('stop')
        .attr('offset', '0%')
        .attr('stop-color', '#4318FF'); // Start color

      gradient
        .append('stop')
        .attr('offset', '80%')
        .attr('stop-color', '#6AD2FF'); // End color

      d3.csv('/data.csv').then((data) => {
        const parsedData = data.map((d) => ({
          name: d.Name,
          value: +d.Value,
        }));

        // Create scales
        const xScale = d3
          .scaleBand()
          .domain(parsedData.map((d) => d.name))
          .range([margin.left, width + margin.left])
          .padding(0.1);

        const yScale = d3
          .scaleLinear()
          .domain([0, d3.max(parsedData, (d) => d.value)])
          .nice()
          .range([height + margin.top, margin.top]);

        // Create axes
        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        svg
          .append('g')
          .attr('transform', `translate(0,${height + margin.top})`)
          .call(xAxis)
          .selectAll('text')
          .attr('transform', 'rotate(-45)')
          .style('text-anchor', 'end');

        svg
          .append('g')
          .attr('transform', `translate(${margin.left},0)`)
          .call(yAxis);

        // Draw bars with the gradient
        svg
          .append('g')
          .selectAll('rect')
          .data(parsedData)
          .join('rect')
          .attr('x', (d) => xScale(d.name))
          .attr('y', (d) => yScale(d.value))
          .attr('width', xScale.bandwidth())
          .attr('height', (d) => height - yScale(d.value))
          .attr('fill', 'url(#barGradient)'); // Apply gradient to bars
      });
    };

    // Initial render
    renderGraph();

    // Re-render graph on window resize
    const resizeObserver = new ResizeObserver(() => {
      renderGraph();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.disconnect();
      }
    };
  }, [loadedWidth, loadedHeight]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: 'auto' }}>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default D3Graph;
