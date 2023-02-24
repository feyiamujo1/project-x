import {ReactComponent as DownButton}  from "../../src/assets/images/down-arrow-svgrepo-com.svg"
import FirstFrameImage from "../../src/assets/images/Frame1.png"
import SecondFrameImage from "../../src/assets/images/Frame2.png"
import ThirdFrameImage from "../../src/assets/images/Frame3.png"
import CertifiedVector from "../../src/assets/images/point_vector.png"
import FirstRecImage from "../../src/assets/images/Rectangle16.png"
import SecondRecImage from "../../src/assets/images/Rectangle17.png"
import ThirdRecImage from "../../src/assets/images/Rectangle18.png"
import FirstNewsImage from "../../src/assets/images/Rectangle32.png"
import SecondNewsImage from "../../src/assets/images/Rectangle33.png"
import ThirdNewsImage from "../../src/assets/images/Rectangle34.png"
import BgVideo from "../../src/assets/video/website_header_final.mp4"
import CampaignHoldings from "./UI/CampaignHoldings"
import Partners from "./UI/Partners"
import { useEffect, useRef } from "react"
import HomeImage from '../../src/assets/images/thumbnail.JPG'
import 'aos/dist/aos.css';
import { Link } from "react-router-dom"
import Footer from "./UI/Footer"
import Navbar from "./UI/Navbar"

