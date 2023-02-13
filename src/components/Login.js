import { useState } from 'react'
import {BiUserCircle} from 'react-icons/bi'
import {BiLock} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
// import Logo from '../../src/assets/images/logo.png'
// import {AiFillEyeInvisible} from 'react-icons/ai'
// import {AiFillEye} from 'react-icons/ai'

const Login = () => {
    const navigate = useNavigate();
    document.title = "Login";
    const [adminDetails, setAdminDetails] = useState("");
    const submitHandler = (e) => {
        navigate('/dashboard');
    }
    const handleChange = (e) => {
        setAdminDetails({
          ...adminDetails, [e.target.name] : e.target.value
        })
    }
  return (
    <div className='relative bg-[#f0f0f0] h-screen w-full flex items-center justify-center md:justify-between'>
        {/* <div className='absolute w-full top-0'>
            <div className='w-11/12 lg:w-[80%] mx-auto pt-3 flex items-center backdrop:blur-lg'>
                <img className='w-16 cursor-pointer mb-4' src={Logo} alt="" />
            </div>
        </div> */}
        <div className='h-full w-full pt-12 flex items-center justify-center'>
            <div className='flex  flex-col gap-4 justify-center h-[410px] w-11/12 sm:max-w-[400px] md:max-w-[500px]  bg-[#f3f3f3] shadow-custom-dark p-10 rounded-md'>
                <div>
                
                <h1 className='text-4xl font-bold mb-3 w-fit text-custom-blue-dark'>Login</h1>
                {/* <h3 className={err ? error_notification : normal_notification}>{errorMessage}</h3> */}
                </div>
                <form onSubmit={submitHandler} className='flex flex-col gap-4'>
                    <div className=' relative flex flex-row items-center p-4'>
                        <BiUserCircle className='text-2xl text-custom-brown group-hover:text-custom-green box-border'/>
                        <input className='absolute w-full text-base font-medium rounded-md border-2 empty:border-[#acacac4e] foucs:border-custom-brown pl-12 invalid:border-red-600 text-black left-0 right-0 h-full bg-transparent outline-none login_input hover:border-custom-ash focus:border-custom-blue-dark' 
                        type="email" placeholder='Email' required name="email" id="email" autoComplete='off' onChange={handleChange}/>
                    </div>
                    <div className=' relative flex flex-row items-center p-4'>
                        <BiLock className='text-2xl text-custom-brown group-hover:text-custom-green box-border'/>
                        <input className='absolute w-full text-base font-medium rounded-md border-2 empty:border-[#acacac4e] border-custom-brown pl-12 invalid:border-red-600 text-black left-0 right-0 h-full bg-transparent outline-none login_input hover:border-custom-ash focus:border-custom-blue-dark' 
                        type="password" placeholder='Password' required name="password" id="password" autoComplete='off' onChange={handleChange}/>
                    </div>
                    <div>
                        <div className='group cursor-pointer w-fit flex flex-row items-center'>
                        <input className='text-4xl border-custom-black rounded outline-none checked:bg-custom-blue-dark checked:border-none accent-custom-blue cursor-pointer group-hover:border-custom-brown' id='checkbox' type='checkbox'/>
                        <label className='ml-2.5 text-black font-medium group-hover:text-custom-brown cursor-pointer' htmlFor='checkbox'>Remember me</label>
                        </div>
                        <button className='bg-custom-blue-dark text-black w-full mt-4 text-lg text-bold py-2.5 rounded-md hover:bg-custom-brown font-bold'>login</button>
                    </div>
                </form>
            </div>
        </div>
        <div className='md:w-[800px] h-screen bg-login-image bg-no-repeat bg-bottom bg-cover hidden md:flex flex-row justify-center items-end md:py-10 md:px-6 lg:p-10'>
            
            <div className='space-y-5 mb-5'>
                <p className='font-bold text-3xl text-white text-transparent bg-clip-text bg-gradient-to-tl from-custom-blue-dark to-white'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-8 h-8 fill-custom-blue-dark" viewBox="0 0 24 27"><path d="M14.017 18v-7.391C14.017 4.905 17.748 1.039 23 0l.995 2.151C21.563 3.068 20 5.789 20 8h4v10h-9.983ZM0 18v-7.391C0 4.905 3.748 1.038 9 0l.996 2.151C7.563 3.068 6 5.789 6 8h3.983v10H0Z"/></svg>
                    </span> 
                    Creativity is intelligence having fun!

                </p>
                <p className='text-white text-sm font-semibold'>
                    Albert Einstein
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login