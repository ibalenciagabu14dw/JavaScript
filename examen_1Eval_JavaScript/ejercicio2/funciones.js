function cogerAno(){
	
	var d = new Date();
  	var ano = d.getFullYear();	
 		
 		document.getElementById("num1").src="numeros/" + ano.toString().charAt(0) + ".png";
 		document.getElementById("num1").alt= ano.toString().charAt(0);
 		document.getElementById("num2").src="numeros/" + ano.toString().charAt(1) + ".png";
 		document.getElementById("num2").alt= ano.toString().charAt(1);
 		document.getElementById("num3").src="numeros/" + ano.toString().charAt(2) + ".png";
 		document.getElementById("num3").alt= ano.toString().charAt(2);
 		document.getElementById("num4").src="numeros/" + ano.toString().charAt(3) + ".png";
 		document.getElementById("num4").alt= ano.toString().charAt(3);
 		
}

function sumar(id){

	if(id=="num1"){
		if (document.getElementById("num1").alt==9){
			alert("no se va a mostrar otro numero");
			document.getElementById(id).src="numeros/9.png";
		}
		else {
		document.getElementById(id).src="numeros/" + (parseInt(document.getElementById("num1").alt)+1) + ".png";
		document.getElementById("num1").alt ++;
		}
	}

	if(id=="num2"){
		if (document.getElementById("num2").alt==9){
			alert("no se va a mostrar otro numero");
			document.getElementById(id).src="numeros/9.png";
		}
		else {
		document.getElementById(id).src="numeros/" + (parseInt(document.getElementById("num2").alt)+1) + ".png";
		document.getElementById("num2").alt ++;
		}
	}

	if(id=="num3"){
		if (document.getElementById("num3").alt==9){
			alert("no se va a mostrar otro numero");
			document.getElementById(id).src="numeros/9.png";
		}
		else {
		document.getElementById(id).src="numeros/" + (parseInt(document.getElementById("num3").alt)+1) + ".png";
		document.getElementById("num3").alt ++;
		}
	}

	if(id=="num4"){
		if (document.getElementById("num4").alt==9){
			alert("no se va a mostrar otro numero");
			document.getElementById(id).src="numeros/9.png";
		}
		else {
		document.getElementById(id).src="numeros/" + (parseInt(document.getElementById("num4").alt)+1) + ".png";
		document.getElementById("num4").alt ++;
		}
	}
}

