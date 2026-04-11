"use client";

import React, { useRef, useState } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  const [glareStyle, setGlareStyle] = useState({
    opacity: 0,
    background: "",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    const maxTilt = 10; // degrees
    const rotateX = maxTilt * yPct * -1;
    const rotateY = maxTilt * xPct;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);

    // Glare effect calculation
    const angle = Math.atan2(mouseY - height / 2, mouseX - width / 2) * (180 / Math.PI);
    setGlareStyle({
      opacity: 0.2, // subtle glare
      background: `linear-gradient(${angle}deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 80%)`,
    });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-all duration-200 ease-out will-change-transform ${className}`}
      style={{ transform, transformStyle: "preserve-3d" }}
    >
      {/* Glare overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-50 rounded-3xl transition-opacity duration-300"
        style={{ ...glareStyle }}
      />
      
      {children}
    </div>
  );
}
