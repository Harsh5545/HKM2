// import { useGLTF } from '@react-three/drei';
// import { Float } from '@react-three/drei';
// import { Canvas } from '@react-three/fiber';
// import { ErrorBoundary } from 'react-error-boundary';
// import { Suspense } from 'react';

// const HKMModel = () => {
//   const { scene } = useGLTF('/hkm-animation.glb'); // Use your actual model file

//   return (
//     <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
//       <primitive object={scene} scale={1.5} />
//     </Float>
//   );
// };

// const ErrorFallback = ({ error, resetErrorBoundary }) => {
//   return (
//     <div role="alert">
//       <p>Something went wrong:</p>
//       <pre>{error.message}</pre>
//       <button onClick={resetErrorBoundary}>Try again</button>
//     </div>
//   );
// };

// const HKMModelWrapper = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <ErrorBoundary FallbackComponent={ErrorFallback}>
//         <Canvas>
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[2, 5, 2]} intensity={1} />
//           <HKMModel /> {/* Custom 3D Animated Model */}
//         </Canvas>
//       </ErrorBoundary>
//     </Suspense>
//   );
// };

// export default HKMModelWrapper;