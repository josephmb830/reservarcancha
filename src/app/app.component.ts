import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reserva de canchitas';

  tasks = [
    'Escoge tu cancha',
    'Elige la fecha',
    'Datos personales',
    'Forma de Pago',
    'Reservado'
  ]

}
