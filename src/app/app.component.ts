import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  input = {
    masaKoluwium: 0,
    objetoscKoluwium: 0,
    predkoscKoluwium: 0,
    liczbaOfiar: 0,
    straty: 0,
    stratyPoWartosci: false
  };

  output = {
    m: 0,
    v: 0,
    s: 0,
    o: 0,
    e: 0,
    omi: ""
  };

  weight = {
    wm: 0.2,
    wv: 0.2,
    ws: 0.2,
    wo: 0.3,
    we: 0.1
  };

  constructor() {
    this.obliczKlasyfikacjeDlaMasyKoluwium();
    this.obliczKlasyfikacjeDlaObjetosciKoluwium();
    this.obliczKlasyfikacjeDlaPredkosciKoluwium();
    this.obliczKlasyfikacjeDlaLiczbyOfiar();
    this.obliczKlasyfikacjeDlaStratEkonomicznych();
  }

  obliczKlasyfikacjeDlaMasyKoluwium(value = this.input.masaKoluwium): void {
    let wynik = 0;

    if (value <= 0) {
      wynik = 0;
    } else if (value < 0.01) {
      wynik = 1;
    } else if (value < 0.1) {
      wynik = 2;
    } else if (value < 0.5) {
      wynik = 3;
    } else if (value < 1) {
      wynik = 4;
    } else if (value < 10) {
      wynik = 5;
    } else if (value < 30) {
      wynik = 6;
    } else if (value < 50) {
      wynik = 7;
    } else if (value < 70) {
      wynik = 8;
    } else if (value < 100) {
      wynik = 9;
    } else {
      wynik = 10;
    }

    this.input.masaKoluwium = value;
    this.output.m = wynik;
  }

  obliczKlasyfikacjeDlaObjetosciKoluwium(
    value = this.input.objetoscKoluwium
  ): void {
    let wynik = 0;

    if (value <= 0) {
      wynik = 0;
    } else if (value < 0.05) {
      wynik = 1;
    } else if (value < 0.2) {
      wynik = 2;
    } else if (value < 0.3) {
      wynik = 3;
    } else if (value < 0.5) {
      wynik = 4;
    } else if (value < 1) {
      wynik = 5;
    } else if (value < 5) {
      wynik = 6;
    } else if (value < 10) {
      wynik = 7;
    } else if (value < 50) {
      wynik = 8;
    } else if (value < 200) {
      wynik = 9;
    } else {
      wynik = 10;
    }

    this.input.objetoscKoluwium = value;
    this.output.v = wynik;
  }

  obliczKlasyfikacjeDlaPredkosciKoluwium(
    value = this.input.predkoscKoluwium
  ): void {
    let wynik = 0;

    if (value <= 0) {
      wynik = 0;
    } else if (value < 0.01) {
      wynik = 1;
    } else if (value < 1) {
      wynik = 2;
    } else if (value < 2.5) {
      wynik = 3;
    } else if (value < 5) {
      wynik = 4;
    } else if (value < 7.5) {
      wynik = 5;
    } else if (value < 10) {
      wynik = 6;
    } else if (value < 20) {
      wynik = 7;
    } else if (value < 35) {
      wynik = 8;
    } else if (value < 50) {
      wynik = 9;
    } else {
      wynik = 10;
    }

    this.input.predkoscKoluwium = value;
    this.output.s = wynik;
  }

  obliczKlasyfikacjeDlaLiczbyOfiar(value = this.input.liczbaOfiar): void {
    let wynik = 0;

    if (value <= 0) {
      wynik = 0;
    } else if (value < 5) {
      wynik = 1;
    } else if (value < 10) {
      wynik = 2;
    } else if (value < 25) {
      wynik = 3;
    } else if (value < 50) {
      wynik = 4;
    } else if (value < 75) {
      wynik = 5;
    } else if (value < 100) {
      wynik = 6;
    } else if (value < 250) {
      wynik = 7;
    } else if (value < 500) {
      wynik = 8;
    } else if (value < 1000) {
      wynik = 9;
    } else {
      wynik = 10;
    }

    this.input.liczbaOfiar = value;
    this.output.o = wynik;
  }

  onRadioClick(event) {
    this.input.stratyPoWartosci = event.target.value === "true";
    this.input.straty = 0;
    this.obliczKlasyfikacjeDlaStratEkonomicznych(this.input.straty);
  }

  obliczKlasyfikacjeDlaStratEkonomicznych(value = this.input.straty): void {
    if (this.input.stratyPoWartosci) {
      this.obliczStratyPoWartościStrat(value);
    } else {
      this.obliczStratyPoLiczbieBudynkow(value);
    }

    this.input.straty = value;
  }

  obliczStratyPoWartościStrat(value = this.input.straty): void {
    let wynik = 0;

    if (value <= 0) {
      wynik = 0;
    } else if (value < 0.1) {
      wynik = 1;
    } else if (value < 0.5) {
      wynik = 2;
    } else if (value < 1) {
      wynik = 3;
    } else if (value < 5) {
      wynik = 4;
    } else if (value < 10) {
      wynik = 5;
    } else if (value < 50) {
      wynik = 6;
    } else if (value < 100) {
      wynik = 7;
    } else if (value < 300) {
      wynik = 8;
    } else if (value < 500) {
      wynik = 9;
    } else {
      wynik = 10;
    }

    this.output.e = wynik;
  }

  obliczStratyPoLiczbieBudynkow(value = this.input.straty): void {
    let wynik = 0;

    if (value <= 0) {
      wynik = 0;
    } else if (value < 5) {
      wynik = 1;
    } else if (value < 10) {
      wynik = 2;
    } else if (value < 20) {
      wynik = 3;
    } else if (value < 30) {
      wynik = 4;
    } else if (value < 40) {
      wynik = 5;
    } else if (value < 50) {
      wynik = 6;
    } else if (value < 60) {
      wynik = 7;
    } else if (value < 70) {
      wynik = 8;
    } else if (value < 100) {
      wynik = 9;
    } else {
      wynik = 10;
    }

    this.output.e = wynik;
  }

  obliczOmi() {
    console.log(this.input);
    this.obliczKlasyfikacjeDlaMasyKoluwium();
    this.obliczKlasyfikacjeDlaObjetosciKoluwium();
    this.obliczKlasyfikacjeDlaPredkosciKoluwium();
    this.obliczKlasyfikacjeDlaLiczbyOfiar();
    this.obliczKlasyfikacjeDlaStratEkonomicznych();

    this.output.omi = (
      this.weight.wm * this.output.m +
      this.weight.wv * this.output.v +
      this.weight.ws * this.output.s +
      this.weight.wo * this.output.o +
      this.weight.we * this.output.e
    ).toFixed(1);
  }
}
