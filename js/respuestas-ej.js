//ocultamos el div
$('#plantilla').hide();
		//estraemos todo el contenido y el html tambien con .html
		//y el metodo trim eliminamos los espacios
		template = $.trim( $('#plantilla').html() );
		//pasamos el archivo json
		var dropdown = d3.select("#losjeison")
		var change = function() {

		  var source = dropdown.node().options[dropdown.node().selectedIndex].value;
		  d3.json(source, function(error, data) {

				$.getJSON(source, function(data){

						//for para decorre las propiedades
						for(datos in data.respuestas){

									var puntaje = data.respuestas[datos].puntaje

								//PUNTAJE 1: CORRECTO
									if(puntaje==1){
											var temp = template.replace(/{{titulo}}/ig, data.respuestas[datos].respuesta)
											$("#correct").append(temp);
										} //del if
								//FIN PUNTAJE 1: CORRECTO
								//PUNTAJE 2
									if(puntaje==2){
										var temp =template.replace(/{{titulo}}/ig, data.respuestas[datos].respuesta)
											$("#almost-correct").append(temp);
										} //del if
								//FIN PUNTAJE 2
								//PUNTAJE 3
									if(puntaje==3){
										var temp = template.replace(/{{titulo}}/ig, data.respuestas[datos].respuesta)
											$("#doubtful").append(temp);
										} //del if
								//FIN PUNTAJE 3
								//PUNTAJE 4
									if(puntaje==4){
											var temp = template.replace(/{{titulo}}/ig, data.respuestas[datos].respuesta)
												$("#incorrect").append(temp);
											} //del if
								//FIN PUNTAJE 4
								//PUNTAJE 5
									if(puntaje==5){
											var temp = template.replace(/{{titulo}}/ig, data.respuestas[datos].respuesta)
												$("#opposite").append(temp);
										} //del if
								//Fin PUNTAJE 5

								//PUNTAJE 6
									if(puntaje==6){
											var temp = template.replace(/{{titulo}}/ig, data.respuestas[datos].respuesta).replace("undefined", " ... ")
												$("#no-answer").append(temp);

											} //del if
								//FIN PUNTAJE 6

						}//de for

						console.log("Total elementos: " + data.respuestas[datos].id);  // (o el campo que necesites) dice 72, no es cierto :C:C


				});



		     console.log(data);
		  })


}//change
dropdown.on("change", change)
change();

var correct = document.getElementById('correct');
var almostcorrect = document.getElementById('almost-correct');
var doubtful = document.getElementById('doubtful');
var incorrect = document.getElementById('incorrect');
var opposite = document.getElementById('opposite');
var noanswer = document.getElementById('no-answer');

function vaciar(){
	correct.innerHTML = '';
	almostcorrect.innerHTML = '';
	doubtful.innerHTML = '';
	incorrect.innerHTML = '';
	opposite.innerHTML = '';
	noanswer.innerHTML = '';
}
