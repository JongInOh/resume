$('#element').on('scroll touchmove mousewheel', function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
});
if($(document).click(function(){
    $('.button').off('scroll touchmove mousewheel');
}));