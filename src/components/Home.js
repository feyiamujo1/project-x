import Navbar from "./UI/Navbar"
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
import CampaignHoldings from "./UI/CampaignHoldings"

const Home = () => {
  return (
    <div>
        <div className="w-full h-screen bg-cover bg-no-repeat bg-center bg-hero-image relative">
            <Navbar />
            <div className='w-11/12 h-full mx-auto py-4 flex flex-col items-center justify-center'>
                <div>
                    <h1 className="text-white font-extrabold text-8xl">EyeKontact</h1>
                    <p className="text-white text-xl text-right font-semibold">Limited</p>
                </div>
                <div>
                    <p className="w-[550px] text-white text-base font-normal absolute bottom-24 right-[50%] translate-x-2/4 left-auto">
                        We are a value driven organisation that helps you connect with your target audience by 
                        projecting your brand in memorable ways
                    </p>
                    <p className="text-white text-sm font-light absolute bottom-4 right-[2%]">RC 722750</p>
                    <DownButton className="w-8 h-8 absolute bottom-8 right-[50%] translate-x-2/4 fill-custom-blue cursor-pointer animate-bounce hover:-translate-y-2 transition duration-500 delay-100" />
                </div>
            </div>
        </div>
        <div className="w-full bg-black py-14">
            <div className='w-11/12 h-full mx-auto flex flex-col items-center justify-center space-y-14'>
                <div className="w-fit space-y-4 text-center">
                    <h1 className="text-white font-extrabold text-5xl mx-auto">Our Holdings</h1>
                    <p className="text-white text-sm font-normal w-[480px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua.
                    </p>
                </div>
                <CampaignHoldings />
            </div>
        </div>
        <div className="w-full py-14">
            <div className='w-11/12 mx-auto space-y-10'>
                <h1 className="text-black font-extrabold text-5xl">what we do.</h1>
                <div className="w-full flex flex-row gap-12 items-start ">
                    <div className="w-1/3">
                        <img className="" src={FirstFrameImage} alt='' />
                    </div>
                    <p className="w-2/3 text-base">
                        We specialize in out of homes advertising and marketing communication and provide solutions 
                        for our customers in form of our media platform across Nigeria. 
                        We also provide our client with strategic board awareness insight, creative support and channel to deliver with their
                        brand message from start to finish. We have won several awards in recognition of our innovative ideas and disruptive 
                        concept delivered across the country. <br></br> With our vast experience, we intend to expand your market visibility to creating 
                        bond and affinity for your brand through provision of excellent innovative and environmentally friendly integrated 
                        marketing communication advertising services.
                    </p>
                </div>
                <div className="w-full flex flex-row gap-12 items-start">
                    <p className="w-2/3 text-base">
                    At Eyekontact we ensure that customers have a positive experience of communication regardless of their locations , we have an 
                    overall marketing strategy that focuses on reaching the target audience from multiple platforms and channels. Our type of strategy 
                    includes both traditional marketing and digital marketing channels infused within the entire customer journey. We also play into key 
                    content like: Media planning, Media buying, Pr activation, creative design and branding .
                    </p>
                    <div className="w-1/3">
                        <img className="" src={SecondFrameImage} alt='' />
                    </div>
                </div>
                <div className="w-full flex flex-row gap-12 items-start">
                    <div className="w-1/3">
                        <img className="w-full" src={ThirdFrameImage} alt='' />
                    </div>
                    <div className="w-2/3 space-y-8 text-base">
                        <p>
                            Eyekontact limited is one of Nigeria’s leading advertising companies which was incorporated in December 2007. 
                            We specialise in out-of-home (OOH) advertising and marketing communication which provides solutions for our customers 
                            inform of out media platforms across Nigeria. We believe in the power of OOH advertising and we will serve you the most 
                            cost effective ways to reach your target audience in strategic locations. <br></br>
                            If you have an idea that needs to be seen , or a product that needs to be sold , we can and will help. Plan your next campaign with us.
                        </p>
                        <div className="relative w-fit border-2 border-[#002F5A] rounded-full">
                            <div className="absolute rounded-full h-full w-10 p-2 bg-custom-blue border-2 border-[#002F5A] -left-1"></div>
                            <p className="py-[8px] pr-8 pl-12 font-semibold">Contact Us</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full py-14 bg-black">
            <div className='w-11/12 mx-auto space-y-10'>
                <div className="space-y-3">
                    <h2 className="font-extrabold text-white text-center text-base tracking-[0.45em]">WHAT SETS US APART</h2>
                    <p className="text-white font-semibold text-3xl w-[800px] mx-auto text-center">
                        We are a strategic partner to our amazing clients. We will help you to <span className="text-custom-blue">ideate</span> and <span className="text-custom-blue">implement</span> your product from conception 
                        to iterative development support and growth, we're always working proactively for you.
                    </p>
                </div>
                <div className="text-white flex flex-row items-center justify-center gap-8">
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
        <div className="w-full py-14">
            <div className='w-11/12 mx-auto space-y-10'>
                <div className="space-y-3">
                    <h2 className="font-extrabold text-custom-blue text-base tracking-[0.45em]">TRUSTED PARTNERS</h2>
                    <p className="text-black font-extrabold text-5xl"> <span className="text-custom-black">since 2007</span>, more than 100 brands have trusted us.</p>
                    
                </div>
            </div>
        </div>
        <div className="w-full py-14 bg-[#00D3FF]">
            <div className='w-11/12 mx-auto space-y-14'>
                <div className="space-y-3 relative blockquote leading-[5.5rem]">
                    <p className="text-black font-extrabold text-5xl text-center testimonials">Testimonials</p>
                </div>
                <div className="space-y-10">
                    <p className="w-[600px] mx-auto text-center text-2xl text-white">
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
            <div className='w-11/12 mx-auto space-y-10'>
                <h1 className="text-black font-extrabold text-5xl">some icing on the cake.</h1>
                <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-8">
                        <div className="rounded-xl">
                            <img src={FirstRecImage} alt="" />
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
                            <img src={SecondRecImage} alt="" />
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
                            <img src={ThirdRecImage} alt="" />
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
        <div className="w-full py-14">
            <div className='w-11/12 mx-auto space-y-10'>
                <h1 className="text-black font-extrabold text-5xl">some icing on the cake.</h1>
                <div className="space-y-10">
                    <div className="w-full flex flex-row gap-12 items-center">
                        <div className="w-1/3">
                            <img className="w-full" src={FirstNewsImage} alt='' />
                        </div>
                        <div className="w-2/3 text-base">
                            <p>
                            Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas 
                            mauris at risus. Sapien sapien vitae velit erat ut ultrices imperdiet ac sit. Gravida tellus 
                            laoreet lectus scelerisque risus nulla sed dolor amet. Blandit et ullamcorper a non lacus erat 
                            pellentesque leo. Feugiat mattis viverra nisi lectus laoreet. Sed dapibus a a posuere eget. 
                            Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. 
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex flex-row gap-12 items-center border-t border-b border-[#0000001F] py-10">
                        <div className="w-1/3">
                            <img className="w-full" src={SecondNewsImage} alt='' />
                        </div>
                        <div className="w-2/3 text-base">
                            <p>
                            Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas 
                            mauris at risus. Sapien sapien vitae velit erat ut ultrices imperdiet ac sit. Gravida tellus 
                            laoreet lectus scelerisque risus nulla sed dolor amet. Blandit et ullamcorper a non lacus erat 
                            pellentesque leo. Feugiat mattis viverra nisi lectus laoreet. Sed dapibus a a posuere eget. 
                            Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. 
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex flex-row gap-12 items-center">
                        <div className="w-1/3">
                            <img className="w-full" src={ThirdNewsImage} alt='' />
                        </div>
                        <div className="w-2/3 text-base">
                            <p>
                            Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas 
                            mauris at risus. Sapien sapien vitae velit erat ut ultrices imperdiet ac sit. Gravida tellus 
                            laoreet lectus scelerisque risus nulla sed dolor amet. Blandit et ullamcorper a non lacus erat 
                            pellentesque leo. Feugiat mattis viverra nisi lectus laoreet. Sed dapibus a a posuere eget. 
                            Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home