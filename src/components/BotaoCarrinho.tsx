'use client';

import { useCart } from "@/context/CartContext";
import { useState } from "react";

type Produto = {
    id: number;
    title: string;
    price: number;
    imageURL: string | null;
};

export default function BotaoCarrinho({ 
    produto, 
    small = false 
}: { 
    produto: Produto; 
    small?: boolean;
}) {
    const { adicionarItem } = useCart();
    const [mostrarAviso, setMostrarAviso] = useState(false);

    function handleClick() {
        adicionarItem(produto);
        setMostrarAviso(true);
        setTimeout(() => setMostrarAviso(false), 2000);
    }

    return (
        <div className="relative">
            <button 
                onClick={handleClick}
                className={`font-nunito bg-forestgreen text-base rounded-full hover:bg-pinkish hover:text-forestgreen transition-colors cursor-pointer self-start ${
                    small ? "text-xs px-3 py-1.5" : "text-sm px-4 py-2"
                }`}>
                Adicionar ao Carrinho
            </button>
            {mostrarAviso && (
                <div className="absolute top-full mt-2 left-0 bg-pinkish text-pink-900 font-nunito text-sm px-4 py-2 rounded-lg shadow-lg whitespace-nowrap animate-fade-in">
                    ✓ Adicionado ao carrinho!
                </div>
            )}
        </div>
    );
}