import { Canvas } from '@react-three/fiber'
import './App.css'
import Shop from './components/Shop'

import {
  Environment,
  OrbitControls,
  OrthographicCamera,
} from '@react-three/drei'
import * as THREE from 'three'

import { Suspense, useState, useRef } from 'react'
import { useEffect } from 'react'
import { Vector3 } from 'three'

function App() {
  const cameraRef = useRef(null)
  useEffect(() => {
    if (!!cameraRef.current) {
      console.log(cameraRef.current.position)
    }
  }, [cameraRef.current])

  return (
    <Suspense>
      <div className='three-canvas-container'>
        <Canvas
          shadows
          gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
          linear
          id='three-canvas-container'
        >
          <OrbitControls
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            enablePan={false}
            enableZoom={false}
          />

          <Shop />

          <Environment
            files={'brown_photostudio_05_4k.hdr'}
            path={'/'}
            intensity={0}
          />

          <ambientLight intensity={0.1} />
          <directionalLight
            position={[10, 20, -5]}
            intensity={0.2}
            castShadow
          />
        </Canvas>
      </div>
    </Suspense>
  )
}

export default App
