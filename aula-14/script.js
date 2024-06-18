const hamburgerButton = document.querySelector("#hamburgerButton"); // estamos recuperando o botão de hamburguer (fora da div)

const closeButton = document.querySelector("#closeButton"); // estamos recuperando o botão de fechamento.

const mobileMenu = document.querySelector("#mobileMenu"); // estamos recuperando a caixa preta (quando aberta o menu hambuerguer).

//aqui adicionamos um evento de escutar o click do mouse sobre o icone de hamburguer.
hamburgerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex");
});// ciramos uma função que a ouvir o click do mouse, ele adicione uma class, que está fazendo nossa caixa (DIV) aparecer, ou seja, ficar visivel.



closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");
});