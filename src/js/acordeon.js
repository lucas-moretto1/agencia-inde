const itemServicos = document.querySelectorAll(".item")

itemServicos.forEach(function(item){
    item.addEventListener("click", function(){
        let itemAtivoAtual = document.querySelector(".ativo")

        if(itemAtivoAtual){
        itemAtivoAtual.classList.remove("ativo")
        }

        item.classList.add("ativo")    
        
    })
})