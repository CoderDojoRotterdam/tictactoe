$(document).ready(function(){
	
	var player = 1;
	
	var game = new Game("gameCanvas");
	
	game.drawField();
	
	
	//Click handler, draw symbols based on mouse cords
	$("#gameCanvas").click(function (event){
		
		var currentPlayer = player;
		//Gives next player or true for when game is won
		player = game.drawSymbol(event.offsetX, event.offsetY, player);
		
		if (player == "True"){
		
			$("#playerStatus").text("Player " + currentPlayer + " won!");
			
		}else{
		
			$("#playerStatus").text("Current player: " + player);
		
		}
		
	});
	
	//Check mouse cords
	$("#gameCanvas").mousemove(function(event){
		
		var mousex, mousey
		
		if(event.offsetX){
		
			mousex = event.offsetX;
			mousey = event.offsetY;
			
		}else if(event.layerX){
		
			mousex = event.layerX;
			mousey = event.layerY;
		
		}
		
		$("#mousecords").text("Mouse cords: X=" + mousex + " / Y=" + mousey);		
		
	});
	
});

