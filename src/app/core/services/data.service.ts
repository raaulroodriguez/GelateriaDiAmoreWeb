import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, catchError } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { toObservable } from '@angular/core/rxjs-interop';
import { LanguageService } from './language.service';
import {
  HeladosData,
  PaletasData,
  BebidasData,
  PostresData,
  HorariosData,
  FaqData,
  ContactoData,
  HomeData,
  NavegacionData,
  LegalPageData
} from '../../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient);
  private langService = inject(LanguageService);

  private cache = new Map<string, Observable<any>>();

  private getData<T>(path: string): Observable<T> {
    return toObservable(this.langService.lang).pipe(
      switchMap(lang => {
        const cacheKey = `${lang}/${path}`;
        if (!this.cache.has(cacheKey)) {
          // Spanish: load from root; other langs: load from lang subfolder, fallback to root
          const url = lang === 'es'
            ? `assets/data/${path}`
            : `assets/data/${lang}/${path}`;
          this.cache.set(
            cacheKey,
            this.http.get<T>(url).pipe(
              catchError(() => this.http.get<T>(`assets/data/${path}`)),
              shareReplay(1)
            )
          );
        }
        return this.cache.get(cacheKey)!;
      })
    );
  }

  getHelados(): Observable<HeladosData> {
    return this.getData<HeladosData>('helados.json');
  }

  getPaletas(): Observable<PaletasData> {
    return this.getData<PaletasData>('paletas.json');
  }

  getBebidas(): Observable<BebidasData> {
    return this.getData<BebidasData>('bebidas.json');
  }

  getPostres(): Observable<PostresData> {
    return this.getData<PostresData>('postres.json');
  }

  getHorarios(): Observable<HorariosData> {
    return this.getData<HorariosData>('horarios.json');
  }

  getFaq(): Observable<FaqData> {
    return this.getData<FaqData>('faq.json');
  }

  getContacto(): Observable<ContactoData> {
    return this.getData<ContactoData>('contacto.json');
  }

  getHome(): Observable<HomeData> {
    return this.getData<HomeData>('home.json');
  }

  getNavegacion(): Observable<NavegacionData> {
    return this.getData<NavegacionData>('navegacion.json');
  }

  getCondiciones(): Observable<LegalPageData> {
    return this.getData<LegalPageData>('condiciones.json');
  }

  getPolitica(): Observable<LegalPageData> {
    return this.getData<LegalPageData>('politica.json');
  }

  getCookies(): Observable<LegalPageData> {
    return this.getData<LegalPageData>('cookies.json');
  }
}
