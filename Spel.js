Speelveld.prototype.klik = function(vakje) {
  // De speler heeft op een vakje gelikt, wat nu?

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