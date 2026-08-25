export type CardSobre = {
  id: number;
  numero: string;
  titulo: string;
  conteudo: string;
};

export function getSobreNos(): CardSobre[] {
  return [
    {
      id: 1,
      numero: "01",
      titulo: "Missão",
      conteudo: "Levar histórias novinhas até as mãos certas, com carinho e curadoria em cada escolha.",
    },
    {
      id: 2,
      numero: "02",
      titulo: "Visão",
      conteudo: "Ser o cantinho favorito de quem ama abrir um livro novo e sentir aquele cheirinho de página fresca.",
    },
    {
      id: 3,
      numero: "03",
      titulo: "Valores",
      conteudo: "Cuidado em cada detalhe, amor pelos livros e a crença de que toda boa história merece um começo especial.",
    },
  ];
}