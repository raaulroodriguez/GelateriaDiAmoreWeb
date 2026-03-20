import { Component, inject, signal } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { DivisorComponent } from '../../shared/components/divisor/divisor.component';
import { FaqData } from '../../models/interfaces';

@Component({
  selector: 'app-faq',
  imports: [DivisorComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  private dataService = inject(DataService);
  faqData = signal<FaqData | null>(null);

  constructor() {
    this.dataService.getFaq().subscribe(data => this.faqData.set(data));
  }
}
