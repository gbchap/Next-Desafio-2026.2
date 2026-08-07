'use client';
import Link from 'next/link';
import Image from 'next/image';

type Produto = {
    id: number;
    title: string;
    description: string;
    price: number;
    editor: string | null;
    gender: string | null;
    imageURL: string | null;
};

export default function ProdutoCard({ produto }: { produto: Produto }) {
    return (
        <Link href={`/produtos/${produto.id}`} className="group flex flex-col items-center justify-items-center gap-4 w-48">
            <div className="relative w-full aspect-3/4.5 rounded-xl overflow-hidden bg-pinkish">
                <Image
                    src={produto.imageURL || "/logochapterclub.png"}
                    alt={produto.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
            </div>
            <p className="font-abhaya text-deepgreen text-lg text-center leading-tight">{produto.title}</p>
            <p className="font-nunito text-forestgreen text-sm text-center leading-tight line-clamp-2">{produto.description}</p>
            <p className="font-nunito text-forestgreen font-semibold">R$ {produto.price.toFixed(2)}</p>
            <button
                onClick={() => console.log("adicionar ao carrinho:", produto.id)}
                className="font-nunito bg-forestgreen text-base text-xs px-4 py-1.5 rounded-md hover:bg-pinkish hover:text-forestgreen transition-colors cursor-pointer">
                Adicionar ao Carrinho
            </button>
        </Link>
    );
}