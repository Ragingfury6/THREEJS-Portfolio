import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.js';
import { Camera } from './Camera';
import { Suspense } from 'react';
import { Portfolio } from './Portfolio';

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
    <Portfolio />
  </Canvas>
);
