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

	// menu_icon.classList.remove("hide");

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

		if(isMenuOpen){
			closeMenu();
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
			nav.classList.add('menu_visible');
			isMenuOpen = true;
	}

	function closeMenu(){
			console.log("close menu");
			nav.classList.remove('menu_visible');
			isMenuOpen = false;
	}


	function collapseHeader(){
		//console.log('collapseHeader()');
		header.classList.add("collapsed");
	}


	function expandHeader(){
		//console.log('expandHeader()');
		header.classList.remove("collapsed");
	}



}//end initialize()




