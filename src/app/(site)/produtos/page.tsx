import Image from "next/image";
import prisma from "@/lib/db";
import SearchBar from "@/components/SearchBar";
import ProdutoCard from "@/components/ProdutoCard";
import Paginacao from "@/components/Paginacao";

const ITENS_POR_PAGINA = 8;

export default async function productPage({
        searchParams,
    }: {
        searchParams: Promise<{ query?: string; page?: string }>;
    }) {
        const params = (await searchParams) ?? {};
        const query = params.query || '';
        const paginaAtual = Number(params.page) || 1;

        const where = query
            ?{
                title: {
                    contains: query,
                    mode: 'insensitive' as const,
                },
            }
            : undefined;
        
        const [produtos, totalProdutos] = await Promise.all([
            prisma.product.findMany({
                where,
                skip: (paginaAtual - 1) * ITENS_POR_PAGINA,
                take: ITENS_POR_PAGINA,
            }),
            prisma.product.count({where}),
        ]);

        const totalPaginas = Math.ceil(totalProdutos / ITENS_POR_PAGINA);

    return(
        <section className="bg-base">
            <section className="bg-[url('/fundoverdeesc.png')] bg-cover bg-center bg-no-repeat py-12 md:py-24">
                <div className="hidden md:flex flex-row items-center justify-around px-36 gap-10">
                    <div className="hidden md:flex flex-col items-start justify-around gap-2">
                        <p className="text-pinkish font-roboto font-bold text-2xl">
                            Encontre seu Favorito!
                        </p>
                        <div className="items-center flex justify-start w-full max-w-xl">
                            <SearchBar />
                        </div>
                    </div>
                    <div className="flex-col items-center justify-center gap-2">
                        <Image src="/logochapterclub.png" alt="Logo" width={420} height={40}/>
                    </div>
                </div>
                {/* ---------------------------RESPONSIVIDADE--------------------------- */}
                <div className="md:hidden flex-row items-center justify-center px-12">
                    <div className="flex-col items-center justify-center gap-4">
                        <div className="flex items-center justify-center m-8">
                            <Image src="/logochapterclub.png" alt="Logo" width={240} height={40}/>
                        </div>
                        <p className="text-pinkish font-roboto font-bold text-ms">Encontre seu Favorito!</p>
                        <div className="relative flex items-center w-full max-w-xs">
                            <SearchBar />
                        </div>
                    </div>    
                </div>
                {/* ---------------------------RESPONSIVIDADE-fim-------------------------- */}
            </section>

            <section className="bg-base flex-row items-center justify-center">
                <div className="flex items-center justify-center mt-12 md:mt-24 md:mb-12">
                    <p className="text-forestgreen font-dancing font-semibold text-6xl">
                    Mais Populares
                    </p>
                </div>

                <div className="mb:mt-12">
                    <div className="flex flex-wrap justify-center gap-16 md:gap-32 px-4 md:px-8 py-12">
                        {produtos.map((produto) => (
                            <ProdutoCard key={produto.id} produto={produto} />
                        ))} 
                    </div>
                </div>
                <Paginacao paginaAtual = {paginaAtual} totalPaginas={totalPaginas} />
            </section>
        </section>
    );
}