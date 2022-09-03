document.getElementById('navbar_top').style.backgroundColor = "transparent";
document.getElementById('navbar_top').style.border = "none";
document.getElementById('c').style.marginTop = "15" + "px";
document.getElementById('a').style.color = "black";
document.getElementById('b').style.color = "black";
document.getElementById('d').style.color = "black";
document.getElementById('e').style.color = "black";
document.getElementById('q').style.color = "black";
document.getElementById('o').style.color = "black";


document.addEventListener("DOMContentLoaded", function () {

  window.addEventListener('scroll', function () {

    if (window.scrollY > 50) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      document.getElementById('navbar_top').style.backgroundColor = "#1A5221";
      document.getElementById('navbar_top').style.borderBottom = "4px solid #FFBF00";
      document.getElementById('a').style.color = "white";
      document.getElementById('b').style.color = "white";
      document.getElementById('d').style.color = "white";
      document.getElementById('f').style.color = "white";
      document.getElementById('e').style.color = "white";
      document.getElementById('q').style.color = "white";
      document.getElementById('o').style.color = "white";
      document.getElementById('logo').style.marginTop = "-15" + "px";
      document.getElementById('navbar_top').style.height ="90" + "px"
      document.getElementById('c').style.margin = "0" + "px";
      this.document.getElementById('logo').src="images/logo-secondary.svg"
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');

      // remove padding top from body
      document.body.style.paddingTop = '0';
      document.getElementById('navbar_top').style.backgroundColor = "transparent";
      document.getElementById('navbar_top').style.border = "none";
      document.getElementById('c').style.marginTop = "15" + "px";
      document.getElementById('a').style.color = "black";
      document.getElementById('b').style.color = "black";
      document.getElementById('d').style.color = "black";
      document.getElementById('e').style.color = "black";
      document.getElementById('q').style.color = "black";
      document.getElementById('o').style.color = "black";
      this.document.getElementById('logo').src="images/logo-primary.svg"
    }
  });
}); 
var loader=document.getElementById("preloader");
window.addEventListener("load",function(){
  loader.style.display="none";
})