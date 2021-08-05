//script.js
//IIFE

// import smoothscroll from 'smoothscroll-polyfill';
// // kick off the polyfill!
// smoothscroll.polyfill();

(function () { initialize();})();
//------------------




function initialize(){
	//console.log('initialize()');

	const header_height = 90;
	const header = document.querySelector('header');
	const menu_icon = document.querySelector('.menu-icon');
	const hamburger = menu_icon.querySelector('.hamburger');

	const navHolder = document.querySelector("#nav-holder");
	const nav = document.querySelector('nav.menu');
	

	let isMenuOpen = false;
	let number_scrolls = 0;

	const main = document.querySelector('#main');
	const allSections = main.querySelectorAll('section');



	window.addEventListener('resize', onWindowResize);

	function onWindowResize(){
		closeMenu();
	}

	nav.addEventListener('click', function(){
		if(isMenuOpen){
			nav.classList.remove('menu_visible');
			hamburger.classList.remove('is-active');
			isMenuOpen = false;
			number_scrolls++;
			console.log(`${number_scrolls} scrolls`);
			// allSections.forEach(element => console.log(element));
			if(number_scrolls === 1){
				allSections.forEach(element => element.classList.add('scroll_offset_01'));
			}
			if(number_scrolls === 2){
				allSections.forEach(element => element.classList.remove('scroll_offset_01'));
				allSections.forEach(element => element.classList.add('scroll_offset_02'));
			}	
		}
	});


	document.addEventListener('scroll', function(e){

		//console.log(window.scrollY);

		if(window.scrollY > header_height){
			//if the header is not collapsed
			if(!header.classList.contains("collapsed")){
				collapseHeader();
			}
		}


		if(window.scrollY <= header_height){
			//if the header IS collapsed
			if(header.classList.contains("collapsed")){
				expandHeader();
			}
		}



	});


	menu_icon.addEventListener("click", function(){ 
		
		
		if(!isMenuOpen){
			openMenu();
		}

		else{
			closeMenu();
		}


	});


	function openMenu(){
			console.log("open menu");
			navHolder.classList.add('menu_visible');
			nav.classList.add('menu_visible');
			hamburger.classList.add('is-active');
			
			if (nav.classList.contains('close_menu')){
				nav.classList.remove('close_menu');
			}
			nav.classList.add('open_menu');
			//transform: translate(50px, 10px);
			//nav.classList.add('menu_open');
			isMenuOpen = true;
	}

	function closeMenu(){
			console.log("close menu");
			hamburger.classList.remove('is-active');
			//nav.classList.remove('menu_visible');
			
			if (nav.classList.contains('open_menu')){
				nav.classList.remove('open_menu');
			}
			nav.classList.add('close_menu');
			isMenuOpen = false;
	}


	nav.addEventListener('animationend', () => {
		
		if(!isMenuOpen){
			nav.classList.remove('menu_visible');
			navHolder.classList.remove('menu_visible');
			//console.log('Animation ended: menu is closed');
		}

		else if(isMenuOpen){
			//console.log('Animation ended: menu is open');
		}
	  });

	

	function collapseHeader(){
		//console.log('collapseHeader()');
		header.classList.add("collapsed");
		navHolder.classList.add('menu_header_collapsed');
	}


	function expandHeader(){
		header.classList.remove("collapsed");
		navHolder.classList.remove('menu_header_collapsed');
	}


	



}//end initialize()




