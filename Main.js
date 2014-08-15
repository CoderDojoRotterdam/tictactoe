//Global variables

// Create an new instance of a pixi stage
// Stage background color
var stage = new PIXI.Stage(0x66FF99);

// Stage size
var renderer = PIXI.autoDetectRenderer(300, 300);

// Boxes Arrays
var boxes = [];

// Play area array
var field = [];

// Player -- 1 = X, 2 = O
var player = 1;

$(document).ready(function(){
	
	// Add the stage to the body
	$("body").append(renderer.view);
	
	// Draw the playing field
	drawfield();
	
	// Call the frame looper
	animate();
	
});

// Frame loop
function animate() {

	requestAnimFrame(animate);

	// Render eveything on stage
	renderer.render(stage);
}

function drawfield(){

	field = [0,0,0,0,0,0,0,0,0];

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
	var box = new PIXI.Graphics();
	
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
		
		// Check if field already taken
		if(field[this.id] != 1 && field[this.id] != 2){
			
			// Add player to field array
			field[this.id] = player; 
			
			// Check who's turn is it and draw symbol and change player
			if(player == 1){
			
			drawX(this.posx, this.posy);
			player = 2;
		
			}else if(player == 2){
				
				drawCircle(this.posx, this.posy);
				player = 1;	
			}
			
		}else{
		
			// alert("Spot already taken!");
		
		}
		
		//Check the positions of the players
		console.log("["+field[0]+"]["+field[1]+"]["+field[2]+"]");
		console.log("["+field[3]+"]["+field[4]+"]["+field[5]+"]");
		console.log("["+field[6]+"]["+field[7]+"]["+field[8]+"]");
		console.log("------------------------------------------");
		
		checkWin();
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
	circleSymbol.drawCircle( x + 50, y + 50, 30);
	
	stage.addChild(circleSymbol);
	
}

//Check winning condition
function checkWin(){

	//Player one
	if(field[0] == 1 && field[1] == 1 && field[2] == 1){ drawWinLine(15,50,285,50, 1); return true; }
	if(field[3] == 1 && field[4] == 1 && field[5] == 1){ drawWinLine(15,150,285,150, 1); return true; }
	if(field[6] == 1 && field[7] == 1 && field[8] == 1){ drawWinLine(15,250,285,250, 1); return true; }
	
	if(field[0] == 1 && field[3] == 1 && field[6] == 1){ drawWinLine(50,15,50,285, 1); return true; }
	if(field[1] == 1 && field[4] == 1 && field[7] == 1){ drawWinLine(150,15,150,285, 1); return true; }
	if(field[2] == 1 && field[5] == 1 && field[8] == 1){ drawWinLine(250,15,250,285, 1); return true; }
	
	if(field[0] == 1 && field[4] == 1 && field[8] == 1){ drawWinLine(25,25,275,275, 1); return true; }
	if(field[2] == 1 && field[4] == 1 && field[6] == 1){ drawWinLine(275,25,25,275, 1); return true; }
	
	//Player Two
	if(field[0] == 2 && field[1] == 2 && field[2] == 2){ drawWinLine(15,50,285,50, 2); return true; }
	if(field[3] == 2 && field[4] == 2 && field[5] == 2){ drawWinLine(15,150,285,150, 2); return true; }
	if(field[6] == 2 && field[7] == 2 && field[8] == 2){ drawWinLine(15,250,285,250, 2); return true; }
	
	if(field[0] == 2 && field[3] == 2 && field[6] == 2){ drawWinLine(50,15,50,285, 2); return true; }
	if(field[1] == 2 && field[4] == 2 && field[7] == 2){ drawWinLine(150,15,150,285, 2); return true; }
	if(field[2] == 2 && field[5] == 2 && field[8] == 2){ drawWinLine(250,15,250,285, 2); return true; }
	
	if(field[0] == 2 && field[4] == 2 && field[8] == 2){ drawWinLine(25,25,275,275, 2); return true; }
	if(field[2] == 2 && field[4] == 2 && field[6] == 2){ drawWinLine(275,25,25,275, 2); return true; }
	
	return false;
	
}

// Drawing the winning line
function drawWinLine(startX, startY, endX, endY, player){

	var winLine = new PIXI.Graphics();
	
	winLine.lineStyle(2, 0x000000, 1);
	winLine.moveTo( startX, startY);
	winLine.lineTo( endX , endY);
	
	stage.addChild(winLine);


	var winText = new PIXI.Text("Speler " + player + " wint!!!", {fill: "red"});
	var bg = new PIXI.Graphics();
	winText.x = 50;
	winText.y = 150;

	bg.beginFill(0x0000FF);
	bg.drawRect(winText.x, winText.y, winText.width, winText.height);
	bg.endFill();

	stage.addChild(bg);
	stage.addChild(winText);

	boxes.forEach(function(box) {
		box.click = null;
	});



	$('body').append('<img src="http://images.lingscars.com/images/header/webcams/chicken-ani.gif">')

	setTimeout(function() { 
		stage.children.forEach(function(child) {
			stage.removeChild(child);
		});
		drawfield(); 
	}, 2000);
}
