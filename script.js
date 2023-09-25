// menu icon Navbar ===============
let menuIcon =document.querySelector('#menu-bar');
let navbar =document.querySelector('.navbar');
menuIcon.onclick =() =>{
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};
// Scroll section active link

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{
	sections.forEach( sec =>{
		let top =window.scrollY;
		let offset = sec.offsetTop -150;
		let height=sec.offsetHeight;
		let id =sec.getAttribute('id');
		if(top >= offset && top < offset + height){
			navlinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nav a[href*='+ id +']').classList.add('active');
			 })
		};

	});


// ==============Stricky navbar============*/

let header = document.querySelector('.header');
header.classList.toggle('sticky' , window.scrollY > 100);



// Remove Menu Icon Navbar When click Navbar link (scroll)
 	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');

};

// Dark mode tool
let darkModeIcon = document.querySelector('#darkmode-icon');
darkModeIcon. onclick =() => {
	darkModeIcon.classList.toggle('bx-sun');
	document.body.classList.toggle('dark-mode');
}

