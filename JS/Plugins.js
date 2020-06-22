$(document).ready(function(){
    $('.carousle').carousle({
        interval:1000
    })

    //show color option div when click on the gear
$(".gear-check").click(function()
{
    $(".color-option").fadeToggle();
});

//change  theme color on click
var colorli = $(".coloe-option ul li");

colorli
    .eq(0).css("backgroundColor","#E41B17").end()
    .eq(1).css("backgroundColor","#E426DS").end()
    .eq(2).css("backgroundColor","#009AFF").end()
    .eq(3).css("backgroundColor","#FFD500");

colorli.click(function()
{

    $("link[href *= 'theme']").attr("herf", $(this).attr("data-value"));
    //console.log( $(this).attr("data-value") )
});


});


//loading screen
$(window).load(function()
{
    
    $(".overlay .sk-folding-cube").fadeOut(2000, function()
    {
        $(this).parent().fadeOut(2000, function()
        {
            $("body").css("overfolw","auto");
            $(this).remove();
        });
    });
});


