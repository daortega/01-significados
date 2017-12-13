(function(d3) {
  'use strict';

var tooltip = d3.select('#chart')
.append('div')
.attr('class', 'tooltip');

tooltip.append('div')
.attr('class', 'label');

tooltip.append('div')
.attr('class', 'count');

tooltip.append('div')
.attr('class', 'percent');

  var dataset = [
    {title: "Correct", value: 171,  },
    {title: "Almost correct", value: 9, },
    {title: "Doubtful", value: 15,  },
    {title: "Incorrect", value: 3, },
    {title: "Opposite", value: 0,  },
    {title: "No answer", value: 9, },
  ];
  var width = 100;
          var height = 100;
          var radius = Math.min(width, height) / 2;

          var color = d3.scaleOrdinal().range(["#2bd633", "#83ff33", "#ebff28", "#ffa017", "#ff1b2d", "#c9c9c9"]);


          var svg = d3.select('#chart')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', 'translate(' + (width / 2) +
              ',' + (height / 2) + ')');

          var donutWidth = 10;

          var arc = d3.arc()
            .innerRadius(radius - donutWidth)
            .outerRadius(radius);

          var pie = d3.pie()
            .value(function(d) { return d.value; })
            .sort(null);

          var legendRectSize = 18;
          var legendSpacing = 4;

          var path = svg.selectAll('path')
    .data(pie(dataset))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d, i) {
      return color(d.data.title);

    });
/*Especie de Popover*/
  path.on('mouseover', function(d) {
var total = d3.sum(dataset.map(function(d) {
return d.value;
}));
var percent = Math.round(1000 * d.data.value / total) / 10;
tooltip.select('.label').html(d.data.title);
tooltip.select('.count').html(d.data.value);
tooltip.select('.percent').html(percent + '%');
tooltip.style('display', 'block');
tooltip.style('background', d.data.color);
});

  path.on('mouseout', function() {
tooltip.style('display', 'none');
});


var legend = svg.selectAll('.legend')
.data(color.domain())
.enter()
.append('g')
.attr('class', 'legend')
.attr('transform', function(d, i) {
var height = legendRectSize + legendSpacing;
var offset =  height * color.domain().length / 2;
var horz = -2 * legendRectSize;
var vert = i * height - offset;
return 'translate(' + horz + ',' + vert + ')';
});

/*legend.append('rect')
.attr('width', legendRectSize)
.attr('height', legendRectSize)
.style('fill', color)
.style('stroke', color);*/

/*legend.append('text')
.attr('x', legendRectSize + legendSpacing)
.attr('y', legendRectSize - legendSpacing)
.text(function(d) { return d; });*/

})(window.d3);
