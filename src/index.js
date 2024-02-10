import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.js';
import { Camera } from './Camera';
import { Suspense } from 'react';
import { Portfolio } from './Portfolio';
import { Sparkles, Stars } from '@react-three/drei';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <Canvas
    shadows={true}
    // camera={{
    //   fov: 45,
    //   near: 0.1,
    //   far: 2000,
    //   // position: [0.6, 3, 4],
    //   position: [0, 10, 10],
    // }}
  >
    {/* <Suspense fallback={null}>
      <Camera />
    </Suspense>
    <Experience /> */}
    <Suspense fallback={null}>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Portfolio />
      <Sparkles speed={0.5} scale={[8, 5, 8]} count={600} />
    </Suspense>
  </Canvas>
);
