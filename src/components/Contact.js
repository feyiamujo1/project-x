import DirectionImage from '../../src/assets/images/directions.png'
import {ReactComponent as DownButton}  from "../../src/assets/images/down-arrow-svgrepo-com.svg"
import { Link } from 'react-router-dom'
import {ReactComponent as LocationIcon} from '../../src/assets/images/LocationMarker.svg'
import {ReactComponent as FbIcon} from '../../src/assets/images/fb.svg'
import {ReactComponent as IgIcon} from '../../src/assets/images/instagram-logo-fill-svgrepo-com.svg'
import {ReactComponent as LinkedInIcon} from '../../src/assets/images/linkedinn.svg'
import { useEffect, useRef } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    document.title = 'Contact Us';
    const firstContainer = useRef(null);
    const ScrollToView = () => {
        firstContainer.current?.scrollIntoView({behavior: 'smooth'});
    };
    useEffect(() => {
        AOS.init({ once: true });
    }, []);
  return (
    <div className='scroll-smooth'>
        <div className="w-full h-[90vh] sm:h-screen bg-contact-image bg-cover bg-no-repeat bg-[80%] md:bg-center relative">
            <div 
                data-aos="fade-down" 
                data-aos-duration="1100"
                data-aos-delay="500"
                className='hidden md:block absolute top-32 left-[10%]'>
                <p className='hidden md:flex flex-row w-fit gap-4 justify-center items-center text-white'><Link to='/' className='hover:text-custom-blue'>Home</Link> <img src={DirectionImage} alt=""/> Contact Us</p>
            </div>
            <div 
                data-aos="zoom-in" 
                data-aos-duration="1500"
                data-aos-delay="500"
                className='w-11/12 h-full mx-auto py-4 flex flex-col items-center gap-4 md:gap-0 justify-center'>
                <div className="w-fit -mt-14 md:mt-0">
                    <h1 className="text-white font-extrabold text-[52px] sm:text-8xl">Contact Us</h1>
                    {/* <p className="text-white text-sm sm:text-xl text-right font-semibold -mt-3 sm:mt-0">Limited</p> */}
                </div>
                <div>
                    <p className="w-11/12 md:w-[550px] text-white text-center text-sm sm:text-base font-normal absolute left-0 right-0 mx-auto bottom-[110px] md:bottom-24 md:right-[50%] md:translate-x-2/4 md:left-auto">
                    Do you need assistance with media planning, branding, advertising, PR activation, or the creation of unique designs for your company? We are the perfect chance to make your business stand out.
                    </p>
                    {/* <p className="text-white text-xs sm:text-sm font-light absolute bottom-4 right-[5%] md:right-[2%]">RC 722750</p> */}
                    <div className="w-full absolute left-0 right-0 bottom-10 md:bottom-8 flex flex-row justify-center items-center">
                        <DownButton onClick={ScrollToView} className=" w-10 h-10 fill-custom-blue cursor-pointer animate-bounce" />
                    </div>
                </div>
            </div>
        </div>
        <div ref={firstContainer} className='bg-black'>
            <div className="w-11/12 lg:w-[80%] mx-auto min-h-[90vh] md:min-h-screen relative pb-16 pt-16 space-y-10 flex flex-col md:justify-between md:flex-row">
                <div className='space-y-10 md:w-[48%]'>
                    <div className='space-y-5'>
                        <h2 
                            data-aos="fade-right" 
                            data-aos-duration="1000"
                            className='text-3xl font-semibold text-custom-blue'>
                            Get In Touch
                        </h2>
                        <p 
                            data-aos="fade-up" 
                            data-aos-duration="1000"
                            className='text-white'>
                            Whether it’s feedback or a question, the Eyekontact team is here to help. 
                            Contact us by sending an email or filling our contact form. 
                            For a personal discussion with our team, visit or call our office.
                        </p>
                    </div>
                    <div 
                        data-aos="fade-up" 
                        data-aos-duration="1000"
                        className='space-y-5'>
                        <div 
                            className='flex flex-row w-fit gap-4 items-center group cursor-pointer'>
                            <svg className='w-7 h-7 p-0 block fill-white group-active:fill-custom-blue md:group-hover:fill-custom-blue' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M21 15v3.93a2 2 0 0 1-2.29 2A18 18 0 0 1 3.14 5.29 2 2 0 0 1 5.13 3H9a1 1 0 0 1 1 .89 10.74 10.74 0 0 0 1 3.78 1 1 0 0 1-.42 1.26l-.86.49a1 1 0 0 0-.33 1.46 14.08 14.08 0 0 0 3.69 3.69 1 1 0 0 0 1.46-.33l.49-.86a1 1 0 0 1 1.3-.38 10.74 10.74 0 0 0 3.78 1 1 1 0 0 1 .89 1Z"/>
                            </svg>
                            <p className='text-white group-active:text-custom-blue md:group-hover:text-custom-blue ml-1 -mb-1'>+234901234567</p>
                        </div>
                        <div 
                            className='flex flex-row w-fit gap-4 items-center group cursor-pointer'>
                            <svg className='w-7 h-7 p-0 block fill-white group-active:fill-custom-blue md:group-hover:fill-custom-blue' viewBox="0 0 512 512">
                                <path d="M452.29 74.535H59.71C26.728 74.535 0 101.263 0 134.236v243.527c0 32.974 26.728 59.702 59.71 59.702h392.58c32.973 0 59.71-26.728 59.71-59.702V134.236c0-32.973-26.736-59.701-59.71-59.701zm31.2 319.314-11.366 13.46-159.167-129.902-24.65 23.454c-18.268 16.776-46.345 16.776-64.614 0l-24.65-23.454L39.876 407.309l-11.366-13.46 149.44-136.517L27.531 115.968l8.893-11.783L256 270.56l219.575-166.375 8.886 11.783-150.41 141.364L483.49 393.849z"/>
                            </svg>
                            <p className='text-white group-active:text-custom-blue md:group-hover:text-custom-blue ml-1.5 -mb-1'>eyekontactlimited@gmail.com</p>
                        </div>
                        <div 
                            className='flex flex-row w-fit gap-6 items-center group cursor-pointer'>
                            <LocationIcon className='w-7 h-7 fill-white group-active:fill-custom-blue md:group-hover:fill-custom-blue' />
                            <p className='text-white group-active:text-custom-blue md:group-hover:text-custom-blue'>No 49A, Adeniyi Jones, Ikeja Lagos, Nigeria.</p>
                        </div>
                        <div className='space-y-5'>
                            <div 
                                className=' flex flex-row w-fit gap-6 items-center group cursor-pointer' >
                                <LinkedInIcon className='w-7 h-7 fill-white group-active:fill-custom-blue md:group-hover:fill-custom-blue cursor-pointer' />
                                <p className='text-white group-active:text-custom-blue md:group-hover:text-custom-blue'>@Eyekontact</p>
                            </div>
                            <div 
                                className=' flex flex-row w-fit gap-6 items-center group cursor-pointer' >
                                <IgIcon className='w-8 h-8 -ml-0.5 fill-white group-active:fill-custom-blue md:group-hover:fill-custom-blue cursor-pointer' />
                                <span className='text-white group-active:text-custom-blue md:group-hover:text-custom-blue -ml-1'>@Eyekontact</span>
                            </div>
                            <div 
                                className=' flex flex-row w-fit gap-5 items-center group cursor-pointer' >
                                <FbIcon className='w-7 h-7 fill-white group-active:fill-custom-blue md:group-hover:fill-custom-blue cursor-pointer' />
                                <span className='text-white group-active:text-custom-blue md:group-hover:text-custom-blue'>@Eyekontact</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[50%]'>
                    <form 
                        data-aos="fade-up" 
                        data-aos-duration="1000" 
                        className='w-full'>
                        <div 
                            className='flex justify-between'>
                            <div class="relative w-[48%] mb-[20px] box-border">
                                <label className='text-white font-medium' >First Name</label>
                                <input className='w-full py-[10px] px-[5px] rounded border-none outline-none font-medium' type='text' id='firstname_inputfield' required/>
                            </div>
                            <div class="relative w-[48%] mb-[20px] box-border">
                                <label className='text-white font-medium' >Last Name</label>
                                <input className='w-full py-[10px] px-[5px] rounded border-none outline-none'   type='text' id='lastname_inputfield' required/>
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
                            <label className='text-white font-medium' >Subject</label>
                            <input className='w-full py-[10px] px-[5px] rounded border-none outline-none '   type='text' id='subject_inputfield' required/>
                        </div>
                        <div 
                            className='relative w-full mb-[20px] box-border'>
                            <label className='text-white font-medium' >Message</label>
                            <textarea className='w-full rounded' rows={2} required id='message_textarea'/> 
                        </div>
                        <input 
                            className='w-full py-3 border-none outline-none text-white bg-custom-blue-dark cursor-pointer rounded' type="button" id='send_message_button' value="Send Message"/>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Contact