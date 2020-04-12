(function(){
	let image_follow = document.querySelector(".follow");
	let campaings = document.querySelectorAll(".button");

	function showImage(el){
		image_follow.style.display = "block";
		image_follow.src="img/" + `${this.dataset.camptype}` +".jpg";
		console.log(this.dataset.camptype);
	}
	function moveImage(el){
		image_follow.style.left = (el.clientX-130) + "px";
		image_follow.style.top = (el.clientY -300) + "px";
	}
	function closeImage(el){
		image_follow.style.display = "none";
	}

	function moveSlide(el){
		let infoSlide = document.querySelector("." + `${this.dataset.camptype}`);
		infoSlide.classList.add("active");
		document.querySelector(".slide.one").style.transform = "translateY(-40vh)";
		document.querySelector(".slide.one").style.opacity = 0;
	}
	var slides = document.querySelectorAll(".scroll");
	slides.forEach(function(slide, index){
	slide.addEventListener('wheel', ()=>{
		if (checkScrollDirectionIsUp(event)) {
				if(index != 0){
			    slide.classList.remove("active");
	
			  	document.querySelector(".slide.one").classList.add("active");

			  	document.querySelector(".slide.one").style.transform = "translateY(0vh)";
			  	document.querySelector(".slide.one").style.opacity = 1;
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


	campaings.forEach(campaing => campaing.addEventListener("mouseover", showImage));
	campaings.forEach(campaing => campaing.addEventListener("mousemove", moveImage));
	campaings.forEach(campaing => campaing.addEventListener("mouseleave", closeImage));

	campaings.forEach(campaing => campaing.addEventListener("click", moveSlide));
})();