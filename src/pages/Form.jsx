import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Form = () => {
    const {register , handleSubmit} = useForm();
    const navigate = useNavigate();
    const Submitter = (data) => {
    const month = data.number % 100;
    if (month < 63) {
      navigate("/output", { state: { number: data.number } });
      toast.success("Success!");
    } else {
      toast.error("The calculated month is not valid. Please check your number.");
    }
  };
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-transparent'>
        <div className='text-center'>
          
            <h1 className='text-6xl font-bold outline-0'>Now Type your Answer below</h1>
            <input 
             {...register("number", { required: true })}
             className="w-35 m-5 p-2 input  text-white text-6xl rounded-lg outline-none focus:border-blue-700"
             type="text"
             placeholder="Type here" 
            
             />
             <div className="btnns">
              <Link to="/month">
                <button class="button type1">
                 <span  class="btn-txt">Back</span>
                </button>
              </Link>
            <button class="button type2" onClick={handleSubmit(Submitter)}>
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
