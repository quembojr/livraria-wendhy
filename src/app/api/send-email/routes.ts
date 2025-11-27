import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { nome, email, telefone } = await req.json();

    if (!nome || !email || !telefone) {
      return NextResponse.json({ error: "Campos incompletos" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Reserva Livro" <${process.env.EMAIL_USER}>`,
      to: process.env.SEND_TO,
      subject: "Nova Reserva",
            text: `Nova reserva recebida:
        Nome: ${nome}
        Email: ${email}
        Telefone: ${telefone}
        Data: ${new Date().toLocaleString()}`
            });

    return NextResponse.json({ ok: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
