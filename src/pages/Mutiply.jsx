import React from 'react'
import { Link } from 'react-router-dom';

const Mutiply = () => {
    const playSound = () => {
      const audio = new Audio('/click.wav');
      audio.play();
    };
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-transparent'>
        <div className='text-center flex flex-col items-center mt-[25vh]'>
            <h1 className='text-4xl md:text-6xl font-bold'>Multiply it by 2</h1>
            <img className=' h-30 m-5 'src="https://i.pinimg.com/originals/47/78/9e/47789e8df71a94eadb0af8eeb4ab9002.gif" alt="" />
             <div className="btnns">
                <Link to="/input">
                    <button class="button type1">
                    <span class="btn-txt">Back</span>
                    </button>
                </Link>
                <Link to="/add" onClick={playSound()}>
                    <button class="button type3" >
                    <span  class="btn-txt">Done</span>
                    </button>
                </Link>
             </div>
            {/* <button className='bg-amber-600 p-5'> Ready</button>    */}
        <div style={{ height: '300px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
            </div>
          
        </div>
    </div>
  )
}

export default Mutiply
