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

function mostrarOuEsconderSetas() {
    const naoEhOPrimeiroCartao = cartaoAtual !== 0;

    if(naoEhOPrimeiroCartao) {
        btnVoltar.classList.remove("opacidade");
    }else{
        btnVoltar.classList.add("opacidade");
    }

    const chegouNoUltimoCartao = cartaoAtual !== 0 && cartaoAtual === cartoes.length - 1;

    if(chegouNoUltimoCartao){
        btnAvancar.classList.add("opacidade")
    }else{
        btnAvancar.classList.remove("opacidade")
    }
}

btnAvancar.addEventListener("click", () => {
    if(cartaoAtual === cartoes.length - 1) return;
    
    esconderCartaoSelecionado();

    cartaoAtual ++;
    
    mostrarCartao(cartaoAtual);
    mostrarOuEsconderSetas();
})

btnVoltar.addEventListener("click", () => {
    if(cartaoAtual === 0) return;
    
    esconderCartaoSelecionado();

    cartaoAtual --;
    
    mostrarCartao(cartaoAtual);
    mostrarOuEsconderSetas();
})