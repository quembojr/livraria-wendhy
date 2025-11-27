import nodemailer from "nodemailer";

export async function POST(req: { json: () => any; }) {
    try {
        const body = await req.json();
        const { nome, email, telefone } = body;

        if (!nome || !email || !telefone) {
            return new Response(JSON.stringify({ error: "Campos incompletos" }), {
                status: 400
            });
        }

        // Transporter (USA GMAIL ou OUTRO)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,   // teu email
                pass: process.env.EMAIL_PASS,   // tua senha app
            }
        });

        // Conteúdo do email
        await transporter.sendMail({
            from: `"Formulário de Reserva" <${process.env.EMAIL_USER}>`,
            to: process.env.SEND_TO, // email que vai receber
            subject: "Nova Reserva de Livro",
            text: `
                Nova reserva recebida:
                Nome: ${nome}
                Email: ${email}
                Telefone: ${telefone}
                Data: ${new Date().toLocaleDateString()}    
      `
        });

        return new Response(JSON.stringify({ ok: true }), { status: 200 });

    } catch (error) {
        console.error("Erro ao enviar email:", error);
        return new Response(JSON.stringify({ error: "Erro interno" }), {
            status: 500
        });
    }
}
