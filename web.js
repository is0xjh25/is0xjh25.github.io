/* button onclick*/
function download() {
	var a = document.createElement("a");
	  a.href = "./resume.pdf";
	  a.setAttribute("download", "Yun-Chi Hsiao's Resume");
	  a.click();
}

function email() {
	window.open('mailto: is0.jimhsiao@gmail.com');
}

function share() {
	alert("Share to social media");
}

function changeTheme() {
	alert("Let's change the theme");
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

	percent < 5 ?
	document.getElementById("sidenav-active").id = "sidenav-inactive"  :
	document.getElementById("sidenav-inactive").id="sidenav-active";
});