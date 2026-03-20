import { Component, Input } from '@angular/core';
import { AlergenoInfo } from '../../../models/interfaces';

@Component({
  selector: 'app-allergen-info',
  template: `
    <div class="info-alergenos">
      <h2><i class="fas fa-info-circle"></i> Información sobre Alérgenos</h2>
      <p class="intro-alergenos">
        La seguridad de nuestros clientes es nuestra prioridad.
        <br /><br />
        A continuación, te explicamos el significado de cada símbolo:
      </p>
      <div class="alergenos-grid">
        @for (alergeno of alergenos; track alergeno.nombre) {
          <div class="alergeno-card">
            <span class="icono-grande"><i [class]="alergeno.icono"></i></span>
            <h4>{{ alergeno.nombre }}</h4>
            <p>{{ alergeno.descripcion }}</p>
          </div>
        }
      </div>
      <div class="nota-importante">
        <i class="fas fa-exclamation-circle"></i>
        <p>
          <strong>Nota importante:</strong> {{ notaImportante }}
        </p>
      </div>
    </div>
  `
})
export class AllergenInfoComponent {
  @Input() alergenos: AlergenoInfo[] = [];
  @Input() notaImportante = '';
}
