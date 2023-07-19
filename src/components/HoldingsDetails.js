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
import ManagingDirectorImage from '../../src/assets/images/md.png'
import ExecutiveAssistantImage from '../../src/assets/images/faith.png'
import OfficeAssistantImage from '../../src/assets/images/daniel.png'
import InnovationManagerImage from '../../src/assets/images/enare.png'
import JohnDoeImage from '../../src/assets/images/john.png'
import { RiDeleteBinLine } from 'react-icons/ri'
import DialogBox from './UI/DialogBox'
import NewCustomerDialog from './UI/NewCustomerDialog'
import BroadcastMessageDialog from './UI/BroadcastMessageDialog'
import { TiMessages } from 'react-icons/ti'

const HoldingsDetails = () => {
    const [openNewProductDialog, setOpenNewProductDialog] = useState(false);
    const [openNewCustomerDialog, setOpenNewCustomerDialog] = useState(false);
    const [openBroadcastDialogue, setOpenBroadcastDialog] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [open, setOpen] = useState(false);
    const [broadcastRecipient, setBroadcastRecipient] = useState(0);

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

    const TeamMembers = [
        { id: 0, name: "Adeniyi Ganiyu", position: "Managing Director", image: ManagingDirectorImage },
        { id: 1, name: "Faith Ikejiaku", position: "Customer Service Manager", image: ExecutiveAssistantImage },
        { id: 2, name: "Daniel Olarewaju", position: "Office Assistant", image: OfficeAssistantImage},
        { id: 3, name: "Enare Ejim", position: "Innovation Manager", image: InnovationManagerImage},
        { id: 4, name: "Ibrahim Abiodun", position: "Operation Executive", image: JohnDoeImage }
    ]
  return (
    <div className='w-full h-full bg-white rounded-xl shadow-md py-6'>
        {open && <DialogBox setOpen={setOpen} open={open}/>}
        {openBroadcastDialogue && <BroadcastMessageDialog setOpenBroadcastDialog={setOpenBroadcastDialog} broadcastRecipient={broadcastRecipient} setBroadcastRecipient={setBroadcastRecipient}/>}
        {openNewCustomerDialog && <NewCustomerDialog setOpenNewCustomerDialog={setOpenNewCustomerDialog} openNewCustomerDialog={NewCustomerDialog} setSelectedCustomer={setSelectedCustomer} selectedCustomer={selectedCustomer}/>}
        {openNewProductDialog && <CreateNewHolding  openNewProductDialog={openNewProductDialog} setOpenNewProductDialog={setOpenNewProductDialog} selectedHoldings={selectedHoldings} setSelectedHoldings={setSelectedHoldings}/>}
        <div className='px-6 pb-6 flex flex-row justify-between border-b '>
            <div>
            <h3 className='font-semibold text-lg'>
                Gantry
            </h3>
            <p className='font-normal text-sm text-custom-ash'>Details</p>
            </div>
            <div>
                <p onClick={()=>{setOpenNewProductDialog(true)}} className='py-2.5 px-3 text-sm flex flex-row gap-1 items-center bg-[#1D4ED8] text-white rounded-md active:bg-custom-brown md:hover:bg-custom-brown cursor-pointer'><BiEdit className='font-semibold text-base' /> Edit Gantry</p>
            </div>
        </div>
        <div className='space-y-6'>
            <div className='h-fit pt-6 md:pt-0 md:h-screen  box-border mx-auto flex flex-col gap-6 md:gap-4 justify-center items-center select-none'>
                <p className='font-semibold text-left w-full px-6'>Gallery</p>
                <div className='w-full h-[300px] sm:h-[545px] md:h-[85%] box-border relative flex flex-row sm:px-6'>
                    <img src={GantryImage} alt='' className={currentSlide===0 ? "w-full h-[300px] sm:h-[545px] md:h-full " : "hidden"} />
                    <img src={SampleImageTwo} alt='' className={currentSlide===1 ? "w-full h-[300px] sm:h-[545px] md:h-full " : "hidden"} />
                    <img src={SampleImageThree} alt='' className={currentSlide===2 ? "w-full h-[300px] sm:h-[545px] md:h-full " : "hidden"} />
                    <video  loop controls autoPlay playsInline className={currentSlide===3 ? "cursor-pointer w-full h-[300px] sm:h-[545px] md:min-h-[350px] md:h-full" : "hidden"}>
                        <source src={SampleVideo} type="video/mp4"/>
                    </video>
                    <IoIosArrowBack className='absolute left-6 top-0 bottom-0 my-auto z-50 text-white cursor-pointer text-[40px] active:text-custom-dark-image md:hover:text-custom-dark-image' onClick={showPreviousImage} /> 
                    <IoIosArrowForward className='absolute right-6 top-0 bottom-0 my-auto z-50 text-white cursor-pointer text-[40px] active:text-custom-dark-image md:hover:text-custom-dark-image' onClick={showNextImage}/>
                </div>
            </div>
            <div className='flex flex-row px-6 md:w-[500px] mx-auto justify-between box-border'>
                <img src={GantryImage} alt='' onClick={() => {setCurrentSlide(0)}} className={currentSlide===0 ? "w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] cursor-pointer brightness-50 rounded-md" : "w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] cursor-pointer rounded-md"} />
                <img src={SampleImageTwo} alt='' onClick={() => {setCurrentSlide(1)}} className={currentSlide===1 ? "w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] cursor-pointer brightness-50 rounded-md" : "w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] cursor-pointer rounded-md"} />
                <img src={SampleImageThree} alt='' onClick={() => {setCurrentSlide(2)}} className={currentSlide===2 ? "w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] cursor-pointer brightness-50 rounded-md" : "w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] cursor-pointer rounded-md"} />
                <div  className={currentSlide===3 ?'relative bg-black cursor-pointer brightness-50 rounded-md' : 'relative bg-black cursor-pointer rounded-md'}>
                    <video playsInline  className={currentSlide===3 ? "cursor-pointer w-[60px] h-[60px] sm:h-[75px]  sm:w-[75px]" : "w-[60px] h-[60px] sm:h-[75px] sm:w-[75px] cursor-pointer"}>
                        <source src={SampleVideo} type="video/mp4"/>
                    </video>
                    <FiPlayCircle onClick={() => {setCurrentSlide(3)}} className='absolute w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] top-0 right-0 bottom-0 left-0 z-[90] text-custom-white cursor-pointer' />
                </div>
            </div>
        </div>
        <div className='p-6 pb-10 space-y-3'>
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
        <div className='px-6 p-8 gap-y-4 flex flex-col md:flex-row justify-between border-t '>
            <div>
                <h3 className='font-semibold text-lg'>
                    Subscribers List
                </h3>
                <p className='font-normal text-sm text-custom-ash'>Holdings active Subscriber</p>
            </div>
            <div className='flex flex-col gap-4 sm:flex-row sm:gap-2 '>
                <p onClick={()=>{setOpenNewCustomerDialog(true)}} className='md:w-fit box-border p-4 md:py-2.5 md:px-3 text-sm flex flex-row gap-1 items-center bg-[#1D4ED8] text-white rounded-md active:bg-custom-brown md:hover:bg-custom-brown cursor-pointer'><BiEdit className='font-semibold text-base' /> Add Subscriber</p>
                <p onClick={()=>{setOpenBroadcastDialog(true); setBroadcastRecipient(TeamMembers.lengthy)}} className=' box-border p-4 md:py-2.5 md:px-3 text-sm flex flex-row gap-1 items-center bg-[#1D4ED8] text-white rounded-md active:bg-custom-brown md:hover:bg-custom-brown cursor-pointer'><TiMessages className='font-semibold text-base' /> Send Message</p>
            </div>
        </div>
        <div className=" min-w-full border-red-500">
            <div className="overflow-x-scroll lg:overflow-hidden">
                <table className="min-w-full text-left">
                    <thead className="border-b bg-[#152a3b] text-black">
                        <tr>
                        <th className="text-sm text-center font-medium text-white px-4 md:px-0 py-4">
                            S/N
                        </th>
                        <th className="text-sm font-medium text-white px-2 py-4">
                            Name
                        </th>
                        <th className="text-sm font-medium text-white px-2 py-4">
                            Email
                        </th>
                        <th className="text-sm font-medium text-white px-2 py-4">
                            Phone
                        </th>
                        <th className="text-sm font-medium text-white px-6 md:px-0 py-4">
                            
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">1</td>
                            <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                            {/* <img src={teamMember.image} className="w-[50px] h-[50px] rounded-full object-contain object-top bg-custom-brown" alt=''/> */}
                            Amujoyegbe Feyisayo
                            </td>
                            <td className='text-sm lowercase px-2'>
                            feyisayoamujoyegbe@gmail.com
                            </td>
                            <td className="text-sm text-black py-4 whitespace-nowrap px-2">
                            09098876786
                            </td>
                            <td className="text-sm text-[#1D4DE8] px-6 md:pr-6 h-full my-auto py-4 whitespace-nowrap text-center ">
                            <div className='flex flex-row gap-2 items-center justify-end'>
                                {/* <p onClick={()=>{setOpenBroadcastDialog(true); setBroadcastRecipient(1)}} className='cursor-pointer active:bg-custom-brown md:hover:bg-custom-brown py-2 px-5 bg-[#1D4ED8] rounded-md flex flex-row gap-1 items-center text-white'><TiMessages className='text-base'/> Message</p> */}
                                <p onClick={()=>{setOpenNewCustomerDialog(true); setSelectedCustomer(2)}} className='cursor-pointer active:bg-custom-brown md:hover:bg-custom-brown py-2 px-5 bg-[#1D4ED8] rounded-md flex flex-row gap-1 items-center text-white'><BiEdit className='text-base'/> Edit</p>
                                <p onClick={()=>{setOpen(true)}} className='cursor-pointer active:bg-custom-brown md:hover:bg-custom-brown p-3 py-2 px-4 bg-[#E02424] rounded-md flex flex-row gap-1 items-center text-white'><RiDeleteBinLine className='text-base'/> Delete</p>
                            </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='px-6 p-8 gap-y-4 flex flex-col md:flex-row justify-between border-t '>
            <div>
                <h3 className='font-semibold text-lg'>
                    Wait List
                </h3>
                <p className='font-normal text-sm text-custom-ash'>Notify this customers on important information</p>
            </div>
            <div className='flex flex-col gap-4 sm:flex-row sm:gap-2 '>
                <p onClick={()=>{setOpenNewCustomerDialog(true)}} className='md:w-fit box-border p-4 md:py-2.5 md:px-3 text-sm flex flex-row gap-1 items-center bg-[#1D4ED8] text-white rounded-md active:bg-custom-brown md:hover:bg-custom-brown cursor-pointer'><BiEdit className='font-semibold text-base' /> Add Customer</p>
                <p onClick={()=>{setOpenBroadcastDialog(true); setBroadcastRecipient(TeamMembers.lengthy)}} className='box-border p-4 md:py-2.5 md:px-3 text-sm flex flex-row gap-1 items-center bg-[#1D4ED8] text-white rounded-md active:bg-custom-brown md:hover:bg-custom-brown cursor-pointer'><TiMessages className='font-semibold text-base' /> Send Broadcast</p>
            </div>
        </div>
        <div className="flex flex-col overflow-x-scroll md:overflow-hidden">
        <div className=""> 
          <div className="pb-4 min-w-full">
              <div className="overflow-x-scroll lg:overflow-hidden">
                  <table className="min-w-full text-left">
                      <thead className="border-b bg-[#152a3b] text-black">
                          <tr>
                          <th className="text-sm text-center font-medium text-white px-4 md:px-0 py-4">
                              S/N
                          </th>
                          <th className="text-sm font-medium text-white px-2 py-4">
                              Name
                          </th>
                          <th className="text-sm font-medium text-white px-2 py-4">
                              Email
                          </th>
                          <th className="text-sm font-medium text-white px-2 py-4">
                              Phone
                          </th>
                          <th className="text-sm font-medium text-white px-6 md:px-0 py-4">
                              
                          </th>
                          </tr>
                      </thead>
                      <tbody>
                        {
                          TeamMembers.map((teamMember, i) => (
                            <tr key={i} className="bg-white border-b">
                              <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">{teamMember.id + 1}</td>
                              <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                {/* <img src={teamMember.image} className="w-[50px] h-[50px] rounded-full object-contain object-top bg-custom-brown" alt=''/> */}
                                {teamMember.name}
                              </td>
                              <td className='text-sm lowercase px-2'>
                                {teamMember.name.split(/\s+/).splice(0, 1)}@eyekontact.com.ng
                              </td>
                              <td className="text-sm text-black py-4 whitespace-nowrap px-2">
                                09098876786
                              </td>
                              <td className="text-sm text-[#1D4DE8] px-6 md:pr-6 h-full my-auto py-4 whitespace-nowrap text-center ">
                                <div className='flex flex-row gap-2 items-center justify-end'>
                                {/* {
                                    teamMember.id === 0 ? 
                                        <p onClick={()=>{setOpenBroadcastDialog(true); setBroadcastRecipient(1)}} className='cursor-pointer active:bg-custom-brown md:hover:bg-custom-brown py-2 px-5 bg-[#1D4ED8] rounded-md flex flex-row gap-1 items-center text-white'><TiMessages className='text-base'/> Message</p>
                                    : null
                                } */}
                                  <p onClick={()=>{setOpenNewCustomerDialog(true); setSelectedCustomer(teamMember.id)}} className='cursor-pointer active:bg-custom-brown md:hover:bg-custom-brown py-2 px-5 bg-[#1D4ED8] rounded-md flex flex-row gap-1 items-center text-white'><BiEdit className='text-base'/> Edit</p>
                                  <p onClick={()=>{setOpen(true)}} className='cursor-pointer active:bg-custom-brown md:hover:bg-custom-brown p-3 py-2 px-4 bg-[#E02424] rounded-md flex flex-row gap-1 items-center text-white'><RiDeleteBinLine className='text-base'/> Delete</p>
                                </div>
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                  </table>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HoldingsDetails