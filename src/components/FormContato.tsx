'use client';

import { useState } from "react";

export default function FormularioContato(){

    const [enviando, setEnviando] = useState(false);

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        setEnviando(true);

        const formData = new FormData(e.currentTarget);
        const dados = {
            nome: formData.get('nome'),
            sobrenome: formData.get('sobrenome'),
            email: formData.get('email'),
            assunto: formData.get('assunto'),
            mensagem: formData.get('mensagem'),
        };

        console.log('Enviar: ', dados);
        setEnviando(false);

        try{
            const res = await fetch('/api/contato', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados),
        });
        
            if(res.ok){
                alert('Mensagem enviada com sucesso!');
                (e.target as HTMLFormElement).reset();
            }else{
                alert('Erro ao enviar. Tente novamente.');
            }
        } catch (error){
            console.error(error);
            alert('Erro ao enviar. Tente novamente.');
        }finally{
            setEnviando(false);
        }
    }

    return(

    <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8 md:gap-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="flex flex-col gap-1">
                <label htmlFor="nome" className="font-nunito text-forestgreen text-sm">Nome</label>
                <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    className="w-full bg-transparent border-0 border-b border-forestgreen/40 focus:border-pink-400 outline-none py-2 sm:py-1 font-nunito text-forestgreen/60"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="sobrenome" className="font-nunito text-forestgreen text-sm">Sobrenome</label>
                <input
                    id="sobrenome"
                    name="sobrenome"
                    type="text"
                    required
                    className="w-full bg-transparent border-0 border-b border-forestgreen/40 focus:border-pink-400 outline-none py-2 sm:py-1 font-nunito text-forestgreen/60"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-nunito text-forestgreen text-sm">E-mail</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-transparent border-0 border-b border-forestgreen/40 focus:border-pink-400 outline-none py-2 sm:py-1 font-nunito text-forestgreen/60"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="assunto" className="font-nunito text-forestgreen text-sm">Assunto</label>
                <input
                    id="assunto"
                    name="assunto"
                    type="text"
                    required
                    className="bg-transparent border-0 border-b border-forestgreen/40 focus:border-pink-400 outline-none py-1 font-nunito text-forestgreen/60"
                />
            </div>
            <div className="flex flex-col gap-1 w-full md:col-span-2">
                <label htmlFor="mensagem" className="font-nunito text-forestgreen text-sm">Mensagem</label>
                <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={8}
                    className="w-full bg-pinkish border border-pinkish focus:border-forestgreen/30 outline-none rounded-lg p-3 font-nunito text-forestgreen/80 resize-none"
                />
            </div>
        </div>
        
            <button
                type="submit"
                disabled={enviando}
                className="w-full sm:w-auto font-nunito bg-forestgreen text-base text-sm px-4 py-4 sm:py-2 rounded-full hover:bg-pinkish hover:text-forestgreen transition-colors cursor-pointer self-start disabled:opacity-50"
            >
                {enviando ? "Enviando..." : "Enviar Mensagem"}
            </button>
    </form>
    );
}