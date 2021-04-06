
var input = document.querySelector("input");
    
function verifica() {

    if(input.value >=18) {

    alert("Você ACERTOU!");
    } else {

    alert("Você ERROU!!!!!!!!");
    }

            input.value = "";
            input.focus();

}

var button = document.querySelector("button");

button.onclick = verifica;
