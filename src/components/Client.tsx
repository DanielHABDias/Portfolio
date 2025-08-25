"use client";

import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./Header'), { ssr: false });
const About = dynamic(() => import('./About'), { ssr: false });

export { Header, About };