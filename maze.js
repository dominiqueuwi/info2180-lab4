
window.onload = function() { 
	var x = document.getElementById("start").innerHTML
	alert(x)
	alert('Hi')
	
	document.getElementById("boundary1").onmouseover = function() { 
		document.getElementById("boundary1").classList.add("youlose");
	}



} 


