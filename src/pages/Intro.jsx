import React from 'react'
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Intro = () => {
  const playSound = () => {
    const audio = new Audio('/click.wav');
    audio.play();
  };

  return (
    <div className='flex justify-center items-center h-screen w-screen bg-transparent overflow-hidden'>
        <div className='text-center h-[90vh] flex flex-col items-center mt-[10vh]'>
           
          <img className='h-40 ' src=" https://i.pinimg.com/originals/40/d1/28/40d128555061dab2ae4460786193dbec.gif" alt="" />
            <h1 className='text-4xl md:text-6xl font-bold'>I will guess your BirthDate !</h1>
            
              <Link to="/input" onClick={playSound}>
                <button class="button type3">
                    <span class="btn-txt">
                        Get Started!
                    </span>
                </button>
              </Link>
            {/* <button className='bg-amber-600 p-5'> Ready</button>    */}
        <div style={{ height: '300px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Carousel
                baseWidth={300}
                autoplay={false}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={false}
                round={false}
  />
            </div>
          
        </div>
        <div className='absolute bottom-5 right-5'><Button/></div>
    </div>
  )
}

export default Intro
