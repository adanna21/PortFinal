 
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
				//decriment each item by entered numbers
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

// ..............................................Projects Page Screen Transitions.........................................
		
		function projectPageSlide(){
			let images = document.getElementsByClassName("project_hero");
			let i;

			//to change all image sizes at once create a loop to target each image in the class array
			for (i = 0; i < images.length; i++){ 
			    images[i].classList.toggle('active');} //grab idex of each image and toggle to active class
			
			//toggle below ids by creating or removing active class 
			document.getElementById('project_rightside').classList.toggle('active');
			// document.getElementsByClassName('project_body').classList.toggle('active');
			// document.getElementsByClassName('project_p').classList.toggle('active');
			document.getElementById('project_h1').classList.toggle('active');
			document.getElementById('project_nav').classList.toggle('active');


			let body = document.getElementsByClassName("project_body");
			let oneImg = document.getElementById('frogger_imgs');
			let j;

			if(oneImg.style.height = "50vh"){
				//to change all image sizes at once create a loop to target each image in the class array
				for (j = 0; j < body.length; j++){ 
			    body[j].style.display = "block";} //grab idex of each image and toggle to active class
			}else {body[j].style.display = "none";}		
		}  

// ...........................................Project Page Image Slideshows.............................................


		let i = 0; //declare and set index variable

		function incrementNum(){ //create incrementer or counter for slideshow var
		  i++;
		}

		function froggerSlideshow(){
	        let froggerArr = ["../images/frogger1.png","../images/frogger2.png"];  //create array with image urls
	        let froggerImg = document.getElementById('frogger_imgs'); //grab id of div background you want to change
	        
            froggerImg.style.backgroundImage = 'url(' + "../images/" + froggerArr[i]+ ')';  //change background image to current index
            incrementNum();//increment index or i by one
            if(i > (froggerArr.length - 1)){i = 0}  //when site reaches end of slideshow reset to 0 index
            setTimeout(froggerSlideshow,5000);  //setTimeout to rerun function every 8 secs
	        }
		        
		froggerSlideshow();


		let j = 0; //declare and set index variable

		function incrementNum2(){ //create incrementer or counter for slideshow var
		  j++;
		}

		function calcSlideshow(){
			let calcArr = ["../images/calc1.png", "../images/calc2.png", "../images/calc3.png"];
			let calcImg = document.getElementById('calc_imgs');

			calcImg.style.backgroundImage = 'url(' + '../images/' + calcArr[j]+ ')';
			incrementNum2();
			if(j > (calcArr.length - 1)){j = 0}
			setTimeout(calcSlideshow,5000);
		}
		calcSlideshow();

		let k = 0; //declare and set index variable

		function incrementNum3(){ //create incrementer or counter for slideshow var
		  k++;
		}

		function clockSlideshow() {
			let clockArr = ["../images/clock1.png", "../images/clock2.png", "../images/clock3.png"];
			let clockImg = document.getElementById('clock_imgs');

			clockImg.style.backgroundImage = 'url('+ '../images/' + clockArr[k]+ ')';
			incrementNum3();
			if(k > (clockArr.length - 1)){k = 0}
			setTimeout(clockSlideshow,5000);
		}
		clockSlideshow();