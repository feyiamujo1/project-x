import React, { useState } from 'react'
import { BiEdit } from "react-icons/bi"
import GantryImage from "../../src/assets/images/live-gantry.png"
import SampleImageTwo from "../../src/assets/images/3.jpg"
import SampleImageThree from "../../src/assets/images/thumbnail.JPG"
import SampleVideo from "../../src/assets/video/sample_video.mp4"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { FiPlayCircle } from "react-icons/fi"
import { IoLocationSharp } from "react-icons/io5"
import { SlSizeFullscreen } from "react-icons/sl"
import CountDownTimer from './UI/CountDownTimer'
import CreateNewHolding from './UI/CreateNewHolding';


const HoldingsDetails = () => {
    const [openNewProductDialog, setOpenNewProductDialog] = useState(false);

    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    const [currentSlide, setCurrentSlide] = useState(0);

    const [selectedHoldings, setSelectedHoldings] = useState(true);

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
    <div className='w-full h-full bg-white rounded-xl shadow-md py-6'>
        {openNewProductDialog && <CreateNewHolding  openNewProductDialog={openNewProductDialog} setOpenNewProductDialog={setOpenNewProductDialog} selectedHoldings={selectedHoldings} setSelectedHoldings={setSelectedHoldings}/>}
      <div className='px-6 pb-6 flex flex-row justify-between border-b '>
        <div>
          <h3 className='font-semibold text-lg'>
            Gantry
          </h3>
          <p className='font-normal text-sm text-custom-ash'>Details</p>
        </div>
        <div>
          <p onClick={()=>{setOpenNewProductDialog(true)}} className='py-2.5 px-3 text-sm flex flex-row gap-1 items-center bg-[#1D4ED8] text-white rounded-md hover:text-custom-brown cursor-pointer'><BiEdit className='font-semibold' /> Edit Gantry</p>
        </div>
      </div>
      <div>
        <div className='h-fit md:pt-0 md:h-screen px-6 box-border mx-auto flex flex-col gap-4 justify-center items-center select-none'>
                <p className='font-semibold text-left w-full'>Gallery</p>
                <div className='w-full h-[345px] sm:h-[545px] md:h-[85%] box-border relative flex flex-row md:px-6'>
                    <img src={GantryImage} alt='' className={currentSlide===0 ? "w-full h-[345px] sm:h-[545px] md:h-full " : "hidden"} />
                    <img src={SampleImageTwo} alt='' className={currentSlide===1 ? "w-full h-[345px] sm:h-[545px] md:h-full " : "hidden"} />
                    <img src={SampleImageThree} alt='' className={currentSlide===2 ? "w-full h-[345px] sm:h-[545px] md:h-full " : "hidden"} />
                    <video  loop controls autoPlay playsInline className={currentSlide===3 ? "cursor-pointer w-full min-h-[350px] md:h-full" : "hidden"}>
                        <source src={SampleVideo} type="video/mp4"/>
                    </video>
                    <IoIosArrowBack className='absolute left-6 top-0 bottom-0 my-auto z-50 text-white cursor-pointer text-[40px] active:text-custom-dark-image md:hover:text-custom-dark-image' onClick={showPreviousImage} /> 
                    <IoIosArrowForward className='absolute right-6 top-0 bottom-0 my-auto z-50 text-white cursor-pointer text-[40px] active:text-custom-dark-image md:hover:text-custom-dark-image' onClick={showNextImage}/>
                </div>
            </div>
            <div className='flex flex-row px-6 w-[400px] mx-auto justify-between'>
                <img src={GantryImage} alt='' onClick={() => {setCurrentSlide(0)}} className={currentSlide===0 ? "w-[75px] h-[75px] sm:h-[75px] cursor-pointer brightness-50" : "w-[75px] h-[75px] sm:h-[75px] cursor-pointer"} />
                <img src={SampleImageTwo} alt='' onClick={() => {setCurrentSlide(1)}} className={currentSlide===1 ? "w-[75px] h-[75px] sm:h-[75px] cursor-pointer brightness-50" : "w-[75px] h-[75px] sm:h-[75px] cursor-pointer"} />
                <img src={SampleImageThree} alt='' onClick={() => {setCurrentSlide(2)}} className={currentSlide===2 ? "w-[75px] h-[75px] sm:h-[75px] cursor-pointer brightness-50" : "w-[75px] h-[75px] sm:h-[75px] cursor-pointer"} />
                <div  className={currentSlide===3 ?'relative bg-black cursor-pointer brightness-50' : 'relative bg-black cursor-pointer'}>
                    <video playsInline  className={currentSlide===3 ? "cursor-pointer w-[75px] h-[75px] sm:h-[75px] min-h-[75px] cursor-pointer" : "w-[75px] h-[75px] sm:h-[75px] cursor-pointer"}>
                        <source src={SampleVideo} type="video/mp4"/>
                    </video>
                    <FiPlayCircle onClick={() => {setCurrentSlide(3)}} className='absolute w-[75px] h-[75px] top-0 right-0 bottom-0 left-0 z-[100] text-custom-white cursor-pointer' />
                </div>
            </div>
        </div>
        <div className='p-6 space-y-3'>
            <div className='space-y-2'>
                <p className='font-bold '>Description</p>
                <p className='font-normal'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div 
                className='flex flex-col justify-between gap-2 w-full font-medium'>
                <p className='flex flex-row items-center w-fit gap-2'><IoLocationSharp className='text-base'/><span className='text-black text-base'>Lagos, Ajah</span></p>
                <p className='flex flex-row items-center w-fit gap-2'><SlSizeFullscreen className='text-base'/><span className='text-black text-base'>16MX16M</span></p>   
            </div>
            <CountDownTimer dashboard={true} targetText={"This outlet will be available in"} targetDate={dateTimeAfterThreeDays} />
        </div>
    </div>
  )
}

export default HoldingsDetails