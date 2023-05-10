/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/Portfolio2_.glb --keepnames
*/

import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  useGLTF,
  PerspectiveCamera,
  useAnimations,
  Environment,
  Sparkles,
  Html,
  BakeShadows,
  ContactShadows,
  Float,
  MeshReflectorMaterial,
} from '@react-three/drei';
import { PresentationControls } from '@react-three/drei';
import * as THREE from 'three';
import { useControls } from 'leva';
import { ResumePaper } from './ResumePaper';
import { Bookshelf } from './Bookshelf';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { Vector2, Vector3 } from 'three';
import {
  EffectComposer,
  Selection,
  Select,
  Outline,
} from '@react-three/postprocessing';

export function Portfolio(props) {
  let lastAnimation;
  const group = useRef();

  const { nodes, materials, animations } = useGLTF('/Portfolio2.glb');
  // materials.glass = new THREE.MeshPhysicalMaterial({
  //   roughness: 0.2,
  //   transmission: 1,
  //   ior: 1,
  //   thickness: 1,
  // });
  materials.glass = materials.black_plastic;
  const resumePaper = useGLTF('./resumepaper.glb');
  const laptop = useGLTF('./laptop.gltf');
  const { actions } = useAnimations(animations, group);

  const projectsRef = useRef();
  const resumeRef = useRef();
  const experienceRef = useRef();

  const [hoveredBlock, setHoveredBlock] = useState('');
  // useEffect(() => {
  //   setTimeout(() => {
  //     actions['Projects'].setLoop(THREE.LoopOnce);
  //     actions['Projects'].clampWhenFinished = true;
  //     actions['Projects'].play();
  //   }, 2000);
  // }, []);
  useFrame(() => {
    if (hoveredBlock) {
      const { x, y, z } = hoveredBlock.current.position;
      hoveredBlock.current.position.lerp(
        new Vector3(
          x,
          hoveredBlock.current.name == 'Experience' ? 0.49 : 0.55,
          z
        ),
        0.1
      );
    }
    projectsRef.current.position.lerp(
      new Vector3(
        projectsRef.current.position.x,
        0.53,
        projectsRef.current.position.z
      ),
      0.1
    );
    resumeRef.current.position.lerp(
      new Vector3(
        resumeRef.current.position.x,
        0.53,
        resumeRef.current.position.z
      ),
      0.1
    );
    experienceRef.current.position.lerp(
      new Vector3(
        experienceRef.current.position.x,
        0.47,
        experienceRef.current.position.z
      ),
      0.1
    );
  });

  const animateTo = (name) => {
    lastAnimation = name;
    actions[name].reset();
    actions[name].setDuration(2);
    actions[name].setLoop(THREE.LoopPingPong);
    actions[name].repetitions = 2;
    actions[name].play();
    setTimeout(() => {
      actions[name].paused = true;
      document.querySelector('.back').classList.add('button-in');
    }, 2000);
  };

  document.querySelector('.back').addEventListener('click', () => {
    if (lastAnimation) {
      // actions[lastAnimation].reset();
      // actions[lastAnimation].timeScale = -1;
      // actions[lastAnimation].paused = false;
      // actions[lastAnimation].play();
      actions[lastAnimation].paused = false;

      lastAnimation = '';
      setTimeout(() => {
        document.querySelector('.back').classList.remove('button-in');
      }, 500);
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        {/* <group
          name='Spot001'
          position={[0.31, 5.14, 3.94]}
          rotation={[-0.61, 0, -0.66]}
          scale={0.62}
        /> */}
        <PerspectiveCamera
          name='Camera'
          makeDefault={true}
          isPerspectiveCamera={true}
          far={1000}
          near={0.1}
          fov={25.92}
          position={[0.18, 1.54, 1.68]}
          rotation={[-0.53, 0.03, 0.03]}
        />

        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[0, 0]}
          azimuth={[-0.2, 0.2]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}>
          <Environment preset='night' />

          <Html
            position={[-2.85, 1.06, 0.1]}
            rotation={[0, Math.PI / 2, 0]}
            distanceFactor={0.5}
            transform>
            <a
              className='info-circle'
              href='https://github.com/Ragingfury6/Sneakers-FrontEndMentor-Clone'
              target='_blank'></a>
          </Html>
          <Html
            position={[-2.85, 1.03, 1.3]}
            rotation={[Math.PI / 6, Math.PI / 2, Math.PI / 6]}
            distanceFactor={0.5}
            transform>
            <a
              className='info-circle'
              href='https://ubarterfront.onrender.com/'
              target='_blank'></a>
          </Html>
          <Html
            position={[-2.85, 0.4, 1.2]}
            rotation={[Math.PI / 6, Math.PI / 2, Math.PI / 6]}
            distanceFactor={0.5}
            transform>
            <a
              className='info-circle'
              href='https://github.com/Ragingfury6/Letter-Legends'
              target='_blank'></a>
          </Html>
          <Html
            position={[-2.85, 0.4, 0.21]}
            rotation={[0, Math.PI / 2, 0]}
            distanceFactor={0.5}
            transform>
            <a
              className='info-circle'
              href='https://westmec-ne-map.onrender.com/'
              target='_blank'></a>
          </Html>

          <rectAreaLight
            width={5}
            height={0.3}
            color={'#00f'}
            intensity={5}
            position={[-6.15, 4.37, 3.56]}
            rotation={[-Math.PI / 2, 0, 0]}
            // position={[x, y, z]}
          />
          <rectAreaLight
            width={5}
            height={0.3}
            color={'#00f'}
            intensity={5}
            position={[-6.15, 4.37, 2.44]}
            rotation={[-Math.PI / 2, 0, 0]}
            // position={[x, y, z]}
          />
          <rectAreaLight
            width={5}
            height={0.3}
            color={'#00f'}
            intensity={5}
            position={[-6.15, 4.37, 1.32]}
            rotation={[-Math.PI / 2, 0, 0]}
            // position={[x, y, z]}
          />
          <pointLight
            position={[-0.1, 0.3, 0.9]}
            color='#45494a'
            intensity={5}
            distance={2}
          />
          <pointLight
            position={[-1.71, 1.45, 0.36]}
            color='#b0d3f5'
            intensity={2}
            distance={5}
          />
          <pointLight
            position={[-1.71, 1.45, 0.55]}
            color='#b0d3f5'
            intensity={2}
            distance={5}
          />
          <pointLight
            position={[-1.69, 0.9, 0.36]}
            color='#b0d3f5'
            intensity={2}
            distance={5}
          />
          <pointLight
            position={[-1.71, 0.9, -0.3]}
            color='#b0d3f5'
            intensity={2}
            distance={5}
          />

          <group
            name='White_Board'
            position={[0.32, 2.02, -2.68]}
            rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              name='Plane002'
              geometry={nodes.Plane002.geometry}
              material={materials['Alluminum.003']}
            />
            <mesh
              name='Plane002_1'
              geometry={nodes.Plane002_1.geometry}
              material={materials['White Board.003']}
            />
            <mesh
              name='Black_Marker_on_Whiteboard_01'
              geometry={nodes.Black_Marker_on_Whiteboard_01.geometry}
              material={materials['Black Marker on Whiteboard 01.003']}
              position={[0.26, 0.02, 0.31]}
              rotation={[0, -0.04, 0]}
              scale={0.77}
            />
            <mesh
              name='Black_Marker_on_Whiteboard_01001'
              geometry={nodes.Black_Marker_on_Whiteboard_01001.geometry}
              material={materials['Black Marker on Whiteboard 01.002']}
              position={[-0.07, 2.99, 1.57]}
              rotation={[-Math.PI / 2, -0.04, 0]}
              scale={0.77}
            />
            <mesh
              name='Purple_Marker_on_Whiteboard'
              geometry={nodes.Purple_Marker_on_Whiteboard.geometry}
              material={materials['Purple Marker on Whiteboard.003']}
              position={[-0.49, 0.03, -0.16]}
              scale={1.04}
            />
            <mesh
              name='Red_Marker_on_Whiteboard'
              geometry={nodes.Red_Marker_on_Whiteboard.geometry}
              material={materials['Red Marker on Whiteboard.003']}
              position={[0.67, 0.02, -0.11]}
              rotation={[0, 0.06, 0]}
            />
            <mesh
              name='Red_Marker_on_Whiteboard002'
              geometry={nodes.Red_Marker_on_Whiteboard002.geometry}
              material={materials['Black Mark']}
              position={[0.27, 0.04, 0.48]}
              rotation={[0, 0.06, 0]}
              scale={[1.99, 1, 2.49]}
            />
          </group>
          <Bookshelf />
          <group
            name='Cube007'
            position={[-0.05, 0.47, -0.1]}
            rotation={[Math.PI / 2, 0, 0.9]}
            scale={0.01}>
            <mesh
              name='Cube007_1'
              geometry={nodes.Cube007_1.geometry}
              material={materials.black_plastic}
            />
            <mesh
              name='Cube007_2'
              geometry={nodes.Cube007_2.geometry}
              material={materials.white}
            />
            <mesh
              name='Cube007_3'
              geometry={nodes.Cube007_3.geometry}
              material={materials.blue}
            />
            <mesh
              name='Cube007_4'
              geometry={nodes.Cube007_4.geometry}
              material={materials.orange}
            />
            <mesh
              name='Cube007_5'
              geometry={nodes.Cube007_5.geometry}
              material={materials['red.001']}
            />
            <mesh
              name='Cube007_6'
              geometry={nodes.Cube007_6.geometry}
              material={materials.green}
            />
            <mesh
              name='Cube007_7'
              geometry={nodes.Cube007_7.geometry}
              material={materials.yellow}
            />
          </group>

          <mesh
            name='Notebook'
            geometry={nodes.Notebook.geometry}
            material={materials['Default.001']}
            position={[0.95, 0.48, 0.58]}
            rotation={[Math.PI / 2, 0, 1.71]}
          />
          <ResumePaper />
          <Selection>
            <EffectComposer enabled={true} autoClear={false}>
              <Outline hiddenEdgeColor={'#99c4ac'} edgeStrength={50} />
            </EffectComposer>
            <Select enabled>
              <Float
                floatIntensity={0.1}
                speed={1.3}
                floatingRange={[0, 0.2]}
                rotationIntensity={0.1}>
                <mesh
                  name='Resume'
                  ref={resumeRef}
                  geometry={nodes.Resume.geometry}
                  material={materials.Toy}
                  position={[0.04, 0.53, -0.09]}
                  rotation={[-1.24, -1.28, -1.23]}
                  scale={0.19}
                  onClick={() => {
                    animateTo('Resume');
                  }}
                  onPointerEnter={() => setHoveredBlock(resumeRef)}
                  onPointerLeave={() => setHoveredBlock('')}
                />
              </Float>

              <Float
                floatIntensity={0.1}
                speed={1.2}
                floatingRange={[0, 0.2]}
                rotationIntensity={0.1}>
                <mesh
                  name='Projects'
                  ref={projectsRef}
                  geometry={nodes.Projects.geometry}
                  material={materials.Toy}
                  position={[-0.12, 0.53, -0.05]}
                  rotation={[1.02, -1.34, 1.01]}
                  scale={0.19}
                  onClick={() => animateTo('Projects')}
                  onPointerEnter={() => setHoveredBlock(projectsRef)}
                  onPointerLeave={() => setHoveredBlock('')}
                />
              </Float>
              <Float
                floatIntensity={0.1}
                speed={1.25}
                floatingRange={[0, 0.2]}
                rotationIntensity={0.1}>
                <mesh
                  name='Experience'
                  ref={experienceRef}
                  geometry={nodes.Experience.geometry}
                  material={materials.Toy}
                  position={[-0.24, 0.47, 0.12]}
                  rotation={[0, -1.43, 0]}
                  scale={0.19}
                  onClick={() => animateTo('White Board')}
                  onPointerEnter={() => setHoveredBlock(experienceRef)}
                  onPointerLeave={() => setHoveredBlock('')}
                />
              </Float>
            </Select>
          </Selection>

          <group name='Plane' position={[0, 0.47, 0]}>
            <mesh
              name='Plane_1'
              geometry={nodes.Plane_1.geometry}
              material={materials.BLACK}
            />
            <mesh
              name='Plane_2'
              geometry={nodes.Plane_2.geometry}
              material={materials.red}
            />
            <mesh
              name='Plane_3'
              geometry={nodes.Plane_3.geometry}
              material={materials.glass}
            />
          </group>
          <primitive
            object={laptop.scene}
            position={[0.5, 0.4, 0]}
            rotation-y={-0.2}
            scale={[0.15, 0.15, 0.15]}>
            <Html
              transform
              wrapperClass='screenContent'
              distanceFactor={1.02}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}>
              <iframe src='https://imaginative-squirrel-f87fc2.netlify.app/' />
            </Html>
          </primitive>
          <mesh
            name='Cube005'
            geometry={nodes.Cube005.geometry}
            material={materials.BLACK}
            position={[0.77, 0.94, -0.01]}
            scale={[2.73, 1, 2.73]}
          />
          <mesh
            name='Astro_Lighting_Parma_160_Wall'
            geometry={nodes.Astro_Lighting_Parma_160_Wall.geometry}
            material={materials.Astro_Lighting_Parma_160_Wall_mtl_1}
            position={[-1.92, 1.79, 0.73]}
            rotation={[-Math.PI, Math.PI / 2, 0]}
            scale={0.01}
          />
          <mesh
            name='Text_0_001'
            geometry={nodes.Text_0_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_1_001'
            geometry={nodes.Text_1_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_2_001'
            geometry={nodes.Text_2_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_3_001'
            geometry={nodes.Text_3_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_4_001'
            geometry={nodes.Text_4_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_5_001'
            geometry={nodes.Text_5_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_6_001'
            geometry={nodes.Text_6_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_7_001'
            geometry={nodes.Text_7_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_8_001'
            geometry={nodes.Text_8_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_9_001'
            geometry={nodes.Text_9_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_A_001'
            geometry={nodes.Text_A_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_B_001'
            geometry={nodes.Text_B_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_C_001'
            geometry={nodes.Text_C_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_D_001'
            geometry={nodes.Text_D_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_E_001'
            geometry={nodes.Text_E_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_F_001'
            geometry={nodes.Text_F_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_G_001'
            geometry={nodes.Text_G_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_H_001'
            geometry={nodes.Text_H_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_I_001'
            geometry={nodes.Text_I_001.geometry}
            material={materials.Toy}
            position={[5.66, 0.8, -0.07]}
          />
          <mesh
            name='Text_J_001'
            geometry={nodes.Text_J_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_K_001'
            geometry={nodes.Text_K_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_L__001'
            geometry={nodes.Text_L__001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_M_001'
            geometry={nodes.Text_M_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_N_001'
            geometry={nodes.Text_N_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_O_001'
            geometry={nodes.Text_O_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_P_001'
            geometry={nodes.Text_P_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_Q_001'
            geometry={nodes.Text_Q_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_R_001'
            geometry={nodes.Text_R_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_S_001'
            geometry={nodes.Text_S_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_T_001'
            geometry={nodes.Text_T_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_U_001'
            geometry={nodes.Text_U_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_V_001'
            geometry={nodes.Text_V_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_W_001'
            geometry={nodes.Text_W_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_X_001'
            geometry={nodes.Text_X_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_Y_001'
            geometry={nodes.Text_Y_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
          <mesh
            name='Text_Z_001'
            geometry={nodes.Text_Z_001.geometry}
            material={materials.Toy}
            position={[6.43, 0.65, 0.07]}
          />
        </PresentationControls>
      </group>
    </group>
  );
}

useGLTF.preload('/Portfolio2.glb');
useGLTF.preload('/laptop.gltf');
