import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Routes, Route } from 'react-router-dom'
import Homescreen from './screens/Homescreen'

function App() {

  return (

      // <div className='appdiv'>
      //   <Canvas camera={{ position: [10,0,-5], fov: 40 }}>
      //     <color attach="background" args={["black"]}/>
      //     <ambientLight intensity={0.5} />
      //     <spotLight intensity={0.2} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
      //     <Experience/>
          
      //     <OrbitControls/>
      //   </Canvas>
      // </div>
      <Routes>
      {/* <Route path='/' index element={<Home/>} /> */}
      {/* <Route path='/login' element={<Login/>}/>
      <Route path='/arscene' element={<ARscene/>}/>
      <Route path='/add-model' element={<Addmodel/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/arpage' element={<ARpage/>}/> */}
      <Route path='/homescreen' element={<Homescreen/>}/>
      
    </Routes>
  )
}

export default App
