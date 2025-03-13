"use client";

import React, { useEffect, useState } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Wsa from "./Wattson_Strange_Attractor";

const Experience = () => {
  const [groupPosition, setGroupPosition] = useState([0, -30, 0]);
  const [groupCamera, setGroupCamera] = useState([0, 0, 0]);
  const [modelScale, setModelScale] = useState([1, 1, 1]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Set position for mobile
        setGroupPosition([0, -6, 1]);
        setGroupCamera([10, 10, 10]);
        setModelScale([0.6, 0.7, 0.7]); // Adjust the scale for mobile
      } else {
        // Set position for PC
        setGroupPosition([1, -22, 0]);
        setGroupCamera([60, 10, 10]);
        setModelScale([1, 1, 1]); // Default scale for PC
      }
    };

    // Initial call to set positions based on current window size
    handleResize();
    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas className="w-screen h-screen">
      <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} minDistance={50} maxDistance={150} />
      <ambientLight />
      <directionalLight position={[1, 5, 15]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <PerspectiveCamera makeDefault position={groupCamera} />
      <group position={groupPosition} scale={modelScale}>
        <Wsa />
      </group>
    </Canvas>
  );
};

export default Experience;