'use client';

import Image from "next/image";
import Link from 'next/link';
import Carrossel from "@/components/Carrossel";
import { IoIosSearch } from "react-icons/io";


const livrosLinha1 = [
  { id: "1", titulo: "Casas Estranhas", desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preco: "R$ 45,90", imagem: "/casasEstranhas.jpg" },
  { id: "2", titulo: "Confiança", desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
    preco: "R$ 52,00", imagem: "/Confianca.jpg" },
  { id: "3", titulo: "Diário 3", desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
     preco: "R$ 36,50", imagem: "/diario3.jpg" },
  { id: "4", titulo: "Yellowface", desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preco: "R$ 49,90", imagem: "/impostora.jpg" },
  { id: "5", titulo: "A Redoma de Vidro", desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preco: "R$ 49,90", imagem: "/Redoma.jpg" },
  { id: "6", titulo: "Os Sete Maridos de Evelyn Hugo", desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preco: "R$ 49,90", imagem: "/maridos.jpg" },
];    

const livrosLinha2 = [
  { id: "7", titulo: "Não Há Divisão Antimemética", desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preco: "R$ 45,90", imagem: "/NaoHaDivisaoAntimemetica.jpg" },
  { id: "8", titulo: "O Conto da Aia", desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preco: "R$ 53,00", imagem: "/oContoDaAia.jpg" },
  { id: "9", titulo: "1984", desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preco: "R$ 38,50", imagem: "/1984.jpg" },
  { id: "4", titulo: "Yellowface", desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preco: "R$ 49,90", imagem: "/impostora.jpg" },
  { id: "5", titulo: "A Redoma de Vidro", desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preco: "R$ 49,90", imagem: "/Redoma.jpg" },
  { id: "6", titulo: "Os Sete Maridos de Evelyn Hugo", desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preco: "R$ 49,90", imagem: "/maridos.jpg" },
];


export default function productPage() {
    return(
        <section className="bg-base">
            <section className="bg-[url('/fundoverdeesc.png')] bg-cover bg-center bg-no-repeat py-12 md:py-24">
                <div className="hidden md:flex flex-row items-center justify-around px-36 gap-10">
                    <div className="hidden md:flex flex-col items-start justify-around gap-2">
                        <p className="text-pinkish font-roboto font-bold text-2xl">
                            Encontre seu Favorito!
                        </p>
                        <div className="items-center flex justify-start">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    className="peer block p-2 pl-10 w-160 text-forestgreen bg-base rounded-lg border border-forestgreen focus:pl-3"
                                    placeholder="Pesquisar"
                                />
                                <div className="absolute top-3 left-3 items-center peer-focus:opacity-0 transition-opacity duration-50">
                                    <IoIosSearch className="text-forestgreen" size={16} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image src="/logochapterclub.png" alt="Logo" width={420} height={40}/>
                </div>

                {/* ---------------------------RESPONSIVIDADE--------------------------- */}
                <div className="md:hidden flex-row items-center justify-around px-12">
                    <div className="flex-col items-start justify-around gap-4">
                        <div className="flex items-center justify-center m-8">
                            <Image src="/logochapterclub.png" alt="Logo" width={240} height={40}/>
                        </div>
                        <p className="text-pinkish font-roboto text-ms">Encontre seu Favorito!</p>
                        <div className="relative flex items-center w-full max-w-xs">
                            <input
                                type="text"
                                className="peer block p-2 pl-10 w-full text-forestgreen bg-base rounded-lg border border-forestgreen focus:pl-3"
                                placeholder="Pesquisar"
                            />
                            <div className="absolute top-3 left-3 items-center peer-focus:opacity-0 transition-opacity duration-50">
                                <IoIosSearch className="text-forestgreen" size={16} />
                            </div>
                        </div>
                    </div>    
                </div>
                {/* ---------------------------RESPONSIVIDADE-fim-------------------------- */}
            </section>

            <section className="bg-base flex-row items-center justify-center">
                <div className="flex items-center justify-center mt-12 md:mt-24">
                    <p className="text-forestgreen font-dancing font-semibold text-6xl">
                    Mais Populares
                    </p>
                </div>

                <div className="mb:mt-12">
                    <Carrossel fileira1={livrosLinha1} fileira2={livrosLinha2}/>
                </div>
            </section>
        </section>
    );
}