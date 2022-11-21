import Teacher from './Teacher';
import Student from './Student';
import Subject from './Subject';

// isso não deve gerar nenhum erro
const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
console.log(carolina);

const math = new Subject('Matemática');
// isso também não deve gerar nenhum erro
const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
console.log(marta);

// Exercício 2:
const history = new Subject('História');

// eslint-disable-next-line max-len
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
console.log(marta);
console.log(joao);