function Speelveld(PIXI) {
	this.PIXI = PIXI;
	this.stage = new PIXI.Stage(0x66FF99);
	this.renderer = PIXI.autoDetectRenderer(300, 300);
	$("body").append(this.renderer.view);

	/*
		Hier worden alle variabelen klaar gezet om gebruikt te worden
	*/

	// De huidige speler om bij te houden wie er aan zet is
	this.huidigeSpeler = 'o';

	// Dit is een lijstje dat zal worden ingevuld met de vlakken van het speelveld
	this.vlakken = [];

	// Dit is een lijstje dat zal worden ingevuld met de waardes die door de spelers worden ingevuld
	// Omdat het veld uit 9 vlakken bestaat, komen hier 9 waardes in
	// Tijdens het spel zullen deze waardes worden vervangen met O of X
	this.velden = [0, 0, 0, 0, 0, 0, 0, 0, 0];

}

Speelveld.prototype.tekenHetVeld = function() {
	this.velden = [0, 0, 0, 0, 0, 0, 0, 0, 0];

	window.velden = this.velden;

	/*
		De 9 vlakken in het speelveld maken en opslaan in een lijstje (een array)
	*/

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


	// Een vlak, het speelveld bestaat uit 9 van deze vlakken
	var vlak = new PIXI.Graphics();
	vlak.beginFill(0xFFFFFF);
	vlak.lineStyle(2,0x000000);
	vlak.drawRect(x+1,y+1,w-2,h-2);
	vlak.endFill();
	
	// Het vlak dat kliks van de muis op zal vangen
	vlak.hitArea = new PIXI.Rectangle(x+1,y+1,w-2,h-2);
	
	vlak.setInteractive(true);
	
	// Het vlak voorzien van een uniek nummber
	vlak.id = id;
	
	vlak.posx = x;
	vlak.posy = y;
	
	that = this;

	// Deze functie zal worden uitgevoerd als er op een vlak wordt geklikt
	vlak.click = function(data){

		// Als er op een vlak wordt geklikt roepen we de klik functie aan van het speelveld
		that.klik(this);

	};
	
	//Voeg vlak toe aan de stage
	this.stage.addChild(vlak);
	
	return vlak;
}

Speelveld.prototype.wisselVanSpeler = function() {

	/*
		Het wisselen van speler wordt geregeld door een simpel 'if statement'
		Als speler O aan de beurt was is de huidige speler nu X
		Als speler X aan de beurt was is de huidige speler nu O
	*/

	if(this.huidigeSpeler === 'o') {
		this.huidigeSpeler = 'x';
	} else if (this.huidigeSpeler === 'x') {
		this.huidigeSpeler = 'o';
	}

}

Speelveld.prototype.wieIsDeHuidigeSpeler = function() {
	/*
		Hier wordt de speler die aan zet is terug gegeven
	*/

	return this.huidigeSpeler;
}

Speelveld.prototype.render = function() {
	this.renderer.render(this.stage);
}

Speelveld.prototype.isDitVakjeNogVrij = function(vakje) {
	/*
		Het veld begint met alle waardes ingevuld met 0
		Dit betekent dat het veld nog vrij is als er een waarde van 0 in zit
	*/

	if(this.velden[vakje.id] !== 0) return false
	return true
}

Speelveld.prototype.heeftErIemandGewonnen = function() {

	/*
		Om het spel te winnen moeten er 3 velden naast elkaar ingevuld zijn met een O of een X
		Om erachter te komen of dit gebeurd is, moeten alle mogelijkheden worden na gegaan
	*/

	var winnaar = null;
	// Heeft O gewonnen?
	if(this.velden[0] == 'o' && this.velden[1] == 'o' && this.velden[2] == 'o'){ return 'o'; }
	if(this.velden[3] == 'o' && this.velden[4] == 'o' && this.velden[5] == 'o'){ return 'o'; }
	if(this.velden[6] == 'o' && this.velden[7] == 'o' && this.velden[8] == 'o'){ return 'o'; }
	
	if(this.velden[0] == 'o' && this.velden[3] == 'o' && this.velden[6] == 'o'){ return 'o'; }
	if(this.velden[1] == 'o' && this.velden[4] == 'o' && this.velden[7] == 'o'){ return 'o'; }
	if(this.velden[2] == 'o' && this.velden[5] == 'o' && this.velden[8] == 'o'){ return 'o'; }
	
	if(this.velden[0] == 'o' && this.velden[4] == 'o' && this.velden[8] == 'o'){ return 'o'; }
	if(this.velden[2] == 'o' && this.velden[4] == 'o' && this.velden[6] == 'o'){ return 'o'; }
	
	// Of heeft X gewonnen?
	if(this.velden[0] == 'x' && this.velden[1] == 'x' && this.velden[2] == 'x'){ return 'x'; }
	if(this.velden[3] == 'x' && this.velden[4] == 'x' && this.velden[5] == 'x'){ return 'x'; }
	if(this.velden[6] == 'x' && this.velden[7] == 'x' && this.velden[8] == 'x'){ return 'x'; }
	
	if(this.velden[0] == 'x' && this.velden[3] == 'x' && this.velden[6] == 'x'){ return 'x'; }
	if(this.velden[1] == 'x' && this.velden[4] == 'x' && this.velden[7] == 'x'){ return 'x'; }
	if(this.velden[2] == 'x' && this.velden[5] == 'x' && this.velden[8] == 'x'){ return 'x'; }
	
	if(this.velden[0] == 'x' && this.velden[4] == 'x' && this.velden[8] == 'x'){ return 'x'; }
	if(this.velden[2] == 'x' && this.velden[4] == 'x' && this.velden[6] == 'x'){ return 'x'; }
	
	return false;
}

