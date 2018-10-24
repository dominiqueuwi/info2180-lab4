var loser = false;
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
	loser= false; 
	var edges = $$("div#maze div.boundary"); 
	for (var i = 0; i < edges.length; i++) { 
		edges[i].removeClassName("youlose"); 
	}

function end() { 
	if(loser= true) { 
		alert("You Lose!");
	} else { 
		alert("You Win!");
	}
} 
}