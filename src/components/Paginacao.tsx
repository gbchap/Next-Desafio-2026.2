'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Paginacao({
    paginaAtual,
    totalPaginas,
} : {
    paginaAtual: number;
    totalPaginas: number;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    function irParaPagina(pagina: number) {
        const params = new URLSearchParams(searchParams);
        params.set('page', String(pagina));
        router.push(`${pathname}?${params.toString()}`);
    }

    if (totalPaginas <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-4 pb-16">
            <button
                onClick={() => irParaPagina(paginaAtual - 1)}
                disabled={paginaAtual === 1}
                className="bg-pinkish rounded-full p-2 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Página anterior"
            >
                <ChevronLeft className="text-forestgreen" size={20} /> 
            </button>
            <span className="font-nunito text-forestgreen text-sm">
                Página {paginaAtual} de {totalPaginas}
            </span>
            <button
                onClick={() => irParaPagina(paginaAtual + 1)}
                disabled={paginaAtual === totalPaginas}
                className="bg-pinkish rounded-full p-2 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Página seguinte"
            >   
            <ChevronRight className="text-forestgreen" size={20} /> 

            </button>
        </div>
    )
}