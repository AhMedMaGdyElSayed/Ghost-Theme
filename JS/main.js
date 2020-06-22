$(document).ready(function() {
    'use strict';

    // smooth scroll
    $('.links li a').click(function(){
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
        // console.log($(this).data('value'));
    });
});