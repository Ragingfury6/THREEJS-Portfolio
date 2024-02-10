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
import { Color, Vector3 } from 'three';
import { useThree, useLoader, useFrame } from '@react-three/fiber';
import { useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useControls } from 'leva';

export default function Experience() {
  const [clicked, setClicked] = useState(false);
  const [animationPosition, setAnimationPosition] = useState(new Vector3());
  const [rotation, setRotation] = useState([-0.15, 0.17, 0]);

  const laptop = useGLTF('./laptop.gltf');
  const room = useLoader(GLTFLoader, './Portfolio2.glb');

  const { camera } = useThree();

  const clickHandler = (e) => {
    if (e.object.name === 'Projects') {
      setAnimationPosition(new Vector3(-2, 5, 5));
      setClicked(true);
      console.log(rotation);
    }
  };

  useFrame(() => {
    if (clicked) {
      camera.position.lerp(animationPosition, 0.01);
      camera.updateProjectionMatrix();
      const sub = camera.position.clone().sub(animationPosition.clone());
      if (sub.x < 0.1 && sub.y < 0.1 && sub.z < 0.1) setClicked(false);
    }
  });
  const { x, y, z } = useControls({
    x: {
      value: 0,
      min: -10,
      max: 10,
      step: 0.01,
    },
    y: {
      value: -0.5,
      min: -10,
      max: 10,
      step: 0.01,
    },
    z: {
      value: 0,
      min: -10,
      max: 10,
      step: 0.01,
    },
  });
  return (
    <>
      <pointLight position={[0,2,0.5]} color={new Color("#FCF9D9")}/>

      <Sparkles speed={0.5} scale={[8, 5, 8]} count={200} />

      <color args={['#695b5b']} attach='background' />
      <PresentationControls
        global
        rotation={rotation}
        polar={[-0.4, 0.2]}
        azimuth={[-0.5, 0.5]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}>
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={7}
            height={10}
            intensity={10}
            color={'#fff'}
            rotation={[Math.PI / 2, Math.PI, 0]}
            position={[0.37, 10, 1.87]}
          />
          <rectAreaLight
            width={5}
            height={0.3}
            color={'#00f'}
            intensity={15}
            position={[-6.15, 4.37, 3.56]}
            rotation={[-Math.PI / 2, 0, 0]}
            // position={[x, y, z]}
          />
          <rectAreaLight
            width={5}
            height={0.3}
            color={'#00f'}
            intensity={15}
            position={[-6.15, 4.37, 2.44]}
            rotation={[-Math.PI / 2, 0, 0]}
            // position={[x, y, z]}
          />
          <rectAreaLight
            width={5}
            height={0.3}
            color={'#00f'}
            intensity={15}
            position={[-6.15, 4.37, 1.32]}
            rotation={[-Math.PI / 2, 0, 0]}
            // position={[x, y, z]}
          />

          {/* <mesh position={[x, y, z]}>
            <boxGeometry color={'red'} />
            <meshStandardMaterial />
          </mesh> */}
          {/* <primitive
            object={cup.scene}
            scale={[2, 2, 2]}
            position={[-2.0, -0.8, -0.5]}
          /> */}
          <primitive
            object={room.scene}
            scale={[3, 3, 3]}
            position={[-0.46, -0.76, 1.33]}
            onClick={(e) => clickHandler(e)}>
            {/* <Html
              transform
              wrapperClass='screenContent'
              distanceFactor={1.17}
              position={[x, y, z]}
              rotation={[0, -0.2652900463, 0]}>
              <iframe
                src='https://imaginative-squirrel-f87fc2.netlify.app/'
                onMouseEnter={() => handleMouseOver('IN')}
                onMouseLeave={() => handleMouseOver('OUT')}
              />
            </Html> */}
          </primitive>
          {/* <mesh
            geometry={tableGeometry}
            scale={[0.08, 0.08, 0.08]}
            rotation-x={-Math.PI / 2}
            position={[0, -3.55, -1]}>
            <meshPhysicalMaterial map={diff} />
          </mesh> */}
          {/* <mesh
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
          </mesh> */}
          <Text
            fontSize={1}
            font='./bangers-v20-latin-regular.woff'
            position={[-0.93, 1.37, -0.19]}
            rotation-y={Math.PI / 6}
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
