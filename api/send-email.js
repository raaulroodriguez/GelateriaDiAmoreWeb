const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { nombre, email, telefono, asunto, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const asuntoLabels = {
    consulta: 'Consulta general',
    pedido: 'Pedido especial',
    evento: 'Evento o catering',
    sugerencia: 'Sugerencia',
    queja: 'Queja o reclamación',
    otro: 'Otro',
  };

  const mailOptions = {
    from: `"Web Gelateria Di Amore" <${process.env.GMAIL_USER}>`,
    to: process.env.RECIPIENT_EMAIL || 'infogelateriadiamore@gmail.com',
    replyTo: email,
    subject: `[Contacto Web] ${asuntoLabels[asunto] || asunto || 'Sin asunto'} - ${nombre}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #7c2d2d;">Nuevo mensaje de contacto</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold; color: #7c2d2d;">Nombre:</td><td style="padding: 8px;">${nombre}</td></tr>
          <tr style="background:#f9f3ee;"><td style="padding: 8px; font-weight: bold; color: #7c2d2d;">Email:</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #7c2d2d;">Teléfono:</td><td style="padding: 8px;">${telefono || '—'}</td></tr>
          <tr style="background:#f9f3ee;"><td style="padding: 8px; font-weight: bold; color: #7c2d2d;">Asunto:</td><td style="padding: 8px;">${asuntoLabels[asunto] || asunto || '—'}</td></tr>
        </table>
        <h3 style="color: #7c2d2d; margin-top: 16px;">Mensaje:</h3>
        <p style="background:#f9f3ee; padding: 12px; border-left: 4px solid #7c2d2d; white-space: pre-wrap;">${mensaje}</p>
        <hr style="margin-top: 24px; border: 1px solid #eee;">
        <p style="color: #999; font-size: 12px;">Enviado desde el formulario de contacto de gelateriadiamore.com</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Error sending email:', err);
    return res.status(500).json({ error: 'Error al enviar el correo' });
  }
}
