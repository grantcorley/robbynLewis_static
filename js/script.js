//script.js
//IIFE
(function () { initialize();})();
//------------------


// const header;


function initialize(){
	console.log('initialize()');

	const header_height = 90;
	const header = document.querySelector('header');
	const menu_icon = document.querySelector('.menu-icon');

	const nav = document.querySelector('nav.menu');

	var isMenuOpen = false;

	window.addEventListener('resize', onWindowResize);

	function onWindowResize(){
		//console.log("window resize");
		closeMenu();
	}



	document.addEventListener('scroll', function(e){

		console.log(window.scrollY);

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

		// if(isMenuOpen && window.ScrollY > 450){
		// 	closeMenu();
		// 	if (nav.classList.contains('menu_visible')){
		// 		nav.classList.remove('menu_visible');
		// 	}
		// }




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
			nav.classList.add('menu_visible');
			
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
			console.log('Animation ended: menu is closed');
		}

		else if(isMenuOpen){
			console.log('Animation ended: menu is open');
		}
	  });

	




	function collapseHeader(){
		//console.log('collapseHeader()');
		header.classList.add("collapsed");
		nav.classList.add('menu_header_collapsed');
	}


	function expandHeader(){
		header.classList.remove("collapsed");
		nav.classList.remove('menu_header_collapsed');
	}



}//end initialize()




