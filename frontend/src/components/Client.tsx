"use client";

import dynamic from 'next/dynamic';

const Body = dynamic(() => import('@/components/organism/Body'), { ssr: false });

export { Body };