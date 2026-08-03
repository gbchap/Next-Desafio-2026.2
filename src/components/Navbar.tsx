'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import Image from "next/image";
import { Menu, X } from "lucide-react";

const linkStyle = "font-abhaya text-deepgreen hover:text-pink-700 text-xl transition-colors";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const pagAtual = (href: string) => pathname === href;

    const desktopLinkClass = (href: string) =>
        `${linkStyle} cursor-pointer pb-1 ${pagAtual(href) ? "border-b-2 border-pink-800" : ""}`;

    const mobileLinkClass = (href: string) =>
        `${linkStyle} cursor-pointer ${pagAtual(href) ? "text-pink-600" : ""}`;

    return(
        <nav className="bg-pinkish px-6 py-4 relative">
            <div className="flex items-center justify-between">
                <Image src="/logochapterclub.png" alt="Logo" width={120} height={40}/>

                <ul className="hidden md:flex gap-12">
                    <li><Link href="/" className={desktopLinkClass("/")}>HOME</Link></li>
                    <li><Link href="/contato" className={desktopLinkClass("/contato")}>CONTATO</Link></li>
                    <li><Link href="/produtos" className={desktopLinkClass("/produtos")}>PRODUTOS</Link></li>
                    <li><Link href="/gerenciamento" className={desktopLinkClass("/gerenciamento")}>GERENCIAMENTO</Link></li>
                    <li><Link href="/login" className={desktopLinkClass("/login")}>LOGIN</Link></li>
                    <li><Link href="/carrinho" className={desktopLinkClass("/carrinho")}>CARRINHO</Link></li>
                </ul>

                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="md:hidden cursor-pointer relative z-50"
                    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                >
                    {isOpen ? (
                        <X className="text-deepgreen" size={28} />
                    ) : (
                        <Menu className="text-deepgreen" size={28} />
                    )}
                </button>
            </div>

            {isOpen && (
                <ul className="md:hidden fixed inset-0 z-40 bg-pinkish flex flex-col items-center justify-center gap-8">
                    <li><Link href="/" onClick={() => setIsOpen(false)} className={mobileLinkClass("/")}>HOME</Link></li>
                    <li><Link href="/contato" onClick={() => setIsOpen(false)} className={mobileLinkClass("/contato")}>CONTATO</Link></li>
                    <li><Link href="/produtos" onClick={() => setIsOpen(false)} className={mobileLinkClass("/produtos")}>PRODUTOS</Link></li>
                    <li><Link href="/gerenciamento" onClick={() => setIsOpen(false)} className={mobileLinkClass("/gerenciamento")}>GERENCIAMENTO</Link></li>
                    <li><Link href="/login" onClick={() => setIsOpen(false)} className={mobileLinkClass("/login")}>LOGIN</Link></li>
                    <li><Link href="/carrinho" onClick={() => setIsOpen(false)} className={mobileLinkClass("/carrinho")}>CARRINHO</Link></li>
                </ul>
            )}
        </nav>
    );
}