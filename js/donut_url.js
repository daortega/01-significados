
var radius = 74,
    padding = 10;

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.population; });

d3.csv("data_sinurl.csv", function(error, data) {
  if (error) throw error;

  data.forEach(function(d) {
    d.ages = color.domain().map(function(name) {
      return {name: name, population: +d[name]};
    });
  });


//INICIO GRÁFICOS

    var svg = d3.select("body").selectAll(".patita")
        .data(data)
        .enter().append("div")
          .attr("class", "patita")
        .append("img")
          .attr("class", "cosas")
          .attr("src",function(d) { return d.Url; })
          .attr("width", 50)
          .attr("height", 50)
          .style("display", "inline")
          .style("z-index", "10");


              //¿Cómo logro poner img dentro del contenedor, pero fuera de svg?
      var img = d3.select("body").selectAll(".pie")
          .enter().append("svg")
              .attr("class", "yuju")
              .append("path")
              .attr("d",function(d) { return d.Url; });

              var img2 = d3.select("body").selectAll("yuju")
                    .data(data)
                    .enter().append("img")
                        .attr("class", "yuju")
                        .attr("src",function(d) { return d.Url; });



});
