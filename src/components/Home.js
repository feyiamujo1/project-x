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
import BgVideo from "../../src/assets/video/websiteheader.mp4"
import CampaignHoldings from "./UI/CampaignHoldings"
import Partners from "./UI/Partners"
import { useEffect, useRef } from "react"
import HomeImage from '../../src/assets/images/thumbnail.JPG'

const Home = () => {
    
    const ref = useRef(null);
    const ScrollToView = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };
    const videoElement = useRef();
    // const videoElement = document.getElementById('backgroundVideo');
    useEffect(() => {
        const handleVideo = () => {
            videoElement.current?.addEventListener('suspend', () => {
                videoElement.current?.play();
                console.log("Playing video");
            });
            console.log("executed")
        }
        handleVideo();
    }, [videoElement]);
    
    document.title = 'Home';
    
    console.log(videoElement);

  return (
    <div>
        <div className="w-full h-[90vh] sm:h-screen bg-cover bg-no-repeat bg-center relative">
            <video  ref={videoElement} poster={HomeImage} className="w-screen h-[90vh] sm:h-screen absolute object-cover z-[-100] brightness-[0.35]" preload="auto" autoPlay loop muted playsInline>
                <source src={BgVideo} type="video/mp4" />
            </video>
            {/* <div className="w-full h-[90vh] sm:h-screen absolute bg-black z-[-101] brightness-[1] left-0 right-0 mx-auto">

            </div> */}
            {/* {id="backgroundVideo"} */}
            <div className='w-11/12 h-full mx-auto py-4 flex flex-col items-center gap-4 md:gap-0 justify-center'>
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
            <div className='w-11/12 lg:w-[80%] h-full mx-auto flex flex-col items-center justify-center space-y-14'>
                <div className="w-fit space-y-4 text-center">
                    <h1 className="text-white font-extrabold text-4xl sm:text-5xl mx-auto">Our Holdings</h1>
                    <p className="text-white text-base md:text-sm font-normal w-full md:w-[480px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua.
                    </p>
                </div>
                <CampaignHoldings />
            </div>
            <div>
                <div className="m-scroll h-[180px] md:h-[200px]">
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
            <div className='w-11/12 lg:w-[80%] mx-auto space-y-10'>
                <h1 className="text-black font-extrabold text-4xl md:text-5xl">what we do.</h1>
                <div className="space-y-10 md:space-y-16">
                    <div className="w-full flex flex-col md:flex-row gap-4 md:gap-10 items-start ">
                        <div className="w-full md:w-1/3">
                            <img className="w-full" src={FirstFrameImage} alt='' />
                        </div>
                        <p className="w-full md:w-2/3 text-base leading-8 md:text-justify">
                            Through our media network across Nigeria, we provide our customers options and are experts in out-of-home marketing and advertising communication. 
                            Additionally, we provide our clients creative help, strategic board awareness expertise, and channels to fully convey their brand message. 
                            As a result of the unique concepts and disruptive ideas we have spread across the nation, we have received several honours.
                            With our extensive experience, we aim to increase your brand's affinity and relationship with consumers by offering top-notch, cutting-edge, and environmentally friendly integrated marketing communication advertising services.
                        </p>
                    </div>
                    <div className="w-full flex flex-col-reverse md:flex-row gap-4 md:gap-10 items-start">
                        <p className="w-full md:w-2/3 text-base leading-8 md:text-justify">
                            Eyekontact makes sure that consumers, wherever they may be, have a great communication experience. As part of our entire marketing strategy, 
                            we aim to reach the target demographic through a variety of platforms and channels. We employ a form of approach that integrates conventional and digital marketing channels across the whole client experience. 
                            We also contribute to important material such as media purchasing, planning, activating PR, creative design, and branding.
                        </p>
                        <div className="w-full md:w-1/3">
                            <img className="w-full" src={SecondFrameImage} alt='' />
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-4 md:gap-10 items-start">
                        <div className="w-full md:w-1/3">
                            <img className="w-full" src={ThirdFrameImage} alt='' />
                        </div>
                        <div className="w-full md:w-2/3 space-y-5 text-base">
                            <p className="leading-8 md:text-justify">
                            One of Nigeria's top advertising firms, Eyekontact Limited, was established in December 2007. We specialize in out-of-home (OOH) advertising and marketing communication, which offers our customers in Nigeria 
                            alternatives for keeping up with our media platforms. We are firm believers in the effectiveness of OOH advertising and will offer you the most affordable means of reaching your target market in key areas. 
                            We can and will support you if you have a product that needs to be sold or an idea that needs to be noticed. With our help, plan your upcoming campaign.
                            </p>
                            <div className="relative w-fit md:border-2 bg-custom-blue md:bg-white md:border-black rounded-full cursor-pointer mx-auto md:ml-0">
                                <div className="hidden md:block absolute rounded-full h-full w-10 p-2 bg-custom-blue border-2 border-black -left-1"></div>
                                <p className="py-[8px] hidden md:block pr-5 pl-12 font-semibold">Contact Us</p>
                                <p className="py-2 p-4 font-semibold text-white md:hidden">Contact Us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full py-16 bg-black space-y-12">
            <div>
                <div className="m-scroll h-[180px] md:h-[200px]">
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
                    <h2 className="font-extrabold text-white text-center text-lg md:text-base tracking-[0.45em]">WHAT SETS US APART</h2>
                    <p className="text-white font-bold w-full text-lg md:text-3xl md:max-w-[800px] lg:w-10/12 mx-auto text-center md:leading-[50px]">
                        We are a strategic partner to our amazing clients. We will help you to 
                        <span className="text-custom-blue"> ideate</span> and <span className="text-custom-blue">implement </span>
                        your product from conception to iterative development support and growth, we're always working proactively for you.
                    </p>
                </div>
                <div className="text-white flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                    <div className="text-base flex flex-row items-center space-x-2 ">
                        <img className="w-6" src={CertifiedVector} alt="" />
                        <p><span className="font-extrabold">17+</span> Years</p>
                    </div>
                    <div className="text-base flex flex-row items-center space-x-2 ">
                        <img className="w-6" src={CertifiedVector} alt="" />
                        <p><span className="font-extrabold">25+</span> Cities Covered</p>
                    </div>
                    <div className="text-base flex flex-row items-center space-x-2 ">
                        <img className="w-6" src={CertifiedVector} alt="" />
                        <p><span className="font-extrabold">85M+</span> Monthly Reach</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full py-16 space-y-10">
            <div className='w-11/12 lg:w-[80%] mx-auto space-y-12'>
                <div className="space-y-4">
                    <h2 className="font-extrabold text-custom-blue text-base tracking-[0.45em]">TRUSTED PARTNERS</h2>
                    <p className="text-black font-extrabold text-3xl md:text-5xl max-w-[870px]"> <span className="text-custom-black">since 2007</span>, more than 100 brands have trusted us.</p>
                </div>
            </div>
            <div className="overflow-hidden">
                <Partners />
            </div>
        </div>
        <div className="w-full py-14 bg-[#00D3FF]">
            <div className='w-11/12 mx-auto space-y-14'>
                <div className="space-y-3 relative blockquote leading-[5.5rem]">
                    <p className="text-black font-extrabold text-5xl md:text-6xl text-center testimonials">Testimonials</p>
                </div>
                <div className="space-y-10">
                    <p className="w-full sm:w-[600px] text-lg mx-auto text-center sm:text-2xl text-white">
                        This team is just terrific! from beginning 
                        to the end, we appreciate the high level of 
                        professionalism and customer service that we 
                        experienced. We worked with the other outdoor 
                        advertising companies but the difference in your
                        service stands above the rest.
                    </p>
                    <div>
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
                <h1 className="text-black font-extrabold text-4xl md:text-5xl">some icing on the cake.</h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                    <div className="space-y-8">
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
                    <div className="space-y-8">
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
                    <div className="space-y-8">
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
        <div className="w-full pb-14">
            <div className='w-11/12 lg:w-[80%] mx-auto space-y-10'>
                <h1 className="text-black font-extrabold text-4xl md:text-5xl">recent news.</h1>
                <div className="space-y-5">
                    <div className="w-full flex flex-col md:flex-row gap-4 md:gap-10 items-start">
                        <div className="w-full md:w-1/3">
                            <img className="w-full" src={FirstNewsImage} alt='' />
                        </div>
                        <div className="w-full md:w-2/3 text-base space-y-4">
                            <p className="leading-8 md:text-justify">
                            Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas 
                            mauris at risus. Sapien sapien vitae velit erat ut ultrices imperdiet ac sit. Gravida tellus 
                            laoreet lectus scelerisque risus nulla sed dolor amet. Blandit et ullamcorper a non lacus erat 
                            pellentesque leo. Feugiat mattis viverra nisi lectus laoreet. Sed dapibus a a posuere eget. 
                            Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. 
                            </p>
                            <div className="relative w-fit md:border-2 md:border-black rounded-full cursor-pointer bg-custom-blue md:bg-transparent mx-auto  md:mx-0">
                                <div className="absolute rounded-full h-full w-10 p-2 bg-custom-blue border-2 border-black hidden md:block -left-1"></div>
                                <p className="py-[8px] pr-4 pl-10 md:pr-6 md:pl-12 font-semibold hidden md:block">Read More</p>
                                <p className="py-2 p-4 font-semibold text-white md:hidden">Read More</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-4 md:gap-10 items-start border-t border-b border-[#0000001F] py-5">
                        <div className="w-full md:w-1/3">
                            <img className="w-full" src={SecondNewsImage} alt='' />
                        </div>
                        <div className="w-full md:w-2/3 text-base space-y-4">
                            <p className="leading-8 md:text-justify">
                            Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas 
                            mauris at risus. Sapien sapien vitae velit erat ut ultrices imperdiet ac sit. Gravida tellus 
                            laoreet lectus scelerisque risus nulla sed dolor amet. Blandit et ullamcorper a non lacus erat 
                            pellentesque leo. Feugiat mattis viverra nisi lectus laoreet. Sed dapibus a a posuere eget. 
                            Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. 
                            </p>
                            <div className="relative w-fit md:border-2 md:border-black rounded-full cursor-pointer bg-custom-blue md:bg-transparent mx-auto  md:mx-0">
                                <div className="absolute rounded-full h-full w-10 p-2 bg-custom-blue border-2 border-black hidden md:block -left-1"></div>
                                <p className="py-[8px] pr-4 pl-10 md:pr-6 md:pl-12 font-semibold hidden md:block">Read More</p>
                                <p className="py-2 p-4 font-semibold text-white md:hidden">Read More</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-4 md:gap-10 items-start">
                        <div className="w-full md:w-1/3">
                            <img className="w-full" src={ThirdNewsImage} alt='' />
                        </div>
                        <div className="w-full md:w-2/3 text-base space-y-4">
                            <p className="leading-8 md:text-justify">
                            Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas 
                            mauris at risus. Sapien sapien vitae velit erat ut ultrices imperdiet ac sit. Gravida tellus 
                            laoreet lectus scelerisque risus nulla sed dolor amet. Blandit et ullamcorper a non lacus erat 
                            pellentesque leo. Feugiat mattis viverra nisi lectus laoreet. Sed dapibus a a posuere eget. 
                            Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. 
                            </p>
                            <div className="relative w-fit md:border-2 md:border-black rounded-full cursor-pointer bg-custom-blue md:bg-transparent mx-auto  md:mx-0">
                                <div className="absolute rounded-full h-full w-10 p-2 bg-custom-blue border-2 border-black hidden md:block -left-1"></div>
                                <p className="py-[8px] pr-4 pl-10 md:pr-6 md:pl-12 font-semibold hidden md:block">Read More</p>
                                <p className="py-2 p-4 font-semibold text-white md:hidden">Read More</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home