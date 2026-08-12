"use client";
import dynamic from "next/dynamic";

const SplineLocal = dynamic(() => import("./SplineViewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
    </div>
  ),
});
export const Imagen3D = () => {
  return (
    <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] xl:h-screen flex items-center justify-center pt-10 sm:pt-8 xl:pt-0 xl:-translate-y-20 md:-translate-y-24">
      <div className="relative overflow-hidden w-[min(85vw,420px)] max-w-full aspect-square md:w-[min(60vw,1000px)] flex items-center justify-center">
        <SplineLocal
          scene="https://prod.spline.design/nC8mML7yKDFE4yTp/scene.splinecode"
          className="w-full h-full"
          placeholder="/logo.png"
        />
        {/* Difumina el watermark de Spline (esquina inferior, tamaño fijo en px):
            va pegado al propio lienzo, no al contenedor externo (mucho más alto),
            para que cubra el logo sea cual sea el tamaño de pantalla. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-bg-dark from-45% via-bg-dark/95 via-75% to-transparent" />
      </div>
    </div>
  );
};
