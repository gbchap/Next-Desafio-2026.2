import Image from "next/image";
import Link from 'next/link';
import CarrosselLiv from "@/components/CarrosselLiv";
import prisma from "@/lib/db";

export default async function Home() {
  const todosLivros = await prisma.product.findMany({ take: 12 });

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
      <div className="hidden md:flex flex-row items-center justify-around">
        <div className="flex flex-col items-start justify-start gap-8">
          <p className="text-forestgreen font-nunito font-semibold text-4xl">
            A vida não vem com manual,<br></br>mas pode vir com <span className="font-dancing text-5xl">livros</span>.
          </p>
          <p className="text-forestgreen font-nunito font-semibold text-xl">
            um cantinho onde as páginas ganham vida e cada capa<br></br>
            esconde um mundo esperando pra ser descoberto. esse<br></br>
            espaço foi feito pra você se perder (e se encontrar) entre<br></br>
            as estantes {'<3'}
          </p>
          <Link
            href="/produtos"
            className="bg-forestgreen text-base font-nunito font-bold px-8 py-3
            rounded-full hover:bg-pinkish hover:text-forestgreen transition-colors cursor-pointer">
            Ver produtos
          </Link>
        </div>
        <Image src="/gatinho.png" alt="LogoGatinho" width={640} height={40}/>
      </div>
      <div className="hidden md:flex flex-col items-start justify-center px-20 gap-6">
        <p className="text-forestgreen font-nunito font-bold text-2xl">
          Mais Vendidos
        </p>
      </div>

      {/* ---------------------------RESPONSIVIDADE--------------------------- */}

      <div className="md:hidden flex flex-col items-center">
        <Image src="/gatinho.png" alt="LogoGatinho" width={240} height={40}/>
      </div>
      <div className="md:hidden flex flex-col items-start gap-4 px-12">
        <p className="text-forestgreen font-nunito font-bold text-2xl">
            A vida não vem com manual,<br></br>mas pode vir com <span className="font-dancing text-2xl">livros</span>.
        </p>
        <p className="text-forestgreen font-nunito text-sm py-2">
            um cantinho onde as páginas ganham vida e cada capa
            esconde um mundo esperando pra ser descoberto. esse
            espaço foi feito pra você se perder (e se encontrar) entre
            as estantes {'<3'}
        </p>
        <Link
          href="/produtos"
          className="bg-forestgreen text-base font-nunito font-bold px-6 py-2
          rounded-xl hover:bg-pinkish hover:text-forestgreen transition-colors cursor-pointer">
          Ver produtos
        </Link>
        <div className="flex-col items-start mt-12">
            <p className="text-forestgreen font-nunito font-bold text-xl">
              Mais Vendidos
            </p>
        </div> 
      </div>

      {/* ---------------------------RESPONSIVIDADE-fim-------------------------- */}

      {/* ---------------carrossel---------------------------------------*/}    
      <div className="mb-12">
        <CarrosselLiv fileira1={fileira1} fileira2={fileira2} />
      </div>
      {/* -----------------carrossel-------------------------------------*/}

      <section className="bg-[url('/fundorosa.png')] bg-cover bg-center bg-no-repeat py-24">

        <div className="hidden md:flex items-center justify-center mb-8">
          <p className="text-forestgreen font-nunito font-semibold text-5xl">
            ✦ Sobre <span className="font-dancing text-6xl">Nós</span> ✦
          </p>
        </div>

        <div className="hidden md:flex items-stretch justify-center gap-24">

          <section className="bg-base rounded-2xl p-8 my-12">
            <section className="flex flex-col gap-6">
              <h1 className="text-forestgreen font-nunito text-5xl">
                01
              </h1>
              <h1 className="text-forestgreen font-nunito text-4xl">
                Missão
              </h1>
              <p className="text-forestgreen font-nunito text-lg">
                Levar histórias<br></br>novinhas até as mãos<br></br>certas,
                com carinho e<br></br>curadoria em cada<br></br>escolha.
              </p>
            </section>
          </section>

          <section className="bg-base rounded-2xl p-8 my-12">
            <section className="flex flex-col gap-6">
              <h1 className="text-forestgreen font-nunito text-5xl">
                02
              </h1>
              <h1 className="text-forestgreen font-nunito text-4xl">
                Visão
              </h1>
              <p className="text-forestgreen font-nunito text-lg">
                Ser o cantinho<br></br>favorito de quem ama<br></br>
                abrir um livro novo e<br></br>sentir aquele<br></br>
                cheirinho de página<br></br>fresca.
              </p>
            </section>
          </section>

          <section className="bg-base rounded-2xl p-8 my-12">
            <section className="flex flex-col gap-6">
              <h1 className="text-forestgreen font-nunito text-5xl">
                03
              </h1>
              <h1 className="text-forestgreen font-nunito text-4xl">
                Valores
              </h1>
              <p className="text-forestgreen font-nunito text-lg">
                Cuidado em cada<br></br>detalhe, amor pelos<br></br>
                livros e a crença de<br></br>que toda boa história<br></br>
                merece um começo<br></br>especial.
              </p>
            </section>
          </section>
        </div>
      {/* ---------------------------RESPONSIVIDADE--------------------------- */}

      <div className="md:hidden flex items-center justify-center mb-8">
        <p className="text-forestgreen font-nunito font-semibold text-4xl">
          ✦ Sobre <span className="font-dancing text-5xl">Nós</span> ✦
        </p>
      </div>
      <div className="md:hidden flex-col items-stretch justify-center gap-24 m-16">
        <section className="bg-base rounded-2xl p-8 my-12">
          <section className="flex flex-col gap-6">
            <h1 className="text-forestgreen font-nunito text-3xl">
              01
            </h1>
            <h1 className="text-forestgreen font-nunito text-2xl">
              Missão
            </h1>
            <p className="text-forestgreen font-nunito text-sm">
              Levar histórias novinhas até as mãos certas,
              com carinho e curadoria em cada escolha.
            </p>
          </section>
        </section>

        <section className="bg-base rounded-2xl p-8 my-12">
            <section className="flex flex-col gap-6">
              <h1 className="text-forestgreen font-nunito text-3xl">
                02
              </h1>
              <h1 className="text-forestgreen font-nunito text-2xl">
                Visão
              </h1>
              <p className="text-forestgreen font-nunito text-sm">
                Ser o cantinho favorito de quem ama
                abrir um livro novo e sentir aquele
                cheirinho de página fresca.
              </p>
            </section>
          </section>

          <section className="bg-base rounded-2xl p-8 my-12">
            <section className="flex flex-col gap-6">
              <h1 className="text-forestgreen font-nunito text-3xl">
                03
              </h1>
              <h1 className="text-forestgreen font-nunito text-2xl">
                Valores
              </h1>
              <p className="text-forestgreen font-nunito text-sm">
                Cuidado em cada detalhe, amor pelos
                livros e a crença de que toda boa história
                merece um começo especial.
              </p>
            </section>
          </section>
      </div>

      {/* ---------------------------RESPONSIVIDADE--fim------------------------- */}
      </section>
    </main>
  );
}
