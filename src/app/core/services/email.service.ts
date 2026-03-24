import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailService {
  private http = inject(HttpClient);

  sendContact(data: {
    nombre: string;
    email: string;
    telefono: string;
    asunto: string;
    mensaje: string;
  }): Observable<{ ok: boolean }> {
    return this.http.post<{ ok: boolean }>('/api/send-email', data);
  }

  sendCandidatura(data: {
    nombre: string;
    email: string;
    telefono: string;
    puesto: string;
    edad: string;
    disponibilidad: string;
    experiencia: string;
    motivacion: string;
  }): Observable<{ ok: boolean }> {
    return this.http.post<{ ok: boolean }>('/api/send-candidatura', data);
  }
}
