"use client";

import { createContext } from "react";

type AsideInfo = {
    type: string;
    title: string;
    link: string;
}

interface UserContext {
  'name': string;
  'years': number;
  'email': AsideInfo;
  'linkedin': AsideInfo;
  'whatsapp': AsideInfo;
  'title': string;
  'titles': string[];
  'about': string;
  'avatar': string;
}

const UserContext = createContext<UserContext>({
  'name': '',
  'years': 0,
  'email': {
    'type': 'email',
    'title': '',
    'link': ''
  },
  'linkedin':  {
    'type': 'linkedin',
    'title': '',
    'link': ''
  },
  'whatsapp':  {
    'type': 'whatsapp',
    'title': '',
    'link': ''
  },
  'title': '',
  'titles': [],
  'about': '',
  'avatar': ''
});

const UserProvider = ({ children }: any) => {
    const user = {
        'name': 'Daniel Dias',
        'years': 21,
        'email': {
            'type': 'Email',
            'title': 'danielhabdias@gmail.com',
            'link': 'mailto:danielhabdias@gmail.com?subject=Proposta de trabalho&body=Olá somos a Empresa...'
        },
        'linkedin': {
            'type': 'Linkedin',
            'title': 'Daniel Dias',
            'link': 'https://www.linkedin.com/in/daniel-henrique-alves-bicalho-dias-0143ab240'
        },
        'whatsapp': {
            'type': 'Whatsapp',
            'title': 'Talk to me',
            'link': 'https://wa.me/5531994332959'
        },
        'title': 'Full-Stack Developer',
        'titles': [
            'Full-Stack Developer',
            'Front-End Developer',
            'Back-End Developer'
        ],
        'about': 'Eu sou desenvolvedor full-stack e amo programação',
        'avatar': '/avatar.webp',
    };

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };