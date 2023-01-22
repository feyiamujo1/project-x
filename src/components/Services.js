import { Link } from 'react-router-dom'
import DirectionImage from '../../src/assets/images/directions.png'
import Service1Image from '../../src/assets/images/service1.png'
import Service2Image from '../../src/assets/images/service2.png'
import Service3Image from '../../src/assets/images/service3.png'
import Service4Image from '../../src/assets/images/service4.png'
import Service5Image from '../../src/assets/images/service5.png'
import Service6Image from '../../src/assets/images/service6.png'
import Service7Image from '../../src/assets/images/service7.png'
import {ReactComponent as DownButton}  from "../../src/assets/images/down-arrow-svgrepo-com.svg"
import { useRef } from 'react'


const Services = () => {
    document.title = 'Our Services';
    const firstContainer = useRef(null);
    const ScrollToView = () => {
        firstContainer.current?.scrollIntoView({behavior: 'smooth'});
    };
  return (
    <div className='bg-black pb-8'>
        
        <div className="w-full h-[90vh] sm:h-screen bg-intro-image bg-cover bg-no-repeat bg-center relative">
            <div className='hidden md:block absolute top-32 left-[7.3%]'>
                <p className='hidden md:flex flex-row w-fit gap-4 justify-center items-center text-white'><Link to='/' className='hover:text-custom-blue'>Home</Link> <img src={DirectionImage} alt=""/> Our Services</p>
            </div>
            <div className='w-11/12 h-full mx-auto py-4 flex flex-col items-center gap-4 md:gap-0 justify-center'>
                <div className="w-fit -mt-14 md:mt-0">
                    <h1 className="text-white font-extrabold text-[52px] sm:text-8xl">Services</h1>
                    {/* <p className="text-white text-sm sm:text-xl text-right font-semibold -mt-3 sm:mt-0">Limited</p> */}
                </div>
                <div>
                    <p className="w-11/12 md:w-[550px] text-white text-center text-sm sm:text-base font-normal absolute left-0 right-0 mx-auto bottom-[110px] md:bottom-24 md:right-[50%] md:translate-x-2/4 md:left-auto">
                        We create custom display that convey your brand messages and also help your company standout.
                    </p>
                    {/* <p className="text-white text-xs sm:text-sm font-light absolute bottom-4 right-[5%] md:right-[2%]">RC 722750</p> */}
                    <div className="w-full absolute left-0 right-0 bottom-10 md:bottom-8 flex flex-row justify-center items-center">
                        <DownButton onClick={ScrollToView} className=" w-10 h-10 fill-custom-blue cursor-pointer animate-bounce" />
                    </div>
                </div>
            </div>
        </div>
        <div ref={firstContainer} className="w-11/12 lg:w-[85%] mx-auto pb-10 pt-[55px] space-y-10 border-b border-[#ACACAC66]">
            <div className='block -mt-10'>
                {/* <p className='flex flex-row w-fit gap-4 justify-center items-center text-white'><Link to='/' className='hover:text-custom-blue'>Home</Link> <img src={DirectionImage} alt=""/> Our Services</p> */}
            </div>
            <div className='space-y-2'>
                {/* <h1 className="font-extrabold abt -mt-10 text-4xl md:text-5xl text-white">Our Services</h1>
                <p className='text-white max-w-[600px] text-sm md:text-lg leading-4 md:leading-5 font-light'>
                    We can create custom display that convey your brand messages and also help your company standout.
                </p> */}
                <h2 className='text-white text-center font-bold text-3xl '>We provide top notch services in these areas</h2>
            </div>
        </div>
        <div  className='bg-black '>
            <div className='space-y-10 w-11/12 lg:w-[85%] mx-auto py-10 border-b border-[#ACACAC66]'>
                <h2 className='text-custom-blue-dark font-bold text-3xl text-center md:text-left'>Iconic Structure</h2>
                <div className='flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-8'>
                    <img className='w-full md:w-[310px] lg:w-[360px]' src={Service1Image} alt="" />
                    <p className='text-white'>
                    The iconic platforms is the modern form of advertising which has to do with the digital and creative forms of advertising in OOH. This kind of platform are especially made for bigger brands that know the 
                    effectiveness on their BRANDS . The most important of the iconic platform is that it must be LIT to show the beauty of the brands 
                    and tell a story of the brands.
                    </p>
                </div>
            </div>
        </div>
        <div className='relative'>
            <div className='space-y-10 w-11/12 lg:w-[85%] mx-auto py-14 border-b border-[#ACACAC66] relative z-10'>
                <h2 className='text-center text-custom-blue md:text-white font-bold text-3xl md:text-right'>Media Planning</h2>
                <div className='flex flex-col-reverse md:flex-row gap-6 md:gap-4 lg:gap-8'>
                    <p className='text-white'>
                        At Eyekontact our approach to media planning is to understand our client brands’ marketing, adevertising and media goals. We incorporate the four core steps in media planning; market analysis, establishment of media 
                        objectives, media strategy development and implementation and evaluation and follow up.
                    </p>
                    <img className='w-full md:w-[310px] lg:w-[360px]' src={Service2Image} alt="" />
                </div>
            </div>
            <div className='h-[90%] w-full bg-[#1E1E1E] absolute z-[8] top-0 bottom-0 left-0 right-0 m-auto'></div>
        </div>
        <div className='bg-black '>
            <div className='space-y-10 w-11/12 lg:w-[85%] mx-auto py-14 border-b border-[#ACACAC66]'>
                <h2 className='text-custom-blue-dark font-bold text-3xl text-center md:text-left'>Branding</h2>
                <div className='flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-8'>
                    <img className='w-full md:w-[310px] lg:w-[360px]' src={Service3Image} alt="" />
                    <p className='text-white'>
                        Our strategy towards branding is developing brand recognition, customers loyalty and builds lasting relationships with our amiable clients.
                    </p>
                </div>
            </div>
        </div>
        <div className='relative'>
            <div className='space-y-10 w-11/12 lg:w-[85%] mx-auto py-14 border-b border-[#ACACAC66] relative z-10'>
                <h2 className='text-center text-custom-blue md:text-white font-bold text-3xl md:text-right'>Media Buying</h2>
                <div className='flex flex-col-reverse md:flex-row gap-6 md:gap-4 lg:gap-8'>
                    <p className='text-white'>
                        We put media planning into action, focusing on buying the right mix of media to deliver on the campaign goals effectively.
                    </p>
                    <img className='w-full md:w-[310px] lg:w-[360px]' src={Service4Image} alt="" />
                </div>
            </div>
            <div className='h-[90%] w-full bg-[#1E1E1E] absolute z-[8] top-0 bottom-0 left-0 right-0 m-auto'></div>
        </div>
        <div className='bg-black '>
            <div className='space-y-10 w-11/12 lg:w-[85%] mx-auto py-14 border-b border-[#ACACAC66]'>
                <h2 className='text-custom-blue-dark font-bold text-3xl text-center md:text-left'>Digital Marketing</h2>
                <div className='flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-8'>
                    <img className='w-full md:w-[310px] lg:w-[360px]' src={Service5Image} alt="" />
                    <p className='text-white'>
                        We put media planning into action, focusing on buying the right mix of media to deliver on the campaign goals effectively.
                    </p>
                </div>
            </div>
        </div>
        <div className='relative'>
            <div className='space-y-10 w-11/12 lg:w-[85%] mx-auto py-14 border-b border-[#ACACAC66] relative z-10'>
                <h2 className='text-center text-custom-blue md:text-white font-bold text-3xl md:text-right'>Creative Design</h2>
                <div className='flex flex-col-reverse md:flex-row gap-6 md:gap-4 lg:gap-8'>
                    <p className='text-white'>
                    Eyekontact creative design produces iconic, unique and memorable design that stand out to our customers for easy identification of their brand and products.
                    </p>
                    <img className='w-full md:w-[310px] lg:w-[360px]' src={Service6Image} alt="" />
                </div>
            </div>
            <div className='h-[90%] w-full bg-[#1E1E1E] absolute z-[8] top-0 bottom-0 left-0 right-0 m-auto'></div>
        </div>
        <div className='bg-black '>
            <div className='space-y-10 w-11/12 lg:w-[85%] mx-auto py-14 border-b border-[#ACACAC66]'>
                <h2 className='text-custom-blue-dark font-bold text-3xl text-center md:text-left'>PR Activation</h2>
                <div className='flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-8'>
                    <img className='w-full md:w-[310px] lg:w-[360px]' src={Service7Image} alt="" />
                    <p className='text-white'>
                        We do PR activation through campaigns, events and interact which your brand generates awareness and builds lasting connections with target audience.
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Services