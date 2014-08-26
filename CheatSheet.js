/*
	-- Variabels --
	Een variable is een doos met een naam waarin je iets erin kan stoppen.
	
	Hoe schrijf je het:
*/ 
var variabel = waarde;

/*
	Voorbeeld 1:
	Een doos met de naam "naam".
	De doos bevat "Jonathan".
*/
var naam = "Jonathan";

/*
	Voorbeeld 2:
	Een doos met de naam "nummer".
	De doos bevat 10.
*/
var nummer = 10;

/*
	Leuk om te weten!
	Je kan ook een doos in een doos stoppen.
	Om iets toe te voegen, gebruik je "+"
	Voorbeeld:
*/
var naam1 = "Jonathan";
var naam2 = "Hello, " + naam1;
// Dan zit in doos naam2, "Hello, Jonathan"

/*
	If expressie
	
	Een functie waarin je twee waardes kan vergelijken.
	De functie geeft terug of het goed of fout is.
	Als de resultaat goed is, dan wordt het code binnen het functie uitgevoerd.
	Als de resultaat fout is, dan wordt de code overgeslagen.
	
	Hoe schrijf je het:
*/
if(waarde vergelijk waarde){
	// Doe iets
}

/*
	Voorbeeld 1:
	Een doos met de naam "naam" heeft "Jonathan" erin.
	Controleer of "Jonathan" in de doos "naam" zit.
	Als de doos de naam "Jonathan" heeft, zeg "Hello Jonathan!"
*/
var naam = "Jonathan";

if(naam == "Jonathan"){
	zeg("Hello, Jonathan!");
}

/*
	Functies
	
	Een functie is een soort actie.
	Een actie doet iets of kan iets terug geven.
	Ja kan ook een actie waardes geven, en de actie doet iets met de waardes.
	
	Hoe schrijf je het:
*/
// Normale actie
function actieNaam(){
	// Doe iets
}
// Actie die je waardes kan aangeven
function actieNaam(waarde1, waarde2, etc){
	// Doe iets met waardes
}

/*
	Voorbeeld 1
	Een actie die "zeg" als naam heeft die "Hello" zegt.
*/
function zeg(){
	return "Hello";
}

/*
	Voorbeeld 2
	Een actie die "zeg" heet.
	Je kan je naam aan de actie geven, en de actie zegt "Hello, naam"
*/
function zeg(naam){
	return "Hello, " + naam;
}

// Een actie kun je in de volgende manier aanroepen:
// Voorbeelden:

// Machine met acties
computer.zetAan();
vliegtuig.vlieg();
