'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

type Produto = {
    id: number;
    title: string;
    description: string;
    price: number;
    editor: string | null;
    gender: string | null;
    imageURL: string | null;
};

export default function ModalProduto({
    produto,
    onClose,
} : {
    produto: Produto | null;
    onClose: () => void;
}) {   
    const router = useRouter();
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState('');
    const [preview, setPreview] = useState<string | null>(produto?.imageURL ?? null);

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result as string);
        };      
        reader.readAsDataURL(file);
    }

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        setErro('');
        setCarregando(true);

        const formData = new FormData(e.currentTarget);

        const dados = {
            title: formData.get('title'),
            description: formData.get('description'),
            price: formData.get('price'),
            editor: formData.get('editor'),
            gender: formData.get('gender'),
            imageURL: formData.get('imageURL'),
        };

        try {
            const url = produto? `/api/produtos/${produto.id}` : '/api/produtos';
            const method = produto? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dados),
            });

            if (res.ok) {
                router.refresh();
                onClose();
            } else {
                const data = await res.json();
                setErro(data.error || 'Erro ao salvar.');
            }
        } catch (error) {
            console.error(error);
            setErro('Erro ao salvar.');
        }

        setCarregando(false);
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
            <div className="bg-linear-to-b from-base to-pinkish rounded-xl p-6 w-full max-w-md flex flex-col gap-4">
                <p className="font-nunito font-bold text-forestgreen text-lg">
                    {produto ? "Editar Produto" : "Criar Novo Produto"}
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        name="title"
                        placeholder="Nome"
                        defaultValue={produto?.title}
                        required
                        className="p-2 rounded-lg border border-forestgreen/30 bg-transparent text-forestgreen font-nunito outline-none focus:border-forestgreen"
                    />
                    <textarea
                        name="description"
                        placeholder="Descrição"
                        defaultValue={produto?.description}
                        required
                        rows={3}
                        className="p-2 rounded-lg border border-forestgreen/30 bg-transparent text-forestgreen font-nunito outline-none focus:border-forestgreen resize-none"
                    />
                    <input
                        name="price"
                        type="number"
                        step="0.01"
                        placeholder="Preço"
                        defaultValue={produto?.price}
                        required
                        className="p-2 rounded-lg border border-forestgreen/30 bg-transparent text-forestgreen font-nunito outline-none focus:border-forestgreen"
                    />
                    <input
                        name="editor"
                        placeholder="Editora"
                        defaultValue={produto?.editor ?? ''}
                        className="p-2 rounded-lg border border-forestgreen/30 bg-transparent text-forestgreen font-nunito outline-none focus:border-forestgreen"
                    />
                    <input
                        name="gender"
                        placeholder="Categoria/Gênero"
                        defaultValue={produto?.gender ?? ''}
                        className="p-2 rounded-lg border border-forestgreen/30 bg-transparent text-forestgreen font-nunito outline-none focus:border-forestgreen"
                    />
                    
                    <div className="flex flex-col gap-2">
                        <label className="font-nunito text-forestgreen text-sm">Capa do produto</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="font-nunito text-pink-900 text-sm hover:file:underline hover:file:cursor-pointer"
                        />
                        {preview && (
                            <img src={preview} alt="Preview" className="w-24 h-32 object-cover rounded-md" />
                        )}
                        <input type="hidden" name="imageURL" value={preview ?? ''} />
                    </div>
                    
                    {erro && <p className="text-red-500 text-sm">{erro}</p>}
                    <div className="flex gap-3 mt-2">
                        <button
                            type="submit"
                            disabled={carregando}
                            className="font-nunito bg-blue-300 rounded-sm text-blue-900 font-semibold text-sm px-3 py-1.5 hover:underline cursor-pointer transition-colors disabled:opacity-70"
                        >
                            {carregando ? "Salvando..." : "Salvar"}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="font-nunito bg-green-300 rounded-sm text-green-900 text-sm font-semibold px-3 py-1.5 hover:underline cursor-pointer"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}