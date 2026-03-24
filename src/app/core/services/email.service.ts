import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// ─── Configura estas variables en Vercel → Settings → Environment Variables ───
// EMAILJS_PUBLIC_KEY  → tu Public Key de EmailJS
// EMAILJS_SERVICE_ID  → tu Service ID de EmailJS
// EMAILJS_TPL_CONTACT → Template ID para el formulario de contacto
// EMAILJS_TPL_TRABAJA → Template ID para el formulario de candidatura
// ──────────────────────────────────────────────────────────────────────────────
// En local crea src/environments/emailjs.env.ts con las mismas variables.
// Los valores de abajo son los de producción (leer desde el HTML meta o env).
const PUBLIC_KEY    = (window as any).__EMAILJS_PUBLIC_KEY__    || 'YOUR_PUBLIC_KEY';
const SERVICE_ID    = (window as any).__EMAILJS_SERVICE_ID__    || 'YOUR_SERVICE_ID';
const TPL_CONTACT   = (window as any).__EMAILJS_TPL_CONTACT__   || 'template_contact';
const TPL_CANDIDATURA = (window as any).__EMAILJS_TPL_TRABAJA__ || 'template_trabaja';

@Injectable({ providedIn: 'root' })
export class EmailService {

  sendContact(data: {
    nombre: string;
    email: string;
    telefono: string;
    asunto: string;
    mensaje: string;
  }): Observable<{ ok: boolean }> {
    const params = {
      from_name:  data.nombre,
      from_email: data.email,
      telefono:   data.telefono || '—',
      asunto:     data.asunto   || '—',
      mensaje:    data.mensaje,
    };
    return from(emailjs.send(SERVICE_ID, TPL_CONTACT, params, PUBLIC_KEY))
      .pipe(map(() => ({ ok: true })));
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
    const params = {
      from_name:      data.nombre,
      from_email:     data.email,
      telefono:       data.telefono       || '—',
      puesto:         data.puesto         || '—',
      edad:           data.edad           || '—',
      disponibilidad: data.disponibilidad || '—',
      experiencia:    data.experiencia    || '—',
      motivacion:     data.motivacion     || '—',
    };
    return from(emailjs.send(SERVICE_ID, TPL_CANDIDATURA, params, PUBLIC_KEY))
      .pipe(map(() => ({ ok: true })));
  }
}
