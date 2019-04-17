
function parametro(){
	var numero = document.getElementById('num').value;
	var ini = 1;
	while(ini <= numero){
		document.getElementById("valor").innerHTML = "IFCE "+ini;
		ini++;
	}
}