"use client";
import React, { useEffect, useRef, useState } from "react";
import { Application } from "@splinetool/runtime";

interface SplineLocalProps {
  scene: string;
  className?: string;
  placeholder?: string; // imagen estática opcional
}

export default function SplineLocal({ scene, className, placeholder }: SplineLocalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [load3D, setLoad3D] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoad3D(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!load3D || !canvasRef.current) return;

    const app = new Application(canvasRef.current);
    app.load(scene);

    return () => {
      app.dispose(); // libera recursos WebGL
    };
  }, [load3D, scene]);

  return (
    <div className={`relative ${className}`}>
      {!load3D && placeholder && (
        <div>
        </div>
      )}
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
