$(document).ready(function()
{
$('.navbar-toggler').click(function(){

$('.navbar-toggler').toggleClass('change')
})


$(window).scroll(function(){
let position=$(this).scrollTop();
if(position>=718){
    $('.navbar').addClass('navbar-background');
    $('.navbar').addClass('fixed-top');
}
else{
    $('.navbar').removeClass('navbar-background');
    $('.navbar').removeClass('fixed-top');  
}
})

$('.nav-item a, .header-link, #back-to-top').click(function(link){
link.preventDefault();
let target=$(this).attr('href');

$('html,body').stop().animate({scrollTop: $(target).offset().top -35},3000)

})


$(window).scroll(function(){
    let position=$(this).scrollTop();
    if(position>=718){
        $('#back-to-top').addClass('scrolltop');
        
    }
    else{
        $('#back-to-top').removeClass('scrolltop');
    }
    })











    $("header, .info").ripples({
        dropRadius: 20,
        perturbance: 0,
        
      });

      //magnific popup
      $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',

        gallery:{
            enabled:true
        }

      });

});