
/*Denne del er Kodet af Leila Isabella Ganer & Sofie Palmkvist*/
/*Herunder er det som skal bruges til burgermenu*/
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');


menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

let currentSection = "";

/*-----------------------------------------------------------------*/


/*Denne del er Kodet af Kristian Ørbæk Møller & Frederik Toft Nielsen*/
// Her indsætter vi datoen
var countDownDate = new Date("Jan 9, 2024 18:30:00").getTime();

var x = setInterval(function() {

  // Her for vi fat i dagens dato og tid
  var now = new Date().getTime();
    
  // Her finder vi tiden mellem nu og vores dato
  var distance = countDownDate - now;
    
  // Her er beregningerne for dage, timer, minutter og sekunder
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Så kan vi indsætte det under id=demo
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // Når countdown er ovre vil en tekst komme istedet for tal 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);