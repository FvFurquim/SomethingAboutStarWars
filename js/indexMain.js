
// Parallax
scroll = window.pageYOffset;
document.addEventListener('scroll', function (e){
	let offset = window.pageYOffset;
	scroll = offset;
	document.getElementById("layer").style.width = (50 - scroll/30) + '%';
})

//Navbar
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {

	let currentScrollpos = window.pageYOffset;
	if(prevScrollpos > currentScrollpos){
		document.getElementById("navbarVazia").style.top = "0";

		for(let i = 0; i < 5; i++){
			document.getElementsByClassName("navButtons")[i].style.top = "0";
		}
	}

	else{
		document.getElementById("navbarVazia").style.top = "-100px";

		for(let i = 0; i < 5; i++){
			document.getElementsByClassName("navButtons")[i].style.top = "-100px";
		}
	}

	prevScrollpos = currentScrollpos;
}