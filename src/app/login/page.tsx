'use client';

import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { resolveSoa } from "node:dns";


export default function LoginPage() {

  const router = useRouter();
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
	e.preventDefault();
    setErro('');
    setCarregando(true);

	const formData = new FormData(e.currentTarget);
	const res = await fetch('/api/login', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
            email: formData.get('email'),
            password: formData.get('senha'),
        }),
	});

	const data = await res.json();
	if(res.ok){
		router.push('/gerenciamento');
	}else{
		setErro(data.error || 'Erro ao fazer login.');
	}
	setCarregando(false);
  }

  return (
    <section className="bg-softgreen min-h-screen flex flex-col md:flex-row items-center justify-center gap-28 px-4">
        <div className="flex flex-col items-center justify-center gap-8">
			<Link href="/" className="absolute top-8 left-8 font-nunito">
                <FaChevronLeft className="text-base hover:text-deepgreen transition-colors" size={24}/>
            </Link>

			<div className="p-8 w-full max-w-sm mx-auto">
				<p className="text-base font-nunito text-3xl mt-12 mb-6">Bem-vinda(o) de volta!</p>
				
				<div className="md:hidden relative w-full h-64 rounded-2xl overflow-hidden mb-6">
					<Image
						src="/login.png"
						alt="Ilustração de login"
						fill
						className="w-full h-auto object-cover object-top">
					</Image>
				</div>
					
				<form onSubmit={handleSubmit} className="flex flex-col gap-4">
					<input
                        name="email"
                        type="email"
                        placeholder="Email"
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

					{erro && <p className="text-red-400 text-sm">{erro}</p>}

					<button
                        type="submit"
                        disabled={carregando}
                        className="font-nunito bg-forestgreen text-base text-sm px-4 py-2 rounded-lg hover:bg-base hover:text-forestgreen transition-colors cursor-pointer disabled:opacity-50 mt-4"
                    >
                        {carregando ? "Cadastrando..." : "Entrar"}
                    </button>
				</form>
				<div className="flex items-center gap-4 my-6">
                    <div className="flex-1 h-px bg-base/30" />
                    <p className="font-nunito text-base text-sm">Ou</p>
                    <div className="flex-1 h-px bg-base/30" />
                </div>

				<p className="font-nunito text-base text-sm text-center">
                    Não tem conta? <Link href="/cadastro" className="font-bold hover:text-deepgreen">Cadastre-se</Link>
                </p>
			</div>
		</div>
		<div className="hidden md:block w-full max-w-md">
			<Image
				src="/login.png"
				alt="Ilustração de login"
				width={500}
				height={500}
				className="w-full h-auto object-contain">
			</Image>
		</div>
	</section>
  );
}