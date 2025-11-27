import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Livraria Whendy",
  description: "A melhor livraria online para todos os amantes de livros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Navbar />
      <body className="">
        {children}
      </body>
      <Footer />
    </html>
  );
}
