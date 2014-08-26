function Speelveld(PIXI) {
	this.PIXI = PIXI;
	this.huidigeSpeler = 1;
	this.speelVeld = [0,0,0,0,0,0,0,0,0];
	this.vlakken = [];
	this.velden = [];
	this.stage = new PIXI.Stage(0x66FF99);
	this.renderer = PIXI.autoDetectRenderer(300, 300);
	$("body").append(this.renderer.view);
}

Speelveld.prototype.tekenHetVeld = function() {
	this.velden = [0, 0, 0, 0, 0, 0, 0, 0, 0];

	// Playing field
	this.vlakken[0] = this.tekenVierkant(0, 0, 100, 100, 0);
	this.vlakken[1] = this.tekenVierkant(100, 0, 100, 100, 1);
	this.vlakken[2] = this.tekenVierkant(200, 0, 100, 100, 2);
	
	this.vlakken[3] = this.tekenVierkant(0, 100, 100, 100, 3);
	this.vlakken[4] = this.tekenVierkant(100, 100, 100, 100, 4);
	this.vlakken[5] = this.tekenVierkant(200, 100, 100, 100, 5);
	
	this.vlakken[6] = this.tekenVierkant(0, 200, 100, 100, 6);
	this.vlakken[7] = this.tekenVierkant(100, 200, 100, 100, 7);
	this.vlakken[8] = this.tekenVierkant(200, 200, 100, 100, 8);
}

Speelveld.prototype.tekenVierkant = function(x,y,w,h,id) {
	PIXI = this.PIXI;
	//Vierkant
	var vlak = new PIXI.Graphics();
	
	// Drawing the box
	vlak.beginFill(0xFFFFFF);
	vlak.lineStyle(2,0x000000);
	vlak.drawRect(x+1,y+1,w-2,h-2);
	vlak.endFill();
	
	// Define the hit area of the box
	vlak.hitArea = new PIXI.Rectangle(x+1,y+1,w-2,h-2);
	
	// Make the box interactive
	vlak.setInteractive(true);
	
	// Assign unique ID
	vlak.id = id;
	
	// Assign x/y positions for easy access
	vlak.posx = x;
	vlak.posy = y;
	
	that = this;

	//Give the box a click handler
	vlak.click = function(data){

		that.klik(this);

	};
	
	//Voeg vlak toe aan de stage
	this.stage.addChild(vlak);
	
	return vlak;
}

Speelveld.prototype.wisselVanSpeler = function() {
	switch(this.huidigeSpeler) {
		case 1:
			this.huidigeSpeler = 2;
			break;
		case 2:
			this.huidigeSpeler = 1;
			break;
	}
}

Speelveld.prototype.wieIsDeHuidigeSpeler = function() {
	if(this.huidigeSpeler === 1) return 'o';
	if(this.huidigeSpeler === 2) return 'x';
}

Speelveld.prototype.render = function() {
	this.renderer.render(this.stage);
}

Speelveld.prototype.isDitVakjeNogVrij = function(vakje) {
	if(this.velden[vakje.id] !== 0) return false
	return true
}

Speelveld.prototype.heeftErIemandGewonnen = function() {
	var winnaar = null;
	//Player one
	if(this.velden[0] == 1 && this.velden[1] == 1 && this.velden[2] == 1){ winnaar = 1; }
	if(this.velden[3] == 1 && this.velden[4] == 1 && this.velden[5] == 1){ winnaar = 1; }
	if(this.velden[6] == 1 && this.velden[7] == 1 && this.velden[8] == 1){ winnaar = 1; }
	
	if(this.velden[0] == 1 && this.velden[3] == 1 && this.velden[6] == 1){ winnaar = 1; }
	if(this.velden[1] == 1 && this.velden[4] == 1 && this.velden[7] == 1){ winnaar = 1; }
	if(this.velden[2] == 1 && this.velden[5] == 1 && this.velden[8] == 1){ winnaar = 1; }
	
	if(this.velden[0] == 1 && this.velden[4] == 1 && this.velden[8] == 1){ winnaar = 1; }
	if(this.velden[2] == 1 && this.velden[4] == 1 && this.velden[6] == 1){ winnaar = 1; }
	
	//Player Two
	if(this.velden[0] == 2 && this.velden[1] == 2 && this.velden[2] == 2){ winnaar = 2; }
	if(this.velden[3] == 2 && this.velden[4] == 2 && this.velden[5] == 2){ winnaar = 2; }
	if(this.velden[6] == 2 && this.velden[7] == 2 && this.velden[8] == 2){ winnaar = 2; }
	
	if(this.velden[0] == 2 && this.velden[3] == 2 && this.velden[6] == 2){ winnaar = 2; }
	if(this.velden[1] == 2 && this.velden[4] == 2 && this.velden[7] == 2){ winnaar = 2; }
	if(this.velden[2] == 2 && this.velden[5] == 2 && this.velden[8] == 2){ winnaar = 2; }
	
	if(this.velden[0] == 2 && this.velden[4] == 2 && this.velden[8] == 2){ winnaar = 2; }
	if(this.velden[2] == 2 && this.velden[4] == 2 && this.velden[6] == 2){ winnaar = 2; }
	
	if(winnaar) {
		if(winnaar === 1) return 'o';
		if(winnaar === 2) return 'x';
	} else {
		return false;
	}
}

