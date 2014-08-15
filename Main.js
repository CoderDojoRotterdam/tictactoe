//Global variables

// Create an new instance of a pixi stage
// Stage background color
var stage = new PIXI.Stage(0x66FF99);

// Stage size
var renderer = PIXI.autoDetectRenderer(300, 300);

// Boxes Arrays
var boxes = [];

// Play area array
var field = [0,0,0,0,0,0,0,0,0];

// Player
var player = "X";

$(document).ready(function(){
	
	// Add the stage to the body
	$("body").append(renderer.view);
	
	// Draw the playing field
	drawfield();
	
	// Call the frame looper
	requestAnimFrame(animate);
	
});

// Frame loop
function animate() {

	requestAnimFrame(animate);

	// Render eveything on stage
	renderer.render(stage);
}

function drawfield(){
	// Playing field
	boxes[0] = drawRectangle(0, 0, 100, 100, 0);
	boxes[1] = drawRectangle(100, 0, 100, 100, 1);
	boxes[2] = drawRectangle(200, 0, 100, 100, 2);
	
	boxes[3] = drawRectangle(0, 100, 100, 100, 3);
	boxes[4] = drawRectangle(100, 100, 100, 100, 4);
	boxes[5] = drawRectangle(200, 100, 100, 100, 5);
	
	boxes[6] = drawRectangle(0, 200, 100, 100, 6);
	boxes[7] = drawRectangle(100, 200, 100, 100, 7);
	boxes[8] = drawRectangle(200, 200, 100, 100, 8);
}

// Box painter
function drawRectangle(x,y,w,h,id){

	//Rectangle
	var box = new PIXI.Graphics()
	
	// Drawing the box
	box.beginFill(0xFFFFFF);
	box.lineStyle(2,0x000000);
	box.drawRect(x+1,y+1,w-2,h-2);
	box.endFill();
	
	// Define the hit area of the box
	box.hitArea = new PIXI.Rectangle(x+1,y+1,w-2,h-2);
	
	// Make the box interactive
	box.setInteractive(true);
	
	// Assign unique ID
	box.id = id;
	
	// Assign x/y positions for easy access
	box.posx = x;
	box.posy = y;
	
	//Give the box a click handler
	box.click = function(data){
		
		console.log(this.id);
		
		if(player == "X"){
			
			drawX(this.posx, this.posy);
			player = "O";
		
		}else if(player == "O"){
			
			drawCircle(this.posx, this.posy);
			player = "X";	
		}
		
		//Check the positions of the players
		console.log("["+field[0]+"]["+field[1]+"]["+field[2]+"]");
		console.log("["+field[3]+"]["+field[4]+"]["+field[5]+"]");
		console.log("["+field[6]+"]["+field[7]+"]["+field[8]+"]");
		console.log("------------------------------------------");
	
	};
	
	//Add box to stage
	stage.addChild(box);
	
	return box;

}
//Lines moveTo = start / lineTo = end (x,y)
function drawX(x, y){
	
	var xSymbol = new PIXI.Graphics();
	
	xSymbol.lineStyle(2, 0x000000, 1);
	
	xSymbol.moveTo(x + 25, y + 25);
	xSymbol.lineTo((x+25) + 50 , (y+25)+50);
	
	xSymbol.moveTo(x + 75, y + 25);
	xSymbol.lineTo(x + 25, y + 75);
	
	stage.addChild(xSymbol);
}

// Cricles
function drawCircle(x, y){
	
	var circleSymbol = new PIXI.Graphics();
	
	circleSymbol.lineStyle(2, 0x000000, 1);
	//circleSymbol.beginFill(0x000000, 1);
	circleSymbol.drawCircle( x + 50, y + 50, 30);
	//circleSymbol.endFill();
	
	stage.addChild(circleSymbol);
	
}

// Drawing the winning line
function drawWinLine(){

	var winLine = new PIXI.Graphics();
	
	winLine.lineStyle(2, 0x000000, 1);
	
	winLine.moveTo( 10, 50);
	winLine.lineTo( 300 , 50);

}
