import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DivisorComponent } from '../../shared/components/divisor/divisor.component';
import { DataService } from '../../core/services/data.service';
import { LegalPageData } from '../../models/interfaces';

@Component({
  selector: 'app-condiciones',
  imports: [RouterLink, DivisorComponent],
  templateUrl: './condiciones.component.html',
  styleUrl: './condiciones.component.css'
})
export class CondicionesComponent {
  private dataService = inject(DataService);
  pageData = signal<LegalPageData | null>(null);

  constructor() {
    this.dataService.getCondiciones().subscribe(d => this.pageData.set(d));
  }
}
