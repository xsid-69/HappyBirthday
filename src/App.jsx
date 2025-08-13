import React from 'react'
import { MainRoutes } from './routes/MainRoutes';
import { ToastContainer } from 'react-toastify';
import Iridescence from './components/Bg';
import Orb from './components/Bg';

const App = () => {
  return (
    <div className='h-[100vh] w-screen bg-black text-white relative'>
      <div className="absolute inset-0 z-0">
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Orb
          hoverIntensity={0.8}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      </div>
      <div className="relative z-10">
        <ToastContainer />
        <MainRoutes />
      </div>
    </div>
  )
}

export default App
