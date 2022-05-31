$(document).ready(function(){
    $(".card-header").click(function(){
        // self clicking close
        if($(this).next(".card-body").hasClass("active")){
            $(this).next(".card-body").removeClass("active").slideUp()
            $(this).children("span").removeClass("fas fa-minus").addClass("fas fa-plus")
        }
        else{
            $(".card .card-body").slideUp
            $(".card .card-header span").removeClass("fas fa-minus").addClass("fas fa-plus")
            $(this).next(".card-body").addClass("active").slideDown()
            $(this).children("span").removeClass("fas fa-plus").addClass("fas fa-minus")
        }
    })
})