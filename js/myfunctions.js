document.getElementById("result").focus();

var x = Math.floor((Math.random() * 10) + 1);
var y = Math.floor((Math.random() * 10) + 1);

document.getElementById('numbers').innerHTML = x + " " + " " + "+" + " " + " " + y + " " + " " + "=";

function checkfunc(){
	var r = document.getElementById("result").value;
	if (Number(r) == x + y){
		document.getElementById("face").src = "images/smiley-clapping.png";
		document.getElementById("face").alt = "Happy face";
		document.getElementById("Message").innerHTML = "Congratulations! You're answer is correct!";
		document.getElementById("Message").style.color = "green";
	}
	else{
		document.getElementById("face").src = "images/panicked-smiley.jpg";
		document.getElementById("face").alt = "Panicked face";
		document.getElementById("Message").innerHTML = "Think again! You're answer is wrong!";
		document.getElementById("Message").style.color = "red";
	}
}


function clearfunc(){
	x = Math.floor((Math.random() * 10) + 1);
	y = Math.floor((Math.random() * 10) + 1);
	document.getElementById('numbers').innerHTML = x + " " + " " + "+" + " " + " " + y + " " + " " + "=";
	
	document.getElementById("face").src = "images/asking_face_1.jpg";
	document.getElementById("face").alt = "Asking face";
	document.getElementById("result").value = "";
	document.getElementById("result").focus();
	document.getElementById("Message").innerHTML = "";
}