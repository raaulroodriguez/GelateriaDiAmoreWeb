import { Component, inject, signal, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';
import { LanguageService, LangCode } from '../../../core/services/language.service';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [NgClass],
  templateUrl: './language-selector.component.html'
})
export class LanguageSelectorComponent {
  langService = inject(LanguageService);
  isOpen = signal(false);

  toggle(): void {
    this.isOpen.update(v => !v);
  }

  select(code: LangCode): void {
    this.langService.setLang(code);
    this.isOpen.set(false);
  }

  get currentOption() {
    return this.langService.options.find(o => o.code === this.langService.lang());
  }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: Event): void {
    if (!(event.target as HTMLElement).closest('.lang-selector')) {
      this.isOpen.set(false);
    }
  }
}
