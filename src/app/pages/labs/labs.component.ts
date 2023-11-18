import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  title = 'Reserva de canchitas';

  tasks = [
    'Escoge tu cancha',
    'Elige la fecha',
    'Datos personales',
    'Forma de Pago',
    'Reservado'
  ]
}
