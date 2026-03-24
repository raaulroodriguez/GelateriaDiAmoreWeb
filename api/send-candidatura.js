const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { nombre, email, telefono, puesto, edad, disponibilidad, experiencia, motivacion } = req.body;

  if (!nombre || !email) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const puestoLabels = {
    heladero: 'Heladero/a Artesanal',
    dependiente: 'Dependiente/a',
    encargado: 'Encargado/a de Tienda',
    practicas: 'Prácticas',
    otro: 'Otro',
  };

  const disponibilidadLabels = {
    completa: 'Jornada completa',
    parcial: 'Jornada parcial',
    fines: 'Fines de semana',
    verano: 'Solo verano',
  };

  const mailOptions = {
    from: `"Web Gelateria Di Amore" <${process.env.GMAIL_USER}>`,
    to: process.env.RECIPIENT_EMAIL || 'infogelateriadiamore@gmail.com',
    replyTo: email,
    subject: `[Candidatura] ${puestoLabels[puesto] || puesto || 'Sin puesto'} - ${nombre}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #7c2d2d;">Nueva candidatura recibida</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold; color: #7c2d2d;">Nombre:</td><td style="padding: 8px;">${nombre}</td></tr>
          <tr style="background:#f9f3ee;"><td style="padding: 8px; font-weight: bold; color: #7c2d2d;">Email:</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #7c2d2d;">Teléfono:</td><td style="padding: 8px;">${telefono || '—'}</td></tr>
          <tr style="background:#f9f3ee;"><td style="padding: 8px; font-weight: bold; color: #7c2d2d;">Puesto deseado:</td><td style="padding: 8px;">${puestoLabels[puesto] || puesto || '—'}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #7c2d2d;">Edad:</td><td style="padding: 8px;">${edad || '—'}</td></tr>
          <tr style="background:#f9f3ee;"><td style="padding: 8px; font-weight: bold; color: #7c2d2d;">Disponibilidad:</td><td style="padding: 8px;">${disponibilidadLabels[disponibilidad] || disponibilidad || '—'}</td></tr>
        </table>
        <h3 style="color: #7c2d2d; margin-top: 16px;">Experiencia previa:</h3>
        <p style="background:#f9f3ee; padding: 12px; border-left: 4px solid #7c2d2d; white-space: pre-wrap;">${experiencia || '—'}</p>
        <h3 style="color: #7c2d2d; margin-top: 16px;">Carta de motivación:</h3>
        <p style="background:#f9f3ee; padding: 12px; border-left: 4px solid #7c2d2d; white-space: pre-wrap;">${motivacion || '—'}</p>
        <hr style="margin-top: 24px; border: 1px solid #eee;">
        <p style="color: #999; font-size: 12px;">Enviado desde el formulario "Trabaja con nosotros" de gelateriadiamore.com</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Error sending email:', err);
    return res.status(500).json({ error: 'Error al enviar la candidatura' });
  }
}
