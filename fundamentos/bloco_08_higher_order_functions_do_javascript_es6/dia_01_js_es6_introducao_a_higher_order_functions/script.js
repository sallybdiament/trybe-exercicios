// Para fixar do conteúdo course://

const acordando = () => 'Acordando!';
const cafe = () => 'Bora tomar café!';
const dormir = () => 'Partiu dormir!';

const doingThings = (callback) => {
    return callback();
}

console.log(doingThings(acordando));
console.log(doingThings(cafe));
console.log(doingThings(dormir));