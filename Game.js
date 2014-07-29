//The Game class

var canvas;
var context;
var cWidth;
var cHeight;

/*
	Field array grid
	
	0, 1, 2
	3, 4, 5
	6, 7, 8
*/
var field = [0, 0, 0,
			 0, 0, 0,
			 0, 0, 0];
			 

//Constructor ( canvas ID )
function Game(canvasId){

	//Getting the canvas
	canvas = document.getElementById(canvasId);
	
	//Get canvas context
	context = canvas.getContext("2d");
	
	//Get canvas width and height
	cHeight = canvas.height;
	cWidth = canvas.width;
}

//PLaying field ( canvas width / canvas height )
Game.prototype.drawField = function(){
	
	//Horizontal lines
	//line 1
	context.moveTo(0, cHeight/3);
	context.lineTo(cWidth, cHeight/3);
	context.stroke();
	
	//line 2
	context.moveTo(0, (cHeight/3)*2 );
	context.lineTo(cWidth, (cHeight/3)*2 );
	context.stroke();
	
	//Vertical lines
	//line 1
	context.moveTo(cWidth/3, 0);
	context.lineTo(cWidth/3, cHeight);
	context.stroke();
	
	//line 2
	context.moveTo((cWidth/3)*2, 0);
	context.lineTo((cWidth/3)*2, cHeight);
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

//Check mouse location and draw symbol
Game.prototype.drawSymbol = function(mousex, mousey, player){
	
	
	/**********
		TOP - Y
	***********/
	//left box
	this.checkAndDraw(0,0,player, mousex, mousey, 0);
	//mid box
	this.checkAndDraw(0,1,player, mousex, mousey, 1);
	//right box
	this.checkAndDraw(0,2,player, mousex, mousey, 2);
	
	/**********
		MID - Y
	***********/
	//left box
	this.checkAndDraw(1,0,player, mousex, mousey, 3);
	//mid box
	this.checkAndDraw(1,1,player, mousex, mousey, 4);
	//right box
	this.checkAndDraw(1,2,player, mousex, mousey, 5);
	
	/**********
		BOTTOM - Y
	***********/
	//left box
	this.checkAndDraw(2,0,player, mousex, mousey, 6);
	//mid box
	this.checkAndDraw(2,1,player, mousex, mousey, 7);
	//right box
	this.checkAndDraw(2,2,player, mousex, mousey, 8);
	
	//Check the positions of the players
	console.log("["+field[0]+"]["+field[1]+"]["+field[2]+"]");
	console.log("["+field[3]+"]["+field[4]+"]["+field[5]+"]");
	console.log("["+field[6]+"]["+field[7]+"]["+field[8]+"]");
	console.log("------------------------------------------");
	
	//Check for winning condition
	if(this.checkWin() == false){
	
		//Change player when actions done
		if(player == 1){
		
			return 2;
		
		}else if(player == 2){
		
			return 1;

		}
		
	}else{
		
		return this.checkWin();
	}
}

/** This function is for private use only **/
//Check if symbol exist and draw at the right area
//Also features dynamic positioning when the canvas is bigger or smaller
Game.prototype.checkAndDraw = function(hCount, wCount, player, mousex, mousey, gridPosition){
	
	var cHeightFactor = cHeight / 3;
	var cWidthFactor = cWidth / 3;
	
	if(field[gridPosition] != 1 || field[gridPosition] != 2){
	
		if(mousex > (wCount * cWidthFactor) && mousex < (cWidthFactor + (wCount * cWidthFactor)) &&
			mousey > (hCount * cHeightFactor) && mousey < (cHeightFactor + (hCount * cHeightFactor))){
			
			if(player == 1){
				
				this.drawCircle((cWidthFactor + (wCount * cWidthFactor))-(cWidthFactor / 2), (cHeightFactor + (hCount * cHeightFactor))-(cHeightFactor / 2), 30);
				field[gridPosition] = 1;
				
			}else if (player == 2){
			
				this.drawX((cWidthFactor + (wCount * cWidthFactor))-((cWidthFactor / 4) * 3), (cHeightFactor + (hCount * cHeightFactor))-((cHeightFactor / 4) * 3));
				field[gridPosition] = 2;
			}			
		}
	}
}

/** This function is for private use only **/
//Check winning condition
Game.prototype.checkWin = function(){

	//Player one
	if(field[0] == 1 && field[1] == 1 && field[2] == 1){ return "True"; }
	if(field[3] == 1 && field[4] == 1 && field[5] == 1){ return "True"; }
	if(field[6] == 1 && field[7] == 1 && field[8] == 1){ return "True"; }
	if(field[0] == 1 && field[4] == 1 && field[8] == 1){ return "True"; }
	if(field[2] == 1 && field[4] == 1 && field[6] == 1){ return "True"; }
	if(field[0] == 1 && field[3] == 1 && field[6] == 1){ return "True"; }
	if(field[1] == 1 && field[4] == 1 && field[7] == 1){ return "True"; }
	if(field[2] == 1 && field[5] == 1 && field[8] == 1){ return "True"; }
	
	//Player Two
	if(field[0] == 2 && field[1] == 2 && field[2] == 2){ return "True"; }
	if(field[3] == 2 && field[4] == 2 && field[5] == 2){ return "True"; }
	if(field[6] == 2 && field[7] == 2 && field[8] == 2){ return "True"; }
	if(field[0] == 2 && field[4] == 2 && field[8] == 2){ return "True"; }
	if(field[2] == 2 && field[4] == 2 && field[6] == 2){ return "True"; }
	if(field[0] == 2 && field[3] == 2 && field[6] == 2){ return "True"; }
	if(field[1] == 2 && field[4] == 2 && field[7] == 2){ return "True"; }
	if(field[2] == 2 && field[5] == 2 && field[8] == 2){ return "True"; }
	
	return false;
	
}