
 $(document).ready(function (){
 $('#boton_enviar').click(function (evt){


    var  fase  = $("#fase").val();
    var  nivel = $("#nivel").val();
    var  descripcion = $("#descripcion").val();

    var crear = 'fase=' + fase + '&nivel=' + nivel + '&descripcion=' + descripcion;
    var enviar= 'https://paty.my.phpcloud.com/services/CategoriaController.php';
     $(this).fadeIn();


     $.ajax({
      type:'POST',
       data:crear,
        url:enviar,
         dataType:'html',
         beforeSend:function(){
          $('#boton_enviar').attr('disable', true);
       //   $('#cargando_imagen').css("display","block");
         //    $('#cargando_imagen').innerHTML();
             $("#categoria")[0].reset();
 },
        success: datosGuardados()
     ,
        error:function(msg){
          $('#boton_enviar').attr('disable',false);
            $('#cargando_imagen').hide();
         }
       });
       evt.preventDefault();
   });
 });

function datosGuardados(){
 $("#resultados").text("Datos Guardados");
}
function problemas()
{
 $("#resultados").text('Problemas en el servidor.');
}





