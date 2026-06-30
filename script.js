const buscador = document.getElementById("buscar");

buscador.addEventListener("keyup", function(){

    let texto = buscador.value.toLowerCase();

    let tarjetas = document.querySelectorAll(".tarjeta");

    tarjetas.forEach(function(tarjeta){

        let nombre = tarjeta.innerText.toLowerCase();

        if(nombre.includes(texto)){
            tarjeta.style.display="block";
        }else{
            tarjeta.style.display="none";
        }

    });

});