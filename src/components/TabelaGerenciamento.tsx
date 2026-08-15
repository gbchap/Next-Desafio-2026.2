'use client';

import { useState } from "react";

type Produto = {
    id: number;
    title: string;
    description: string;
    price: number;
    editor: string | null;
    gender: string | null;
    imageURL: string | null;
};

export default function TabelaGerenciamento({ produtos }: { produtos: Produto[] }) {

    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

    function handleDelete(id: number) {
        console.log("Excluir produto:", id);
    }

    function handleEdit(id: number){
        console.log("Editar Produto:", id);
    }

    return (
        <>
            <div className="bg-base rounded-xl overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="bg-pinkish/50 text-left">
                            <th className="font-nunito font-bold text-forestgreen text-sm p-4">ID</th>
                            <th className="font-nunito font-bold text-forestgreen text-sm p-4">Nome</th>
                            <th className="hidden md:table-cell font-nunito font-bold text-forestgreen text-sm p-4">Editora</th>
                            <th className="hidden md:table-cell font-nunito font-bold text-forestgreen text-sm p-4">Categoria</th>
                            <th className="hidden md:table-cell font-nunito font-bold text-forestgreen text-sm p-4">Preço</th>
                            <th className="font-nunito font-bold text-forestgreen text-sm p-4">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto) => (
                            <tr key={produto.id} className="border-t border-forestgreen/10">
                                <td className="font-nunito text-forestgreen text-sm p-4">{produto.id}</td>
                                <td className="font-nunito text-forestgreen text-sm p-4 max-w-35 md:max-w-none truncate">
                                    {produto.title}
                                </td>
                                <td className="hidden md:table-cell font-nunito text-forestgreen text-sm p-4">
                                    {produto.editor || "—"}
                                </td>
                                <td className="hidden md:table-cell font-nunito text-forestgreen text-sm p-4">
                                    {produto.gender || "—"}
                                 </td>
                                <td className="hidden md:table-cell font-nunito text-forestgreen text-sm p-4">
                                    R$ {produto.price.toFixed(2)}
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => setProdutoSelecionado(produto)}
                                            className="md:hidden font-nunito font-semibold bg-green-200  text-green-900 text-xs px-3 py-1.5 rounded-sm cursor-pointer">Ver
                                        </button>
                                        <button
                                            onClick={() => handleEdit(produto.id)}
                                            className="hidden md:inline font-nunito font-semibold bg-blue-200 rounded-sm text-blue-600 text-sm px-3 py-1.5 hover:underline cursor-pointer">Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(produto.id)}
                                            className="hidden md:inline font-nunito font-semibold bg-red-200 rounded-sm text-red-500 text-sm px-3 py-1.5 hover:underline cursor-pointer">Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {produtoSelecionado && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
                    onClick={() => setProdutoSelecionado(null)}>
                    <div
                        className="bg-base rounded-xl p-6 w-full max-w-sm flex flex-col gap-3"
                        onClick={(e) => e.stopPropagation()}>
                        <p className="font-nunito font-bold text-forestgreen text-lg">{produtoSelecionado.title}</p>
                        <p className="font-nunito text-forestgreen text-sm">ID: {produtoSelecionado.id}</p>
                        <p className="font-nunito text-forestgreen text-sm">Editora: {produtoSelecionado.editor || "—"}</p>
                        <p className="font-nunito text-forestgreen text-sm">Categoria: {produtoSelecionado.gender || "—"}</p>
                        <p className="font-nunito text-forestgreen text-sm">Preço: R$ {produtoSelecionado.price.toFixed(2)}</p>
                        <p className="font-nunito text-forestgreen text-sm">{produtoSelecionado.description}</p>

                        <div className="flex gap-4 mt-2">
                            <button
                                onClick={() => handleEdit(produtoSelecionado.id)}
                                className="font-nunito bg-blue-200 rounded-sm text-blue-600 font-semibold text-sm px-3 py-1.5 hover:underline cursor-pointer">Editar
                            </button>
                            <button
                                onClick={() => handleDelete(produtoSelecionado.id)}
                                className="font-nunito bg-red-200 rounded-sm text-red-500 font-semibold text-sm px-3 py-1.5 hover:underline cursor-pointer">Excluir
                            </button>
                            <button
                                onClick={() => setProdutoSelecionado(null)}
                                className="font-nunito bg-green-200 rounded-sm text-green-900 text-sm font-semibold px-3 py-1.5 hover:underline cursor-pointer">Fechar                           
                            </button>
                        </div>   
                    </div>
                </div>
            )}
        </>
    );  
}