"use client";

import dynamic from 'next/dynamic';

const Body = dynamic(() => import('@/components/Body'), { ssr: false });

export { Body };