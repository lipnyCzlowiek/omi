import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  input = {
    masaKoluwium: null,
    objetoscKoluwium: null,
    predkoscKoluwium: null,
    liczbaOfiar: null,
    stratyLiczbaBud: null,
    stratyWartosc: null
  };

  output = {
    m: 0,
    v: 0,
    s: 0,
    o: 0,
    e: 0,
    omi: "0"
  };

  weight = {
    wm: 0.2,
    wv: 0.2,
    ws: 0.2,
    wo: 0.3,
    we: 0.1
  };

  regex = /[^0-9.]/g;

  constructor() {
    this.obliczKlasyfikacjeDlaMasyKoluwium();
    this.obliczKlasyfikacjeDlaObjetosciKoluwium();
    this.obliczKlasyfikacjeDlaPredkosciKoluwium();
    this.obliczKlasyfikacjeDlaLiczbyOfiar();
  }

  obliczKlasyfikacjeDlaMasyKoluwium(
    value: any = this.input.masaKoluwium
  ): void {
    let wynik = 0;

    if (!value || value.match(this.regex)) {
      this.input.masaKoluwium = new String('');
      this.output.m = 0;
      return;
    }

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
    this.obliczOmi();
  }

  obliczKlasyfikacjeDlaObjetosciKoluwium(
    value: any = this.input.objetoscKoluwium
  ): void {
    let wynik = 0;

    if (!value || value.match(this.regex)) {
      this.input.objetoscKoluwium = new String('');
      this.output.v = 0;
      return;
    }

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
    this.obliczOmi();
  }

  obliczKlasyfikacjeDlaPredkosciKoluwium(
    value: any = this.input.predkoscKoluwium
  ): void {
    let wynik = 0;

    if (!value || value.match(this.regex)) {
      this.input.predkoscKoluwium = new String('');
      this.output.s = 0;
      return;
    }

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
    this.obliczOmi();
  }

  obliczKlasyfikacjeDlaLiczbyOfiar(value: any = this.input.liczbaOfiar): void {
    let wynik = 0;

    if (!value || value.match(this.regex)) {
      this.input.liczbaOfiar = new String('');
      this.output.o = 0;
      return;
    }

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
    this.obliczOmi();
  }

  obliczStratyPoWartosciStrat(value = this.input.stratyWartosc): void {
    let wynik = 0;

    if (!value || value.match(this.regex)) {
      this.input.stratyWartosc = new String('');
      this.output.e = 0;
      return;
    }

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
    this.obliczOmi();
  }

  obliczStratyPoLiczbieBudynkow(value = this.input.stratyLiczbaBud): void {
    let wynik = 0;

    if (!value || value.match(this.regex)) {
      this.input.stratyLiczbaBud = new String('');
      this.output.e = 0;
      return;
    }

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
    this.obliczOmi();
  }

  obliczOmi() {
    this.output.omi = (
      this.weight.wm * this.output.m +
      this.weight.wv * this.output.v +
      this.weight.ws * this.output.s +
      this.weight.wo * this.output.o +
      this.weight.we * this.output.e
    ).toFixed(1);
  }
}
