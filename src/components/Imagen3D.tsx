"use client";
import SplineLocal from "./SplineViewer";
export const Imagen3D = () => {
    return (
        <div className="w-full xl:h-screen lg:h-[50vh] h-[60vh] flex items-center justify-center xl:-translate-y-20 md:-translate-y-32">
            <div className="md:w-[1000px] md:h-[900px] w-[500px] h-[500px] flex items-center justify-center">
                <SplineLocal
                    scene="https://prod.spline.design/nC8mML7yKDFE4yTp/scene.splinecode"
                    className="w-full h-full"
                />
            </div>
        </div>
    );
};
