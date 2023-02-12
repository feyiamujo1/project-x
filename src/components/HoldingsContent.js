// import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Footer from './UI/Footer'
import Navbar from './UI/Navbar'
import DirectionImage from '../../src/assets/images/directions.png'
// import {ReactComponent as DownButton}  from "../../src/assets/images/down-arrow-svgrepo-com.svg"
import GantryImage from "../../src/assets/images/live-gantry.png"
import { IoLocationSharp } from "react-icons/io5"
import { SlSizeFullscreen } from "react-icons/sl"
import CountDownTimer from './UI/CountDownTimer'

const HoldingsContent = () => {
    document.title = 'Holdings';
    // const firstContainer = useRef(null);
    // const ScrollToView = () => {
    //     firstContainer.current?.scrollIntoView({behavior: 'smooth'});
    // };
    // const outlets = [
    //     {
    //         id: 0,
    //         category: "Gantry",
    //         location: "Lagos, Ajah",
    //         Size: "16Mx16M",
    //         availablity_status: true,
    //         availablity_date: new Date().getTime(),
    //         image: GantryImage,
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    //     }
    // ]

  return (
    <div className='bg-black scroll-smooth'>
        <Navbar />
        <div className="w-full h-[90vh] sm:h-screen bg-contain bg-no-repeat bg-center relative bg-[url('/src/assets/images/live-gantry.png')]" > {/*style={{backgroundimage:"url('../../src/assets/images/live-gantry.png')"}}*/}
            <div
                data-aos="fade-down" 
                data-aos-duration="1100"
                data-aos-delay="500"
                className='hidden md:block absolute top-32 left-[10%] z-50'>
                <p className='hidden md:flex flex-row w-fit gap-4 justify-center items-center text-white'><Link to='/' className='hover:text-custom-blue'>Home</Link> <img src={DirectionImage} alt=""/> <Link to='/our-holdings' className='hover:text-custom-blue'>Our Holdings</Link> <img src={DirectionImage} alt=""/> Gantry</p>
            </div>
            <div className='w-full h-full'>
                <img src={GantryImage} alt='' className="w-full h-full" />
            </div>
            {/* <div 
                data-aos="zoom-in" 
                data-aos-duration="1500"
                data-aos-delay="500"
                className='w-11/12 h-full mx-auto py-4 flex flex-col items-center gap-4 md:gap-0 justify-center'>
                <div className="w-fit -mt-14 md:mt-0">
                    <h1 className="text-white text-center font-extrabold text-[52px] sm:text-8xl">Our Holdings</h1>
                </div>
                <div>
                    <p className="w-11/12 md:w-[550px] text-white text-center text-sm sm:text-base font-normal absolute left-0 right-0 mx-auto bottom-[110px] md:bottom-24 md:right-[50%] md:translate-x-2/4 md:left-auto">
                        Look through our list of advertising outlets located all over Nigeria to identify the ones that best suits your needs.
                    </p>
                    <div className="w-full absolute left-0 right-0 bottom-10 md:bottom-8 flex flex-row justify-center items-center">
                        <DownButton onClick={ScrollToView} className=" w-10 h-10 fill-custom-blue cursor-pointer animate-bounce" />
                    </div>
                </div>
            </div> */}
        </div>
        <div className="w-11/12 lg:w-[80%] mx-auto pt-16 flex flex-col md:flex-row justify-between gap-12 lg:gap-20">
            <div className='space-y-5'>
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='space-y-4'>
                    <p className='text-custom-blue text-2xl font-semibold'>Gantry</p>
                    <h2 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='font-bold text-base text-white'>Description</h2>
                <p 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className=' text-custom-ash text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='flex flex-col justify-between gap-3 w-full'>
                    <p className='text-custom-ash flex flex-row w-fit gap-2'><IoLocationSharp className='text-lg'/><span className='font-bold text-white'>Lagos, Ajah</span></p>
                    <p className='text-custom-ash flex flex-row w-fit gap-2'><SlSizeFullscreen className='text-lg'/><span className='font-bold text-white'>16MX16M</span></p>   
                </div>
                </div>
            </div>
            <div className='space-y-6'>
                <h2 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='text-custom-blue text-base font-semibold'>Fill the form below to book this outlet</h2>
                <form 
                    data-aos="fade-up" 
                    data-aos-duration="1000" 
                    className='w-full md:w-[400px]'>
                    <div>
                        <div class="mb-[20px] box-border">
                            <label className='text-white font-medium' >Full Name</label>
                            <input className='w-full py-[10px] px-[5px] rounded font-medium hover:border-custom-blue-dark' type='text' id='fullname_inputfield' required/>
                        </div>
                        {/* <div class="relative w-[48%] mb-[20px] box-border">
                            <label className='text-white font-medium' >Last Name</label>
                            <input className='w-full py-[10px] px-[5px] rounded border-none outline-none'   type='text' id='lastname_inputfield' required/>
                        </div> */}
                    </div>
                    <div 
                        className='flex justify-between'>
                        <div class="relative w-[48%] mb-[20px] box-border">
                            <label className='text-white font-medium' >Email</label>
                            <input className='w-full py-[10px] px-[5px] rounded border-none outline-none '   type='email' id='email_inputfield' required/> 
                        </div>
                        <div class="relative w-[48%] mb-[20px] box-border">
                            <label className='text-white font-medium' >Phone Number</label>
                            <input className='w-full py-[10px] px-[5px] rounded border-none outline-none '   type='tel' id='tel_inputfield' required/>
                        </div>
                    </div>
                    <div 
                        className='relative w-full mb-[20px] box-border'>
                        <label className='text-white font-medium' >Holding Information</label>
                        <input className='w-full py-[10px] px-[5px] rounded border-none outline-none contrast-50' readOnly type='text' id='subject_inputfield' value={'Gantry '+1+", Ajah, Lagos"} required/>
                    </div>
                    <input 
                        className='w-full py-3 border-none outline-none text-white bg-custom-blue-dark cursor-pointer rounded hover:bg-custom-ash' type="button" id='send_message_button' value="Book Now"/>
                </form>
            </div>
        </div>
        <div className="w-11/12 lg:w-[80%] mx-auto py-16 space-y-12">
            <h2 data-aos="fade-up" 
                data-aos-duration="1000"
                className='font-semibold text-2xl text-custom-blue text-center'>Similar Holdings</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
            <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='flex flex-col py-5 px-4 gap-4 border-[#005466] border-2 rounded-2xl'>
                    <div className='flex justify-end'>
                        <div className="w-3 h-3 bg-notification-green rounded-full animate-ping absolute"> </div>
                        <div className="w-3 h-3 bg-notification-green rounded-full relative"></div>
                    </div>
                    <div className='w-full md:max-h-[450px]'>
                        <img className='w-full h-full rounded-2xl' src={GantryImage} alt=""/>
                    </div>
                    <div className='flex flex-col justify-end gap-2 w-full'>
                        <CountDownTimer targetDate={new Date().getTime()} />
                        <h2 className='font-bold text-xl text-custom-blue-dark'>Gantry</h2>
                        <div className='flex flex-col md:flex-row justify-between gap-2 w-full'>
                            <p className='text-custom-ash flex flex-row w-fit items-center gap-1.5'><IoLocationSharp /><span className='font-bold text-white'>Lagos, Ajah</span></p>
                            <p className='text-custom-ash flex flex-row w-fit items-center gap-1.5'><SlSizeFullscreen /><span className='font-bold text-white'>16MX16M</span></p>   
                        </div>
                        <div className=''>
                            <p className='md:text-justify text-custom-ash text-sm line-clamp-4 md:line-clamp-3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <Link to='/our-holdings/1'>
                            <p className="py-4 max-w-[300px] mx-auto mt-4 bg-custom-blue-dark rounded-xl text-center text-white font-semibold cursor-pointer hover:bg-custom-brown">Book Now</p>
                        </Link>
                    </div>
                </div>
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='flex flex-col py-5 px-4 gap-4 border-[#005466] border-2 rounded-2xl'>
                    <div className='flex justify-end'>
                        <div className="w-3 h-3 bg-notification-green rounded-full animate-ping absolute"> </div>
                        <div className="w-3 h-3 bg-notification-green rounded-full relative"></div>
                    </div>
                    <div className='w-full md:max-h-[450px]'>
                        <img className='w-full h-full rounded-2xl' src={GantryImage} alt=""/>
                    </div>
                    <div className='flex flex-col justify-end gap-2 w-full'>
                        <CountDownTimer targetDate={new Date().getTime()} />
                        <h2 className='font-bold text-xl text-custom-blue-dark'>Gantry</h2>
                        <div className='flex flex-col md:flex-row justify-between gap-2 w-full'>
                            <p className='text-custom-ash flex flex-row w-fit items-center gap-1.5'><IoLocationSharp /><span className='font-bold text-white'>Lagos, Ajah</span></p>
                            <p className='text-custom-ash flex flex-row w-fit items-center gap-1.5'><SlSizeFullscreen /><span className='font-bold text-white'>16MX16M</span></p>   
                        </div>
                        <div className=''>
                            <p className='md:text-justify text-custom-ash text-sm line-clamp-4 md:line-clamp-3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <Link to='/our-holdings/1'>
                            <p className="py-4 max-w-[300px] mx-auto mt-4 bg-custom-blue-dark rounded-xl text-center text-white font-semibold cursor-pointer hover:bg-custom-brown">Book Now</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default HoldingsContent