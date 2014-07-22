//The Game class

var canvas;
var context;

//Constructor ( canvas ID )
function Game(canvasId){

	//Getting the canvas
	canvas = document.getElementById(canvasId);
	
	//Get canvas context
	context = canvas.getContext("2d");

}

//PLaying field ( canvas width / canvas height )
Game.prototype.drawField = function(maxX, maxY){
	
	//Horizontal lines
	//line 1
	context.moveTo(0, maxY/3);
	context.lineTo(maxX, maxY/3);
	context.stroke();
	
	//line 2
	context.moveTo(0, (maxY/3)*2 );
	context.lineTo(maxX, (maxY/3)*2 );
	context.stroke();
	
	//Vertical lines
	//line 1
	context.moveTo(maxX/3, 0);
	context.lineTo(maxX/3, maxY);
	context.stroke();
	
	//line 2
	context.moveTo((maxX/3)*2, 0);
	context.lineTo((maxX/3)*2, maxY);
	context.stroke();
	
	
}

//Circle (x, y, radius, start, stop)
Game.prototype.drawCircle = function(x, y, radius){
	
	context.beginPath();
	context.arc(x,y,radius,0,2*Math.PI);
	context.stroke();
	
}

//Lines moveTo = start / lineTo = end (x,y)
Game.prototype.drawX = function(x, y){
	
	context.moveTo(0 + x,0 + y);
	context.lineTo(50 + x,50 + y);
	context.stroke();
	
	context.moveTo(50 + x,0 + y);
	context.lineTo(0 + x,50 + y);
	context.stroke();	
}