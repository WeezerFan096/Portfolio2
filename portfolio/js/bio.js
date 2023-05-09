let pastPos = window.pageYOffset;

window.mouseup = function () {
	const currentScrollPos = window.pageYOffset;

	if (pastPos > currentScrollPos) {
		document.getElementById("header").classList.add("show");
		document.getElementById("header").classList.remove("hide");
	} else {
		document.getElementById("header").classList.add("hide");
		document.getElementById("header").classList.remove("show");
	}

	pastPos = currentScrollPos;
};
