// @ts-nocheck
// app/actions/sendEmail.ts
"use server";

import nodemailer from "nodemailer";

export async function sendEmail(_prevState: any, formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const mensagem = formData.get("message") as string;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Contato do Portfólio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_DESTINO,
      subject: `Nova mensagem de ${firstName} ${lastName}`,
      html: `
        <p><strong>Nome:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong><br/>${mensagem}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return { success: false, error: "Erro ao enviar email." };
  }
}
