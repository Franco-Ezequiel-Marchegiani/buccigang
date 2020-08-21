$(function () {
     $('.filter').click(function () {
          /* Permite el pase entre botones en la selección de fotos */
          $(this).addClass('active').siblings().removeClass('active');
          let valor = $(this).attr('data-nombre');
          if (valor == 'todos') {
               /* Con el If filtra las imagenes correspondientes a su grupo */
               $('.cont-work').show('1000');
          } else {
               $('.cont-work').not('.' + valor).hide('1000');
               $('.cont-work').filter('.' + valor).show('1000');
          }
     });
     /* Habilita los Enlaces */

     let admins = $('#admins').offset().top,
          servicio = $('#servicio').offset().top,
          trabajo = $('#trabajo').offset().top,
          contacto = $('#contacto').offset().top;

     window.addEventListener('resize', function () {
          let admins = $('#admins').offset().top,
               servicio = $('#servicio').offset().top,
               trabajo = $('#trabajo').offset().top,
               contacto = $('#contacto').offset().top;
     });

     $('#enlace-inicio').on('click', function (e) {
          e.preventDefault();
          $('html, body').animate({
               scrollTop: 0
          }, 600);
     });

     $('#enlace-admins').on('click', function (e) {
          e.preventDefault();
          $('html, body').animate({
               scrollTop: admins - 100
          }, 600);
     });

     $('#enlace-servicio').on('click', function (e) {
          e.preventDefault();
          $('html, body').animate({
               scrollTop: servicio - 100
          }, 600);
     });

     $('#enlace-trabajo').on('click', function (e) {
          e.preventDefault();
          $('html, body').animate({
               scrollTop: trabajo - 100
          }, 600);
     });

     $('#enlace-contacto').on('click', function (e) {
          e.preventDefault();
          $('html, body').animate({
               scrollTop: contacto - 100
          }, 600);
     });
});