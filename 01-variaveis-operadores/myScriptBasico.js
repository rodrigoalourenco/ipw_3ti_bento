//alert('Iniciando os Trabalhos');
console.log('Iniciando os Trabalhos');
document.getElementById('my-app').innerHTML = 'Iniciando os Trabalhos';

/**
 * VARIAVEIS
 */

var nome = "Xuxa";
var idadeXuxa = 58;
var preco = 125.37;
var statusVenda = true;

console.log('idadeXuxa: ', idadeXuxa)
idadeXuxa = 'cinquenta e oito anos';
console.log('idadeXuxa: ', idadeXuxa)

/**
 * OPERADORES
 * 
 * Aritmético: + - * / %
 * Atribuição: = += -= *= /= %= ++ --
 * Relacional: == != < <= > >=
 * Lógico: && ||
 */

/**
 * Aritmético
 */

console.log('Adição - 5 + 5: ', 5 + 5);
console.log('Divisão - 15 / 3: ', 15 / 3);
console.log('Resto da Divisão - 15 % 3: ', 15 % 3);

/**
 * Atribuição
 */

var soma = 12 + 3;
console.log("Soma:" , soma)
soma = soma + 100;
console.log("Soma:" , soma)
soma += 200;
console.log("Soma:" , soma)
soma++
console.log("Soma:" , soma)

/**
 * Relacional == != < <= > >=
 */

var eIgual = 5 == 5;
console.log("eIgual - 5 == 5:" , eIgual)

var eDiferente = 5 != 5;
console.log("eDiferente -5 != 5:" , eDiferente)

var eMaior = 5 > 5;
console.log("eMaior-  5 > 5:" , eMaior)

var eMenorOuIgual = 5 <= 5;
console.log("eMenorOuIgual - 5 <= 5:" , eMenorOuIgual)

/**
 * Lógico: && ||
 */

var eh = true && false;
console.log("eh - true && false:" , eh)

var ou = 5 == 5 || false;
console.log("ou - 5 == 5 || false:" , ou)

/**
 * Operador Ternário ?: (termo1? termo2: termo3)
 * 
 */

var precoProduto = 50.12;
var nivel = 3;
var preco = (nivel < 3 ? precoProduto - (precoProduto * 0.1) : precoProduto - (precoProduto * 0.2));
console.log(preco)