const Home = () => {
    
    const ref = useRef(null);
    const ScrollToView = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };
    const videoElement = useRef();

    useEffect(() => {
        const handleVideo = () => {
            videoElement.current?.addEventListener('suspend', () => {
                videoElement.current?.play();
            });
        }
        handleVideo();
    }, [videoElement]);
    
    document.title = 'Home';

  return (
    <div className='scroll-smooth'>
        <Navbar />
        <div className="w-full h-[90vh] sm:h-screen bg-cover bg-no-repeat bg-center relative">
            <video  ref={videoElement} poster={HomeImage} className="w-screen h-[90vh] sm:h-screen absolute object-cover z-[-100] brightness-[0.35]" preload="auto" autoPlay loop muted playsInline>
                <source src={BgVideo} type="video/mp4" />
            </video>
            <div 
                data-aos="zoom-in" 
                data-aos-duration="1500"
                data-aos-delay="500"
                className='w-11/12 h-full mx-auto py-4 flex flex-col items-center gap-4 md:gap-0 justify-center'>
                <div className="w-fit -mt-14 md:mt-0">
                    <h1 className="text-white font-extrabold text-[52px] sm:text-8xl">Eyekontact</h1>
                    <p className="text-white text-sm sm:text-xl text-right font-semibold -mt-3 sm:mt-0">Limited</p>
                </div>
                <div>
                    <p className="w-11/12 md:w-[550px] text-white text-center text-sm sm:text-base font-normal absolute left-0 right-0 mx-auto bottom-[110px] md:bottom-24 md:right-[50%] md:translate-x-2/4 md:left-auto">
                        We are a value driven organisation that helps you connect with your target audience by 
                        projecting your brand in memorable ways.
                    </p>
                    <p className="text-white text-xs sm:text-sm font-light absolute bottom-4 right-[5%] md:right-[2%]">RC 722750</p>
                    <div className="w-full absolute left-0 right-0 bottom-10 md:bottom-8 flex flex-row justify-center items-center">
                        <DownButton onClick={ScrollToView} className=" w-10 h-10 fill-custom-blue cursor-pointer animate-bounce" />
                    </div>
                </div>
            </div>
        </div>
         <div ref={ref} className="w-full bg-black py-16 mt-10 rounded-[32px] space-y-6">
            <div 
                className='w-11/12 lg:w-[80%] h-full mx-auto flex flex-col items-center justify-center space-y-14'>
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1300"
                    data-aos-delay="100"
                    className="w-fit space-y-4 text-center">
                    <h1 className="text-white font-extrabold text-4xl sm:text-5xl mx-auto">Our Holdings</h1>
                    <p className="text-white text-base md:text-sm font-normal w-full md:w-[480px]">
                        Bringing your brand to life in the great outdoors. Don't just advertise, make a statement with Eyekontact Limited.
                    </p>
                </div>
                <CampaignHoldings />
            </div>
            <div>
                <div 
                    data-aos="zoom-in" 
                    data-aos-duration="1500"
                    className="m-scroll h-[180px] md:h-[200px]">
                    <div className="m-scroll__title">
                        <div className="marquee-one">
                            <h1 className="text-[#00D3FF] font-black text-[78px] md:text-8xl ">
                                Think Iconic &nbsp;
                            </h1>
                            <h1 className="text-[#00D3FF] font-black text-[78px] md:text-8xl ">
                                Think Iconic &nbsp;
                            </h1>
                            <h1 className="text-[#00D3FF] font-black text-[78px] md:text-8xl ">
                                Think Iconic &nbsp;
                            </h1>
                            <h1 className="text-[#00D3FF] font-black text-[78px] md:text-8xl ">
                                Think Iconic &nbsp;
                            </h1>
                            <h1 className="text-[#00D3FF] font-black text-[78px] md:text-8xl ">
                                Think Iconic &nbsp;
                            </h1>
                            <h1 className="text-[#00D3FF] font-black text-[78px] md:text-8xl ">
                                Think Iconic &nbsp;
                            </h1>
                        </div>
                    </div>
                    <div className="m-scroll__title">
                        <div className="marquee-two mt-[72px] md:mt-[90px]">
                            <h1 className="text-[#FFFFFF80] font-black text-[78px] md:text-8xl  right-marquee">
                                Think Eyekontact &nbsp;
                            </h1>
                            <h1 className="text-[#FFFFFF80] font-black text-[78px] md:text-8xl  right-marquee">
                                Think Eyekontact &nbsp;
                            </h1>
                            <h1 className="text-[#FFFFFF80] font-black text-[78px] md:text-8xl  right-marquee">
                                Think Eyekontact &nbsp;
                            </h1>
                            <h1 className="text-[#FFFFFF80] font-black text-[78px] md:text-8xl  right-marquee">
                                Think Eyekontact &nbsp;
                            </h1>
                            <h1 className="text-[#FFFFFF80] font-black text-[78px] md:text-8xl  right-marquee">
                                Think Eyekontact &nbsp;
                            </h1>
                            <h1 className="text-[#FFFFFF80] font-black text-[78px] md:text-8xl  right-marquee">
                                Think Eyekontact &nbsp;
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full py-16">
            <div className='w-11/12 lg:w-[80%] mx-auto space-y-10 overflow-hidden'>
                <h1 
                    data-aos="fade-right" 
                    data-aos-duration="1000"
                    className="text-black font-extrabold text-4xl md:text-5xl">
                        what we do.
                    </h1>
                <div className="space-y-10 md:space-y-16">
                    <div 
                        data-aos="fade-up" 
                        data-aos-duration="2000"
                        className="w-full flex flex-col md:flex-row gap-4 md:gap-10 items-start">
                        <div className="w-full md:w-1/3">
                            <img className="w-full" src={FirstFrameImage} alt='' />
                        </div>
                        <div className="w-full md:w-2/3 text-base space-y-4">
                            <p className="leading-8 md:text-justify">
                                Through our media network across Nigeria, we provide our customers options and are experts in out-of-home (OOH) marketing and advertising communication. 
                                Additionally, we provide our clients creative help, strategic board awareness expertise, and channels to fully convey their brand message. 
                            </p>
                        </div>
                    </div>
                    <div 
                        data-aos="fade-up" 
                        data-aos-duration="2000"
                        className="w-full flex flex-col-reverse md:flex-row gap-4 md:gap-10 items-start">
                        <div className="w-full md:w-2/3 text-base space-y-4">
                            <p className="leading-8 md:text-justify">
                                As part of our entire marketing strategy, we aim to reach the target demographic through a variety of platforms and channels. We employ a form of approach 
                                that integrates conventional and digital marketing channels across the whole client experience. 
                            </p>
                        </div>
                        <div className="w-full md:w-1/3">
                            <img className="w-full" src={SecondFrameImage} alt='' />
                        </div>
                    </div>
                    <div 
                        data-aos="fade-up" 
                        data-aos-duration="2000"
                        className="w-full flex flex-col md:flex-row gap-4 md:gap-10 items-start">
                        <div className="w-full md:w-1/3">
                            <img className="w-full" src={ThirdFrameImage} alt='' />
                        </div>
                        <div className="w-full md:w-2/3 text-base space-y-4">
                            <p className="leading-8 md:text-justify">
                                We are firm believers in the effectiveness of OOH advertising and will offer you the most affordable means of reaching your target market in key areas. 
                                We can and will support you if you have a product that needs to be sold or an idea that needs to be noticed.
                            </p>
                            <div className="relative w-fit md:border-2 bg-custom-blue md:bg-white md:border-black rounded-full cursor-pointer mx-auto md:ml-0 md:mb-10">
                                <Link to='/contact-us'>
                                    <div className="hidden md:block absolute rounded-full h-full w-10 p-2 bg-custom-blue border-2 border-black -left-1"></div>
                                    <p className="py-[8px] hidden md:block pr-5 pl-12 font-bold">Contact Us</p>
                                    <p className="py-2 p-4 font-bold text-white md:hidden">Contact Us</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full py-16 bg-black space-y-12">
            <div>
                <div 
                    data-aos="zoom-in" 
                    data-aos-duration="1500"
                    className="m-scroll h-[180px] md:h-[200px]">
                    <div className="m-scroll__title">
                        <div className="marquee-one">
                            <h1 className="text-[#00D3FF] font-black text-[78px] md:text-8xl ">
                                Ideate &nbsp;
                            </h1>
                            <h1 className="text-[#00D3FF] font-black text-[78px] md:text-8xl ">
                                Visualise &nbsp;
                            </h1>
                            <h1 className="text-[#00D3FF] font-black text-[78px] md:text-8xl ">
                                envision &nbsp;
                            </h1>
                            <h1 className="text-[#00D3FF] font-black text-[78px] md:text-8xl ">
                                Cogitate &nbsp;
                            </h1>
                            <h1 className="text-[#00D3FF] font-black text-[78px] md:text-8xl ">
                                Examine &nbsp;
                            </h1>
                            <h1 className="text-[#00D3FF] font-black text-[78px] md:text-8xl ">
                                Envisage &nbsp;
                            </h1>
                            <h1 className="text-[#00D3FF] font-black text-[78px] md:text-8xl ">
                                Ideate &nbsp;
                            </h1>
                            <h1 className="text-[#00D3FF] font-black text-[78px] md:text-8xl ">
                                Visualise &nbsp;
                            </h1>
                            <h1 className="text-[#00D3FF] font-black text-[78px] md:text-8xl ">
                                envision &nbsp;
                            </h1>
                            <h1 className="text-[#00D3FF] font-black text-[78px] md:text-8xl ">
                                Cogitate &nbsp;
                            </h1>
                            <h1 className="text-[#00D3FF] font-black text-[78px] md:text-8xl ">
                                Examine &nbsp;
                            </h1>
                            <h1 className="text-[#00D3FF] font-black text-[78px] md:text-8xl ">
                                Envisage &nbsp;
                            </h1>
                        </div>
                    </div>
                    <div className="m-scroll__title">
                        <div className="marquee-two mt-[72px] md:mt-[90px]">
                            <h1 className="text-[#FFFFFF80] font-black text-[78px] md:text-8xl  right-marquee">
                                Implement &nbsp;
                            </h1>
                            <h1 className="text-[#FFFFFF80] font-black text-[78px] md:text-8xl  right-marquee">
                                Execute &nbsp;
                            </h1>
                            <h1 className="text-[#FFFFFF80] font-black text-[78px] md:text-8xl  right-marquee">
                                Enact &nbsp;
                            </h1>
                            <h1 className="text-[#FFFFFF80] font-black text-[78px] md:text-8xl  right-marquee">
                                Enforce &nbsp;
                            </h1>
                            <h1 className="text-[#FFFFFF80] font-black text-[78px] md:text-8xl  right-marquee">
                                Execute &nbsp;
                            </h1>
                            <h1 className="text-[#FFFFFF80] font-black text-[78px] md:text-8xl  right-marquee">
                                Legislate &nbsp;
                            </h1>
                            <h1 className="text-[#FFFFFF80] font-black text-[78px] md:text-8xl  right-marquee">
                                Implement &nbsp;
                            </h1>
                            <h1 className="text-[#FFFFFF80] font-black text-[78px] md:text-8xl  right-marquee">
                                Execute &nbsp;
                            </h1>
                            <h1 className="text-[#FFFFFF80] font-black text-[78px] md:text-8xl  right-marquee">
                                Enact &nbsp;
                            </h1>
                            <h1 className="text-[#FFFFFF80] font-black text-[78px] md:text-8xl  right-marquee">
                                Enforce &nbsp;
                            </h1>
                            <h1 className="text-[#FFFFFF80] font-black text-[78px] md:text-8xl  right-marquee">
                                Execute &nbsp;
                            </h1>
                            <h1 className="text-[#FFFFFF80] font-black text-[78px] md:text-8xl  right-marquee">
                                Legislate &nbsp;
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-11/12 lg:w-[80%] mx-auto space-y-10'>
                <div className="space-y-3">
                    <h2 
                        data-aos="fade-up" 
                        data-aos-duration="1000"
                        className="font-extrabold text-white text-center text-lg md:text-base tracking-[0.45em]">WHAT SETS US APART</h2>
                    <p 
                        data-aos="fade-up" 
                        data-aos-duration="1000"
                        data-aos-delay="300"
                        className="text-white font-bold w-full text-lg md:text-3xl md:max-w-[800px] lg:w-10/12 mx-auto text-center md:leading-[50px]">
                        We are a strategic partner to our amazing clients. We will help you to 
                        <span className="text-custom-blue"> ideate</span> and <span className="text-custom-blue">implement </span>
                        your brand activation from conception to iterative development support and growth, we're always working proactively for you.
                    </p>
                </div>
                <div className="text-white flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                    <div 
                        data-aos="fade-up" 
                        data-aos-duration="1000"
                        className="text-base flex flex-row items-center space-x-2 ">
                        <img className="w-6" src={CertifiedVector} alt="" />
                        <p><span className="font-extrabold">17+</span> Years</p>
                    </div>
                    <div 
                        data-aos="fade-up" 
                        data-aos-duration="1000"
                        data-aos-delay="100"
                        className="text-base flex flex-row items-center space-x-2 ">
                        <img className="w-6" src={CertifiedVector} alt="" />
                        <p><span className="font-extrabold">25+</span> Cities Covered</p>
                    </div>
                    <div 
                        data-aos="fade-up" 
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        className="text-base flex flex-row items-center space-x-2 ">
                        <img className="w-6" src={CertifiedVector} alt="" />
                        <p><span className="font-extrabold">85M+</span> Monthly Reach</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full py-16 space-y-10">
            <div className='w-11/12 lg:w-[80%] mx-auto space-y-12'>
                <div className="space-y-4">
                    <h2 
                        data-aos="fade-right" 
                        data-aos-duration="1000"
                        className="font-extrabold text-custom-blue text-base tracking-[0.45em]">TRUSTED PARTNERS</h2>
                    <p 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className="text-black font-extrabold text-3xl md:text-5xl max-w-[920px]"> <span className="text-custom-black">since 2007</span>, more than 100 reputable brands have trusted us.</p>
                </div>
            </div>
            <div 
                data-aos="zoom-in" 
                data-aos-duration="1500"
                className="overflow-hidden">
                <Partners />
            </div>
        </div>
        <div className="w-full py-14 bg-[#00D3FF]">
            <div className='w-11/12 mx-auto space-y-14'>
                <div 
                    data-aos="zoom-in" 
                    data-aos-duration="1000"
                    className="space-y-3 relative blockquote leading-[5.5rem]">
                    <p className="text-black font-extrabold text-5xl md:text-6xl text-center testimonials">Testimonials</p>
                </div>
                <div className="space-y-10">
                    <p 
                        data-aos="fade-up" 
                        data-aos-duration="1000"
                        data-aos-delay="300"
                        className="w-full sm:w-[600px] text-lg mx-auto text-center sm:text-2xl text-black">
                        This team is just terrific! from beginning 
                        to the end, we appreciate the high level of 
                        professionalism and customer service that we 
                        experienced. We worked with the other outdoor 
                        advertising companies but the difference in your
                        service stands above the rest.
                    </p>
                    <div
                        data-aos="zoom-in" 
                        data-aos-duration="1000" >
                        <p className="text-center font-extrabold">
                            Femi Ayeola
                        </p>
                        <p className="text-center">
                            Managing Director @ Malleable
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full py-14">
            <div className='w-11/12 lg:w-[80%] mx-auto space-y-10'>
                <h1
                    data-aos="fade-right" 
                    data-aos-duration="1000" 
                    className="text-black font-extrabold text-4xl md:text-5xl">some icing on the cake.</h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                    <div 
                        data-aos="zoom-in-up" 
                        data-aos-duration="1500"
                        className="space-y-8">
                        <div className="rounded-xl">
                            <img className="w-full md:w-11/12" src={FirstRecImage} alt="" />
                        </div>
                        <div className="space-y-3">
                            <p className="text-center font-extrabold">
                                Lorem ipsum dolor sit amet consectetur. 
                            </p>
                            <p className="text-center font-semibold">
                                2020
                            </p>
                        </div>
                    </div>
                    <div 
                        data-aos="zoom-in-up" 
                        data-aos-duration="1500"
                        data-aos-delay="250"
                        className="space-y-8">
                        <div className="rounded-xl">
                            <img className="w-full md:w-11/12" src={SecondRecImage} alt="" />
                        </div>
                        <div className="space-y-3">
                            <p className="text-center font-extrabold">
                                Lorem ipsum dolor sit amet consectetur. 
                            </p>
                            <p className="text-center font-semibold">
                                2021
                            </p>
                        </div>
                    </div>
                    <div 
                        data-aos="zoom-in-up" 
                        data-aos-duration="1500"
                        data-aos-delay="500"
                        className="space-y-8">
                        <div className="rounded-xl">
                            <img className="w-full md:w-11/12" src={ThirdRecImage} alt="" />
                        </div>
                        <div className="space-y-3">
                            <p className="text-center font-extrabold">
                                Lorem ipsum dolor sit amet consectetur. 
                            </p>
                            <p className="text-center font-semibold">
                                2022
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full pb-16">
            <div className='w-11/12 lg:w-[80%] mx-auto space-y-10'>
                <h1 
                    data-aos="fade-right" 
                    data-aos-duration="1500" 
                    className="text-black font-extrabold text-4xl md:text-5xl">recent news.</h1>
                <div className="space-y-5">
                    <div 
                        data-aos="fade-up" 
                        data-aos-duration="2000"
                        className="w-full flex flex-col md:flex-row gap-4 md:gap-10 items-start">
                        <div className="w-full md:w-1/3">
                            <img className="w-full" src={FirstNewsImage} alt='' />
                        </div>
                        <div className="w-full md:w-2/3 text-base space-y-4">
                            <p className="leading-8 md:text-justify">
                            Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas 
                            mauris at risus. Sapien sapien vitae velit erat ut ultrices imperdiet ac sit. Gravida tellus 
                            laoreet lectus scelerisque risus nulla sed dolor amet. Blandit et ullamcorper a non lacus erat 
                            pellentesque leo.
                            </p>
                            <div className="relative w-fit md:border-2 md:border-black rounded-full cursor-pointer bg-custom-blue md:bg-transparent mx-auto  md:mx-0">
                                <div className="absolute rounded-full h-full w-10 p-2 bg-custom-blue border-2 border-black hidden md:block -left-1"></div>
                                <p className="py-[8px] pr-4 pl-10 md:pr-6 md:pl-12 font-bold hidden md:block">Read More</p>
                                <p className="py-2 p-4 font-bold text-white md:hidden">Read More</p>
                            </div>
                        </div>
                    </div>
                    <div 
                        data-aos="fade-up" 
                        data-aos-duration="2000"
                        className="w-full flex flex-col md:flex-row gap-4 md:gap-10 items-start border-t border-b border-[#0000001F] py-5">
                        <div className="w-full md:w-1/3">
                            <img className="w-full" src={SecondNewsImage} alt='' />
                        </div>
                        <div className="w-full md:w-2/3 text-base space-y-4">
                            <p className="leading-8 md:text-justify">
                            Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas 
                            mauris at risus. Sapien sapien vitae velit erat ut ultrices imperdiet ac sit. Gravida tellus 
                            laoreet lectus scelerisque risus nulla sed dolor amet. Blandit et ullamcorper a non lacus erat 
                            pellentesque leo. 
                            </p>
                            <div className="relative w-fit md:border-2 md:border-black rounded-full cursor-pointer bg-custom-blue md:bg-transparent mx-auto  md:mx-0">
                                <div className="absolute rounded-full h-full w-10 p-2 bg-custom-blue border-2 border-black hidden md:block -left-1"></div>
                                <p className="py-[8px] pr-4 pl-10 md:pr-6 md:pl-12 font-bold hidden md:block">Read More</p>
                                <p className="py-2 p-4 font-bold text-white md:hidden">Read More</p>
                            </div>
                        </div>
                    </div>
                    <div 
                        data-aos="fade-up" 
                        data-aos-duration="2000"
                        className="w-full flex flex-col md:flex-row gap-4 md:gap-10 items-start">
                        <div className="w-full md:w-1/3">
                            <img className="w-full" src={ThirdNewsImage} alt='' />
                        </div>
                        <div className="w-full md:w-2/3 text-base space-y-4">
                            <p className="leading-8 md:text-justify">
                            Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas 
                            mauris at risus. Sapien sapien vitae velit erat ut ultrices imperdiet ac sit. Gravida tellus 
                            laoreet lectus scelerisque risus nulla sed dolor amet. Blandit et ullamcorper a non lacus erat 
                            pellentesque leo.
                            </p>
                            <div className="relative w-fit md:border-2 md:border-black rounded-full cursor-pointer bg-custom-blue md:bg-transparent mx-auto  md:mx-0">
                                <div className="absolute rounded-full h-full w-10 p-2 bg-custom-blue border-2 border-black hidden md:block -left-1"></div>
                                <p className="py-[8px] pr-4 pl-10 md:pr-6 md:pl-12 font-bold hidden md:block">Read More</p>
                                <p className="py-2 p-4 font-bold text-white md:hidden">Read More</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home