// De functies wieHeeftErGewonnen en heeftErIemandGewonnen doen hetzelfde

Speelveld.prototype.wieHeeftErGewonnen = Speelveld.prototype.heeftErIemandGewonnen;

Speelveld.prototype.tekenX = function(vakje) {

	/*
		Teken een X op het speelveld
		Het veld dat ingevuld moet worden komt hier binnen als 'vakje'
	*/

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

	/*
		Teken een O op het speelveld
		Het veld dat ingevuld moet worden komt hier binnen als 'vakje'
	*/

	var circleSymbol = new this.PIXI.Graphics();
	var x = vakje.posx;
	var y = vakje.posy;

	circleSymbol.lineStyle(2, 0x000000, 1);
	circleSymbol.drawCircle( x + 50, y + 50, 30);
	
	this.velden[vakje.id] = this.huidigeSpeler;

	this.stage.addChild(circleSymbol);
}

Speelveld.prototype.benoemWinnaar = function() {

	/*
		Om erachter te komen hoe de lijn getekend moet worden om de winnnaar aan te geven moeten alle mogelijke uitkomsten worden na gegaan
	*/

	if (this.heeftErIemandGewonnen()) {
		var winnaar = this.wieHeeftErGewonnen();

		// Uitkomsten waarbij O zou winnen

		if(this.velden[0] == 'o' && this.velden[1] == 'o' && this.velden[2] == 'o'){ this.tekenLijn(15,50,285,50); }
		if(this.velden[3] == 'o' && this.velden[4] == 'o' && this.velden[5] == 'o'){ this.tekenLijn(15,150,285,150); }
		if(this.velden[6] == 'o' && this.velden[7] == 'o' && this.velden[8] == 'o'){ this.tekenLijn(15,250,285,250); }
		
		if(this.velden[0] == 'o' && this.velden[3] == 'o' && this.velden[6] == 'o'){ this.tekenLijn(50,15,50,285); }
		if(this.velden[1] == 'o' && this.velden[4] == 'o' && this.velden[7] == 'o'){ this.tekenLijn(150,15,150,285); }
		if(this.velden[2] == 'o' && this.velden[5] == 'o' && this.velden[8] == 'o'){ this.tekenLijn(250,15,250,285); }
		
		if(this.velden[0] == 'o' && this.velden[4] == 'o' && this.velden[8] == 'o'){ this.tekenLijn(25,25,275,275); }
		if(this.velden[2] == 'o' && this.velden[4] == 'o' && this.velden[6] == 'o'){ this.tekenLijn(275,25,25,275); }

		// Uitkomsten waarbij X zou winnen

		if(this.velden[0] == 'x' && this.velden[1] == 'x' && this.velden[2] == 'x'){ this.tekenLijn(15,50,285,50); }
		if(this.velden[3] == 'x' && this.velden[4] == 'x' && this.velden[5] == 'x'){ this.tekenLijn(15,150,285,150); }
		if(this.velden[6] == 'x' && this.velden[7] == 'x' && this.velden[8] == 'x'){ this.tekenLijn(15,250,285,250); }
		
		if(this.velden[0] == 'x' && this.velden[3] == 'x' && this.velden[6] == 'x'){ this.tekenLijn(50,15,50,285); }
		if(this.velden[1] == 'x' && this.velden[4] == 'x' && this.velden[7] == 'x'){ this.tekenLijn(150,15,150,285); }
		if(this.velden[2] == 'x' && this.velden[5] == 'x' && this.velden[8] == 'x'){ this.tekenLijn(250,15,250,285); }
		
		if(this.velden[0] == 'x' && this.velden[4] == 'x' && this.velden[8] == 'x'){ this.tekenLijn(25,25,275,275); }
		if(this.velden[2] == 'x' && this.velden[4] == 'x' && this.velden[6] == 'x'){ this.tekenLijn(275,25,25,275); }



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

	if(this.isDitVakjeNogVrij(vakje)) {

		if (this.wieIsDeHuidigeSpeler() == 'x') {
			this.tekenX(vakje);
		}

		if (this.wieIsDeHuidigeSpeler() == 'o') {
			this.tekenO(vakje);
		}

		if(this.heeftErIemandGewonnen()) {
			this.benoemWinnaar();
		}

		this.wisselVanSpeler();

	}

}

$(document).ready(function() {
	var speelveld = new Speelveld(PIXI);
	speelveld.tekenHetVeld();

	(function draw () {
		requestAnimFrame(draw);
		speelveld.render();
	})();
	
});