Speelveld.prototype.wieHeeftErGewonnen = Speelveld.prototype.heeftErIemandGewonnen;

Speelveld.prototype.tekenX = function(vakje) {

	var xSymbol = new this.PIXI.Graphics();
	var x = vakje.posx;
	var y = vakje.posy;
	
	xSymbol.lineStyle(2, 0x000000, 1);
	
	xSymbol.moveTo(x + 25, y + 25);
	xSymbol.lineTo((x+25) + 50 , (y+25)+50);
	
	xSymbol.moveTo(x + 75, y + 25);
	xSymbol.lineTo(x + 25, y + 75);
	
	this.velden[vakje.id] = this.huidigeSpeler;

	this.stage.addChild(xSymbol);
}

Speelveld.prototype.tekenO = function(vakje) {

	var circleSymbol = new this.PIXI.Graphics();
	var x = vakje.posx;
	var y = vakje.posy;

	circleSymbol.lineStyle(2, 0x000000, 1);
	circleSymbol.drawCircle( x + 50, y + 50, 30);
	
	this.velden[vakje.id] = this.huidigeSpeler;

	this.stage.addChild(circleSymbol);
}

Speelveld.prototype.benoemWinnaar = function() {
	if (this.heeftErIemandGewonnen()) {
		var winnaar = this.wieHeeftErGewonnen();

		if(this.velden[0] == 1 && this.velden[1] == 1 && this.velden[2] == 1){ this.tekenLijn(15,50,285,50); }
		if(this.velden[3] == 1 && this.velden[4] == 1 && this.velden[5] == 1){ this.tekenLijn(15,150,285,150); }
		if(this.velden[6] == 1 && this.velden[7] == 1 && this.velden[8] == 1){ this.tekenLijn(15,250,285,250); }
		
		if(this.velden[0] == 1 && this.velden[3] == 1 && this.velden[6] == 1){ this.tekenLijn(50,15,50,285); }
		if(this.velden[1] == 1 && this.velden[4] == 1 && this.velden[7] == 1){ this.tekenLijn(150,15,150,285); }
		if(this.velden[2] == 1 && this.velden[5] == 1 && this.velden[8] == 1){ this.tekenLijn(250,15,250,285); }
		
		if(this.velden[0] == 1 && this.velden[4] == 1 && this.velden[8] == 1){ this.tekenLijn(25,25,275,275); }
		if(this.velden[2] == 1 && this.velden[4] == 1 && this.velden[6] == 1){ this.tekenLijn(275,25,25,275); }

		if(this.velden[0] == 2 && this.velden[1] == 2 && this.velden[2] == 2){ this.tekenLijn(15,50,285,50); }
		if(this.velden[3] == 2 && this.velden[4] == 2 && this.velden[5] == 2){ this.tekenLijn(15,150,285,150); }
		if(this.velden[6] == 2 && this.velden[7] == 2 && this.velden[8] == 2){ this.tekenLijn(15,250,285,250); }
		
		if(this.velden[0] == 2 && this.velden[3] == 2 && this.velden[6] == 2){ this.tekenLijn(50,15,50,285); }
		if(this.velden[1] == 2 && this.velden[4] == 2 && this.velden[7] == 2){ this.tekenLijn(150,15,150,285); }
		if(this.velden[2] == 2 && this.velden[5] == 2 && this.velden[8] == 2){ this.tekenLijn(250,15,250,285); }
		
		if(this.velden[0] == 2 && this.velden[4] == 2 && this.velden[8] == 2){ this.tekenLijn(25,25,275,275); }
		if(this.velden[2] == 2 && this.velden[4] == 2 && this.velden[6] == 2){ this.tekenLijn(275,25,25,275); }



		var winText = new this.PIXI.Text(winnaar.toUpperCase() + " wint!!!", {fill: "red"});
		var bg = new this.PIXI.Graphics();
		winText.x = 50;
		winText.y = 150;

		bg.beginFill(0x0000FF);
		bg.drawRect(winText.x, winText.y, winText.width, winText.height);
		bg.endFill();

		this.stage.addChild(bg);
		this.stage.addChild(winText);
		return true;
	}
	return false;
}

Speelveld.prototype.tekenLijn = function(startX, startY, endX, endY) {
	var winLine = new PIXI.Graphics();
	
	winLine.lineStyle(2, 0x000000, 1);
	winLine.moveTo( startX, startY);
	winLine.lineTo( endX , endY);
	
	this.stage.addChild(winLine);
}

Speelveld.prototype.klik = function(vakje) {

	// if(this.isDitVakjeNogVrij(vakje)) {

	// 	if (this.wieIsDeHuidigeSpeler() == 'x') {
	// 		this.tekenX(vakje);
	// 	}

	// 	if (this.wieIsDeHuidigeSpeler() == 'o') {
	// 		this.tekenO(vakje);
	// 	}

	// 	if(this.heeftErIemandGewonnen()) {
	// 		this.benoemWinnaar();
	// 	}

	// 	this.wisselVanSpeler();

	// }


}

$(document).ready(function() {
	var speelveld = new Speelveld(PIXI);
	speelveld.tekenHetVeld();

	(function draw () {
		requestAnimFrame(draw);
		speelveld.render();
	})();
	
});
