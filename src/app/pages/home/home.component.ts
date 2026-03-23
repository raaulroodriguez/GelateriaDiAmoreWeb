import { Component, inject, signal, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { DivisorComponent } from '../../shared/components/divisor/divisor.component';
import { SafeUrlPipe } from '../../shared/pipes/safe-url.pipe';
import { HomeData } from '../../models/interfaces';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-home',
  imports: [RouterLink, DivisorComponent, SafeUrlPipe, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('bgVideo') bgVideoRef!: ElementRef<HTMLVideoElement>;
  private dataService = inject(DataService);
  homeData = signal<HomeData | null>(null);

  constructor() {
    this.dataService.getHome().subscribe(data => {
      this.homeData.set(data);
    });
  }

  ngAfterViewInit() {
    const video = this.bgVideoRef?.nativeElement;
    if (video) {
      video.muted = true;
      video.volume = 0;
    }
  }

  getPasionParagraphs(texto: string): string[] {
    return texto.split('\n\n').filter(p => p.trim());
  }
}
