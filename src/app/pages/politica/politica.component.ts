import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DivisorComponent } from '../../shared/components/divisor/divisor.component';
import { DataService } from '../../core/services/data.service';
import { LegalPageData } from '../../models/interfaces';

@Component({
  selector: 'app-politica',
  imports: [RouterLink, DivisorComponent],
  templateUrl: './politica.component.html',
  styleUrl: './politica.component.css'
})
export class PoliticaComponent {
  private dataService = inject(DataService);
  pageData = signal<LegalPageData | null>(null);

  constructor() {
    this.dataService.getPolitica().subscribe(d => this.pageData.set(d));
  }
}
