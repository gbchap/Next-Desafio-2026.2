'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ItemCarrinho = {
    id: number;
    title: string;
    price: number;
    imageURL: string | null;
    quantidade: number;
};

type CartContextType = {
    itens: ItemCarrinho[];
    adicionarItem: (produto: Omit<ItemCarrinho, 'quantidade'>) => void;
    removerItem: (id: number) => void;
    diminuirItem: (id: number) => void;
    total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [itens, setItens] = useState<ItemCarrinho[]>([]);

    useEffect(() => {
        localStorage.setItem('carrinho', JSON.stringify(itens));
    }, [itens]);

    function adicionarItem(produto: Omit<ItemCarrinho, 'quantidade'>) {
        setItens((prev) => {
            const existente = prev.find((item) => item.id === produto.id);
            if (existente) {
                return prev.map((item) =>
                    item.id === produto.id
                        ? { ...item, quantidade: item.quantidade + 1 }
                        : item
                );
            }
            return [...prev, { ...produto, quantidade: 1 }];
        });
    }

    function removerItem(id: number) {
        setItens((prev) => prev.filter((item) => item.id !== id));
    }

    function diminuirItem(id: number) {
        setItens((prev) =>
            prev
                .map((item) =>
                    item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
                )
                .filter((item) => item.quantidade > 0)
        );
    }

    const total = itens.reduce((soma, item) => soma + item.price * item.quantidade, 0);

    return (
        <CartContext.Provider value={{ itens, adicionarItem, removerItem, diminuirItem, total }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart precisa estar dentro de um CartProvider");
    return context;
}