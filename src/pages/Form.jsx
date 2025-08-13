import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Form = () => {
    const {register , handleSubmit} = useForm();
    const navigate = useNavigate();
    const playSound = () => {
      const audio = new Audio('/click.wav');
      audio.play();
    };

    const Submitter = (data) => {
    const month = data.number % 100;
    const date = Math.floor(data.number / 100);
    if (month < 63 && date<32 && month > 50 && date > 2 ) {
      navigate("/output", { state: { number: data.number } });
      toast.success("Success!");
    } else {
      toast.error("Invalid input! Please enter a valid number");
    }
  };
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-transparent'>
        <div className='text-center h-[80vh] flex flex-col items-center mt-[15vh]'>
          
            <h1 className='text-4xl md:text-6xl font-bold outline-0  text-shadow-md text-white'>Now Type your Answer below</h1>
            <img className=' h-30 m-5 ' src="https://i.pinimg.com/originals/59/80/be/5980be1d8a9d74ccf9b36a4f2c422974.gif" alt="" />
            <input 
             {...register("number", { required: true })}
             className="w-35 m-5 p-2 input  text-white text-4xl md:text-6xl rounded-lg outline-none focus:border-blue-700"
             type="text"
             placeholder="Type here" 
            
             />
             <div className="btnns">
              <Link to="/month" onClick={playSound}>
                <button class="button type1">
                 <span  class="btn-txt">Back</span>
                </button>
              </Link>
            <button class="button type3" onClick={() => { playSound(); handleSubmit(Submitter)(); }}>
                 <span class="btn-txt">Done</span>
            </button>
             </div>
            {/* <button className='bg-amber-600 p-5'> Ready</button>    */}
        <div style={{ height: '300px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
            </div>
          
        </div>
    </div>
  )
}

export default Form;
