 
 // ..................................................LOAD PAGE JQUERY...................................................
	
	// script referenced from http://www.javascriptatoms.com/2014/04/create-loading-screen-jquery/	
	$(window).on('load',function() {
	$('#load_screen').delay(1000).fadeOut('slow');
	});

// ..................................................LOAD PAGE JS.......................................................
	 window.onload = function slideIn() {
		//get element
		let rightSide = document.getElementById('rightside');
		let mainlogo = document.getElementById('mainlogo');

		//set element position
		let rightPosition = -1500;

		//set function to repeat ever 10 miliseconds
		var id = setInterval(frame, 10);

		function frame() {
			//when function reaches desired position reset interval
			if (rightPosition == 0) {
				clearInterval(frame);
			}
			else{
				//increment each item by entered numbers
				rightPosition+=12;

				//get stored element and concatenate into px measurment
				rightSide.style.marginLeft = rightPosition + "px";   
			}
		}
	}

// ...................................................Menu JS............................................................
	
	function openNav() {
			document.getElementById("menu_container").classList.toggle("active");
			document.getElementById("rightnav").classList.toggle("active");
			document.getElementById("closenav").classList.toggle("active");
		}