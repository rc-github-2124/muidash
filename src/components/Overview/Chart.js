import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Chart = () => {
  const chartRef = useRef();

  useEffect(() => {
    // Sample data
    const data = [25, 40, 55, 20, 65, 75];

    // Set dimensions
    const width = 400;
    const height = 200;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    // Remove any existing SVG in the container
    d3.select(chartRef.current).select('svg').remove();

    // Create the SVG container
    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Create the scaling
    const xScale = d3
      .scaleBand()
      .domain(data.map((_, i) => i))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // Add bars with animation
    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (_, i) => xScale(i))
      .attr('y', height - margin.bottom) // Start at bottom
      .attr('width', xScale.bandwidth())
      .attr('height', 0) // Start with height 0
      .attr('fill', '#69b3a2')
      .transition() // Add transition for animation
      .duration(800) // Duration of animation (ms)
      .ease(d3.easeBounceOut) // Easing function
      .attr('y', d => yScale(d)) // Final y position
      .attr('height', d => height - margin.bottom - yScale(d)); // Final height

    // Add X axis
    svg
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale).tickFormat(i => `Bar ${i + 1}`));

    // Add Y axis
    svg
      .append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));

    // Add hover effect
    svg
      .selectAll('rect')
      .on('mouseover', function (event, d) {
        d3.select(this).attr('fill', '#ff6347'); // Change color on hover
      })
      .on('mouseout', function () {
        d3.select(this).attr('fill', '#69b3a2'); // Revert color on mouse out
      });
  }, []);

  return (
    <div>
    
      <div ref={chartRef}></div>
    </div>
  );
};

export default Chart;
