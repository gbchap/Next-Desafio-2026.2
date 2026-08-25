'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Home, Package, LogOut, ChevronLeft, ChevronRight } from "lucide-react";

export default function Sidebar() {
    const [isOpenMobile, setIsOpenMobile] = useState(false);
    const [isExpanded, setIsExpanded] = useState(true);
    const router = useRouter();

    async function handleLogout() {
        await fetch('/api/logout', { method: 'POST' });
        router.push('/');
        router.refresh();
    }

    return (
        <>
            <button
                onClick={() => setIsOpenMobile((prev) => !prev)}
                className={`fixed top-4 left-4 z-50 bg-pinkish text-softgreen p-2 rounded-full cursor-pointer md:hidden transition-opacity duration-200 ${
                    isOpenMobile ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
                aria-label="Abrir menu"
            >
                <Menu size={24} />
            </button>

            {isOpenMobile && (
                <div
                    className="fixed inset-0 bg-black/40 z-30 md:hidden"
                    onClick={() => setIsOpenMobile(false)}
                />
            )}

            <aside
                className={`fixed md:sticky top-0 left-0 md:top-0 h-screen z-40 bg-[url('/verdeclarope.png')] bg-cover pt-4 pl-3 pr-3 flex flex-col gap-8 transition-all duration-300 shrink-0
                ${isOpenMobile ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
                ${isExpanded ? "w-64" : "md:w-20"}
                w-64
                `}
            >

                <div className={`flex items-center justify-between ${!isExpanded ? "md:justify-center" : ""}`}>
                    <Image
                        src="/logochapterclub.png"
                        alt="Logo Chapter Club"
                        width={80}
                        height={40}
                        className={isExpanded ? "opacity-100" : "md:hidden opacity-100"}
                    />

                    <button
                        onClick={() => setIsExpanded((prev) => !prev)}
                        className="hidden md:flex items-center justify-center bg-base text-forestgreen rounded-full w-8 h-8 shrink-0 cursor-pointer shadow-md"
                        aria-label={isExpanded ? "Recolher menu" : "Expandir menu"}
                    >
                        {isExpanded ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
                    </button>

                    <button
                        onClick={() => setIsOpenMobile(false)}
                        className="md:hidden text-base cursor-pointer"
                        aria-label="Fechar menu"
                    >
                        <X size={32} />
                    </button>
                </div>

                <nav className="flex flex-col gap-2 mt-4">
                    <Link
                        href="/"
                        onClick={() => setIsOpenMobile(false)}
                        className="flex items-center gap-3 font-nunito font-bold text-xl text-base hover:bg-base p-3 rounded-xl hover:text-softgreen transition-colors"
                        title="Home"
                    >
                        <Home size={28} className="shrink-0" />
                        <span className={isExpanded ? "inline" : "md:hidden"}>Home</span>
                    </Link>
                    <Link
                        href="/produtos"
                        onClick={() => setIsOpenMobile(false)}
                        className="flex items-center gap-3 font-nunito font-bold text-xl text-base hover:bg-base p-3 rounded-xl hover:text-softgreen transition-colors"
                        title="Produtos"
                    >
                        <Package size={28} className="shrink-0" />
                        <span className={isExpanded ? "inline" : "md:hidden"}>Produtos</span>
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 font-nunito font-bold text-xl text-base hover:bg-base p-3 rounded-xl hover:text-softgreen transition-colors cursor-pointer"
                        title="Deslogar"
                    >
                        <LogOut size={28} className="shrink-0" />
                        <span className={isExpanded ? "inline" : "md:hidden"}>Deslogar</span>
                    </button>
                </nav>
            </aside>
        </>
    );
}