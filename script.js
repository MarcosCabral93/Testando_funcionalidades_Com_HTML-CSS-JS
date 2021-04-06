
var total;
var numero1 = prompt("Digite o primeiro número");
var numero2 = prompt("Digite o segundo número");
var operacao = prompt("Digite 1 para somar, 2 para subtração, 3 para dividir ou 4 para multiplicar");
function calc(numero1, numero2, total) {
    if (operacao == 1) {
        total = parseInt(numero1) + parseInt(numero2);
        return function () {
            alert("O resultado da soma de " + numero1 + " + " + numero2 + " é: " + total);
        }
    }
    else if (operacao == 2) {
        total = parseInt(numero1) - parseInt(numero2);
        return function () {
            if (total < 0) {

                alert("O Resutado é negativo " + total);
            }
            else {
                ("O resultado da subtração de " + numero1 + " - " + numero2 + " é: " + total);
            }
        }
    }

    else if (operacao == 3) {
        total = parseInt(numero1) / parseInt(numero2);
        return function () {
            if (numero1 <= 0 || total < 1) {
                alert("Operação invalida")
            }
            else {
                ("O resultado da soma de " + numero1 + " / " + numero2 + " é: " + total);
            }
        }
    }
    else if (operacao == 4) {
        total = parseInt(numero1) * parseInt(numero2);
        return function () {
            alert("O resultado da multiplicação de " + numero1 + " * " + numero2 + " é: " + total);
        }
    }
    else {
        alert("Operação inválida")
    }
}
calc(numero1, numero2)();
