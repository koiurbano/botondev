/* Capturo el checked del box */
var audio = new Audio('audio/mk3-09470.mp3');
var risa = new Audio('audio/mk3-09430.mp3');
    botonCheckbox = document.getElementById('boton'),
    myfunction = function () {
      if (botonCheckbox.checked) {
        audio.play();
      }else{
          risa.play();
      }
    };