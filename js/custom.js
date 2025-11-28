
console.log("Custom script loaded!");



//------------------------------------------  ANIMATION  -----------------------------------------------------//
	const Cwelcome = document.querySelector('#welcome');
	if(Cwelcome){
		new Typed('#welcome', {
			strings: ["Welcome to my Canvas"], // my texts
			typeSpeed: 40,
			backSpeed: 70,
			loop: false,
			showCursor: false
		});
	}
	
	const Cbrand = document.querySelector('#brand');
	if(Cbrand){
		new Typed('#brand', {
			strings: ["Maduna"], // my texts
			typeSpeed: 200,
			backSpeed: 30,
			loop: true,
			showCursor: false
		});
	}
	
	const Cunavailable = document.querySelector('#unavailable');
	if(Cunavailable){
		new Typed('#unavailable', {
			strings: ["The contents of this page are currently unavailable, I apologise for the inconvenience. Please see other pages"], // my texts
			typeSpeed: 60,
			backSpeed: 30,
			loop: false,
			showCursor: true
		});
	}

//-----------------------------------------------------------------------------------------------------------//

//------------------------------------------  DARK AND LIGHT MODE  ------------------------------------------//

	const toggleBtn = document.getElementById("themeToggle");
	const body = document.body;

	// Load saved theme or default to light
	const savedTheme = localStorage.getItem("theme") || "light";
	body.setAttribute("data-bs-theme", savedTheme);
	updateButton(savedTheme);

	// Handle toggle
	toggleBtn.addEventListener("click", () => {
		let currentTheme = body.getAttribute("data-bs-theme");
		let newTheme = currentTheme === "light" ? "dark" : "light";
		body.setAttribute("data-bs-theme", newTheme);
		localStorage.setItem("theme", newTheme);
		updateButton(newTheme);
	});

	// Update button text and style
	function updateButton(theme) {
		if (theme === "dark") {
			toggleBtn.textContent = "☀️";
			toggleBtn.classList.replace("btn-outline-secondary", "btn-light");
		} else {
			toggleBtn.textContent = "🌙";
			toggleBtn.classList.replace("btn-light", "btn-outline-secondary");
		}
	}
	
//---------------------------------------------------------------------------------------------------//