import { Component, inject, signal, computed } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { DivisorComponent } from '../../shared/components/divisor/divisor.component';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { AllergenInfoComponent } from '../../shared/components/allergen-info/allergen-info.component';
import { HeladosData } from '../../models/interfaces';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-helados',
  imports: [DivisorComponent, ProductCardComponent, AllergenInfoComponent, TranslatePipe],
  templateUrl: './helados.component.html',
  styleUrl: './helados.component.css'
})
export class HeladosComponent {
  private dataService = inject(DataService);
  heladosData = signal<HeladosData | null>(null);
  filtroActivo = signal('todos');

  constructor() {
    this.dataService.getHelados().subscribe(data => {
      this.heladosData.set(data);
    });
  }

  setFiltro(categoriaId: string) {
    this.filtroActivo.set(categoriaId);
  }

  heladosFiltrados = computed(() => {
    const data = this.heladosData();
    if (!data) return [];
    const filtro = this.filtroActivo();
    if (filtro === 'todos') return data.helados;
    return data.helados.filter(h => h.categoria === filtro);
  });
}
