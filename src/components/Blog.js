import { Link } from 'react-router-dom'
import DirectionImage from '../../src/assets/images/directions.png'
import BlogImage1 from '../../src/assets/images/blogimage1.png'
import BlogImage2 from '../../src/assets/images/blogimage2.png'
import BlogImage3 from '../../src/assets/images/blogimage3.png'
import BlogImage4 from '../../src/assets/images/blogimage4.png'
import {ReactComponent as DownButton}  from "../../src/assets/images/down-arrow-svgrepo-com.svg"
import { useRef } from 'react'
import Footer from "./UI/Footer"
import Navbar from "./UI/Navbar"
import 'aos/dist/aos.css';

const Blog = () => {
    document.title = 'Blog';
    const firstContainer = useRef(null);
    const ScrollToView = () => {
        firstContainer.current?.scrollIntoView({behavior: 'smooth'});
    };
  return (
    <div className='bg-black pb-8 scroll-smooth'>
        <Navbar />
        <div className="w-full h-[90vh] sm:h-screen bg-blog-image bg-cover bg-no-repeat bg-center relative">
            <div 
                data-aos="fade-down" 
                data-aos-duration="1100"
                data-aos-delay="500"
                className='hidden md:block absolute top-32 left-[10%] z-50'>
                <p className='hidden md:flex flex-row w-fit gap-4 justify-center items-center text-white'><Link to='/' className='hover:text-custom-blue'>Home</Link> <img src={DirectionImage} alt=""/> Blog</p>
            </div>
            <div 
                data-aos="zoom-in" 
                data-aos-duration="1500"
                data-aos-delay="500"
                className='w-11/12 h-full mx-auto py-4 flex flex-col items-center gap-4 md:gap-0 justify-center'>
                <div className="w-fit -mt-14 md:mt-0">
                    <h1 className="text-white font-extrabold text-[52px] sm:text-8xl">Blog</h1>
                    {/* <p className="text-white text-sm sm:text-xl text-right font-semibold -mt-3 sm:mt-0">Limited</p> */}
                </div>
                <div>
                    <p className="w-11/12 md:w-[550px] text-white text-center text-sm sm:text-base font-normal absolute left-0 right-0 mx-auto bottom-[110px] md:bottom-24 md:right-[50%] md:translate-x-2/4 md:left-auto">
                        Read about our recent updates, activities and breakthroughs as we provide more OOH services and opportunities.
                    </p>
                    {/* <p className="text-white text-xs sm:text-sm font-light absolute bottom-4 right-[5%] md:right-[2%]">RC 722750</p> */}
                    <div className="w-full absolute left-0 right-0 bottom-10 md:bottom-8 flex flex-row justify-center items-center">
                        <DownButton onClick={ScrollToView} className=" w-10 h-10 fill-custom-blue cursor-pointer animate-bounce" />
                    </div>
                </div>
            </div>
        </div>
        <div ref={firstContainer} className="w-11/12 lg:w-[80%] mx-auto pb-16 pt-[55px] space-y-10">
            {/* <div className='hidden md:block'>
                <p className='hidden md:flex flex-row w-fit gap-4 justify-center items-center text-white'><Link to='/' className='hover:text-custom-blue'>Home</Link> <img src={DirectionImage} alt=""/> Blog</p>
            </div> */}
            <div className='space-y-10'>
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='space-y-3'>
                    <h2 className='text-custom-blue font-bold text-3xl '>End  of the Year (2022) Celebrations</h2>
                    <p className=' text-sm leading-4 text-custom-ash'>22nd of December, 2022</p>
                </div>
                <div className='space-y-10'>
                    <p 
                        data-aos="fade-up" 
                        data-aos-duration="1000"
                        className='text-white'>
                    Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. Sapien sapien vitae velit erat ut ultrices imperdiet ac sit. Gravida tellus laoreet 
                    lectus scelerisque risus nulla sed dolor amet. Blandit et ullamcorper a non lacus erat pellentesque leo. Feugiat mattis viverra nisi lectus laoreet. Sed dapibus a a posuere eget. Lorem ipsum dolor 
                    sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. 
                    Sapien sapien vitae velit erat ut ultrices imperdiet ac sit. Gravida tellus laoreet lectus scelerisque risus nulla sed dolor amet. Blandit et ullamcorper a non lacus erat pellentesque leo. Feugiat mattis 
                    viverra nisi lectus laoreet. Sed dapibus a a posuere eget. Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. 
                    </p>
                    <div className='flex flex-col md:flex-row gap-10 overflow-hidden'>
                        <div 
                            data-aos="fade-right" 
                            data-aos-duration="1000"
                            className='space-y-5'>
                            <img className='w-full sm:w-8/12 md:w-full mx-auto' src={BlogImage2} alt="" />
                            <p className='text-white text-sm text-center italic font-extralight'>Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed</p>
                        </div>
                        <div 
                            data-aos="fade-left" 
                            data-aos-duration="1000"
                            className='space-y-5'>
                            <img className='w-full sm:w-8/12 md:w-full mx-auto' src={BlogImage1} alt="" />
                            <p className='text-white text-sm text-center italic font-extralight'>Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-10'>
                    <p 
                        data-aos="fade-up" 
                        data-aos-duration="1000"
                        data-aos-delay={ window.innerWidth < 768? "0": "1000"}
                        className='text-white'>
                    Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. Sapien sapien vitae velit erat ut ultrices imperdiet ac sit. Gravida tellus laoreet 
                    lectus scelerisque risus nulla sed dolor amet. Blandit et ullamcorper a non lacus erat pellentesque leo. Feugiat mattis viverra nisi lectus laoreet. Sed dapibus a a posuere eget. Lorem ipsum dolor 
                    sit amet consectetur. <span className='font-extrabold'> Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. </span> Ornare non maecenas mauris at risus. 
                    Sapien sapien vitae velit erat ut ultrices imperdiet ac sit. Gravida tellus laoreet lectus scelerisque risus nulla sed dolor amet. Blandit et ullamcorper a non lacus erat pellentesque leo. Feugiat mattis 
                    viverra nisi lectus laoreet. Sed dapibus a a posuere eget. Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. 
                    </p>
                    <div className='flex flex-col md:flex-row gap-10 overflow-hidden'>
                        <div 
                            data-aos="fade-right" 
                            data-aos-duration="1000"
                            data-aos-delay={ window.innerWidth < 768? "0": "1000"}
                            className='space-y-5'>
                            <img className='w-full sm:w-8/12 md:w-full mx-auto' src={BlogImage4} alt="" />
                            <p className='text-white text-sm text-center italic font-extralight'>Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed</p>
                        </div>
                        <div 
                            data-aos="fade-left" 
                            data-aos-duration="1000"
                            data-aos-delay={ window.innerWidth < 768? "0": "1000"}
                            className='space-y-5'>
                            <img className='w-full sm:w-8/12 md:w-full mx-auto' src={BlogImage3} alt="" />
                            <p className='text-white text-sm text-center italic font-extralight'>Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed</p>
                        </div>
                    </div>
                </div>
            </div>
            <div 
                data-aos="zoom-in" 
                data-aos-duration="1000"
                data-aos-delay={ window.innerWidth < 768? "0": "1000"}
                className='flex flex-row gap-2 justify-center'>
                <p className='text-black border border-custom-blue bg-custom-blue cursor-pointer hover:text-white w-[50px] h-[46px] rounded-md flex justify-center items-center'>1</p>
                <p className='text-white border border-white active:bg-custom-blue active:text-black active:border-custom-blue md:hover:bg-custom-blue cursor-pointer md:hover:text-black hover:border-custom-blue w-[50px] h-[46px] rounded-md flex justify-center items-center'>2</p>
                <p className='text-white border border-white active:bg-custom-blue active:text-black active:border-custom-blue md:hover:bg-custom-blue cursor-pointer md:hover:text-black hover:border-custom-blue w-[50px] h-[46px] rounded-md flex justify-center items-center'>3</p>
                <p className='text-white border border-white active:bg-custom-blue active:text-black active:border-custom-blue md:hover:bg-custom-blue cursor-pointer md:hover:text-black hover:border-custom-blue w-[50px] h-[46px] rounded-md flex justify-center items-center'>4</p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Blog