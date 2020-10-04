const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEvenListener('click', function(){
	nav.classList.toggle('slide');
})