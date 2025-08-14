"use client";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline").then(mod => mod.default), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center">Cargando...</div>
});

export default function SplineViewer() {
  return (
    <Spline scene="https://prod.spline.design/nC8mML7yKDFE4yTp/scene.splinecode" />
  );
}
