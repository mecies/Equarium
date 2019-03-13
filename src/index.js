import _ from 'lodash';
import validate from './form';
import {
  changeSlide,
  currentSlide,
  handleTouchEnd,
  handleTouchMove,
  handleTouchStart
} from './slider';
<<<<<<< HEAD
import {MeetUsMobileBehavior, MeetUsDesktopBehavior} from './meetus';
import VanillaTilt from 'vanilla-tilt';

=======

import mobileNav from './header';
import { MeetUsMobileBehavior, MeetUsDesktopBehavior } from './meetus';
import VanillaTilt from 'vanilla-tilt';

>>>>>>> develop
// media queries variables//
var x = window.matchMedia("(max-width: 480px)")
var z = window.matchMedia("(min-width: 481px)")
// media queries variables//


// slider functionality//
document.querySelector('#dot1').addEventListener('click', function(){currentSlide(1)});
document.querySelector('#dot2').addEventListener('click', function(){currentSlide(2)});
document.querySelector('#dot3').addEventListener('click', function(){currentSlide(3)});

<<<<<<< HEAD
=======
var element = document.querySelector("#sliderImg1")
VanillaTilt.init(element);
>>>>>>> develop
isMobile(x) // Call listener function at run time
x.addListener(isMobile) // Attach listener function on state changes


function isMobile(x) {
  if (x.matches) { // If media query matches
    document.getElementById("sliderImg1").src = "../Images/Slider_placeholder/bg_mobile.png";
    document.getElementById("logo").src = "../Images/header_footer/logo_white_mobile.svg";
    document.getElementById("hamburger").style.display = 'block';
    document.getElementById("hambi").addEventListener('click', mobileNav)
    try{
      element.vanillaTilt.destroy();
    }
    catch(err){
      console.error(err)
    }
    
  } else {
    document.getElementById("sliderImg1").src = "../Images/Slider_placeholder/2blobki.png";
    document.getElementById("logo").src = "../Images/header_footer/logo_mobile@2x.png";
    document.getElementById("hamburger").style.display = 'none';
    
    
    VanillaTilt.init(element);
  }
}
<<<<<<< HEAD
// slider functionality

// contact form 

document.getElementById('form').addEventListener('submit', validate);

//contact form
=======
 
>>>>>>> develop
// slider functionality//


//meetus functionality//
MeetUsMobileBehavior(x) // Call listener function at run time
x.addListener(MeetUsMobileBehavior) // Attach listener function on state changes

MeetUsDesktopBehavior(z) // Call listener function at run time
z.addListener(MeetUsDesktopBehavior) // Attach listener function on state changes
//








// document.querySelector('#sliderImg1').addEventListener('touchstart', handleTouchStart)
// document.querySelector('#sliderImg1').addEventListener('touchmove', handleTouchMove)
// document.querySelector('#sliderImg1').addEventListener('touchend', handleTouchEnd)

// document.querySelector('#sliderImg2').addEventListener('touchstart', handleTouchStart)
// document.querySelector('#sliderImg2').addEventListener('touchmove', handleTouchMove)
// document.querySelector('#sliderImg2').addEventListener('touchend', handleTouchEnd)

// document.querySelector('#sliderImg3').addEventListener('touchstart', handleTouchStart)
// document.querySelector('#sliderImg3').addEventListener('touchmove', handleTouchMove)
// document.querySelector('#sliderImg3').addEventListener('touchend', handleTouchEnd)












