import React from 'react'
import { Link } from 'react-router-dom';
const Add = () => {
    const playSound = () => {
      const audio = new Audio('/click.wav');
      audio.play();
    };
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-trasparent'>
        <div className='text-center flex flex-col items-center mt-[15vh]'>
            <h1 className='text-6xl font-bold text-shadow-md text-white '>Add 5 to your result</h1>          
            <img className=' h-30 m-5 ' src=" https://i.pinimg.com/originals/49/80/2d/49802dbe8dd7ca6755afc1a1eccac6e7.gif" alt="" />
             <div className="btnns">
                <Link to="/mutiply">
                    <button class="button type1">
                    <span class="btn-txt">Back</span>
                    </button>
                </Link>
                <Link to="/multiply50" onClick={playSound()}>
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

export default Add
