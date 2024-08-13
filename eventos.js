const buttonContainer = document.getElementById('boton')

buttonContainer.addEventListener('click', function(){
    alert('Hola! Soy el div');
})


const saludarButton = document.getElementById('saludarBoton');
saludarButton.addEventListener('click', function(event) {
    event.stopImmediatePropagation(); // Previene que el clic en el botón también dispare el manejador del div
});