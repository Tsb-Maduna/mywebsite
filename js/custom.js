
console.log("Custom script loaded!");





//------------------------------------------  ANIMATION  -----------------------------------------------------//
	const Cwelcome = document.querySelector('#welcome');
	if(Cwelcome){
		new Typed('#welcome', {
			strings: ["Welcome to my Canvas"], // your texts
			typeSpeed: 40,
			backSpeed: 70,
			loop: false,
			showCursor: false
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