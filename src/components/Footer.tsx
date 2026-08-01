'use client';

import Link from 'next/link';
import Image from "next/image";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { useState } from "react";

export default function Footer(){
    const linkStyle = "font-nunito text-forestgreen hover:text-pink-500 text-lg transition-colors";
    const mobileLinkClass = "font-nunito text-forestgreen hover:text-pink-500 text-sm transition-colors";

    return (
        <footer className="bg-linear-to-b from-base to-pinkish md:bg-base md:bg-none py-16">
            <div className="hidden md:flex items-center justify-around">  
                <div className="flex flex-col items-start justify-start gap-6">
                    <Image src="/logochapterclub.png" alt="Logo" width={160} height={40}/>
                    <p className="text-forestgreen font-nunito text-2xl">
                        um cantinho de páginas <br></br>fresquinhas esperando por você.
                    </p>
                </div>
                <Image src="/detalheLivro.png" alt="detalhe" width={280} height={16}/>
            </div>
            <div className="hidden md:flex h-0.5 w-full bg-forestgreen my-12" />
            <div className="flex items-center justify-center">
                <ul className="hidden md:flex gap-12">
                    <li>
                        <Link href="/PrivacyPolicy" className={linkStyle}>Política de Privacidade</Link>
                    </li>
                    <li>
                        <Link href="/TermsUse" className={linkStyle}>Termos de Uso</Link>
                    </li>
                    <li>
                        <Link href="/FAQ" className={linkStyle}>FAQ</Link>
                    </li>
                    <li>
                        <p className={linkStyle}>© 2026 Chapter Club. Todos os direitos reservados</p>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={linkStyle} size={28} />
                        </a>
                    </li>
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className={linkStyle} size={28} />
                        </a>
                    </li>
                    <li>
                        <a href="https://Tiktok.com" target="_blank" rel="noopener noreferrer">
                        <FaTiktok className={linkStyle} size={28} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="md:hidden flex flex-col items-center justify-center gap-6">

                <div className="md:hidden flex items-center justify-around">  
                    <Image src="/logochapterclub.png" alt="Logo" width={160} height={40}/>
                </div>

                <ul className="md:hidden flex flex-col items-center justify-center gap-4">
                    <li>
                        <p className="font-nunito text-forestgreen text-xs transition-colors">© 2026 Chapter Club. Todos os direitos reservados</p>
                    </li>
                    <li>
                        <Link href="/PrivacyPolicy" className={mobileLinkClass}>Política de Privacidade</Link>
                    </li>
                    <li>
                       <Link href="/TermsUse" className={mobileLinkClass}>Termos de Uso</Link>
                    </li>
                    <li>
                        <Link href="/FAQ" className={mobileLinkClass}>FAQ</Link>
                    </li>
                </ul>
                <ul className="md:hidden flex flex-row items-center justify-center gap-8">
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className={mobileLinkClass} size={28} />
                        </a>
                    </li>
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className={mobileLinkClass} size={28} />
                        </a>
                    </li>
                    <li>
                        <a href="https://Tiktok.com" target="_blank" rel="noopener noreferrer">
                        <FaTiktok className={mobileLinkClass} size={28} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}