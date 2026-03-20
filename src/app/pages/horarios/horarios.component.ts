import { Component, inject, signal } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { DivisorComponent } from '../../shared/components/divisor/divisor.component';
import { HorariosData } from '../../models/interfaces';

@Component({
  selector: 'app-horarios',
  imports: [DivisorComponent],
  templateUrl: './horarios.component.html',
  styleUrl: './horarios.component.css'
})
export class HorariosComponent {
  private dataService = inject(DataService);
  horariosData = signal<HorariosData | null>(null);

  constructor() {
    this.dataService.getHorarios().subscribe(data => this.horariosData.set(data));
  }
}
