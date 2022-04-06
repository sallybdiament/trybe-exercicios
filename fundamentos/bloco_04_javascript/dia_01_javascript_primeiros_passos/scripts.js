const myName = "Sally Barzilai Diament";
const birthCity = "São Paulo";
let birthYear = 1987;
birthYear = 2030;
console.log(myName, birthCity, birthYear);

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
    firstName: "Ana",
    lastName: "Santos",
};
const patientEmail = "patient@gmail";

console.log(typeof patientId, isEnrolled, patientInfo, patientEmail);
console.log(typeof patientAge);

const base = 5;
const height = 8;
const area = base * height;
console.log(area);
const perimeter = (base + height) * 2
console.log(perimeter);

const nota = 20;
if (nota >= 80) {
    console.log("Parabéns, vc foi aprovado");
}
else if (nota < 80 && nota >= 60) {
    console.log("Vc está na lista de espera");
}
else {
    console.log("Reprovado");
}

const currentHour = 11;
let message;
if (currentHour >= 22) {
    message = "hora de dormir";
    console.log(message);
}
else if (currentHour >= 18 && currentHour < 22) {
    message = "vamos jantar";
    console.log(message);
}
else if (currentHour >= 14 && currentHour < 18) {
    message = "bolo da tarde";
    console.log(message);
}
else if (currentHour >= 11 && currentHour < 14) {
    message = "almoço";
    console.log(message);
}
else if (currentHour >= 4 && currentHour < 11) {
    message = "cheiro de café";
    console.log(message);
}

let weekDay = "domingo";
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira") {
    console.log("Mais um dia de aprendizado");
}
else {
    console.log("dia de descanso");
}

console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);

let statusCandidato;
statusCandidato = "aprovada"
switch (statusCandidato) {
    case "aprovada":
        console.log("aprovada");
        break;
    case "lista":
        console.log("lista");
        break;
    case "reprovada":
        console.log("reprovada");
        break;
    default:
        console.log("não se aplica");
}