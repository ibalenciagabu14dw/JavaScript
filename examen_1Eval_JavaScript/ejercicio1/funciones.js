setInterval(function(){
	var cont=1;
	
	if(document.getElementById("contador").innerHTML < 10000){
		document.getElementById("contador").innerHTML = parseInt(document.getElementById("contador").innerHTML) * 2;

		
	} else{
		document.getElementById("contador").innerHTML = 5;
	}

	
	if (cont%2==0){
		document.getElementById("contador").style.color="red";

	}else {document.getElementById("contador").style.color="blue";}

	cont++;

}, 1000);