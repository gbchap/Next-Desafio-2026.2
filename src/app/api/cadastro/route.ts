import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/db';

export async function POST(request: Request){
    try {
        const { name, email, password } = await request.json();
        if (!name || !email || !password) {
            return NextResponse.json({ error: 'Preencha todos os campos.'}, {status: 400});
        }

        const existente = await prisma.admin.findUnique({ where: {email}});
        if (existente){
            return NextResponse.json({ error: 'E-mail já cadastrado. '}, { status: 400 });
        }

        const hash = await bcrypt.hash(password, 10);

        await prisma.admin.create({
            data: { name, email, password: hash },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Erro ao cadastrar.' }, { status: 500});
    }
}