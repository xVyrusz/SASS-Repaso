$(document).ready(function(){
    $("#mostrar").click(function(){
        $(".mundo").toggle();
        if($(".mundo").css("display")=="none"){
            $("#mostrar").html("Mostrar Destinos");
        }else{
            $("#mostrar").html("Ocultar Destinos");
        }
    });
});
