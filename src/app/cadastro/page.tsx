'use client';

import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function CadastroPage() {
    const router = useRouter();
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        setErro('');
        setCarregando(true);
        
        const formData = new FormData(e.currentTarget);
        const senha = formData.get('senha');
        const confirmarSenha = formData.get('confirmarSenha');

        if (senha !== confirmarSenha) {
            setErro('As senhas não coincidem.');
            setCarregando(false);
            return;
        }

        const res = await fetch('/api/cadastro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                password: senha,
            }),
        });

        const data = await res.json();

        if(res.ok){
            router.push('/login');
        }else{
            setErro(data.error || 'Erro ao cadastrar.');
        }
        
        setCarregando(false);
    }

    return (
        <section className="bg-pinkish min-h-screen flex flex-col md:flex-row items-center justify-center gap-28 px-4">
            <div className="flex flex-col items-center justify-center gap-8">
                <Link href="/" className="absolute top-8 left-8 font-nunito">
                    <FaChevronLeft className="text-softgreen hover:text-pink-900 transition-colors" size={24}/>
                </Link>

                <div className="p-8 w-full max-w-sm mx-auto">
                    <p className="text-pink-900 font-nunito text-3xl mt-12 mb-6">Faça seu Cadastro! {'<3'}</p>

                    <div className="md:hidden relative w-full h-64 rounded-2xl overflow-hidden mb-6">
                        <Image
                            src="/cadastro.png"
                            alt="Ilustração de cadastro"
                            fill
                            className="w-full h-auto object-cover object-top">
                        </Image>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            name="name"
                            type="text"
                            placeholder="Nome"
                            required
                            className="p-3 rounded-lg border border-base/40 bg-base text-forestgreen font-nunito outline-none focus:border-forestgreen"
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="E-mail"
                            required
                            className="p-3 rounded-lg border border-base/40 bg-base text-forestgreen font-nunito outline-none focus:border-forestgreen"
                        />
                        <input
                            name="senha"
                            type="password"
                            placeholder="Senha"
                            required
                            className="p-3 rounded-lg border border-base/40 bg-base text-forestgreen font-nunito outline-none focus:border-forestgreen"
                        />
                        <input
                            name="confirmarSenha"
                            type="password"
                            placeholder="Confirmar Senha"
                            required
                            className="p-3 rounded-lg border border-base/40 bg-base text-forestgreen font-nunito outline-none focus:border-forestgreen"
                        />

                        {erro && <p className="text-red-400 text-sm">{erro}</p>}

                        <button
                            type="submit"
                            disabled={carregando}
                            className="font-nunito bg-softgreen text-base text-sm px-4 py-2 rounded-lg hover:bg-base hover:text-forestgreen transition-colors cursor-pointer disabled:opacity-50 mt-4"
                        >
                            {carregando ? "Cadastrando..." : "Cadastrar"}
                        </button>
                    </form>

                    <div className="flex items-center gap-4 my-6">
                        <div className="flex-1 h-px bg-forestgreen/30" />
                        <p className="font-nunito text-forestgreen text-sm">Ou</p>
                        <div className="flex-1 h-px bg-forestgreen/30" />
                    </div>

                    <p className="font-nunito text-forestgreen text-sm text-center">
                        Já tem conta? <Link href="/login" className="font-bold hover:text-pink-900">Faça Login</Link>
                    </p>

                </div>
            </div>
            <div className="hidden md:block w-full max-w-md">
                <Image
                    src="/cadastro.png"
                    alt="Ilustração de cadastro"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain">
                </Image>
            </div>

        </section>
    ) 
}