function saveName() {
localStorage.setItem("userName", document.getElementById("userName").value);
}

function newPage() {
document.location='../third/third.html';
}

function mainFunction() {
	saveName(); 
	newPage();
}