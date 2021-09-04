console.log("FUNCTIONS");

/**
 * Criação de Funções 
 */

var soma = function (x, y) {
    return x + y;
}

function multiplicacao(x, y) {
    return x * y;
}

/**
 * utilizando um function
 */
var resultado = multiplicacao(2, 3);
console.log('multiplicacao', resultado);
console.log('soma', soma(5, 5));


/**
 * metodos
 */

var conta = {
    saldo: 0, 
    deposita: function(valor) {
        this.saldo += valor;
    }
}

console.log('conta', conta);
console.log("saldo:", conta.saldo);
conta.deposita(100);
console.log("saldo:", conta.saldo);
console.log('conta', conta);

/**
 * Apply
 */
var contaBanco = {
    saldo: 0
}

var deposita = function(valor) {
    this.saldo += valor;
}

deposita.apply(contaBanco, [300]);
console.log("Conta Banco - Saldo:", contaBanco.saldo);

/**
 * Argumentos
 */

var soma = function() {
    var soma = 0;

    for(var i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
}

var result = soma(2, 3, 4, 5, 6);
console.log(result)
