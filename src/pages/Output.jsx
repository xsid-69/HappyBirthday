import React, { useEffect } from 'react'
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

    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();

    const isBirthday = date === currentDay && monthIndex === currentMonth;

    useEffect(() => {
        if (isBirthday) {
            const audiohbd = new Audio('/hbd.mp3');
            audiohbd.play();
        }
    }, [isBirthday]);
    
    const playSound = () => {
      const audio = new Audio('/click.wav');
      audio.play();
    };

  return (
    <>
    <div className='flex justify-center items-center h-screen w-screen bg-transparent'>
        <div className='text-center flex flex-col items-center mt-[5vh]'>
            <h1 className='p-5 text-4xl md:text-6xl font-bold'>So your Birthdate is........</h1>
            <img className='m-5 h-30' src="https://i.pinimg.com/originals/1b/38/9b/1b389b8b8156f2024035993de51963dd.gif" alt="" />
            <h1 className='text-5xl md:text-8xl font-extrabold m-5 md:m-10'> {isBirthday ? "Wish you a very Happy Birthday" : `${date} ${monthName}`}</h1>
             <div className="btnns">
              <Link to="/form" onClick={playSound}>
                <button class="button type1">
                 <span class="btn-txt">Retry</span>
                </button>
              </Link>
               <Link to="/" onClick={playSound}>
                <button class="button type3">
                 <span class="btn-txt">Correct!</span>
                </button>
              </Link>
              <div className='flex justify-center items-center m-5 font-thin'>
                <h2 className='text-white'>made by~ </h2> <a href="https://www.instagram.com/siddhant.w_69?igsh=b3h0Z3RodWdhaGY0"><span className='text-purple-500'>xsid</span></a>
              </div>
             </div>
           
        
          
        </div>

      
    </div>
    <div className='absolute bottom-5 right-5'><Button/></div></>
  )
}

export default Output
