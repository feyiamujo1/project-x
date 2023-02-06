// import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Footer from './UI/Footer'
import Navbar from './UI/Navbar'
import DirectionImage from '../../src/assets/images/directions.png'
// import {ReactComponent as DownButton}  from "../../src/assets/images/down-arrow-svgrepo-com.svg"
import GantryImage from "../../src/assets/images/live-gantry.png"
import { HiLocationMarker } from 'react-icons/hi'

const HoldingsContent = () => {
    document.title = 'Holdings';
    // const firstContainer = useRef(null);
    // const ScrollToView = () => {
    //     firstContainer.current?.scrollIntoView({behavior: 'smooth'});
    // };
  return (
    <div className='bg-black scroll-smooth'>
        <Navbar />
        <div className="w-full h-[90vh] sm:h-screen bg-cover bg-no-repeat bg-center relative" style={{backgroundimage:"url('../../src/assets/images/live-gantry.png')"}}>
            <div
                data-aos="fade-down" 
                data-aos-duration="1100"
                data-aos-delay="500"
                className='hidden md:block absolute top-32 left-[10%]'>
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
        <div className="w-11/12 lg:w-[80%] mx-auto pt-16 flex flex-col md:flex-row justify-between gap-6">
            <div className='space-y-5'>
                <h2 
                data-aos="fade-up" 
                data-aos-duration="1000"
                className='font-semibold text-2xl text-custom-blue'>Description</h2>
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='space-y-4'>
                    <p className='text-white text-2xl'>Gantry</p>
                    <div className='text-white flex items-center gap-x-2'>
                        <span><HiLocationMarker className="text-lg text-custom-blue-dark"/></span> Ajah, Lagos State
                    </div>
                    <p className='text-white'><span className='text-custom-blue-dark font-semibold'>Size:</span> 16MX16M</p>
                </div>
            </div>
            <div>
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
        <div className="w-11/12 lg:w-[80%] mx-auto py-16 space-y-6">
            <h2 data-aos="fade-up" 
                data-aos-duration="1000"
                className='font-semibold text-2xl text-custom-blue text-center'>Related Holdings</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='flex flex-col md:flex-row py-5 px-4 gap-4 bg-[#eeeeee] rounded-2xl'>
                    <div className='w-full md:w-[450px]'>
                        <img className='w-full md:w-[450px] h-full rounded-2xl' src={GantryImage} alt=""/>
                    </div>
                    <div className='flex flex-col justify-end gap-2 w-full'>
                        <h2 className='font-bold text-xl'>Gantry</h2>
                        <p>Location: <span className='font-bold'>Lagos, Ajah</span></p>
                        <p>Size: <span className='font-bold'>16MX16M</span></p>
                        <Link to='/our-holdings/1'>
                            <p className="py-4 w-full bg-custom-blue-dark rounded-xl text-center text-white font-semibold cursor-pointer hover:bg-custom-brown">Book Now</p>
                        </ Link>
                    </div>
                </div>
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='flex flex-col md:flex-row py-5 px-4 gap-4 bg-[#eeeeee] rounded-2xl'>
                    <div className='w-full md:w-[450px]'>
                        <img className='w-full md:w-[450px] h-full rounded-2xl' src={GantryImage} alt=""/>
                    </div>
                    <div className='flex flex-col justify-end gap-2 w-full'>
                        <h2 className='font-bold text-xl'>Gantry</h2>
                        <p>Location: <span className='font-bold'>Lagos, Ajah</span></p>
                        <p>Size: <span className='font-bold'>16MX16M</span></p>
                        <Link to='/our-holdings/2'>
                            <p className="py-4 w-full bg-custom-blue-dark rounded-xl text-center text-white font-semibold cursor-pointer hover:bg-custom-brown">Book Now</p>
                        </ Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default HoldingsContent