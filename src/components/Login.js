import { useState } from 'react'
import {BiUserCircle} from 'react-icons/bi'
import {BiLock} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import Logo from '../../src/assets/images/logo.png'
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
    <div className='relative h-screen w-full flex items-center justify-center md:justify-between bg-wave-image bg-no-repeat bg-center bg-cover'>
        <div className='h-full w-full  lg:max-w-[650px] pt-12 flex items-center justify-center'>
            <div className='flex  flex-col gap-4 justify-center h-[410px] w-11/12 sm:w-10/12 lg:w-9/12  bg-[#fff] shadow-custom-dark p-10 rounded-md'>
                <div>
                <img className='w-16 cursor-pointer mx-auto mb-4' src={Logo} alt="" />
                <h1 className='text-4xl  font-semibold mb-3 w-fit mx-auto'>Staff Login</h1>
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
                        <button className='bg-custom-blue-dark text-white w-full mt-4 text-lg text-bold py-2.5 rounded-md hover:bg-custom-brown font-semibold'>login</button>
                    </div>
                </form>
            </div>
        </div>
        <div className='md:w-[900px] h-screen bg-login-image bg-no-repeat bg-center bg-cover hidden md:flex '>
            <p>Creativity is intelligence having fun!</p>
        </div>
    </div>
  )
}

export default Login