// animasi navbar scrooling
window.addEventListener('scroll', function() {
     const navbar  = document.getElementById('navbar');
     const logon   = document.getElementById('logobastian');
     const navtext = document.getElementById('navbartext');
     const navtext2 = document.getElementById('navbartext2');
     const navtext3 = document.getElementById('navbartext3');
     const navtext4 = document.getElementById('navbartext4');
     const navtext5 = document.getElementById('navbartext5');
     const navtext6 = document.getElementById('navbartext6');
     const navtext7 = document.getElementById('navbartext7');
     const hamburger = document.getElementById('bar2');
     const hamburger2 = document.getElementById('bar3');
     const hamburger3 = document.getElementById('bar4');

     if (window.scrollY >40) {
        navbar.classList.add("scrolled");
        logon.classList.add("logon");
        navtext.classList.add("navbartext");
        navtext2.classList.add("navbartext2");
        navtext3.classList.add("navbartext3");
        navtext4.classList.add("navbartext4");
        navtext5.classList.add("navbartext5");
        navtext6.classList.add("navbartext6");
        navtext7.classList.add("navbartext7");
        hamburger.classList.add("hamburger1");
        hamburger2.classList.add("hamburger2");
        hamburger3.classList.add("hamburger3");
     } else {
        navbar.classList.remove("scrolled");
        logon.classList.remove("logon");
        navtext.classList.remove("navbartext");
        navtext2.classList.remove("navbartext2");
        navtext3.classList.remove("navbartext3");
        navtext4.classList.remove("navbartext4");
        navtext5.classList.remove("navbartext5");
        navtext6.classList.remove("navbartext6");
        navtext7.classList.remove("navbartext7");
        hamburger.classList.remove("hamburger1");
        hamburger.classList.remove("hamburger1");
        hamburger2.classList.remove("hamburger2");
        hamburger3.classList.remove("hamburger3");
     }
})


const hamburger = document.getElementById('hamburger');
const menu      = document.getElementById('navbar2');

hamburger.addEventListener('click', function() {
   menu.classList.toggle('active');
})

