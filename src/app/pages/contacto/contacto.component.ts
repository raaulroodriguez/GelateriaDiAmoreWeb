import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { EmailService } from '../../core/services/email.service';
import { DivisorComponent } from '../../shared/components/divisor/divisor.component';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { ContactoData } from '../../models/interfaces';

@Component({
  selector: 'app-contacto',
  imports: [RouterLink, FormsModule, DivisorComponent, TranslatePipe, NgClass],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  private dataService = inject(DataService);
  private emailService = inject(EmailService);

  contactoData = signal<ContactoData | null>(null);
  formData = { nombre: '', email: '', telefono: '', asunto: '', mensaje: '' };

  sending = signal(false);
  success = signal(false);
  error = signal(false);

  constructor() {
    this.dataService.getContacto().subscribe(data => this.contactoData.set(data));
  }

  onSubmit() {
    if (this.sending()) return;
    this.sending.set(true);
    this.success.set(false);
    this.error.set(false);

    this.emailService.sendContact(this.formData).subscribe({
      next: () => {
        this.sending.set(false);
        this.success.set(true);
        this.formData = { nombre: '', email: '', telefono: '', asunto: '', mensaje: '' };
      },
      error: () => {
        this.sending.set(false);
        this.error.set(true);
      }
    });
  }
}
