//Variables

let nav = document.getElementById("nav");
let menu = document.getElementById("enlaces");
let abrir = document.getElementById("open");
let botones = document.getElementsByClassName("btn-header");
let cerrado = true;

function menus(){ /* Desplazamiento del header a lo largo de la página */
     let Desplazamiento_Actual = window.pageYOffset;

     if(Desplazamiento_Actual <= 850){
          nav.classList.remove('nav2');
          nav.className = ('nav1');
          nav.style.transition = '1s';
          menu.style.top = '80px';
          abrir.style.color = '#fff'
     }else{
          nav.classList.remove('nav1');
          nav.className = ('nav2');
          menu.style.top = '100px';
          abrir.style.color = '#000'
     }
}

function apertura(){
     if(cerrado){
          menu.style.width = '70vw';
          cerrado = false;
     }else{
          menu.style.width = '0%';
          menu.style.overflow = 'hidden'
          cerrado = true;
     }
};

window.addEventListener('load',function(){ /* Carga el preLoader */
     $('#onload').fadeOut();
     $('body').removeClass('hidden');
     menus();
});

window.addEventListener('click', function(e){ /* Permite que al clickear fuera del menu (del celular) se pueda cerrar el menu */
     if(cerrado==false){
          let span = document.querySelector('span');
          if(e.target !== span && e.target !== abrir){
               menu.style.width = '0%';
               menu.style.overflow = 'hidden';
               cerrado = true;
          }
     }
});

window.addEventListener('scroll', function(){ /* Toma en cuenta el scroll de la página y modifica el header */
     menus();
});

window.addEventListener('resize', function(){/* Evita bugs al modificar tamaño de pantalla */
     if(screen.width >= 700){
          cerrado = true;
          menu.style.removeProperty('overflow');
          menu.style.removeProperty('width');
     }
});

abrir.addEventListener('click', function(){
     apertura();
}); 