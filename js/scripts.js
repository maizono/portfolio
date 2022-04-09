// ToolTip preparation.

$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();   
});

// Button for resume.

function resBtn(){
	window.open(
		'documents/alugo_resume.pdf',
		'_blank'
	);
}

var modal = document.getElementById("examples");

// Depending on the button that is clicked, the content of the modal changes.

document.getElementById("btn1").addEventListener("click", displayModal);
document.getElementById("btn1").addEventListener("click", btn1Content);

function btn1Content(){ 

// All elements are grouped into variables and added to a single function.

	//Group 1
	
	var a = "<h1 class='ignore'>My First Website</h1>";
	var b = "<p class='ignore'>I made this website way back in my freshman year of college. At the time, I only really knew basic HTML and CSS. It's quite outdated as well; it has a flash movie on the homepage. A little embarrassing, but we all start somewhere.<p><hr>";
	var c = "<img src='images/web1.jpg' class='modimg'><br /><br />";
	var d = "<p class='ignore modemph'><a href='https://maizono.github.io/portfolio/works/web1'>View Live Example</a></p><hr>";
	
	//Group 2
	
	var e = "<h1 class='ignore'>The Next Step</h1>";
	var f = "<p class='ignore'>This is the second website I created. It was for a school project, so it's a big mix between functionality and simplistic design. There's a few JavaScript and jQuery bits to play around with on here, too, though I have included these separately in another section.</p>";
	var g = "<img src='images/web2.jpg' class='modimg'><br /><br />";
	var h = "<p class='ignore modemph'><a href='https://maizono.github.io/portfolio/works/web2'>View Live Example</a></p><hr>";
	
	//Group 3
	
	var i = "<h1 class='ignore'>A Small Revision</h1>";
	var j = "<p class='ignore'>Near the end of my college journey, I changed up the entire website to make it a bit more modern, in a way. Despite this, something about it nagged me; it still felt like a school project. I needed something more short, direct, and to the point, which is how the website you are on now came to be.</p>";
	var k = "<img src='images/web3.jpg' class='modimg'><br /><br />";
	var l = "<p class='ignore modemph'><a href='https://maizono.github.io/portfolio/works/web3'>View Live Example</a></p>";
	document.getElementById("modalContent").innerHTML = a + b + c + d + e + f + g + h + i + j +k +l;
	
}

document.getElementById("btn2").addEventListener("click", displayModal);
document.getElementById("btn2").addEventListener("click", btn2Content);

function btn2Content(){
	document.getElementById("modalText").innerHTML = "Coming soon!";
}

document.getElementById("btn3").addEventListener("click", displayModal);
document.getElementById("btn3").addEventListener("click", btn3Content);

function btn3Content(){
	document.getElementById("modalText").innerHTML = "Coming soon!";
}

var span = document.getElementsByClassName("close")[0];

// Opens the modal when a button is clicked.

function displayModal() {
	modal.style.display = "block";
}

// When the user clicks on the 'x', the modal closes and wipes all child nodes.

span.onclick = function() {
	modal.style.display = "none";
	const parent = document.getElementById("modalContent");
	while (parent.firstChild){
		parent.firstChild.remove();
	}
}

// When the user clicks anywhere outside of the modal, it closes and wipes all child nodes.

window.onclick = function(event) {
  if (event.target == modal) {
	modal.style.display = "none";
	const parent = document.getElementById("modalContent");
	while (parent.firstChild){
		parent.firstChild.remove();
	}
  }
}






