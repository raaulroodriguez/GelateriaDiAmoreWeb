import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DivisorComponent } from '../../shared/components/divisor/divisor.component';

@Component({
  selector: 'app-politica',
  imports: [RouterLink, DivisorComponent],
  templateUrl: './politica.component.html',
  styleUrl: './politica.component.css'
})
export class PoliticaComponent {}
