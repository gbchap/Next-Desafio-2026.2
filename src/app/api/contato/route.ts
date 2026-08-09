import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { nome, sobrenome, email, assunto, mensagem } = await request.json();

        if (!nome || !email || !assunto || !mensagem) {
            return NextResponse.json(
                { error: 'Preencha todos os campos obrigatórios.' },
                { status: 400 }
            );
        }
        await resend.emails.send({
            from: 'Chapter Club <onboarding@resend.dev>',
            to: process.env.RESEND_TO_EMAIL!,
            subject: `[Contato] ${assunto}`,
            replyTo: email,
            html: `
                <p><strong>Nome:</strong> ${nome} ${sobrenome || ''}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Assunto:</strong> ${assunto}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${mensagem}</p>
            `,
        });
        
        return NextResponse.json({success: true});
    }catch (error){
        console.error(error);
        return NextResponse.json(
            {error: 'Erro ao enviar.'},
            {status: 500}
        );
    }
}