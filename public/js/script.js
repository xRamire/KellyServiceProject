document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("lab-express-basic-auth JS imported successfully!");
  },
  false
);
/////////////////////HOME MENU DESPLEGABLE////////////////////////////
const ham = document.querySelector(".menu");
const menu = document.querySelector('.main-Home-nav ul');
const links = menu.querySelectorAll('.main-Home-nav ul li');

var tl = gsap.timeline({ paused: true });

tl.to(menu, {
	duration: 1,
	opacity: 1,
	height: '10vh', // change this to 100vh for full-height menu
	ease: 'expo.inOut',
})
tl.from(links, {
	duration: 1,
	opacity: 0,
	//y: 20,
	stagger: 0.1,
	ease: 'expo.inOut',
}, "-=0.5");

tl.reverse();

ham.addEventListener('click', () => {
	tl.reversed(!tl.reversed());
});

/////////////////////FIN HOME MENU DESPLEGABLE////////////////////////////
/////////////////////TYPE FORM SELECTION////////////////////////////
const btnClient = document.querySelector('.btn-Client');
const btnWorker = document.querySelector('.btn-Worker');
const formClient = document.querySelector('.singup-form-Client');
const formWorker = document.querySelector('.singup-form-Worker');

btnWorker.addEventListener('click', () => {
    // formClient.classList.remove('active');
    // formWorker.classList.add('active');

    TweenMax.set(formWorker,{opacity:0,display:"none"});
        
        gsap.timeline()
            .to(formClient,0.3, {opacity:0, display:"none"})
            .to(formWorker,1, {opacity:1, display:"flex"});
	 
});
btnClient.addEventListener('click', () => {
    // formWorker.classList.remove('active');
    // formClient.classList.add('active');

    TweenMax.set(formClient,{opacity:0,display:"none"});
        
        gsap.timeline()
            .to(formWorker,0.3, {opacity:0, display:"none"})
            .to(formClient,1, {opacity:1, display:"flex"});
});
/////////////////////FIN TYPE FORM SELECTION////////////////////////////