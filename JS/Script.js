$(document).ready(function(){
    $(window).scroll(function(){
        var ref = $("html").scrollTop();
        console.log(ref);
        if (ref > 199)
        {
            $(".navbar").addClass('scrolled');
        }
        else
        {
            $(".navbar").removeClass('scrolled');
        }
    });

    // smooth scroll
    $('.navbar-nav .nav-item .nav-link').click(function(){
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - 80
        }, 1000);
        console.log($(this).data('value'));
    });

    // scroll smothly with arrow to about
    $('.scrolle').click(function(){
        $('html, body').animate({scrollTop: $('#about').offset().top - 80}, 2000)
    });
});

// $(document).ready(function() {
//     // get current URL path and assign 'active' class
//     var pathname = window.location.pathname;
//     $('.ele > li > a[href="'+pathname+'"]').addClass('active');
// })