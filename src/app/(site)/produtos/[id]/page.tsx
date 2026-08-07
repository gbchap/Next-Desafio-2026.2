import ProdutoCard from "@/components/ProdutoCard";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ProdutoPage({
      params,
    }: {
        params: Promise<{ id: string }>;
    }) {
        const { id } = await params;
        const produto = await prisma.product.findUnique({
            where: { id: Number(id) },
        });

        if (!produto){
            notFound();
        }

  return (
    <section className="bg-base py-16 px-12 md:px-24">
      <div className="flex flex-col md:flex-row gap-24 max-w-5xl mx-auto">
        <div className="items-center flex justify-start">
			<div className="relative w-full md:w-96 aspect-3/4.5 rounded-xl overflow-hidden bg-pinkish">
				<Image
					src={produto.imageURL || "/logochapterclub.png"}
					alt={produto.title}
					fill
					className="object-cover"
				/>
			</div>
        </div>
        <div className="flex flex-col gap-8">
          	<h1 className="font-nunito text-forestgreen font-black text-4xl">{produto.title}</h1>
			
			<div>
				<div className="flex items-center gap-2">
					<p className="font-nunito text-forestgreen text-sm">GÊNERO:</p>
					<p className="font-nunito text-forestgreen font-bold text-sm">{produto.gender}</p>
				</div>
				<div className="flex items-center gap-2">
					<p className="font-nunito text-forestgreen text-sm">EDITORA:</p>
					<p className="font-nunito text-forestgreen font-bold text-sm">{produto.editor}</p>
				</div>
			</div>

          	<p className="font-nunito text-forestgreen font-bold text-2xl">R$ {produto.price.toFixed(2)}</p>

			<button
				className="font-nunito self-start bg-forestgreen text-base text-xl px-12 py-2 rounded-2xl hover:bg-pinkish hover:text-forestgreen transition-colors cursor-pointer">
				Adicionar ao Carrinho
			</button>

			<div className="flex flex-col gap-4">
				<p className="font-nunito text-deepgreen text-xl font-black">RESUMO</p>
				<p className="font-nunito text-forestgreen text-lg">{produto.description}</p>
			</div>
        </div>
      </div>
    </section>
  );
}