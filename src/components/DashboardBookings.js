import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const DashboardBookings = () => {
  return (
    <div className='w-full h-full bg-white rounded-xl shadow-md py-6'>
      <div className='px-6 pt-0 mb-6 flex flex-col'>
        <h3 className='font-semibold text-lg'>
          Bookings
        </h3>
        <p className='font-normal text-sm text-custom-ash'>All holdings bookings</p>
      </div>
      <div className="flex flex-col">
                <div className="">
                    <div className="pb-4 inline-block min-w-full">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left">
                                <thead className="border-b bg-[#152a3b] text-black">
                                    <tr>
                                    <th className="text-sm text-center font-medium text-white px-1 py-4">
                                        ID
                                    </th>
                                    <th className="text-sm font-medium text-white px-2 py-4">
                                        Category
                                    </th>
                                    <th className="text-sm font-medium text-white px-2 py-4">
                                        location
                                    </th>
                                    <th className="text-sm font-medium text-white px-2 py-4">
                                        Size
                                    </th>
                                    <th className="text-sm font-medium text-white px-1 py-4">
                                        Booked On
                                    </th>
                                    <th className="text-sm font-medium text-white py-4">
                                        
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">1</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Gantry
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ajah, Lagos
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        12Mx12M
                                    </td>
                                    <td className="text-sm text-black  px-1 py-4 whitespace-nowrap">
                                        Feb 18, 2022
                                    </td>
                                    <td className="text-sm text-[#1D4DE8]  py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                                      <Link to='/dashboard/bookings/holdings-details'>
                                        View Details
                                      </Link>
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">2</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Billboard
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ife, Osun
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        16Mx16M
                                    </td>
                                    <td className="text-sm text-black  px-1 py-4 whitespace-nowrap">
                                        Feb 18, 2022
                                    </td>
                                    <td className="text-sm text-[#1D4DE8]  py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                                      <Link to='/dashboard/bookings/holdings-details'>
                                        View Details
                                      </Link>
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">3</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Fence Drape
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Abeokuta, Ogun
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        10Mx10M
                                    </td>
                                    <td className="text-sm text-black  px-1 py-4 whitespace-nowrap">
                                        Feb 17, 2022
                                    </td>
                                    <td className="text-sm text-[#1D4DE8]  py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                                      <Link to='/dashboard/bookings/holdings-details'>
                                        View Details
                                      </Link>
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">4</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Murals
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ibadan, Oyo
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        12Mx12M
                                    </td>
                                    <td className="text-sm text-black  px-1 py-4 whitespace-nowrap">
                                        Feb 16, 2022
                                    </td>
                                    <td className="text-sm text-[#1D4DE8]  py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                                      <Link to='/dashboard/bookings/holdings-details'>
                                        View Details
                                      </Link>
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">5</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Lampost
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ajah, Lagos
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        8Mx8M
                                    </td>
                                    <td className="text-sm text-black  px-1 py-4 whitespace-nowrap">
                                        Feb 15, 2022
                                    </td>
                                    <td className="text-sm text-[#1D4DE8]  py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                                      <Link to='/dashboard/bookings/holdings-details'>
                                        View Details
                                      </Link>
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">6</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Bridge Panels
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ikeja, Lagos
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        18Mx12M
                                    </td>
                                    <td className="text-sm text-black  px-1 py-4 whitespace-nowrap">
                                        Feb 10, 2022
                                    </td>
                                    <td className="text-sm text-[#1D4DE8]  py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                                      <Link to='/dashboard/bookings/holdings-details'>
                                        View Details
                                      </Link>
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">7</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        LED
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ebute Meta, Lagos
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        12Mx12M
                                    </td>
                                    <td className="text-sm text-black  px-1 py-4 whitespace-nowrap">
                                        Feb 8, 2022
                                    </td>
                                    <td className="text-sm text-[#1D4DE8]  py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                                      <Link to='/dashboard/bookings/holdings-details'>
                                        View Details
                                      </Link>
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">8</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Gantry
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ilorin, Kwara
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        12Mx12M
                                    </td>
                                    <td className="text-sm text-black  px-1 py-4 whitespace-nowrap">
                                        Jan 29, 2022
                                    </td>
                                    <td className="text-sm text-[#1D4DE8]  py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                                      <Link to='/dashboard/bookings/holdings-details'>
                                        View Details
                                      </Link>
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">9</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Bus Shelter
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Akure, Ondo
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        12Mx12M
                                    </td>
                                    <td className="text-sm text-black  px-1 py-4 whitespace-nowrap">
                                        Jan 19, 2022
                                    </td>
                                    <td className="text-sm text-[#1D4DE8]  py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                                      <Link to='/dashboard/bookings/holdings-details'>
                                        View Details
                                      </Link>
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">10</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Wallwrap
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ajah, Lagos
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        12Mx12M
                                    </td>
                                    <td className="text-sm text-black  px-1 py-4 whitespace-nowrap">
                                        Jan 10, 2022
                                    </td>
                                    <td className="text-sm text-[#1D4DE8]  py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                                      <Link to='/dashboard/bookings/holdings-details'>
                                        View Details
                                      </Link>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
      </div>
      <div>
        <p className='text-custom-brown text-sm text-center font-medium'>Showing <span className='text-black'>1-20</span> of <span className='text-black'>60</span></p>
        <div className='py-3 px-5 flex flex-row justify-between text-sm'>
          <p className='flex flex-row gap-1 items-center py-2 px-3 rounded-md bg-[#1D4ED8] text-white cursor-pointer hover:text-custom-brown'><IoIosArrowBack /> Previous</p>
          <p className='flex flex-row gap-1 items-center py-2 px-5 rounded-md bg-[#1D4ED8] text-white cursor-pointer hover:text-custom-brown'>Next <IoIosArrowForward /></p>
        </div>
      </div>
    </div>
  )
}

export default DashboardBookings