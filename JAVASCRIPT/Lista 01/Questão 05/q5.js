// Irá mostrar o resto da divisão entre os números digitados.

function resto(){
	var numero1 = document.getElementById('num1').value;
	var numero2 = document.getElementById('num2').value;
	
	var resultado = numero1 % numero2;
	document.getElementById("resultado").innerHTML = resultado;
}