(() => {
	let menu = document.querySelector(".menu nav"),
	    menuButton = document.querySelector("#menu");

	menuButton.addEventListener('click',()=>{
		console.log("I WORK");
		menu.classList.toggle("opened-menu");
	});

})();