console.log('Fluxo de Controle')

/**
 * ESTRUTURA DE DECISÃO
 * if/else
 * 
 * if(condição) {
 *   // todo ...
 * } else {
 *   // todo
 * }
 * 
 */
console.log('ESTRUTURA DE DESCISÃO')
var idade = 27;
console.log('Idade: ', idade)
if (idade < 18) {
    console.log('PROIBIDO PARA MENORES DE 18');
} else {
    console.log('ACESSO LIBERADO');
}


/**
 * ESTRUTURA DE REPETIÇÃO
 */

/** 
 * while
 * 
 * while(condição){
 *  //todo
 * }
 */

console.log('ESTRUTURA DE REPETIÇÃO - while')
var contador = 1;
while (contador < 5) {
    console.log('Boa Noite Aluno ', contador);
    contador++;
}

/**
 * for
 * 
 * for(iniciador; condição de parada; incrementador) {
 *  //todo
 * }
 */
console.log('ESTRUTURA DE REPETIÇÃO - for')

for( var contador = 1; contador < 5; contador++) {
    console.log('Boa Noite Aluno ', contador);
}

