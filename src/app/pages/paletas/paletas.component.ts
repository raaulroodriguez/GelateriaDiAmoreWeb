import { Component, inject, signal, computed } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { DivisorComponent } from '../../shared/components/divisor/divisor.component';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { AllergenInfoComponent } from '../../shared/components/allergen-info/allergen-info.component';
import { PaletasData } from '../../models/interfaces';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-paletas',
  imports: [DivisorComponent, ProductCardComponent, AllergenInfoComponent, TranslatePipe],
  templateUrl: './paletas.component.html',
  styleUrl: './paletas.component.css'
})
export class PaletasComponent {
  private dataService = inject(DataService);
  paletasData = signal<PaletasData | null>(null);
  filtroActivo = signal('todos');

  constructor() {
    this.dataService.getPaletas().subscribe(data => {
      this.paletasData.set(data);
    });
  }

  setFiltro(categoriaId: string) {
    this.filtroActivo.set(categoriaId);
  }

  paletasFiltradas = computed(() => {
    const data = this.paletasData();
    if (!data) return [];
    const filtro = this.filtroActivo();
    if (filtro === 'todos') return data.paletas;
    return data.paletas.filter(p => p.categorias.includes(filtro));
  });
}
