'use client';

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { FaTrash } from "react-icons/fa";

export default function CarrinhoPage() {
    const { itens, removerItem, diminuirItem, adicionarItem, total } = useCart();
    const totalItens = itens.reduce((soma, item) => soma + item.quantidade, 0);

    if (itens.length === 0) {
        return (
            <section className="bg-base min-h-screen flex items-center justify-center">
                <p className="font-nunito text-forestgreen text-xl">Seu carrinho está vazio.</p>
            </section>
        );
    }

    return (
        <section className="bg-[url('/fundorosa.png')] bg-cover bg-center bg-no-repeat bg-fixed pb-24 min-h-screen py-16 px-6 md:px-24">
            <div className="flex items-center justify-between mb-8">
                <h1 className="font-nunito font-bold text-softgreen text-5xl mb-8">Meu Carrinho</h1>
                <p className="font-nunito text-forestgreen text-xl">{totalItens} {totalItens === 1 ? "item" : "itens"}</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex flex-col gap-6 w-full md:w-2/3">
                    {itens.map((item) => (
                        <div key={item.id} className="flex items-center gap-2 md:gap-4 bg-base rounded-xl p-3 md:p-8">
                            <div className="relative w-14 h-20 md:w-20 md:h-28 shrink-0">
                                <Image
                                    src={item.imageURL || "/logochapterclub.png"}
                                    alt={item.title}
                                    fill
                                    className="object-cover rounded-md"
                                />
                            </div>

                            <div className="flex-1">
                                <p className="font-nunito font-bold text-softgreen">{item.title}</p>
                                <p className="font-nunito text-softgreen text-sm">
                                    R$ {item.price.toFixed(2)}
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => diminuirItem(item.id)}
                                    className="bg-softgreen hover:bg-pinkish  text-base transition-colors w-7 h-7 rounded-full cursor-pointer"
                                >-
                                </button>
                                <span className="font-nunito text-forestgreen">{item.quantidade}</span>
                                <button
                                    onClick={() => adicionarItem(item)}
                                    className="bg-softgreen hover:bg-pinkish text-base transition-colors w-7 h-7 rounded-full cursor-pointer"
                                >+
                                </button>
                            </div>

                            <button
                                onClick={() => removerItem(item.id)}
                                className="text-softgreen hover:text-red-700 transition-colors cursor-pointer ml-4"
                                aria-label="Remover item">
                                <FaTrash size={16} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="w-full md:w-1/3 bg-base rounded-xl p-6 flex flex-col gap-4 md:sticky md:top-8">
                    <p className="font-nunito font-bold text-forestgreen text-xl">Sumário</p>

                    <div className="flex justify-between font-nunito text-forestgreen text-sm">
                        <span>Subtotal</span>
                        <span>R$ {total.toFixed(2)}</span>
                    </div>

                    <div className="h-px bg-forestgreen/30" />

                    <div className="flex justify-between font-nunito font-bold text-forestgreen text-lg">
                        <span>Total</span>
                        <span>R$ {total.toFixed(2)}</span>
                    </div>

                    <button className="font-nunito bg-softgreen text-base text-sm px-6 py-3 rounded-full hover:bg-pinkish hover:text-forestgreen transition-colors cursor-pointer">
                        Comprar
                    </button>
                </div>
            </div>
        </section>
    );
}