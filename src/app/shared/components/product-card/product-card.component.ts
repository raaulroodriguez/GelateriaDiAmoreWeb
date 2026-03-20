import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Alergeno } from '../../../models/interfaces';

@Component({
  selector: 'app-product-card',
  imports: [NgClass],
  template: `
    <article class="product-card-wrap group">
      <div class="product-img" [style.height]="imgHeight">
        <img [src]="imagen" [alt]="nombre" />
        <span class="categoria" [ngClass]="badgeClase">{{ badgeTexto }}</span>
        @if (temporada) {
          <span class="temporada">Temporada</span>
        }
        @if (precio) {
          <span class="precio">{{ precio }}</span>
        }
        @if (especial) {
          <span class="badge-especial">Especial</span>
        }
      </div>
      <div class="product-info">
        <h3>{{ nombre }}</h3>
        <p class="descripcion">{{ descripcion }}</p>
        @if (incluye) {
          <div class="incluye">
            <i class="fas fa-check-circle"></i>
            <span>{{ incluye }}</span>
          </div>
        }
        @if (alergenos.length > 0) {
          <div class="alergenos">
            @for (alergeno of alergenos; track alergeno.tipo) {
              <span class="alergeno" [class]="alergeno.clase" [title]="alergeno.titulo">
                <i [class]="alergeno.icono"></i>
              </span>
            }
          </div>
        }
      </div>
    </article>
  `
})
export class ProductCardComponent {
  @Input() imagen = '';
  @Input() nombre = '';
  @Input() descripcion = '';
  @Input() badgeTexto = '';
  @Input() badgeClase = '';
  @Input() alergenos: Alergeno[] = [];
  @Input() temporada = false;
  @Input() precio = '';
  @Input() incluye = '';
  @Input() especial = false;
  @Input() imgHeight = '250px';
}
