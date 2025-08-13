import React from 'react'
import { Link } from 'react-router-dom';
const Month = () => {
    const playSound = () => {
      const audio = new Audio('/click.wav');
      audio.play();
    };
  return (
   <div className='flex justify-center items-center h-screen w-screen bg-transparent'>
        <div className='text-center flex flex-col items-center mt-[15vh]'>
            <h1 className='text-6xl font-bold'>Finally Add your Birth Month to your answer</h1>         
            <img className=' h-30 m-5 ' src=" https://i.pinimg.com/originals/c5/55/e1/c555e142bfffebf1aaa30e0ee6d737d0.gif" alt="" />
             <div className="btnns">
                <Link to="/add">
                    <button class="button type1">
                    <span class="btn-txt">Back</span>
                    </button>
                </Link>
                <Link to="/form" onClick={playSound()}>
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

export default Month
