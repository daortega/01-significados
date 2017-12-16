
var radius = 74,
    padding = 10;

var color = d3.scale.ordinal()
    .range(["#2bd633", "#83ff33", "#ebff28", "#ffa017", "#ff1b2d", "#c9c9c9"]);

var arc = d3.svg.arc()
    .outerRadius(radius)
    .innerRadius(radius - 20);

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.population; });

d3.csv("data/data.csv", function(error, data) {
  if (error) throw error;

    color.domain(d3.keys(data[0]).filter(function(key)
     { return key !== "Icon"; }));  //no funciona muy bien,

    data.forEach(function(d) {
      d.ages = color.domain().map(function(name) {
        return {name: name,population: +d[name]};
      });
    });


      var legend = d3.select("section").append("svg")
          .attr("class", "legend")
          .attr("width", radius * 2)
          .attr("height", radius * 2)
          .selectAll("g")
          .data(color.domain().slice().reverse())
          .enter().append("g")
          .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

          legend.append("rect")
              .attr("width", 18)
              .attr("height", 18)
              .style("fill", color);

          legend.append("text")
              .attr("x", 24)
              .attr("y", 9)
              .attr("dy", ".35em")
              .text(function(d) { return d; });


//INICIO GRÁFICOS
    var svg = d3.select("section").selectAll(".pie")
        .data(data)
        .enter().append("div")
          .attr("class", "pie")
          .attr("id",function(d) { return d.Icon; })  //asignará un background (icono) para cada gráfico
        .append("svg")
          .attr("class", "casi")
          .attr("width", "148")
          .attr("height", "148")
        .append("g")
          .attr("transform", "translate(" + radius + "," + radius + ")");

        svg.selectAll(".arc") //era .arc
            .data(function(d) { return pie(d.ages); })
            //Para añadir ToolTips o PopOver
          //POPOVER YEAAAHHH
              .on('mouseover', function(d) {
                  $("#tooltip")
                    .html(d.data.name + ": " + d.data.population + " answers")
                    .show();
              })
              .on('mousemove', function(d) {
                  $("#tooltip")
                    .css('left', d3.event.pageX-20)
                    .css('top', d3.event.pageY-200);
              })

              .on('mouseout', function(d) {
                  $("#tooltip").html("").hide();
              })

          //Secciones del gráfico
          .append("path")
            .attr("class", "arc")
            .attr("d", arc)
            .style("fill", function(d) { return color(d.data.name); });


            //Total respuestas por ícono
                svg.append("text")
                    .attr("dy", "35")
                    .style("text-anchor", "middle")
                    .style("font-size", "24")
                    .text(function(d) { return +d.Correct + +d.Incorrect + +d.Almost_Correct + +d.Doubtful + +d.Opposite + +d.No_answer; });


});
