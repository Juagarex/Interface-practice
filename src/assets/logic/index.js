function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "grid";
  evt.currentTarget.className += " active";
}

/* manjeo de slider videos*/
var videos = ['src/assets/images/video.mp4', 'src/assets/images/video2.mp4', 'src/assets/images/video.mp4'], cont = 0;

function carusel(contenedor) {
  contenedor.addEventListener('click', e => {
    let atras = contenedor.querySelector('.atras'),
      adelante = contenedor.querySelector('.adelante'),
      video = contenedor.querySelector('video'),
      tgt = e.target;

    if (tgt == atras) {
      if (cont > 0) {
        video.src = videos[cont - 1];
        cont--;
      } else {
        video.src = videos[videos.length - 1];
        cont = videos.length - 1;

      }

    } else if (tgt == adelante) {
      if (cont < videos.length - 1) {
        video.src = videos[cont + 1];
        cont++;
      } else {
        video.src = videos[0];
        cont = 0;

      }

    }

  });
}

document.addEventListener("DOMContentLoaded", () => {
  let contenedor = document.querySelector('.container__video');
  carusel(contenedor);
})


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}