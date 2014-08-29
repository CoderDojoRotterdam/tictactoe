tictactoe
=========

CoderDojo Rotterdam

## Pseudo code
    Wanneer er op een veld geklikt is:
      Als het veld nog vrij is
        Als X aan de beurt is teken een 'X'
        Als O aan de beurt is teken een 'O'

        Als er iemand gewonnen heeft
          Beeindig het spel
          Benoem de winnaar

        Anders is de andere speler weer aan de beurt

# Te gebruiken functies

We hebben het zware teken- en rekenwerk alvast voor je gedaan en verstopt in functies. Deze hoef je 'alleen nog maar' in de juiste volgorde uit te voeren. Hieronder een klein overzicht van de functies en wat ze doen.

## wisselVanSpeler();

`Speelveld.wisselVanSpeler();` geeft de beurt door aan de andere speler.

* Deze functie geeft niets terug
* Deze functie verwacht geen parameters

## wieIsDeHuidigeSpeler();

`Speelveld.wieIsDeHuidigeSpeler();` geeft terug wie die speler is die op dit moment aan zet is.

* Deze functie geeft een `x` of een `o` terug
* Deze functie verwacht geen parameters

## isDitVakjeNogVrij();

`Speelveld.isDitVakjeNogVrij();` geeft `true` of `false` terug als antwoord op de vraag of een veld wel of niet is ingevuld door een `x` of een `o`.

* Deze functie geeft `true` of `false` terug - waar of niet waar
* Deze functie verwacht een vakje als parameter

## heeftErIemandGewonnen();

`Speelveld.heeftErIemandGewonnen();`  kan worden gebruikt om te vragen of er al een winnaar is.

* Deze functie geeft een 'x' of 'o' terug en als er (nog) niemand heeft gewonnen geeft deze functie `false` terug.
* Deze functie verwacht geen parameters

## wieHeeftErGewonnen();

`Speelveld.wieHeefterGewonnen();` kan worden gebruikt om te vragen wie er heeft gewonnen.

* Deze functie geeft een 'x' of 'o' terug en als er (nog) niemand heeft gewonnen geeft deze functie `false` terug.
* Deze functie verwacht geen parameters

## tekenX();

`Speelveld.tekenX();` vult een vakje in met een 'X'.

* Deze functie geeft niets terug
* Deze functie verwacht het vakje dat moet worden ingevuld als parameter

## tekenO();

`Speelveld.tekenO();` vult een vakje in met een 'O'.

* Deze functie geeft niets terug
* Deze functie verwacht het vakje dat moet worden ingevuld als parameter

## benoemWinnaar();

`Speelveld.benoemWinnaar();` kan worden gebruikt om op het scherm aan te tonen wie de winnaar is.

* Deze functie geeft `true` terug als er een winnaar is en `false` als er geen winnaar is
* Deze functie verwacht geen parameters

## klik();

`Speelveld.prototype.klik();` moet worden overschreven om daar de oplossing in te kunnen zetten. Dit is al gedaan in het bestand spel.js.

# cheatsheet - javascript

Om een beetje af te kunnen kijken hoe bepaalde dingen in javascript geschreven moeten worden kan deze cheatsheet geraadpleegd worden.

### Variabelen

Een variabele is een soort doos met een naam waar je iets in kan doen. Een variabele maak je op de volgende manier:

`var variabele = waarde;`

#### Voorbeeld

Een variabele met de naam "naam" bevat de waarde "Jonathan":

`var naam = "Jonathan";`

Een variabele met de naam "nummer" bevat de waarde 10:

`var nummer = 10;`

Je kan ook 2 variabelen samen voegen!

    var naam = "Jonathan";
    var groet = "Hallo, " + naam;

De variabele "groet" bevat nu "Hallo, Jonathan".

### Als dan - if else

Soms wil je controleren of iets waar of niet waar is. Dit kan je doen met behulp van een `Als dan` of `if else` statement.

Dit ziet er zo uit:

    if(is dit waar) {
      ja dit is waar
    } else {
      nee, dit is niet waar
    }

#### voorbeeld

Als we Jonathan tegen komen willen we hallo tegen hem zeggen:

    var naam = "Jonathan";

    if(naam == "Jonathan") {
      zeg("Hallo, Jonathan!");
    }

### Functies

Een functie is een soort actie. Een actie doet iets.

#### voorbeeld

We willen een actie die "Hallo" terug geeft, deze actie noemen we "zegHallo":

    function zegHallo() {
      return "Hallo";
    }

Naast dat zo'n actie dingen terug kan geven, kunnen we de actie ook dingen mee geven. Zo kunnen we de actie een groet terug laten geven aan de `naam` die we meegeven:

    function zegHallo(naam) {
      return "Hallo, " + naam;
    }


Als we deze actie nu "Hallo Jonathan" willen laten terug geven kunnen we de actie als volgt uitvoeren:

    var naam = "Jonathan";
    zegHallo(naam);

Het resultaat hiervan is `"Hallo Jonathan"`;

##### Acties van voorwerpen

Naast dat we zelf acties kunnen maken, zullen we ook voorwerpen tegen komen die acties bevatten. In het geval van TicTacToe is dat het Speelveld. Als we willen weten welke speler aan de beurt is tijdens het spelen kunnen we dit vragen aan het Speelveld:

    Speelveld.wieIsDeHuidigeSpeler();

Het antwoord dat we hierop krijgen zal 'x' of 'o' zijn. Dit antwoord kunnen we opslaan in een variabele:

    var huidigeSpeler = Speelveld.wieIsDeHuidigeSpeler();
