//iniciando comentario javaScritp

console.log("BIENVENIDO A REABBIT\n 2022")

const allItems = document.querySelectorAll('.prueba ul li a');

allItems.forEach(item => {
    item.addEventListener("click", function(e){
        this.classList.add("active");
    });
});