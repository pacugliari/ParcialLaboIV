import { Component, Input } from '@angular/core';
import { Pais } from 'src/app/models/pais';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent {
  @Input() pais?: Pais;
}
