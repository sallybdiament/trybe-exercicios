const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";
document.getElementById("page-title").innerText = "Página da Sally: Cinderela é meu filme favorito."
document.getElementById("second-paragraph").innerText = "Treinando a função getElementById";
document.getElementById("subtitle").innerText = "Hoje a aula é sobre Dom e seletores de elementos."

let useClasse = document.querySelectorAll(".classe");
for (let i = 0 ; i < useClasse.length ; i += 1) {
    useClasse[i].innerText = "Mudando classe";
}
useClasse[1].style.color = 'green';
useClasse[0].style.fontSize = '1.5rem';

let subtitulo = document.querySelectorAll("h4");
subtitulo[0].style.color = 'blue';