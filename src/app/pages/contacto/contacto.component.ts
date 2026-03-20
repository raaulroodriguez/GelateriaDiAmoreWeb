import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../core/services/data.service';
import { DivisorComponent } from '../../shared/components/divisor/divisor.component';
import { ContactoData } from '../../models/interfaces';

@Component({
  selector: 'app-contacto',
  imports: [RouterLink, FormsModule, DivisorComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  private dataService = inject(DataService);
  contactoData = signal<ContactoData | null>(null);
  formData = { nombre: '', email: '', telefono: '', asunto: '', mensaje: '' };

  constructor() {
    this.dataService.getContacto().subscribe(data => this.contactoData.set(data));
  }

  onSubmit() {
    // Lógica de envío futura
    console.log('Form submitted:', this.formData);
  }
}
