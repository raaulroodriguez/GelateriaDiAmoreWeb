import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DivisorComponent } from '../../shared/components/divisor/divisor.component';
import { SafeUrlPipe } from '../../shared/pipes/safe-url.pipe';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-ubicacion',
  imports: [RouterLink, DivisorComponent, SafeUrlPipe, TranslatePipe],
  templateUrl: './ubicacion.component.html',
  styleUrl: './ubicacion.component.css'
})
export class UbicacionComponent {
  readonly mapaUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.03779276423!2d-4.423870423425326!3d36.72165357212215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f744121652d3%3A0x8abd8bc55ad31f77!2sGELATERIA%20DI%20AMORE!5e0!3m2!1ses!2ses!4v1761810614462!5m2!1ses!2ses';
}
