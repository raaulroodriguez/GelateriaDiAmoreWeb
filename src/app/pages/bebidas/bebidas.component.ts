import { Component, inject, signal } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { DivisorComponent } from '../../shared/components/divisor/divisor.component';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { BebidasData } from '../../models/interfaces';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-bebidas',
  imports: [DivisorComponent, ProductCardComponent, TranslatePipe],
  templateUrl: './bebidas.component.html',
  styleUrl: './bebidas.component.css'
})
export class BebidasComponent {
  private dataService = inject(DataService);
  bebidasData = signal<BebidasData | null>(null);

  constructor() {
    this.dataService.getBebidas().subscribe(data => {
      this.bebidasData.set(data);
    });
  }
}
