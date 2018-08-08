//js Document


	 var estudiantes = [];

	function Estudiante(codigo, nombre, nota) {
		this.codigo = codigo;
		this.nombre = nombre;
		this.nota = nota;
			
		}

     document.getElementById("registrar").addEventListener('click', function(){
   
    		 
    	var codigo = document.getElementById("code").value;
    	var nombre = document.getElementById("name").value;
    	var nota = parseFloat(document.getElementById("score").value);
 
         var nuevoEstudiante = { 'codigo': codigo, 'nombre': nombre, 'nota': nota };

    	if(isNaN(codigo) || nombre =="" || isNaN(nota)){
    		alert("Debe llenar los campos con el valor correspondiente");
    		return;
    	} else {

			if(guardarJSON(nuevoEstudiante)==false){
				return;
			}


   		 var tablefull = "";
		var i;

		for (var i = 0; i < estudiantes.length; i++) {

		 tablefull+= "<tr><td>" +estudiantes[i].codigo+ "</td><td>" +estudiantes[i].nombre+ "</td><td>" +estudiantes[i].nota+ "</td></tr>";

		}

		document.getElementById("registro").innerHTML = tablefull;
		
    	}
    		document.getElementById('code').value ="";
            document.getElementById('name').value ="";
		 	document.getElementById('score').value="";
    	});

 function guardarJSON(json){
    	for(var i=0; i<estudiantes.length; i++){
    		if(estudiantes[i].codigo == json.codigo){
				alert("Ya existe un estudiante registrado con este codigo");
				return false;
			} 
    		
     }
     		estudiantes[estudiantes.length]=json;
    		return true;
    		}
   console.log(estudiantes);

	//La función que mostrara el resultado de la nota promedio

	 	document.getElementById('promedio').addEventListener('click', function(){

			 
            var Nota = 0;


        for(var i=0; i<estudiantes.length; i++){
            Nota+=estudiantes[i].nota;     
            }
            alert('La nota promedio es:'+" "+Nota/estudiantes.length);
        
        });

        var nota_mayor = document.getElementById('nota mayor'); 	
        nota_mayor.addEventListener('click', BestScore);

        function BestScore(){

            var resultado = estudiantes[0].nota;
            var out = "";
            var Nota_mayor = 0;

            for(var i=0; i<estudiantes.length; i++){
                if( resultado <= estudiantes[i].nota){
                    Nota_mayor = estudiantes[i].nota;
                    pos = i;
                    out = estudiantes[pos].nombre
                }
            }
            alert("La mayor nota es:"+' '+ out+"  "+Nota_mayor);
        }

        var nota_menor = document.getElementById('nota menor');
        nota_menor.addEventListener('click', WorstScore);

        function WorstScore(){
            var resultado = estudiantes[0].nota;
             var out = "";
            var Nota_menor = 0;

            for(var i=0; i<estudiantes.length; i++){
                if( resultado >= estudiantes[i].nota){
                    Nota_menor = estudiantes[i].nota;
                    pos = i;
                    out = estudiantes[pos].nombre
                }
            }
            alert("La menor nota es:"+' '+ out+"  "+Nota_menor);
        }

        //estilos
        function changeColor(){

        var inputs = document.getElementsByClassName("form-control");

                for(var i=0; i<inputs.length; i++){
                inputs[i].style.color = "#a9c41e";
            }

        }       

           var box1 = document.getElementById("code");
           var box2 = document.getElementById("name");
           var box3 = document.getElementById("score");

           box1.style.marginLeft = "20px";
           box1.style.width = "20%";
           box2.style.width = "90%";
           box2.style.marginLeft = "20px"; 
           box3.style.width = "15%";
           box3.style.textAlign ="center";

