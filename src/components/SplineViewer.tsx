"use client";
import React, { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";
interface SplineLocalProps {
    scene: string;
    className?: string;
}
export default function SplineLocal({ scene, className }: SplineLocalProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;
        const app = new Application(canvasRef.current);
        app.load(scene);
    }, [scene]);

    return <canvas ref={canvasRef} className={className} />;
}
