import React from 'react'
import { Link } from 'react-router-dom';
const Add = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-trasparent'>
        <div className='text-center'>
            <h1 className='text-6xl font-bold'>Add 5 to your result</h1>
             <div className="btnns">
                <Link to="/mutiply">
                    <button class="button type1">
                    <span class="btn-txt">Back</span>
                    </button>
                </Link>
                <Link to="/multiply50">
                    <button class="button type2" >
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
