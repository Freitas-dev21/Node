const operations = require('./operations'); 

const funcoes = require('./funcoes')
const resultado = funcoes(1) // foi paremetro

const funcoes2 = require('./funcoes2')


//arquivos função2
const add = funcoes2.adicao(5,7)

const sub = funcoes2.subtracao(7,3)

const mult = funcoes2.multiplicar(5,5)

const div = funcoes2.divisao(20,2)

//arquivo operations
console.log(operations.var1);
console.log(operations.var2);


console.log(resultado.msg, resultado.value)
console.log(add,sub,mult,div)

