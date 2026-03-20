import { Component, inject, signal, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../../core/services/data.service';
import { FooterData } from '../../../models/interfaces';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  private dataService = inject(DataService);

  footerData = signal<FooterData | null>(null);
  showScrollBtn = signal(false);

  constructor() {
    this.dataService.getNavegacion().subscribe(data => {
      this.footerData.set(data.footer);
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.showScrollBtn.set(window.scrollY > 300);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
