import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DivisorComponent } from '../../shared/components/divisor/divisor.component';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { EmailService } from '../../core/services/email.service';

@Component({
  selector: 'app-trabaja',
  imports: [FormsModule, DivisorComponent, TranslatePipe],
  templateUrl: './trabaja.component.html',
  styleUrl: './trabaja.component.css'
})
export class TrabajaComponent {
  private emailService = inject(EmailService);

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

  sending = signal(false);
  success = signal(false);
  error = signal(false);

  onSubmit() {
    if (this.sending()) return;
    this.sending.set(true);
    this.success.set(false);
    this.error.set(false);

    this.emailService.sendCandidatura(this.formData).subscribe({
      next: () => {
        this.sending.set(false);
        this.success.set(true);
        this.formData = { nombre: '', email: '', telefono: '', puesto: '', edad: '', disponibilidad: '', experiencia: '', motivacion: '' };
      },
      error: () => {
        this.sending.set(false);
        this.error.set(true);
      }
    });
  }
}
