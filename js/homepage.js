(() => {

	var productWheelClass=["holder_bu_inis_L","holder_bu_awayL2","holder_bu_awayL1","holder_bu_center","holder_bu_awayR1","holder_bu_awayR2", "holder_bu_inis_R"];
	var wheelArray = ["holder_bu_inis_L", "holder_bu_awayL2","holder_bu_awayL1","holder_bu_center","holder_bu_awayR1","holder_bu_awayR2", "holder_bu_inis_R"];
	let heading = document.querySelector("h2"),
		infoSecondSlide = document.querySelector(".ghosted");
	var slides = document.querySelectorAll(".scroll");


	let ovals = document.querySelectorAll(".oval");

	function showBox(){
		document.querySelector("." + `${this.dataset.feature}` + "_info").classList.add("show_oval");
		this.classList.add("gold_background");
	}
	function hideBox(){
		document.querySelector("." + `${this.dataset.feature}` + "_info").classList.remove("show_oval");
		this.classList.remove("gold_background");
	}
	ovals.forEach(oval => oval.addEventListener("mouseover", showBox));
	ovals.forEach(oval => oval.addEventListener("mouseleave", hideBox));



slides.forEach(function(slide, index){
	slide.addEventListener('wheel', ()=>{
		if (!checkScrollDirectionIsUp(event)) {
			if(index!=slides.length -1){
			console.log(index);
			    event.preventDefault();
			  	// slides[index+1].style.transform = 'translateX(0vw)';
			  	slides[index+1].classList.add("active");
			  	slide.classList.add("move");

			  	heading.classList.add("move_heading");
			  	heading.classList.remove("move_heading_up");


			  	if(slide.classList.contains("active")){
			  		slide.classList.remove("active");

			  	}

			  	if(index > 0 && slides[index-1].classList.contains("active")){
			  		slides[index-1].classList.remove("active");

			  	}
			  	
			}
		}

			   else {
			   	if(index!=0){
			    slide.classList.remove("active");
			    slide.classList.add("transition");
			  	slides[index-1].classList.add("active");
			  	slides[index-1].classList.remove("move");

			  	heading.classList.remove("move_heading");
			  	heading.classList.add("move_heading_up");
			  }
			}

	});
});


	function checkScrollDirectionIsUp(event) {
	  if (event.wheelDelta) {
	    return event.wheelDelta > 0;

	  }
	  return event.deltaY < 0;
	}


 let buttonPlayVideo = document.querySelector(".play-video-button"),
      lightBox = document.querySelector(".lightbox"),
      houseVideo = lightBox.querySelector("video"),
      closeButton = lightBox.querySelector(".close-button");

	function showLightBox() {
    lightBox.classList.add("show-lightbox");

    houseVideo.play();
  }

  function hideLightBox() {
    lightBox.classList.remove("show-lightbox");
    houseVideo.pause();
    houseVideo.currentTime = 0;
  }


  buttonPlayVideo.addEventListener("click", showLightBox);


  closeButton.addEventListener("click", hideLightBox);

})();