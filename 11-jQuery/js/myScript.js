/* javascrip
var esconder = document.getElementById('esconder');
esconder.onclick = function () {
	var elemDiv = document.getElementById('box');
	elemDiv.style.transition = "all 2s ease-in-out";
	elemDiv.style.height = "0px";
	elemDiv.style.widht = "0px";
}

function slideDown(el) {
	var elemDiv = document.getElementById(el);
	elemDiv.style.transition = "all 2s ease-in-out";
	elemDiv.style.height = "200px";
	elemDiv.style.widht = "400px";
}
*/

$("#esconder").click(function(){
	$("div").slideUp();
})

$("#mostrar").click(function(){
	$("div").slideDown();
})