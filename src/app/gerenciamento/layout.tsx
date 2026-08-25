import Footer from "@/components/Footer";

export default function GerenciamentoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    {children}
    <Footer />
  </>;
}