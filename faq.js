$(document).ready(function(){
    var slider = false;
    $(".btn-header").click(function(){
        $(".btn .jawaban").slideUp()
        $(this).next(".jawaban").slideDown()
        $("symbol").hide()
    })
})