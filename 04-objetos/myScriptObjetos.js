console.log('OBJETOS');


/**
 * criando os objetos
 */
var vazio = {};

var pessoa = {
    nome: "Xuxa",
    idade: 58,
    relacionamento: "solteira"
}

/**
 * recuperando os valores de um objeto
 */
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa['idade']);

var nome = pessoa.nome;
var idade = pessoa['idade'];
console.log(nome, idade);

/**
 * alterando valor da propriedade de um objeto
 */

pessoa.nome = "Angelica";
pessoa['relacionamento'] = 'Casada';
console.log(pessoa);

/**
 * referencia de objetos
 */

var pessoaFisica = pessoa;

console.log('pessoa', pessoa)
console.log('pessoaFisica', pessoaFisica)
console.log('------')
pessoaFisica['nome'] = 'Eliana'
console.log('pessoa', pessoa)
console.log('pessoaFisica', pessoaFisica)

/**
 * removendo uma propriedade
 */

var curso = {
    nome : "Tecnico em Informática",
    tempo: "4 anos",
    instituicao: "Bento"
}
console.log('curso', curso)
delete curso.tempo;
console.log('curso', curso)

/**
 * Verificando a existencia de uma propriedade
 */

console.log("tempo" in curso);
console.log("nome" in curso);

/**
 * Objetos e Array
 */

var colegio = {
    nome: "Bento",
    turmas: [
        {
            nomeTurma: '1 ITI',
            aluno: 12
        },
        {
            nomeTurma: '2 ITI',
            aluno: 16
        },
        {
            nomeTurma: '4 ITI',
            aluno: 14
        }
    ]
}

console.log('colegio', colegio)
console.log(colegio['turmas'][0]['nomeTurma'])
