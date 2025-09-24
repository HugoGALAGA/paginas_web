import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {

  public saludo: string = '';

  constructor() { }

  ngOnInit(): void {
    const horaActual = new Date().getHours();

    if (horaActual >= 5 && horaActual < 12) {
      this.saludo = 'Buenos días, soy Hugo Galina';
    } else if (horaActual >= 12 && horaActual < 19) {
      this.saludo = 'Buenas tardes, soy Hugo Galina';
    } else {
      this.saludo = 'Buenas noches, soy Hugo Galina';
    }
  }
}