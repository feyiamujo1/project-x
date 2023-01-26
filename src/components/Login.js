import { useState } from 'react'
import {BiUserCircle} from 'react-icons/bi'
import {BiLock} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
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
    <div className='h-screen w-full flex items-center justify-center md:justify-between bg-wave-image bg-no-repeat bg-center bg-cover relative'>
        <div className='h-full w-full  lg:max-w-[750px] pt-12 flex items-center justify-center'>
            <div className='flex flex-col gap-4 justify-center h-[410px] w-11/12 sm:w-8/12 lg:w-9/12  bg-[#fff] shadow-custom-dark p-10 rounded-md'>
                <div>
                <h1 className='text-4xl  font-semibold mb-3'>Admin</h1>
                {/* <h3 className={err ? error_notification : normal_notification}>{errorMessage}</h3> */}
                </div>
                <form onSubmit={submitHandler} className='flex flex-col gap-4'>
                <div className='group relative flex flex-row items-center rounded-md px-4 border-2 border-custom-brown hover:border-custom-blue-dark'>
                    <BiUserCircle className='mr-3 text-2xl text-custom-brown group-hover:text-custom-green'/>
                    <input className='w-full text-base py-4 text-white border-none bg-transparent outline-none login_input' type="email" placeholder='Email' required name="username" id="username" autoComplete='off' onChange={handleChange}/>
                </div>
                <div className='group relative flex flex-row items-center rounded-md px-4 border-2 border-custom-brown hover:border-custom-blue-dark'>
                    <BiLock className='mr-3 text-2xl text-custom-brown group-hover:text-custom-green'/>
                    <input className='w-full text-base py-4 text-white border-none bg-transparent outline-none hover:border-none active:border-none login_input' type="password" placeholder='Password' required id="password" name="password" autoComplete='off'  onChange={handleChange}/>
                    {/* <AiFillEyeInvisible className='ml-3 cursor-pointer text-2xl text-custom-brown group-hover:text-custom-green' /> */}
                </div>
                <div>
                    <div className='group cursor-pointer w-fit'>
                    <input className='text-4xl border-custom-ash rounded outline-none checked:bg-custom-green accent-custom-green cursor-pointer' id='checkbox' type='checkbox'/>
                    <label className='ml-2.5 text-custom-brown font-medium group-hover:text-custom-green cursor-pointer' htmlFor='checkbox'>Remember me</label>
                    </div>
                    <button className='bg-custom-blue-dark text-white w-full mt-4 text-lg text-bold py-2.5 rounded-md hover:bg-custom-brown font-semibold'>login</button>
                </div>
                </form>
            </div>
        </div>
        <div className='w-full h-screen bg-login-image bg-no-repeat bg-center bg-cover hidden md:block'>

        </div>
    </div>
  )
}

export default Login