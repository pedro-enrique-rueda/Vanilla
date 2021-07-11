document.addEventListener("DOMContentLoaded",() => {
    
    var enlace = document.querySelectorAll(".project__list");
    var description = document.querySelector(".description");

    enlace[0].addEventListener('click',descrp);

    function descrp(){
        description.innerHTML = "descripcion juego snake";
    }
    
})