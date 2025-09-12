"use client";

import React, { useRef, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Star {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
  deltaOpacity: number;
}

export default function StarBackground() {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars: Star[] = [];
  const numStars = 200; 
  const maxRadius = 1.5;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * maxRadius,
        speed: Math.random() * 0.3 + 0.05,
        opacity: Math.random(),
        deltaOpacity: Math.random() * 0.02 + 0.005,
      });
    }

    let animationFrameId: number;
    const animate = () => {
      if (!ctx) return;

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        star.y -= star.speed;
        if (star.y < 0) star.y = canvas.height;

        star.opacity += star.deltaOpacity;
        if (star.opacity > 1 || star.opacity < 0.1) star.deltaOpacity *= -1;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: isMobile ? "none" : "block",
        position: "fixed",        
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1000,                
        pointerEvents: "none",    
      }}
    />
  );
}
