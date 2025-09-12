"use client";

import dynamic from 'next/dynamic';

const Body = dynamic(() => import('@/components/organism/Body'), { ssr: false });
const StarBackground = dynamic(() => import('@/components/organism/StarBackground'), { ssr: false });

export { Body, StarBackground };