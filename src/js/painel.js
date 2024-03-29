const btnAvancar = document.getElementById("setaNext");
const btnVoltar = document.getElementById("setaReturn");
const cartoes = document.querySelectorAll('.card');
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".mostrar");
    cartaoSelecionado.classList.remove("mostrar");
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("mostrar");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".mostrar");
    cartaoSelecionado.classList.remove("mostrar");
}

btnAvancar.addEventListener("click", () => {
    if(cartaoAtual === cartoes.length - 1) return;
    
    esconderCartaoSelecionado();

    cartaoAtual ++;
    
    mostrarCartao(cartaoAtual);
})

btnVoltar.addEventListener("click", () => {
    if(cartaoAtual === 0) return;
    
    esconderCartaoSelecionado();

    cartaoAtual --;
    
    mostrarCartao(cartaoAtual);
})