'use client';

import { Container } from "@mui/material";
import Title from "./Title";
import Typed from "./Typed";

export default function About() {
    return (
        <Container>
            <Title text="About" lineColor="blue" />
            <Typed
                strings={
                    [
                    `Olá! Eu sou um programador full-stack com habilidades em uma variedade de tecnologias. Aqui estão algumas das minhas principais habilidades:

                    Linguagens de programação:

                    JavaScript (JS): eu tenho experiência em trabalhar com JavaScript para criar aplicações web dinâmicas e interativas.
                    PHP: eu sei trabalhar com PHP para criar aplicações web robustas e escaláveis.
                    TypeScript (TS): eu também tenho experiência em trabalhar com TypeScript, que é um superset de JavaScript que adiciona tipagem estática e outras funcionalidades.
                    Frameworks e bibliotecas:

                    React: eu sou especializado em criar aplicações web com React, um framework popular para criar interfaces de usuário.
                    Outras tecnologias: eu também tenho experiência em trabalhar com outras tecnologias, como HTML, CSS, jQuery, Bootstrap, etc.
                    Habilidades gerais:

                    Desenvolvimento web: eu sei criar aplicações web completas, desde o front-end até o back-end.
                    Programação: eu tenho habilidades em programação em geral, incluindo estruturas de dados, algoritmos, etc.
                    Resolução de problemas: eu sou bom em resolver problemas e encontrar soluções criativas.
                    O que eu posso fazer:

                    Criar aplicações web dinâmicas e interativas com JavaScript e React.
                    Desenvolver aplicações web robustas e escaláveis com PHP.
                    Trabalhar com TypeScript para criar aplicações web mais seguras e escaláveis.
                    Criar interfaces de usuário atraentes e fáceis de usar com HTML, CSS e jQuery.
                    Resolver problemas e encontrar soluções criativas para desafios de programação.
                    Se você está procurando por um programador full-stack experiente e apaixonado para trabalhar em seu projeto, eu sou a pessoa certa para você! Vamos trabalhar juntos para criar algo incrível!`,
                    ]
                }
                loop={false}
            />
        </Container>
    );
}