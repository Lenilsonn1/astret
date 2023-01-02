const menuItens = document.querySelectorAll('#menu a');
console.log(menuItens);


menuItens.forEach(item =>{
    item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event){
    // console.log(event) para ver eventos disponiveis sendo chamado
    event.preventDefault(); //tirar eventos natural da pagina
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop
    

    window.scroll({
        top: to - 50,
        behavior: "smooth",

    });
}





// console.log(section.offsetTop); verificar a altura do topo
