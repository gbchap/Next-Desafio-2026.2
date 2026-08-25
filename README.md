# 📚 ChapterClub

Site expositivo em formato e-commerce desenvolvido como parte do **Desafio de Next 2026.2** da CodeJr.

🔗 **Site em produção:** [chapterclub-next-2026-2.vercel.app](https://chapterclub-next-2026-2.vercel.app)
📦 **Repositório:** [github.com/gbchap/Next-Desafio-2026.2](https://github.com/gbchap/Next-Desafio-2026.2)

---

## ✨ Sobre o projeto

O ChapterClub é uma livraria fictícia criada para colocar em prática funcionalidades comuns em projetos reais de e-commerce: catálogo de produtos, carrinho de compras, autenticação de administrador e painel de gerenciamento.

### Funcionalidades

- Página inicial com carrossel de produtos e seção "Sobre Nós"
- Página de produtos com barra de pesquisa e paginação
- Página de visualização individual de produto
- Carrinho de compras
- Login e cadastro de administrador
- Painel de gerenciamento de produtos (CRUD)
- Página de contato

---

## 🛠️ Tecnologias

- [Next.js](https://nextjs.org/docs) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [Prisma](https://www.prisma.io/docs/getting-started) (ORM)
- [PostgreSQL](https://railway.app/) (hospedado no Railway)
- [Lucide React](https://lucide.dev/guide/packages/lucide-react)

---

## 🚀 Rodando localmente

### Pré-requisitos

- Node.js instalado
- Uma instância de banco PostgreSQL (o [Railway](https://railway.app/) oferece uma opção gratuita fácil de configurar)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/gbchap/Next-Desafio-2026.2.git
cd Next-Desafio-2026.2

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
# Crie um arquivo .env na raiz do projeto (veja seção abaixo)

# 4. Rode as migrations do banco
npx prisma migrate dev

# 5. Popule o banco com dados iniciais (se houver seed configurado)
npx prisma db seed

# 6. Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:3000`.

---

## 🔑 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
DATABASE_URL="sua-url-de-conexao-do-postgresql"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

> Em produção (Vercel), `NEXT_PUBLIC_SITE_URL` deve ser configurada com a URL final do deploy, ex: `https://chapterclub-next-2026-2.vercel.app`.

---

## ☁️ Deploy

O projeto está publicado na **Vercel**:

👉 **[https://chapterclub-next-2026-2.vercel.app](https://chapterclub-next-2026-2.vercel.app)**

O deploy foi feito conectando o repositório do GitHub diretamente à Vercel, com as variáveis de ambiente (`DATABASE_URL` e `NEXT_PUBLIC_SITE_URL`) configuradas no painel do projeto em *Settings → Environment Variables*.

---

## 👤 Autor

Desenvolvido por [gbchap](https://github.com/gbchap) como parte do Desafio de Next 2026.2 da CodeJr.

