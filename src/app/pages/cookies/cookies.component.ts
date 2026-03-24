import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DivisorComponent } from '../../shared/components/divisor/divisor.component';
import { DataService } from '../../core/services/data.service';
import { LegalPageData } from '../../models/interfaces';

@Component({
  selector: 'app-cookies',
  imports: [RouterLink, DivisorComponent],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.css'
})
export class CookiesComponent {
  private dataService = inject(DataService);
  pageData = signal<LegalPageData | null>(null);

  constructor() {
    this.dataService.getCookies().subscribe(d => this.pageData.set(d));
  }
}
