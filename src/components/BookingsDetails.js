import React from 'react'
import GantryImage from "../../src/assets/images/live-gantry.png"
import { IoLocationSharp } from "react-icons/io5"
import { SlSizeFullscreen } from "react-icons/sl"
import { Link } from 'react-router-dom'
import { FaRegCalendarAlt } from 'react-icons/fa'


const BookingsDetails = () => {
  return (
    <div className='space-y-6'>
        <div className='w-full h-full bg-white rounded-xl shadow-md py-6'>
            <div className='px-6 pb-8 mb-6 flex flex-col border-b '>
                <div className='flex flex-row justify-between items-center'>
                    <h3 className='font-semibold text-lg'>
                        Booking Details
                    </h3>
                    <h3 className='font-semibold text-sm'>
                        ID: 432
                    </h3>
                </div>
                <p className='font-normal text-sm text-custom-ash mb-0.5'>Information about the booked holdings</p>
                <p className='flex flex-row text-sm font-medium items-start gap-2'><FaRegCalendarAlt className='text-lg' /> Feb 18, 2022</p>
                {/* <p className=' text-sm font-medium'>Category: Gantry</p> */}
            </div>
            <div className='text-black px-6 space-y-3 pb-8 border-b'>
                <div>
                    <h3 className='font-semibold text-lg'>
                        Customer Details
                    </h3>
                    <p className='font-normal text-sm text-custom-ash'>Customer's contact Information</p>
                </div>
                <div className='space-y-1 '>
                    <p className=''><span className='font-semibold'>Name: </span>Adeyeye Abiola</p>
                    <p className=''><span className='font-semibold'>Phone Number: </span> 090123454678</p>
                    <p className=''><span className='font-semibold'>Email: </span> adeyeyeabiola@gmail.com</p>
                </div>
            </div>
            <div className='text-black px-6 py-8 space-y-3 '>
                <div className='flex flex-row justify-between items-center'>
                    <h3 className='font-semibold text-lg'>
                        Holdings Details
                    </h3>
                    <h3 className='font-semibold text-sm'>
                        ID: 21
                    </h3>
                </div>
                <div className='flex flex-col w-full md:flex-row gap-6 md:items-end'>

                    <div className='w-full md:w-[470px] md:h-[250px]'>
                        <img src={GantryImage} alt='' className='w-full md:w-[400px] md:h-[250px]' />
                    </div>
                    <div className='w-fit'>
                        <p className='font-semibold text-lg mb-1'>Gantry</p>
                        <div className='mb-3'>
                            <h2 className='font-semibold text-sm '>Description</h2>
                            <p className='text-sm text-black'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div 
                            className='flex flex-col justify-between gap-3 w-full'>
                            <p className='text-black flex flex-row w-fit gap-2'><IoLocationSharp className='text-lg'/><span className='font-medium'>Lagos, Ajah</span></p>
                            
                        </div>
                        <div className='flex flex-row justify-between items-center'>
                            <p className='text-black flex flex-row w-fit gap-2'><SlSizeFullscreen className='text-lg'/><span className='font-medium'>16MX16M</span></p>
                            <Link to='/dashboard/holdings/holdings-details' className="text-sm text-[#1D4DE8] font-semibold cursor-pointer hover:text-custom-ash">
                                More Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookingsDetails