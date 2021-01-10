//script.js
//IIFE
(function () { initialize();})();
//------------------


// const header;


function initialize(){
	console.log('initialize()');

	const header = document.querySelector('header');
	const menu_icon = document.querySelector('.menu-icon');

	console.log(header);

	document.addEventListener('scroll', function(e){
		//console.log(window.scrollY);


		if(window.scrollY > 40){
			//if the header is not collapsed
			if(!header.classList.contains("collapsed")){
				collapseHeader();
			}
		}


		if(window.scrollY <= 40){
			//if the header IS collapsed
			if(header.classList.contains("collapsed")){
				expandHeader();
			}
		}


	});


	menu_icon.addEventListener("click", function(){ 
		alert("menu under construction"); 
	});



	function collapseHeader(){
		//console.log('collapseHeader()');
		header.classList.add("collapsed");
	}


	function expandHeader(){
		//console.log('expandHeader()');
		header.classList.remove("collapsed");
	}





}//end initialize()




