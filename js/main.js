let slider= $('.slider');
let siguiente = $('.btn-siguiente');
let anterior = $('.btn-anterior');

//mover ultima imagen
$('.slider section:last').insertBefore('.slider section:first');
//mostrar la primera imagen con un margen de -100%
slider.css('margin-left','-'+100+'%');

function moverALaDerecha(){
    slider.animate({
        marginLeft:'-'+200+'%'
    } ,700, function(){
        $('.slider section:first').insertAfter('.slider section:last');
        slider.css('margin-left','-'+100+'%');
    });
}

siguiente.on('click',function(){
    moverALaDerecha();
});