$(function(){
    $("[data-bs-toggle='tooltip']").tooltip()

    $('.enviarCorreo').click(function(){
        $('#emailAlert').removeClass('d-none')       
    });   
    $("h4").dblclick(function() {
        $(this).css("color", "red");
    });
    $('.card-title').click(function(){
        $('.card-text').toggle()
    });
})
