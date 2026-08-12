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
      <div className="w-[min(85vw,420px)] max-w-full aspect-square md:w-[min(60vw,1000px)] flex items-center justify-center">
        <SplineLocal
          scene="https://prod.spline.design/nC8mML7yKDFE4yTp/scene.splinecode"
          className="w-full h-full"
          placeholder="/logo.png"
        />
      </div>
      {/* Difumina el logo/watermark inferior del visor 3D hacia el fondo de la página */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 sm:h-48 md:h-64 bg-gradient-to-t from-bg-dark from-40% via-bg-dark/95 via-65% to-transparent" />
    </div>
  );
};
