// Irá mostrar uma mensagem se a caixa 1 estiver for acionada e outra se não for acionada.
var input1 = document.getElementById("cx1");

window.onclick = function(evento) {// O comando "window.onclick" é acionado quando um elemento da página for clicado
	if (evento.target == input1) {// Se a caixa 1 for acionada irá mostrar a mensagem
		alert("Primeira caixa ativada!");
	}else{// Caso contrario é mostrada a outra mensagem
		alert("Perdeu o foco!");
	}
}