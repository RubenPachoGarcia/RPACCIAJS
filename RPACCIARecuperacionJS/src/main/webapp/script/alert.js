let palabra;
let letra;

function introducirPalabra(){
	
	palabra=prompt("Introduzca una palabra: ");
	palabraAsteriscos=palabra.replace(/.\g/, palabra);
	document.getElementById("palabraAsteriscos").innerHTML=palabraAsteriscos;
}

function letra(){
	
	letra=prompt("Introduzca una letra: ");
	return letra;
}

function validarLetra(palabra, letra){
	
	if(palabra.contains(letra)){
		alert("HAS ACERTADO");
	}
	else{
		alert("NO HAS ACERTADO");
	}
}