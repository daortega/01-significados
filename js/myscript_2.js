//ocultamos el div
$('#plantilla').hide();
		//estraemos todo el contenido y el html tambien con .html
		//y el metodo trim eliminamos los espacios
		template = $.trim( $('#plantilla').html() );
		//pasamos el archivo json
		$.getJSON("data/data.json", function(data){

				//for para decorre las propiedades
				for(datos in data.test.pictogramas[0].respuestas){

							var puntaje = data.test.pictogramas[0].respuestas[datos].puntaje

 						//PUNTAJE 1: CORRECTO
							if(puntaje==1){
									var temp = template.replace(/{{titulo}}/ig, data.test.pictogramas[0].respuestas[datos].respuesta)
									$("#correct").append(temp);
								} //del if
						//FIN PUNTAJE 1: CORRECTO
						//PUNTAJE 2
							if(puntaje==2){
								var temp =template.replace(/{{titulo}}/ig, data.test.pictogramas[0].respuestas[datos].respuesta)
									$("#almost-correct").append(temp);
								} //del if
						//FIN PUNTAJE 2
						//PUNTAJE 3
							if(puntaje==3){
								var temp = template.replace(/{{titulo}}/ig, data.test.pictogramas[0].respuestas[datos].respuesta)
									$("#doubtful").append(temp);
								} //del if
						//FIN PUNTAJE 3
						//PUNTAJE 4
							if(puntaje==4){
									var temp = template.replace(/{{titulo}}/ig, data.test.pictogramas[0].respuestas[datos].respuesta)
										$("#incorrect").append(temp);
									} //del if
						//FIN PUNTAJE 4
						//PUNTAJE 5
							if(puntaje==5){
									var temp = template.replace(/{{titulo}}/ig, data.test.pictogramas[0].respuestas[datos].respuesta)
										$("#opposite").append(temp);
								} //del if
						//Fin PUNTAJE 5
						//PUNTAJE 6
							if(puntaje==6){
									var temp = template.replace(/{{titulo}}/ig, data.test.pictogramas[0].respuestas[datos].respuesta).replace("undefined", " ... ")
										$("#no-answer").append(temp);
									} //del if
						//FIN PUNTAJE 6

				}//de for

				console.log("Total elementos: " + data.test.pictogramas[0].respuestas[datos].id);  // (o el campo que necesites) dice 72, no es cierto :C:C
				console.log(datos);


});

$.each(data.test.pictogramas[0].respuestas[datos].respuesta.slice(0,5), function(i, data) {
						var ul_data = "<li><h3>"+ data.test.pictogramas[0].respuestas[i].respuesta+ "</h3></li>";
						$("#recentActivities").append(ul_data);
				});
