window.onload = function() {
	document.getElementById("main").style.display="inline";
	document.querySelector(".headlogo").style.display="block";
};
function kill() {
   window.location="image.html"; // redirection
   }
function bill(a, b) {
   window.location="vfx.html"; // redirection
   }
function me() {
   window.location="itv.html"; // redirection
   }
function oi() { // show about page
   document.getElementById("kee").style.background="white";
   document.getElementById("main").style.display="none";
   document.getElementById("after").style.display="inline";
}
function ke() { // back to main page
   document.getElementById("kee").style.background="white";
   document.getElementById("main").style.display="inline";
   document.getElementById("after").style.display="none";
   }