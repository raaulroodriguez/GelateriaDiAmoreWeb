import { Component, inject, signal } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { DivisorComponent } from '../../shared/components/divisor/divisor.component';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { PostresData } from '../../models/interfaces';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-postres',
  imports: [DivisorComponent, ProductCardComponent, TranslatePipe],
  templateUrl: './postres.component.html',
  styleUrl: './postres.component.css'
})
export class PostresComponent {
  private dataService = inject(DataService);
  postresData = signal<PostresData | null>(null);

  constructor() {
    this.dataService.getPostres().subscribe(data => {
      this.postresData.set(data);
    });
  }
}
