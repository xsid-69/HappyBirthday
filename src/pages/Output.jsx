import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button';


const Output = () => {
    const location = useLocation();
    const number = location.state?.number;
    const answer = number ? number - 250 : null;

    const date = answer ? Math.floor(answer / 100) : "N/A";
    const monthIndex = answer ? (answer % 100) - 1 : -1;

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const monthName = monthIndex >= 0 && monthIndex < 12 ? monthNames[monthIndex] : "Invalid Month";

  return (
    <>
    <div className='flex justify-center items-center h-screen w-screen bg-transparent'>
        <div className='text-center'>
            <h1 className='text-6xl font-bold'>So your Birthdate is........</h1>
            <h1 className='text-9xl font-extrabold m-20'> {date} {monthName}</h1>
             <div className="btnns">
              <Link to="/form">
                <button class="button type1">
                 <span class="btn-txt">Back</span>
                </button>
              </Link>
           
             </div>
           
        
          
        </div>

      
    </div>
    <div className='absolute bottom-5 right-5'><Button/></div></>
  )
}

export default Output
