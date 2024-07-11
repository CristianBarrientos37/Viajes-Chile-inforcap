$(function(){
    $("[data-bs-toggle='tooltip']").tooltip()

    $('.enviar_formulario').click(function(){
        $('#emailAlert').removeClass('d-none')       
    });   
    $("h2").dblclick(function() {
        $(this).css("color", "pink");
    });
    $('.favicons').click(function(){
        $('.mensaje_mision').toggle()
    });
})
