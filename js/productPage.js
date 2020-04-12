(() => {

	var productWheelClass=["holder_bu_inis_L","holder_bu_awayL2","holder_bu_awayL1","holder_bu_center","holder_bu_awayR1","holder_bu_awayR2", "holder_bu_inis_R"];
	var wheelArray = ["holder_bu_inis_L", "holder_bu_awayL2","holder_bu_awayL1","holder_bu_center","holder_bu_awayR1","holder_bu_awayR2", "holder_bu_inis_R"];
	let heading = document.querySelector("h2"),
		ghostedHeaderSecondSlide = document.querySelector(".ghosted"),
		headerSecondSlide = document.querySelector("#productInfoHeader"),
		beerImage = document.querySelector("#beer_image"),
		nutritionButton = document.querySelector(".link");
		closeFacts = document.querySelector(".close_popup");
	var slides = document.querySelectorAll(".scroll");



/*nutritional info popup*/
function showBox(){
	document.querySelector(".popupFacts").classList.add("showBox");
}
function closeBox(){
	document.querySelector(".popupFacts").classList.remove("showBox");
}
nutritionButton.addEventListener("click", showBox);
closeFacts.addEventListener("click", closeBox);

/*slides animation*/
slides.forEach(function(slide, index){
	slide.addEventListener('wheel', ()=>{
		if (!checkScrollDirectionIsUp(event)) {
			if(index!=slides.length -1){
			console.log(index);
			    event.preventDefault();
			  	// slides[index+1].style.transform = 'translateX(0vw)';
			  	slides[index+1].classList.add("active");
			  	slide.classList.add("move");
			  	beerImage.classList.add("bottle_up");
			  	heading.classList.add("move_heading");
			  	heading.classList.remove("move_heading_up");


			  	if(slide.classList.contains("active")){
			  		slide.classList.remove("active");

			  	}

			  	/*if(slides[3].classList.contains("active")){
			  		document.querySelector("#myVideo").play();
			  	}*/


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
			  	beerImage.classList.remove("bottle_up");
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


/*product carousel animation*/

    var productWheelClass=["holder_product_invis_L","holder_product_awayL2","holder_product_awayL1","holder_product_center","holder_product_awayR1","holder_product_awayR2", "holder_product_invis_R"];
	var wheelArray = ["holder_product_invis_L", "holder_product_awayL2","holder_product_awayL1","holder_product_center","holder_product_awayR1","holder_product_awayR2", "holder_product_invis_R"];

		for(let i=1; i<=productWheelClass.length; ++i){
			document.querySelector("#product"+i).removeAttribute("class");
			document.querySelector("#product"+i).classList.add(productWheelClass[i-1]);
			document.querySelector("#product"+i).classList.add("holder_product");
			}
	
		var productWheel = document.querySelectorAll("img");
		var productWheelArray = document.querySelectorAll(".holder_product");
		var productInformation = [
		["Peppermint Lager", `Hemp Peppermint Lager - a unique beer in the entire industry.  Since it contains notes of peppermint in its composition as well as the unique taste and smell of freshness. This beer has a savory taste and sophisticated aroma.  Beer is top quality.  Brewd only from selected ingredients.  The taste of beer is refreshing, with hints of malt, bread, herbs, a long finish with delicate herbal and hop notes.  Heineken - premium beer`],
		["Lavender Lager", `Hemp Lavender Lager - light and soft unique beer in the entire industry.  Since it contains notes of Lavender in its composition as well as the unique taste and smell of Lightness. This beer has a savory taste and sophisticated aroma.  Beer is top quality.  brewd only from selected ingredients.  The taste of beer is refreshing, with hints of malt, bread, herbs, a long finish with delicate herbal and hop notes.  Heineken - premium beer.`],
		["Tea Tree Lager", `Tea Tree Lager -  the soothing and relaxing taste and delicious aroma of this beer is its unique feature.  Since it contains notes of Tea in its composition as well as the unique taste and smell of Freshness. This beer has a savory taste and sophisticated aroma.  Beer is top quality.  brewd only from selected ingredients.  The taste of beer is refreshing, with hints of malt, bread, herbs, a long finish with delicate herbal and hop notes.  Heineken - premium beer.`],
		["Rose Lager", `Rose Lager - this sweet and tasty beer contains hints of berry and the smell of roses.
This beer has a savory taste and sophisticated aroma.  Beer is top quality.  brewd only from selected ingredients.  The taste of beer is refreshing, with hints of malt, bread, herbs, a long finish with delicate herbal and hop notes.  Heineken - premium beer.
`],
         ["Eucalyptus Lager", `The beer contains hints of Eucalyptus and bright and tasty smell.
This beer has a savory taste and sophisticated aroma.  Beer is top quality.  brewd only from selected ingredients.  The taste of beer is refreshing, with hints of malt, bread, herbs, a long finish with delicate herbal and hop notes.  Heineken - premium beer.
`],
["Almond Soda", `Hemp Almond soda -  the soothing and relaxing taste and delicious aroma of this beer is its unique feature.  Since it contains notes of Almonds in its composition as well as the unique taste and smell of Freshness. This beer has a savory taste and sophisticated aroma.  Beer is top quality.  brewd only from selected ingredients.  The taste of beer is refreshing, with hints of malt, bread, herbs, a long finish with delicate herbal and hop notes.  Heineken - premium beer.`]
		];

		function changeBeerInfo(product){
			ghostedHeaderSecondSlide.innerHTML = product.dataset.beername;
			headerSecondSlide.innerHTML = product.dataset.beername;
			let kind = product.dataset.beername.split(" ");
			beerImage.src = "img/"+ `${kind[0].toLowerCase()}` + "_bottle.png";
			document.querySelector(".text").innerHTML = productInformation[product.dataset.number][1];
		}
		productWheel.forEach(product => product.addEventListener('click', function(){



			var position = this.parentElement.classList[0];
			var wheelIndex = productWheelClass.indexOf(position);

			if (wheelIndex != 3 && wheelIndex != 1 && wheelIndex != 5 && wheelIndex != 6 && wheelIndex != 0){
				/*carousel_heading.innerHTML = this.dataset.beername;*/
				/*infoSecondSlide.innerHTML = this.dataset.beername;*/
				var move = wheelIndex > 3 ? productWheelClass.length - wheelIndex + 3: 3 - wheelIndex;
				while(move){
					var t=wheelArray.shift();
						wheelArray.push(t);

					for(let i=1; i<=wheelArray.length; ++i){
						document.querySelector("#product"+i).removeAttribute("class");
						document.querySelector("#product"+i).classList.add(wheelArray[i-1]);
						document.querySelector("#product"+i).classList.add("holder_product");
						}
				--move;
			}
			changeBeerInfo(product);

			
		}
		}));
	
})();