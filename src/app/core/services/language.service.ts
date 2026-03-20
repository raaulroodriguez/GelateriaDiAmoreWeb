import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type LangCode = 'es' | 'en' | 'it' | 'fr';

export interface LangOption {
  code: LangCode;
  name: string;
  flag: string;      // emoji fallback
  bandera?: string;  // ruta a imagen (ej: 'assets/img/flags/es.png') — opcional
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private http = inject(HttpClient);

  readonly options: LangOption[] = [
    { code: 'es', name: 'Español',  flag: '🇪🇸', bandera: 'assets/img/flags/es.png' },
    { code: 'en', name: 'English',  flag: '🇬🇧', bandera: 'assets/img/flags/en.png' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹', bandera: 'assets/img/flags/it.png' },
    { code: 'fr', name: 'Français', flag: '🇫🇷', bandera: 'assets/img/flags/fr.png' }
  ];


  private _lang = signal<LangCode>(
    (localStorage.getItem('gda_lang') as LangCode) || 'es'
  );
  readonly lang = this._lang.asReadonly();

  private _translations = signal<Record<string, string>>({});
  readonly translations = this._translations.asReadonly();

  constructor() {
    this.loadTranslations(this._lang());
  }

  setLang(code: LangCode): void {
    this._lang.set(code);
    localStorage.setItem('gda_lang', code);
    this.loadTranslations(code);
  }

  t(key: string): string {
    const val = this._translations()[key];
    return val !== undefined ? val : key;
  }

  private loadTranslations(lang: LangCode): void {
    this.http
      .get<Record<string, string>>(`assets/i18n/${lang}.json`)
      .subscribe(data => this._translations.set(data));
  }
}
