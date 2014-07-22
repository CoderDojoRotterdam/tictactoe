$(document).ready(function(){
	
	var game = new Game("gameCanvas");
	
	game.drawField($("#gameCanvas").width(), $("#gameCanvas").height());
	
	game.drawCircle(50, 50, 30);
	
	game.drawX(125, 125);
	
	
});