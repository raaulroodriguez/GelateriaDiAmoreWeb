import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DivisorComponent } from '../../shared/components/divisor/divisor.component';

@Component({
  selector: 'app-cookies',
  imports: [RouterLink, DivisorComponent],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.css'
})
export class CookiesComponent {}
