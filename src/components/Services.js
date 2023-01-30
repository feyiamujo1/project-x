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
import Footer from "./UI/Footer"
import Navbar from "./UI/Navbar"
import 'aos/dist/aos.css';


const Services = () => {
    document.title = 'Our Services';
    const firstContainer = useRef(null);
    const ScrollToView = () => {
        firstContainer.current?.scrollIntoView({behavior: 'smooth'});
    };
  return (
    <div className='bg-black pb-8 scroll-smooth'>
        <Navbar />
        <div className="w-full h-[90vh] sm:h-screen bg-intro-image bg-cover bg-no-repeat bg-center relative">
            <div
                data-aos="fade-down" 
                data-aos-duration="1100"
                data-aos-delay="500"
                className='hidden md:block absolute top-32 left-[10%]'>
                <p className='hidden md:flex flex-row w-fit gap-4 justify-center items-center text-white'><Link to='/' className='hover:text-custom-blue'>Home</Link> <img src={DirectionImage} alt=""/> Our Services</p>
            </div>
            <div 
                data-aos="zoom-in" 
                data-aos-duration="1500"
                data-aos-delay="500"
                className='w-11/12 h-full mx-auto py-4 flex flex-col items-center gap-4 md:gap-0 justify-center'>
                <div className="w-fit -mt-14 md:mt-0">
                    <h1 className="text-white font-extrabold text-[52px] sm:text-8xl">Our Services</h1>
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
        <div ref={firstContainer} className="w-11/12 lg:w-[80%] mx-auto pb-10 pt-[55px] space-y-10 border-b border-[#acacac4e]">
            <div className='space-y-2'>
                <h2 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='text-white text-center font-bold text-3xl mx-auto max-w-xl md:text-left md:ml-0'>We provide Top Notch services in these areas:</h2>
            </div>
        </div>
        <div  className='bg-black overflow-hidden'>
            <div className='space-y-10 w-11/12 lg:w-[80%] mx-auto py-10 border-b-[0.1px] border-[#acacac4e]'>
                <h2 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='text-custom-blue-dark font-bold text-3xl text-center md:text-left'>Iconic Structure</h2>
                <div 
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    className='flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-16'>
                    <img className='w-full md:w-[310px] lg:w-[360px]' src={Service1Image} alt="" />
                    <p className='text-white leading-8 md:text-justify' >
                        Introducing our newest addition to our portfolio of advertising structures - an iconic and highly visible structure that is sure to make a lasting 
                        impression on your target audience. Our state-of-the-art structure, located in the heart of the city, is designed to showcase your brand and message in 
                        a bold and striking way. Whether you're looking to create brand awareness, generate leads, or increase sales, our iconic structure is the perfect solution 
                        for your outdoor advertising needs.
                    </p>
                </div>
            </div>
        </div>
        <div className='relative overflow-hidden'>
            <div className='space-y-10 w-11/12 lg:w-[80%] mx-auto py-14 border-b border-[#acacac4e] relative z-10'>
                <h2 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='text-center text-custom-blue-dark font-bold text-3xl md:text-right'>Media Planning</h2>
                <div 
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    className='flex flex-col-reverse md:flex-row gap-6 md:gap-8 lg:gap-16'>
                    <p className='text-white leading-8 md:text-justify'>
                        Our outdoor media planning services are designed to help businesses reach their target audience and achieve their advertising goals. We specialize in strategic 
                        planning and placement of out-of-home (OOH) advertisements, including billboards, bus shelters, and transit ads. With our extensive knowledge of the OOH landscape, 
                        we are able to identify the most impactful locations to deliver your message and maximize your advertising budget.
                    </p>
                    <img className='w-full md:w-[310px] lg:w-[360px]' src={Service2Image} alt="" />
                </div>
            </div>
            <div className='h-[90%] w-full bg-[#1E1E1E] absolute z-[8] top-0 bottom-0 left-0 right-0 m-auto'></div>
        </div>
        <div className='bg-black overflow-hidden'>
            <div className='space-y-10 w-11/12 lg:w-[80%] mx-auto py-14 border-b border-[#acacac4e]'>
                <h2 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='text-custom-blue-dark font-bold text-3xl text-center md:text-left'>Branding</h2>
                <div 
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    className='flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-16'>
                    <img className='w-full md:w-[310px] lg:w-[360px]' src={Service3Image} alt="" />
                    <p className='text-white leading-8 md:text-justify'>
                        At Eyekontact, we understand the power of branding in outdoor advertising. Whether it's a billboard, bus shelter, or street furniture, we help companies create impactful 
                        campaigns that not only grab attention, but also leave a lasting impression on viewers. Our team of experts specialize in crafting powerful and unique brand messages that 
                        resonate with your target audience and helps you to stand out in a crowded market.
                    </p>
                </div>
            </div>
        </div>
        <div className='relative overflow-hidden'>
            <div className='space-y-10 w-11/12 lg:w-[80%] mx-auto py-14 border-b border-[#acacac4e] relative z-10'>
                <h2 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='text-center text-custom-blue-dark font-bold text-3xl md:text-right'>Media Buying</h2>
                <div 
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    className='flex flex-col-reverse md:flex-row gap-6 md:gap-8 lg:gap-16'>
                    <p className='text-white md:text-justify leading-8'>
                        Outdoor advertising is a powerful way to reach your target audience, but placing your ads in the right locations and at the right times is key to success. That's why we offer 
                        comprehensive media buying services. Our experts will use their knowledge of the industry and audience insights to create a strategic media plan that gets your ads in front of 
                        the right people at the right time, delivering maximum impact and return on investment.
                    </p>
                    <img className='w-full md:w-[310px] lg:w-[360px]' src={Service4Image} alt="" />
                </div>
            </div>
            <div className='h-[90%] w-full bg-[#1E1E1E] absolute z-[8] top-0 bottom-0 left-0 right-0 m-auto'></div>
        </div>
        <div className='bg-black overflow-hidden'>
            <div className='space-y-10 w-11/12 lg:w-[80%] mx-auto py-14 border-b border-[#acacac4e]'>
                <h2 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='text-custom-blue-dark font-bold text-3xl text-center md:text-left'>Digital Marketing</h2>
                <div 
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    className='flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-16'>
                    <img className='w-full md:w-[310px] lg:w-[360px]' src={Service5Image} alt="" />
                    <p className='text-white leading-8 md:text-justify'>
                        Maximize your reach and engagement with our digital marketing services. We specialize in creating dynamic and effective campaigns that 
                        utilize the latest technologies and platforms to connect you with your target audience. From digital billboards to mobile advertising, 
                        we offer a wide range of solutions to help you stand out in the digital landscape and drive results.
                    </p>
                </div>
            </div>
        </div>
        <div className='relative overflow-hidden'>
            <div className='space-y-10 w-11/12 lg:w-[80%] mx-auto py-14 border-b border-[#acacac4e] relative z-10'>
                <h2 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='text-center text-custom-blue-dark font-bold text-3xl md:text-right'>Creative Design</h2>
                <div 
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    className='flex flex-col-reverse md:flex-row gap-6 md:gap-8 lg:gap-16'>
                    <p className='text-white md:text-justify leading-8'>
                            Our team of experienced designers utilizes the latest technology and design trends to craft campaigns that capture attention and drive 
                            results. From concept to delivery, we work closely with our clients to understand their unique goals and create designs that resonate 
                            with their target audience. Whether you're looking to launch a new product, increase brand awareness, or drive sales, we have the 
                            creativity and expertise to help you achieve your objectives.
                    </p>
                    <img className='w-full md:w-[310px] lg:w-[360px]' src={Service6Image} alt="" />
                </div>
            </div>
            <div className='h-[90%] w-full bg-[#1E1E1E] absolute z-[8] top-0 bottom-0 left-0 right-0 m-auto'></div>
        </div>
        <div className='bg-black overflow-hidden'>
            <div className='space-y-10 w-11/12 lg:w-[80%] mx-auto py-14 border-b border-[#acacac4e]'>
                <h2 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='text-custom-blue-dark font-bold text-3xl text-center md:text-left'>PR Activation</h2>
                <div 
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    className='flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-16'>
                    <img className='w-full md:w-[310px] lg:w-[360px]' src={Service7Image} alt="" />
                    <p className='text-white leading-8 md:text-justify'>
                        Unleash the power of public relations with our outdoor advertising company. We specialize in creating unique and impactful PR activations 
                        that capture the attention of your target audience and drive results. Whether it's a large-scale event or a grassroots campaign, our team of 
                        experts will work with you to create a strategy that resonates with your brand and amplifies your message. Let us help you create buzz and build 
                        brand awareness with our effective PR solutions.
                    </p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Services