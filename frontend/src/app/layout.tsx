import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Dias",
  description: "Sou Daniel Dias, desenvolvedor full-stack com foco em back-end, e este é meu portfólio online. O front-end foi construído com Next.js, React, TypeScript e MUI, organizado em sessões de About, Skills, Experience, Project, Achievements e Contact, garantindo performance, responsividade e boa experiência ao usuário. O back-end, desenvolvido em Python com FastAPI, oferece funcionalidades dinâmicas, incluindo um chat com IA sobre mim e envio de e-mails via formulário. O site está hospedado no Vercel (front-end) e Render (back-end), permitindo fácil integração e manutenção. O portfólio destaca meus projetos, habilidades e conquistas, oferecendo navegação intuitiva e interatividade completa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
