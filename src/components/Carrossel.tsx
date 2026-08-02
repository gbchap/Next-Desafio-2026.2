'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";


type Livro = {
    id: string;
    titulo: string;
    desc: string;
    preco: string;
    imagem: string;
};

function useIsMobile(){
    const[isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        const checarTam = () => setIsMobile(window.innerWidth < 768);
        checarTam();
        window.addEventListener("resize", checarTam);
        return () => window.removeEventListener("resize", checarTam);
    }, []);

    return isMobile;
}

function FileiraCarrossel({livros}: {livros: Livro[]}) {
    const [pagina, setPagina] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const isMobile = useIsMobile();
    const itensPorPag = isMobile ? 1 : 3;
    const totalPag = Math.ceil(livros.length / itensPorPag);

    const livrosVisiveis = livros.slice(
        pagina * itensPorPag,
        pagina * itensPorPag + itensPorPag
    );

    const trocarPagina = (novaPagina: number) => {
        setIsVisible(false); 
        setTimeout(() => {
            setPagina(novaPagina);
            setIsVisible(true);
        }, 150);
    };

    const proxima = () => trocarPagina((pagina + 1) % totalPag);
    const anterior = () => trocarPagina((pagina - 1 + totalPag) % totalPag);

    return(
        <div className="flex items-center px-2 md:px-24 md:gap-4">
            <button onClick={anterior} className="cursor-pointer bg-pinkish rounded-full shrink-0" aria-label="Anterior">
                <ChevronLeft className="text-forestgreen" size={32}/>
            </button>

            <div className={`flex gap-4 md:gap-10 flex-1 justify-center transition-opacity duration-150 ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}>
                {livrosVisiveis.map((livro) => (
                    <div key={livro.id} className="flex flex-row items-center gap-4 w-80">
                        <div className="relative w-35 h-50 shrink-0">
                            <Image
                                src={livro.imagem}
                                alt={livro.titulo}
                                width={140}
                                height={200}
                                className="object-cover rounded-md"
                            />
                        </div>
                        <div key={livro.id} className="flex flex-col items-start justify-start gap-4">
                            <p className="text-sm font-semibold text-forestgreen line-clamp-3 mt-1">{livro.titulo}</p>
                            <p className="text-xs text-forestgreen line-clamp-4">{livro.desc}</p>
                            <p className="font-nunito text-forestgreen text-sm">{livro.preco}</p>
                            <button
                                onClick={() => console.log("adicionar ao carrinho:", livro.id)}
                                className="font-nunito bg-forestgreen text-base text-xs px-4 py-1.5 rounded-full hover:bg-pinkish hover:text-forestgreen transition-colors cursor-pointer">
                                Adicionar ao Carrinho
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={proxima} className="cursor-pointer shrink-0 bg-pinkish rounded-full" aria-label="Próximo">
                <ChevronRight className="text-forestgreen" size={32} />
            </button>
        </div>
    );
}

export default function Carrossel({
    fileira1,
    fileira2,
}: {
    fileira1: Livro[];
    fileira2: Livro[];
}) {
    return(
        <div className="flex flex-col gap-10 py-12 px-0 md:px-6">
            <FileiraCarrossel livros={fileira1} />
            <FileiraCarrossel livros={fileira2} />
        </div>
    );
}