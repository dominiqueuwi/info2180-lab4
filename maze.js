var loser = false;
var start = false;
window.onload = function() { 
	

	
 document.getElementById("boundary1").onmouseover = function() { 
		document.getElementById("boundary1").classList.add("youlose");   	 
			}
	
}
//alert('test')
	var boundaries = document.getElementsByClassName("boundary"); 
	//var boundaries = $$("div#maze div.boundary");
	for (var i = 0; i < boundaries.length; i++) { 
		boundaries.item(i).style.backgroundColor = "#ff8888"
	};


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
function startOver() { 
	window.location.reload();}

function cheat() { 
var a= event.clienta;
var b= event.clientb;
var commence  = getElementById("start");
document.commence.innerHTML = a.offsetLeft;
document.commence.innerHTML = b.offsetTop;
	}
}
}