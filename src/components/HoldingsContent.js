// import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Footer from './UI/Footer'
import Navbar from './UI/Navbar'
// import DirectionImage from '../../src/assets/images/directions.png'
// import {ReactComponent as DownButton}  from "../../src/assets/images/down-arrow-svgrepo-com.svg"
import GantryImage from "../../src/assets/images/live-gantry.png"
import { IoLocationSharp } from "react-icons/io5"
import { SlSizeFullscreen } from "react-icons/sl"
import CountDownTimer from './UI/CountDownTimer'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useState } from 'react'
import SampleVideo from "../../src/assets/video/sample_video.mp4"
import { BsPlayCircle } from "react-icons/bs"

const HoldingsContent = () => {
    document.title = 'Holding Detail';
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

    // Custom date for now sha
    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    const [currentSlide, setCurrentSlide] = useState(0);

    const showNextImage = () =>{
        if (currentSlide < 4){
            setCurrentSlide(prevState => prevState+1);
        }
        if (currentSlide === 3){
            setCurrentSlide(0);
        }
    }
    const showPreviousImage = () =>{
        if (currentSlide > 0){
            setCurrentSlide(prevState => prevState-1)
        }
        if (currentSlide === 0){
            setCurrentSlide(3);
        }
    }
  return (
    <div className='bg-black scroll-smooth'>
        <Navbar />
        <div className="w-full h-[60px] md:h-[87px] bg-contain bg-no-repeat bg-center relative " > {/*bg-[url('/src/assets/images/live-gantry.png')], style={{backgroundimage:"url('../../src/assets/images/live-gantry.png')"}}*/}
            {/* <div
                data-aos="fade-down" 
                data-aos-duration="1100"
                data-aos-delay="500"
                className='hidden md:block absolute top-32 left-[10%] z-50'>
                <p className='hidden md:flex flex-row w-fit gap-4 justify-center items-center text-white'><Link to='/' className='hover:text-custom-blue'>Home</Link> <img src={DirectionImage} alt=""/> <Link to='/our-holdings' className='hover:text-custom-blue'>Our Holdings</Link> <img src={DirectionImage} alt=""/> Gantry</p>
            </div> */}
            
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
        <div className='h-fit md:pt-0 md:h-screen md:w-11/12 lg:w-[80%] box-border mx-auto flex flex-col-reverse md:flex-row gap-4 md:gap-6 xl:gap-8 justify-center items-center md:select-none'>
                <div className='hidden md:flex flex-row md:flex-col gap-6 w-fit mx-auto items-center md:justify-between md:w-[85px] md:h-[85%] xl:w-[100px]'>
                    <div onClick={() => {setCurrentSlide(0)}} className={currentSlide===0 ? 'w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 border-[3px] cursor-pointer border-[#005466] rounded-2xl overflow-hidden group relative' 
                        : 'w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 border-[3px] border-transparent hover:border-[#005466] cursor-pointer rounded-2xl overflow-hidden group relative'}>
                        <div className={currentSlide===0 ? 'absolute w-full h-full bg-custom-dark-image z-50': "hidden"}></div>
                        <img src={GantryImage} alt='' className="w-full h-full"  />
                    </div>
                    <div onClick={() => {setCurrentSlide(1)}} className={currentSlide===1 ? 'w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 border-[3px] cursor-pointer border-[#005466] rounded-2xl overflow-hidden group relative' 
                        : 'w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 border-[3px] border-transparent hover:border-[#005466] cursor-pointer rounded-2xl overflow-hidden group relative'}>
                        <div className={currentSlide===1 ? 'absolute w-full h-full bg-custom-dark-image z-50': "hidden"}></div>
                        <img src={GantryImage} alt='' className="w-full h-full" />
                    </div>
                    <div onClick={() => {setCurrentSlide(2)}} className={currentSlide===2 ? 'w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 border-[3px] cursor-pointer border-[#005466] rounded-2xl overflow-hidden group relative' 
                        : 'w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 border-[3px] border-transparent hover:border-[#005466] cursor-pointer rounded-2xl overflow-hidden group relative'}>
                        <div className={currentSlide===2 ? 'absolute w-full h-full bg-custom-dark-image z-50': "hidden"}></div>
                        <img src={GantryImage} alt='' className="w-full h-full" />
                    </div>
                    <div onClick={() => {setCurrentSlide(3)}} className={currentSlide===3 ? 'w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 border-[3px] cursor-pointer border-[#005466] rounded-2xl overflow-hidden group relative' 
                        : 'w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 border-[3px] border-transparent hover:border-[#005466] cursor-pointer rounded-2xl overflow-hidden group relative'}>
                        <div className={currentSlide===3 ? 'absolute w-full h-full bg-custom-dark-image z-50': "hidden"}></div>
                        <BsPlayCircle className='text-white absolute w-full h-full p-6 z-40' />
                        <video paused={true} className="w-full h-full">
                            <source src={SampleVideo} type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <div className={'w-full h-[345px] sm:h-[545px] md:h-[85%] box-border relative flex flex-row'}>
                    <img src={GantryImage} alt='' className={currentSlide===0 ? "w-full h-[345px] sm:h-[545px] md:h-full md:rounded-2xl" : "hidden"} />
                    <img src={GantryImage} alt='' className={currentSlide===1 ? "w-full h-[345px] sm:h-[545px] md:h-full md:rounded-2xl" : "hidden"} />
                    <img src={GantryImage} alt='' className={currentSlide===2 ? "w-full h-[345px] sm:h-[545px] md:h-full md:rounded-2xl" : "hidden"} />
                    <video  loop controls paused={true} playsInline className={currentSlide===3 ? "cursor-pointer w-full min-h-[350px] md:h-full md:rounded-2xl" : "hidden"}>
                        <source src={SampleVideo} type="video/mp4"/>
                    </video>
                    <IoIosArrowBack className='absolute left-0 top-0 bottom-0 my-auto z-50 text-white cursor-pointer text-[40px] active:text-custom-dark-image md:hover:text-custom-dark-image' onClick={showPreviousImage} /> 
                    <IoIosArrowForward className='absolute right-0 top-0 bottom-0 my-auto z-50 text-white cursor-pointer text-[40px] active:text-custom-dark-image md:hover:text-custom-dark-image' onClick={showNextImage}/>
                </div>
            </div>
        <div className="w-11/12 lg:w-[80%] mx-auto py-10 flex flex-col md:flex-row justify-between gap-6 xl:gap-12 lg:gap-20">
            <div className='space-y-5'>
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='space-y-4'>
                    <p className='text-custom-blue text-2xl font-semibold'>Gantry</p>
                    <h2 
                    className='font-bold text-base text-white'>Description</h2>
                <p className=' text-custom-ash text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div 
                    className='flex flex-col justify-between gap-3 w-full'>
                    <p className='text-custom-ash flex flex-row w-fit gap-2'><IoLocationSharp className='text-lg'/><span className='font-bold text-white'>Lagos, Ajah</span></p>
                    <p className='text-custom-ash flex flex-row w-fit gap-2'><SlSizeFullscreen className='text-lg'/><span className='font-bold text-white'>16MX16M</span></p>   
                </div>
                <CountDownTimer targetText={"This outlet will be available in"} targetDate={dateTimeAfterThreeDays} />
                </div>
            </div>
            <div 
                data-aos="fade-up" 
                data-aos-duration="1000"
                className='space-y-6'>
                <h2 
                    className='text-custom-blue text-base font-semibold'>Fill the form below to book this outlet</h2>
                <form 
                    className='w-full md:w-[400px]'>
                    <div>
                        <div class="mb-[20px] box-border">
                            <label className='text-white font-medium' >Full Name</label>
                            <input className='w-full py-[10px] px-[5px] rounded font-medium hover:border-custom-blue-dark' type='text' id='fullname_inputfield' required/>
                        </div>
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
                    className='flex flex-col text-center md:text-left md:flex-row py-5 px-4 gap-4 h-fit rounded-2xl border-[#005466] border-2 relative'>
                    <div className='flex absolute z-50 right-7 top-[30px] md:right-3 md:top-3.5 bg-black p-1.5 rounded-full'>
                        <div className="w-3 h-3 bg-notification-red rounded-full animate-ping absolute"> </div>
                        <div className="w-3 h-3 bg-notification-red rounded-full relative"></div>
                    </div>
                    <div className='w-full md:w-[450px] relative'>
                        <img className='w-full md:w-[450px] h-full rounded-2xl' src={GantryImage} alt=""/>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <div>
                            <h2 className='font-bold text-xl text-custom-blue-dark'>Gantry</h2>
                            <CountDownTimer targetDate={dateTimeAfterThreeDays} />
                        </div>
                        <div>
                            <div className='text-custom-brown flex flex-row w-fit items-center gap-1.5 text-[13.5px] mx-auto md:mx-0'><IoLocationSharp className='text-[14px] mb-0.5' /><span className='font-bold -ml-1'>Cross River, Calabar</span></div>
                            <p className='text-custom-brown flex flex-row w-fit items-center gap-1.5 text-[13.5px] mx-auto md:mx-0'><SlSizeFullscreen className='text-[12px]' /><span className='font-bold'>16MX16M</span></p>
                        </div>
                        <Link to='/our-holdings/1'>
                            <p className="py-4 w-full bg-custom-blue-dark rounded-xl text-center text-black font-bold cursor-pointer hover:bg-custom-brown">Book Now</p>
                        </ Link>
                    </div>
                </div>
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='flex flex-col text-center md:text-left md:flex-row py-5 px-4 gap-4 h-fit rounded-2xl border-[#005466] border-2 relative'>
                    <div className='flex absolute z-50 right-7 top-[30px] md:right-3 md:top-3.5 bg-black p-1.5 rounded-full'>
                        <div className="w-3 h-3 bg-notification-red rounded-full animate-ping absolute"> </div>
                        <div className="w-3 h-3 bg-notification-red rounded-full relative"></div>
                    </div>
                    <div className='w-full md:w-[450px] relative'>
                        <img className='w-full md:w-[450px] h-full rounded-2xl' src={GantryImage} alt=""/>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <div>
                            <h2 className='font-bold text-xl text-custom-blue-dark'>Gantry</h2>
                            <CountDownTimer targetDate={dateTimeAfterThreeDays} />
                        </div>
                        <div>
                            <div className='text-custom-brown flex flex-row w-fit items-center gap-1.5 text-[13.5px] mx-auto md:mx-0'><IoLocationSharp className='text-[14px] mb-0.5' /><span className='font-bold -ml-1'>Cross River, Calabar</span></div>
                            <p className='text-custom-brown flex flex-row w-fit items-center gap-1.5 text-[13.5px] mx-auto md:mx-0'><SlSizeFullscreen className='text-[12px]' /><span className='font-bold'>16MX16M</span></p>
                        </div>
                        <Link to='/our-holdings/1'>
                            <p className="py-4 w-full bg-custom-blue-dark rounded-xl text-center text-black font-bold cursor-pointer hover:bg-custom-brown">Book Now</p>
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