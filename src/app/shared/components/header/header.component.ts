import { Component, inject, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { DataService } from '../../../core/services/data.service';
import { NavItem } from '../../../models/interfaces';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgClass, TranslatePipe, LanguageSelectorComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  private dataService = inject(DataService);

  navItems = signal<NavItem[]>([]);
  menuOpen = signal(false);
  activeDropdown = signal<number | null>(null);

  constructor() {
    this.dataService.getNavegacion().subscribe(data => {
      this.navItems.set(data.header);
    });
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
    if (!this.menuOpen()) {
      this.activeDropdown.set(null);
    }
  }

  toggleDropdown(index: number, event: Event) {
    if (window.innerWidth <= 768) {
      event.preventDefault();
      this.activeDropdown.update(v => v === index ? null : index);
    }
  }

  closeMenu() {
    this.menuOpen.set(false);
    this.activeDropdown.set(null);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('header')) {
      this.closeMenu();
    }
  }
}
