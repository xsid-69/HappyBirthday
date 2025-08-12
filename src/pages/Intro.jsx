import React from 'react'
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-gray-transparent'>
        <div className='text-center'>
            <h1 className='text-6xl font-bold'>I will guess your BirthDate !</h1>
              <Link to="/input">
                <button class="button type1">
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
    </div>
  )
}

export default Intro
