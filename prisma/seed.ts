import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() { 
  
  await prisma.product.deleteMany();

  const livros = [

    {
      title: "Casas Estranhas",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 45.90,
      editor: "Editora Exemplo",
      gender: "Terror",
      imageURL: "/casasEstranhas.jpg",
    },
    {
      title: "Confiança",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 52.00,
      editor: "Editora Exemplo",
      gender: "Romance",
      imageURL: "/Confianca.jpg",
    },
    {
      title: "Diário 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 36.50,
      editor: "Editora Exemplo",
      gender: "Ficção",
      imageURL: "/diario3.jpg",
    },
    {
      title: "Yellowface",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 49.90,
      editor: "Editora Exemplo",
      gender: "Drama",
      imageURL: "/impostora.jpg",
    },
    {
      title: "A Redoma de Vidro",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 49.90,
      editor: "Editora Exemplo",
      gender: "Clássico",
      imageURL: "/Redoma.jpg",
    },
    {
      title: "Os Sete Maridos de Evelyn Hugo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 49.90,
      editor: "Editora Exemplo",
      gender: "Romance",
      imageURL: "/maridos.jpg",
    },
    {
      title: "Não Há Divisão Antimemética",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 45.90,
      editor: "Editora Exemplo",
      gender: "Terror",
      imageURL: "/NaoHaDivisaoAntimemetica.jpg",
    },
    {
      title: "O Conto da Aia",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 53.00,
      editor: "Editora Exemplo",
      gender: "Distopia",
      imageURL: "/oContoDaAia.jpg",
    },
    {
      title: "1984",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 38.50,
      editor: "Editora Exemplo",
      gender: "Distopia",
      imageURL: "/1984.jpg",
    }
  ];

  for (const livro of livros) {
        await prisma.product.create({ data: livro });
    }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });