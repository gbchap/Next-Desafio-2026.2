import prisma from "@/lib/db";
import TabelaGerenciamento from "@/components/TabelaGerenciamento";
import Sidebar from "@/components/Sidebar";

export default async function GerenciamentoPage() {
  	const produtos = await prisma.product.findMany({
		orderBy: { id: 'asc' },
  	});

	return (
		<div className="flex min-h-screen items-start bg-[url('/fundoverdeesc.png')] bg-cover bg-center">
			<Sidebar />
			<main className="flex-1 p-6 md:p-10 pt-20 pb-20 md:pb-24 md:pt-10">
				<div className="flex items-center justify-center md:justify-between mb-8">
					<h1 className="font-nunito font-bold text-pinkish text-4xl">Gerenciar Produtos</h1>
				</div>
				<TabelaGerenciamento produtos={produtos} />
			</main>
		</div>
  	);
}