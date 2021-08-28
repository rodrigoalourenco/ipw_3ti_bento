/**
 * SAÍDAS DE DADOS
 */

//alert('Saida de dados pelo Alert');
console.log('Saída de dados pelo Console do browser');
document.getElementById('my-app').innerHTML = 'Saída de dados pela página web';

/**
 * ENTRADE DE DADOS
 */

var nome = prompt('Digite o seu nome');
console.log(nome);
var anoNasc = prompt('Digite o seu ano de nascimento');
var idade = 2021 - anoNasc;
console.log(idade)

var num1 = prompt('Digite um numero');//10
var num2 = prompt('Digite outro numero');//10
console.log(num1 + num2);//1010

var num3 = prompt('Digite um numero');//10
var num4 = prompt('Digite outro numero');//10
console.log(parseInt(num3) + parseInt(num4));//20