import prisma from "@/lib/db";
import TabelaGerenciamento from "@/components/TabelaGerenciamento";

export default async function GerenciamentoPage() {
  	const produtos = await prisma.product.findMany({
		orderBy: { id: 'asc' },
  	});

	return (
		<div className="flex min-h-screen bg-[url('/fundoverdeesc.png')] bg-cover bg-center">
			<aside className="hidden md:block w-64 shrink-0 bg-forestgreen/40 p-6">
				<p className="font-nunito text-base text-sm">[ Sidebar aqui ]</p>
			</aside>

			<main className="flex-1 p-6 md:p-10">
				<div className="flex items-center justify-between mb-8">
					<h1 className="font-nunito font-bold text-base text-3xl">Gerenciar Produtos</h1>
					<button className="bg-pinkish text-forestgreen font-nunito font-bold px-4 py-2 rounded-full hover:bg-base transition-colors cursor-pointer">
						Criar Novo Produto
					</button>
				</div>
				<TabelaGerenciamento produtos={produtos} />
			</main>
		</div>
  	);
}