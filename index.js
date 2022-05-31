let height = 450;
let width = 450;

// slider
let slideItem = 3;
let sliderItemsWidth = width*slideItem;

$('#slider').css({
    height: height + 'px',
    width: width + 'px',
    overflow: 'hidden',
});

$('#slider-items').css({
    width: sliderItemsWidth + 'px',
    height: height + 'px',
    display: 'flex',
    position: 'relative',
})

$('.slider-img').css({
    height: height + 'px',
    width: width + 'px',
})

let index=0;

let slide = function(change){
    index += change;
    if(index<0) index = 2;
    else if(index>2) index = 0;

    $('#slider-items').animate(
        {
            left: -width * index,
        },
        750 //animation time
    );
}

$('#laquobtn').click(function(){
    slide(-1);
});

$('#raquobtn').click(function(){
    slide(1);
});