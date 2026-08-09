import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/db';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        const admin = await prisma.admin.findUnique({ where: { email } });
        if (!admin) {
            return NextResponse.json({ error: 'Credenciais inválidas.' }, { status: 401 });
        }

        const senhaCorreta = await bcrypt.compare(password, admin.password);
        if (!senhaCorreta) {
            return NextResponse.json({ error: 'Credenciais inválidas.' }, { status: 401 });
        }

        const response = NextResponse.json({ success: true });
        response.cookies.set('session', String(admin.id), {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24,
            path: '/',
        });

        return response;

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Erro ao fazer login.' }, { status: 500 });
    }
}
