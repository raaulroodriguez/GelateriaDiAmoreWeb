import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DivisorComponent } from '../../shared/components/divisor/divisor.component';

@Component({
  selector: 'app-trabaja',
  imports: [FormsModule, DivisorComponent],
  templateUrl: './trabaja.component.html',
  styleUrl: './trabaja.component.css'
})
export class TrabajaComponent {
  formData = {
    nombre: '',
    email: '',
    telefono: '',
    puesto: '',
    edad: '',
    disponibilidad: '',
    experiencia: '',
    motivacion: ''
  };

  onSubmit() {
    console.log('Candidatura enviada:', this.formData);
  }
}
