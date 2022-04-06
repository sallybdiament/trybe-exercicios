const myName = "Sally Barzilai Diament";
const birthCity = "São Paulo";
let birthYear = 1987;
birthYear = 2030;
console.log(myName, birthCity, birthYear);

let patientId = 50 ;
let isEnrolled = true;
const patientInfo = {
    firstName: "Ana",
    lastName: "Santos",
};
const patientEmail = "patient@gmail" ;

console.log(typeof patientId, isEnrolled, patientInfo, patientEmail);
console.log(typeof patientAge);

const base = 5;
const height = 8;
const area = base*height;
console.log(area);
const perimeter = (base+height)*2
console.log(perimeter);

const nota = 20;
if (nota >= 80){
    console.log("Parabéns, vc foi aprovado");
}
else if (nota<80 && nota>=60) {
    console.log("Vc está na lista de espera");
}
else {
    console.log("Reprovado");
}

