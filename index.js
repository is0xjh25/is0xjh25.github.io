/* download resume.pdf */
function download() {
	var a = document.createElement("a");
	a.href = "./Yun-Chi Hsiao's Resume.pdf";
	a.setAttribute("download", "Yun-Chi Hsiao's Resume");
	a.click();
}

/* send email to me */
function email() {
	window.open('mailto: is0.jimhsiao@gmail.com');
}

/* copy url */
function share() {
	navigator.clipboard.writeText(document.location.href);
	let x = document.getElementById("snackbar-1");
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

/* change to light or dark theme */
function changeTheme(iconID) {

	// change icon
	let element = document.getElementById(iconID).querySelector("i");
	
	if (element.className === "fas fa-moon") {
		element.className = "fas fa-sun";
	} else {
		element.className = "fas fa-moon";
	}

	if (document.body.classList.contains ("light-theme")) {
		document.body.className = "dark-theme";
	} else if (document.body.classList.contains ("dark-theme")) {
		document.body.className = "light-theme";
	}

	let x = document.getElementById("snackbar-2");
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

/* scroll */
const originalTitle = document.title;
window.addEventListener("scroll", function() {
	r = document.querySelector(":root");
	var h = document.documentElement, 
	b = document.body,
	st = "scrollTop",
	sh = "scrollHeight";
	var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
	var roundedPercent = Math.round(percent);
	r.style.setProperty('--scroll', percent+"0%");
	document.title = `${originalTitle} - ${roundedPercent}%`;
	
	if (percent < 9) {
		if (document.getElementById("sidenav-active")) document.getElementById("sidenav-active").id = "sidenav-inactive";
	} else {
		if (document.getElementById("sidenav-inactive")) document.getElementById("sidenav-inactive").id = "sidenav-active";
	}
});