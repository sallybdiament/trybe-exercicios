function changeText() {
let paragrafo = document.getElementsByTagName('p')[0];
    paragrafo.innerText = "Daqui a dois anos, eu estarei trabalhando numa empresa que eu admiro muito e que não para de crescer!";
}
changeText();

function quadradoVerde() {
    let quadrado = document.getElementsByClassName('main-content')[0];
    quadrado.style.background = "rgb(76, 164, 109";
}
quadradoVerde();

function quadradoBranco() {
    let quadradoVerm = document.querySelector(".main-content .center-content");
quadradoVerm.style.background = "white";
}
quadradoBranco();


function corrijaH1() {
    let h1 = document.getElementsByTagName("h1")[0];
    h1.innerText = "Exercício 5.1 - JavaScript"; 
}
corrijaH1();

function maiusculo() {
let todosParagrafos = document.getElementsByTagName("p")[0];
todosParagrafos.innerText = todosParagrafos.innerText.toUpperCase();
}
maiusculo();

function mostrarP() {
    let parag = document.getElementsByTagName("p");
    for (let i = 0 ; i < parag.length ; i += 1);
    console.log(parag[i].innerHTML);
}
mostrarP();