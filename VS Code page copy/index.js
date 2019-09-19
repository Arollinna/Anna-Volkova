var intervalHandler;
$( document ).ready(function() {
    intervalHandler = setInterval(changeCarouselItem, 5000);
});
var currentItem = 1;
function changeCarouselItem(){
    if(currentItem > 4) {
        currentItem = 1;
    } else {
        currentItem++;
    }
    
    $('.carousel-item').removeClass('active');
    $('.carousel-item:nth-child(' + currentItem + ')').addClass('active');
    $('.wow').removeClass('active');
    $('.wow:nth-child(' + currentItem + ')').addClass('active');
} 

$('.wow').click(function() {
    var index = $(this).attr('value');
    $('.carousel-item').removeClass('active');
    $('.carousel-item:nth-child(' + index + ')').addClass('active');
    $('.wow').removeClass('active');
    $(this).addClass('active');
    currentItem = index;
    clearInterval(intervalHandler);
    intervalHandler = setInterval(changeCarouselItem, 5000);
});