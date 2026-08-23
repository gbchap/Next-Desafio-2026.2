import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function PUT(
    request: Request,
    {params}: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const { title, description, price, editor, gender, imageURL } = await request.json();

        const produto = await prisma.product.update({
            where: { id: Number(id) },
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
        return NextResponse.json({ error: 'Erro ao editar produto.' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        await prisma.product.delete({
            where: { id: Number(id) },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Erro ao excluir produto.' }, { status: 500 });
    }
}