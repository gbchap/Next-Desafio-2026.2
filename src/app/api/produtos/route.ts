import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function POST(request: Request) {
    try {
        const { title, description, price, editor, gender, imageURL } = await request.json();

        if (!title || !description || !price) {
            return NextResponse.json({ error: 'Preencha os campos obrigatórios.' }, { status: 400 });
        }
        const produto = await prisma.product.create({
            data: {
                title,
                description,
                price: parseFloat(price),
                editor: editor || null,
                gender: gender || null,
                imageURL: imageURL || null,
            },
        });
        return NextResponse.json(produto);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Erro ao criar produto.' }, { status: 500 });
    }
}