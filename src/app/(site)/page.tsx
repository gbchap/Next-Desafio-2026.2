import Image from "next/image";
import Link from 'next/link';
import CarrosselLiv from "@/components/CarrosselLiv";
import CarrosselPromo from "@/components/CarrosselPromo";
import prisma from "@/lib/db";

type CardSobre = {
  id: number;
  numero: string;
  titulo: string;
  conteudo: string;
};

async function getSobreNos() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/sobre`, { cache: 'no-store' });
  return res.json();
}

export default async function Home() {
  const todosLivros = await prisma.product.findMany({ take: 12 });
  const sobreNos = await getSobreNos();

  const livrosFormatados = todosLivros.map((produto) => ({
    id: String(produto.id),
    title: produto.title,
    description: produto.description,
    price: `R$ ${produto.price.toFixed(2)}`,
    imageURL: produto.imageURL || "/placeholder-livro.jpg",
  }));

  const metade = Math.ceil(livrosFormatados.length / 2);
  const fileira1 = livrosFormatados.slice(0, metade);
  const fileira2 = livrosFormatados.slice(metade);

  return (
    <main className="bg-base md:bg-none py-8">
      <div className="flex flex-col md:flex-row items-center justify-around gap-2 md:gap-32 px-6 md:px-16 md:py-8 text-left">
        <div className="flex flex-col items-center md:items-start justify-start gap-4 md:gap-12 order-2 md:order-1">
          <p className="text-forestgreen font-nunito font-semibold text-2xl md:text-4xl">
            A vida não vem com manual,<br />mas pode vir com <span className="font-dancing text-3xl md:text-5xl">livros</span>.
          </p>
          <p className="text-forestgreen font-nunito text-sm md:text-xl md:font-semibold">
            um cantinho onde as páginas ganham vida e cada capa
            esconde um mundo esperando pra ser descoberto. esse
            espaço foi feito pra você se perder (e se encontrar) entre
            as estantes {'<3'}
          </p>
          <Link
            href="/produtos"
            className="bg-forestgreen text-base font-nunito font-bold px-6 py-2 md:px-8 md:py-3 mt-8
            rounded-xl md:rounded-full hover:bg-pinkish hover:text-forestgreen transition-colors cursor-pointer">
            Ver produtos
          </Link>
        </div>

        <Image
          src="/gatinho.png"
          alt="LogoGatinho"
          width={600}
          height={40}
          className="order-1 md:order-2 w-60 md:w-auto h-auto"
        />
      </div>

      <div className="px-4 md:px-0 mt-16 mb-16 md:mt-0">
        <CarrosselPromo />
      </div>

      <div className="flex flex-col items-center md:items-start justify-center px-6 md:px-20 gap-6 mt-12 md:mt-32">
        <p className="text-forestgreen font-nunito font-bold text-xl md:text-2xl">
          Mais Vendidos
        </p>
      </div>

      <div className="mb-12 md:mb-24">
        <CarrosselLiv fileira1={fileira1} fileira2={fileira2} />
      </div>

      <section className="bg-[url('/fundorosa.png')] bg-cover bg-center bg-no-repeat py-16 md:py-24 px-4 md:px-32">

        <div className="flex items-center justify-center md:mb-24">
          <p className="text-forestgreen font-nunito font-semibold text-3xl md:text-5xl text-center">
            ✦ Sobre <span className="font-dancing text-4xl md:text-6xl">Nós</span> ✦
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8 md:gap-24 m-12">
          {sobreNos.map((card: CardSobre) => (
            <section key={card.id} className="bg-base rounded-2xl p-8 flex-1 min-h-70 md:min-h-80">
                <section className="flex flex-col gap-4 md:gap-6">
                    <h1 className="text-forestgreen font-nunito text-3xl md:text-5xl">{card.numero}</h1>
                    <h1 className="text-forestgreen font-nunito text-2xl md:text-4xl">{card.titulo}</h1>
                    <p className="text-forestgreen font-nunito text-sm md:text-lg">{card.conteudo}</p>
                </section>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
