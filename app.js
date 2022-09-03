document.getElementById('navbar_top').style.backgroundColor="transparent";
document.getElementById('navbar_top').style.border="none";
document.getElementById('c').style.marginTop="15"+"px";

document.addEventListener("DOMContentLoaded", function(){
  
    window.addEventListener('scroll', function() {
    
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          document.getElementById('navbar_top').style.backgroundColor="#1A5221";
          document.getElementById('navbar_top').style.borderBottom="4px solid #FFBF00";
          document.getElementById('navbar_top').style.height ="90" + "px"
          document.getElementById('c').style.margin="0"+"px";
          this.document.getElementById('nlogo').src="images/logo-secondary.svg"
    
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
         
           // remove padding top from body
          document.body.style.paddingTop = '0';
          document.getElementById('navbar_top').style.backgroundColor="transparent";
          document.getElementById('navbar_top').style.border="none";
          document.getElementById('c').style.marginTop="15"+"px";
          this.document.getElementById('nlogo').src="images/logo-primary.svg"
        } 
    });
  }); 
var loader=document.getElementById("preloader");
window.addEventListener("load",function(){
  loader.style.display="none";
})


$(document).ready(function() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true
  });
  $('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000])
  })
  $('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
  })
})