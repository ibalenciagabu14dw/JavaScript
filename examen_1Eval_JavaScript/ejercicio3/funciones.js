function validar(){
	
	if((document.getElementById("nombre").value.length >10) && (document.getElementById("nombre").value.length <20)){
		alert("mensaje correcto");
		document.getElementById("respuesta").innerHTML = document.getElementById("nombre").value;
	}else{
		alert("mensaje no es correcto");
		document.getElementById("respuesta").innerHTML = "";
	}

	document.getElementById("respuesta").style.color = document.getElementById("radio").checked.value;

}
