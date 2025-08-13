import React from 'react'
import { Link } from 'react-router-dom';




const Input = () => {
    const playSound = () => {
      const audio = new Audio('/click.wav');
      audio.play();
    };
    
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-transparent'>
        <div className='text-center flex flex-col items-center mt-[25vh]'>
            <h1 className='p-5 text-4xl md:text-6xl font-bold'>So Take your Birthdate in your Mind</h1>
            <img className='h-30 m-5' src="https://i.pinimg.com/originals/57/c3/bf/57c3bf14e0aaeb4ccd6c6f9d76b2198b.gif" alt="" />
             <div className="btnns">
                <Link to="/">
                    <button class="button type1">
                    <span class="btn-txt">Back</span>
                    </button>
                </Link>
                <Link to="/mutiply" onClick={playSound()}>
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

export default Input
