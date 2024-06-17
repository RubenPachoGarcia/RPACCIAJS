let palabra;
let letra;

function introducirPalabra(){
	
	palabra=prompt("Introduzca una palabra: ");
	/*palabraAsteriscos=palabra.replace(/.\g/, palabra);*/
	document.getElementById("palabraAsteriscos").innerHTML=palabraAsteriscos;
}

function letra(){
	
	letra=prompt("Introduzca una letra: ");
}
