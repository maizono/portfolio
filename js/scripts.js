
//ToolTip preparation
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();   
});

//Button for resume
function resBtn(){
	window.open(
		'documents/alugo_resume.pdf',
		'_blank'
	);
}

// Get the modal
var modal = document.getElementById("examples");

//Depending on the button that is clicked, the content of the modal changes

document.getElementById("btn1").addEventListener("click", displayModal);
document.getElementById("btn1").addEventListener("click", btn1Content);

function btn1Content(){
	document.getElementById("modalText").innerHTML = "<a href='https://www.google.com'>Click me</a>";
}

document.getElementById("btn2").addEventListener("click", displayModal);
document.getElementById("btn2").addEventListener("click", btn2Content);

function btn2Content(){
	document.getElementById("modalText").innerHTML = "<a href='https://www.google.com'>Click me 2</a>";
}

document.getElementById("btn3").addEventListener("click", displayModal);
document.getElementById("btn3").addEventListener("click", btn3Content);

function btn3Content(){
	document.getElementById("modalText").innerHTML = "<a href='https://www.google.com'>Click me 3</a>";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function displayModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}






