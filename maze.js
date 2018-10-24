
window.onload = function() { 
	

	
 document.getElementById("boundary1").onmouseover = function() { 
		document.getElementById("boundary1").classList.add("youlose");   	 
			}
	
}; 

function overBoundary() { 
	var boundaries = $$("div#maze div.boundary");
	for ( var i = 0; i < boundaries.length; i++) { 
		boundaries[i].style.backgroundColor = "#ff8888"
	}
} 

function start() { 
	loser= true; 
	var boundaries = $$("div#maze div.boundary"); 
	for (var i = 0; i < boundaries.length; i++) { 
		boundaries[i].addClassName("youlose"); 
	}



