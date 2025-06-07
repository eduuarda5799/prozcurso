function mostrarMensagem(){
        alert("Olá, eu sou a Eduarda!");
    }

    function vericarNumero() {
        let numero = documento. getElementById("numero").value;
        numero = number(numero);
        let mensagem = "";
        if(numero > 0) {
            mensagem = "o número é positivo.";
        }
        else if (numero < 0) {
            mensagem = "O número é negativo";
        }
        else{
            mensagem = "o número é zero.";
        }
        document.getElementById("resultado").innerText = mensagem;
    }
