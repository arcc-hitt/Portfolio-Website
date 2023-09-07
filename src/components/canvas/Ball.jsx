import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Html,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Float speed={0.5} rotationIntensity={1} floatIntensity={1}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh 
        castShadow
        receiveShadow
        scale={2.75}
        onPointerEnter={handleMouseEnter}
        onPointerLeave={handleMouseLeave}
      >
        <dodecahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
        {isHovered && (
          <Html>
            <div
              className="bg-gray-800 text-secondary uppercase
                px-2 py-1 rounded-lg
                md:text-[12px] sm:text-[10px] xs:text-[10px] text-[16px]
                width-[fit-content]
                absolute left-1/2 transform -translate-x-1/2 translate-y-8 z-10
                select-none
                whitespace-nowrap"
            >
              {props.text}
            </div>
          </Html>
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, text }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} text={text}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;