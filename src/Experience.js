import {
  Environment,
  Float,
  useGLTF,
  PresentationControls,
  ContactShadows,
  Html,
  Text,
  Sparkles,
  Clone,
} from '@react-three/drei';
import { useThree, useLoader } from '@react-three/fiber';
import { Vector3 } from 'three';
import { useControls } from 'leva';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { TextureLoader } from 'three';
import { useMemo } from 'react';

export default function Experience() {
  const laptop = useGLTF('./laptop.gltf');
  const cup = useGLTF('./cup.gltf');
  const table = useLoader(OBJLoader, './table1.obj');
  const chair = useLoader(OBJLoader, './chair.obj');
  const chairTop = useMemo(() => {
    let geo = chair.children[0].geometry;
    return geo;
  }, [chair]);
  const chairBottom = useMemo(() => {
    let geo = chair.children[1].geometry;
    return geo;
  }, [chair]);
  console.log(chair);
  const tableGeometry = useMemo(() => {
    let geo = table.children[0].geometry;
    return geo;
  }, [table]);
  const [diff, chairLeg, chairSeat] = useLoader(TextureLoader, [
    './tableMaps/diff2.jpg',
    './chairMaps/chairLeg.jpg',
    './chairMaps/chairSeat.jpg',
  ]);

  const { camera } = useThree();

  const handleMouseOver = (type) => {
    if (type === 'IN') {
    } else if (type === 'OUT') {
    }
    console.log(camera);
  };
  const pos = useControls('pos', {
    x: { value: 0, min: -10, max: 10, step: 0.1 },
    y: { value: 0, min: -10, max: 10, step: 0.1 },
    z: { value: 0, min: -10, max: 10, step: 0.1 },
  });
  return (
    <>
      <Environment preset='city' />

      <Sparkles speed={0.5} scale={[8, 5, 8]} count={200} />

      <color args={['#695b5b']} attach='background' />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}>
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={20}
            color={'#fff'}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />

          <primitive object={laptop.scene} position-y={-1.2}>
            <Html
              transform
              wrapperClass='screenContent'
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}>
              <iframe
                src='https://imaginative-squirrel-f87fc2.netlify.app/'
                onMouseEnter={() => handleMouseOver('IN')}
                onMouseLeave={() => handleMouseOver('OUT')}
              />
            </Html>
          </primitive>
          <primitive
            object={cup.scene}
            scale={[2, 2, 2]}
            position={[-2.0, -0.8, -0.5]}
          />
          <mesh
            geometry={tableGeometry}
            scale={[0.08, 0.08, 0.08]}
            rotation-x={-Math.PI / 2}
            position={[0, -3.55, -1]}>
            <meshPhysicalMaterial map={diff} />
          </mesh>
          {/* <primitive
            object={chair}
            
          /> */}
          <mesh
            geometry={chairTop}
            scale={[0.05, 0.05, 0.05]}
            rotation-y={Math.PI}
            position={[-0.2, -4, 2.6]}>
            <meshPhysicalMaterial map={chairSeat} />
          </mesh>
          <mesh
            geometry={chairBottom}
            scale={[0.05, 0.05, 0.05]}
            rotation-y={Math.PI}
            position={[-0.2, -4, 2.6]}>
            <meshPhysicalMaterial map={chairLeg} />
          </mesh>
          <Text
            fontSize={1}
            font='./bangers-v20-latin-regular.woff'
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
            textAlign='center'>
            TRENT BLOCK
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.5} scale={5} blur={2.4} />
    </>
  );
}
useGLTF.preload('./laptop.gltf');
useGLTF.preload('./cup.gltf');
