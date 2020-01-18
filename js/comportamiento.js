$(document).ready(function(){
    $("#mostrar").click(function(){
        $(".mundo").toggle();
        console.log("Antes del if:",$("#mostrar").css("display"))
        if($(".mundo").css("display")=="none"){
            $("#mostrar").html("Mostrar Destinos");
        }else{
            $("#mostrar").html("Ocultar Destinos");
        }
    });
});
