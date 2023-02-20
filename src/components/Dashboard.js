import React, { useState } from 'react'
import { MdDashboard } from 'react-icons/md'
import { RiArtboardFill } from 'react-icons/ri'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { AiFillContainer } from 'react-icons/ai'
// import { FaRegUserCircle } from 'react-icons/fa'
import ProfileImage from '../../src/assets/images/profileImage.jpg'
import Billboard from '../../src/assets/images/billboard-weird-blue.png'
import Booked from '../../src/assets/images/bokking-weird-blue.png'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import PeopleImage from '../../src/assets/images/queue.png'
import Logo from '../../src/assets/images/logo.png'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const data = [
    {
      name: 'Jan',
      "Outlets Booked": 100,
    },
    {
      name: 'Feb',
      "Outlets Booked": 500,
    },
    {
      name: 'Mar',
      "Outlets Booked": 300,
    },
    {
      name: 'Apr',
      "Outlets Booked": 200,
    },
    {
      name: 'May',
      "Outlets Booked": 150,
    },
    {
      name: 'Jun',
      "Outlets Booked": 320,
    },
    {
      name: 'Jul',
      "Outlets Booked": 50,
    },
    {
      name: 'Aug',
      "Outlets Booked": 230,
    },
    {
      name: 'Sep',
      "Outlets Booked": 400,
    },
    {
      name: 'Oct',
      "Outlets Booked": 200,
    },
    {
      name: 'Nov',
      "Outlets Booked": 340,
    },
    {
      name: 'Dec',
      "Outlets Booked": 280, 
    }
  ];

  const barChartData = [
    {
      name: 'Outlet Distribution',
      "Gantry": 200,
      "Unipoles": 150,
      "Bus Shelter": 100,
      "LED": 70,
      "Murals": 75,
      "Lampost": 120,
      "Bridge Panels": 45,
      "Wallwrap": 25,
      "Fence Drape": 40
    },
  ];

  const [showDropDown, setShowDropDown] = useState(false);
  const toggleDropDown = () =>{
    setShowDropDown(prevState => !prevState);
  }

  return (
    <div>
      <div className='w-full px-6 py-3 h-[70px] flex flex-row justify-between items-center border-b fixed z-50 bg-white'>
        <div>
          <img className='w-16 cursor-pointer mb-4 mx-auto' src={Logo} alt="" />
        </div>
        <div className='relative rounded-full flex flex-row gap-2 items-center'>
          <p className='font-semibold'>Hi, Abiola</p>
          <img onClick={toggleDropDown} src={ProfileImage} alt="" className='w-10 h-10 rounded-full object-cover cursor-pointer hover:border-2 hover:border-custom-blue-dark' />
          {
            showDropDown && 
            <div className='absolute w-[190px] top-11 -right-4 bg-white rounded-md shadow box-border'>
              <div className='p-3 border-b box-border text-sm'>
                <p className='w-full break-words font-medium'>Abiola Adeyeye</p>
                <p className='break-words'>abiolaadeyeye@eyekontact.com</p>
              </div>
              <div className='py-1 box-border text-sm'>
                <p className='px-3 py-1.5 cursor-pointer hover:bg-[#d8ecff]'>Profile</p>
                <Link to='/login'>
                  <p className='px-3 py-1.5 cursor-pointer hover:bg-[#d8ecff]'>Sign Out</p>
                </Link>
              </div>
            </div>
          }
        </div>
      </div>
      <div className='flex flex-row w-full relative h-full pt-[70px]'>
        <nav className=' h-full w-[250px] py-10 box-border border-r fixed bg-white'>
          <ul className='text-black space-y-8'>
            <li className='flex flex-row items-center gap-2 px-5 font-semibold cursor-pointer border-l-4 border-custom-ash'><MdDashboard className='text-2xl'/> Dashboard</li>
            <li className='flex flex-row items-center gap-2 px-5 font-semibold cursor-pointer hover:border-l-4 hover:border-custom-ash'><RiArtboardFill className='text-2xl'/> Holdings</li>
            <li className='flex flex-row items-center gap-2 px-5 font-semibold cursor-pointer hover:border-l-4 hover:border-custom-ash'><AiFillContainer className='text-2xl text-black'/> Bookings</li>
            <li className='flex flex-row items-center gap-2 px-5 font-semibold cursor-pointer hover:border-l-4 hover:border-custom-ash'><BsFillChatLeftTextFill className='text-2xl mt-1 p-[1.8px]'/> Blog</li>
          </ul>
        </nav>
        <section className='bg-[#f9fafb] min-h-screen w-full p-4 pl-[266px] space-y-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            <div className='h-32 rounded-xl shadow p-4 flex flex-row gap-3 items-center justify-center bg-white'>
              <div className='w-24 rounded-full p-4 text-center box-border bg-custom-blue-light'>
                <img className='' src={Billboard} alt="" />
              </div>
              <div className='w-full'>
                <h1 className='text-black font-bold'>500</h1>
                <h2 className='text-custom-brown font-medium text-sm'>Total Holdings</h2>
              </div>
            </div>
            <div className='h-32 rounded-xl shadow p-4 flex flex-row gap-3 items-center justify-center bg-white'>
              <div className='text-center w-24 rounded-full p-4 box-border bg-custom-blue-light'>
                <img className='' src={Booked} alt="" />
              </div>
              <div className='w-full'>
                <h1 className='text-black font-bold'>300</h1>
            <h2 className='text-custom-brown font-medium text-sm'>Booked Outlets</h2>
              </div>
            </div>
            <div className='h-32 rounded-xl shadow p-4 flex flex-row gap-3 items-center justify-center bg-white'>
              <div className=' text-center w-24 rounded-full p-4 box-border bg-custom-blue-light'>
                <img className='' src={Billboard} alt="" />
              </div>
              <div className='w-full'>
                <h1 className='text-black font-bold'>100</h1>
                <h2 className='text-custom-brown font-medium text-sm'>Available Outlets</h2>
              </div>
            </div>
            <div className='h-32 rounded-xl shadow p-4 flex flex-row gap-3 items-center justify-center bg-white'>
              <div className='text-center w-24 rounded-full p-4 box-border bg-custom-blue-light'>
                <img className='w-16' src={PeopleImage} alt="" />
                {/* <SlPeople className='w-20' /> */}
              </div>
              <div className='w-full'>
                <h1 className='text-black font-bold'>100</h1>
                <h2 className='text-custom-brown font-medium text-sm'>Customers Waitlist</h2>
              </div>
            </div>
          </div>
          <div className='bg-white w-full rounded-xl shadow-md space-y-10 py-6'>
            <div>
              <h3 className='font-semibold pl-6 text-lg'>
                Bookings Analytics
              </h3>
              <p className='font-normal text-sm text-custom-ash pl-6'>Statistics for the year</p>
            </div>
            <div className='w-full p-0 m-0 pr-5 box-border'>
              <ResponsiveContainer className="w-full p-0 pr-4 m-0 "  aspect={3}>
                <LineChart className='w-full p-0 m-0' data ={data}>
                  <XAxis dataKey="name" stroke ="#000000" />
                  <YAxis stroke ="#000000" />
                  <Line type ="monotone" dataKey = "Outlets Booked" fill="#82ca9d"/>
                  <Tooltip/>
                  <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className='bg-white w-full rounded-xl shadow-md space-y-10 p-6'>
            <div>
              <h3 className='font-semibold text-lg'>
                Holdings Analytics
              </h3>
              <p className='font-normal text-sm text-custom-ash'>Current Holdings distribution</p>
            </div>
            <div className='w-full p-0 m-0 box-border'>
              <ResponsiveContainer className="w-full p-0 pr-4 m-0 " aspect={2.3}>
                <BarChart
                  data={barChartData}
                  margin={{
                    top: 5,
                    // right: 30,
                    left: -20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" stroke='#000000'/>
                  <YAxis stroke='#000000'/>
                  <Tooltip />
                  <Legend />
                  <Bar className='cursor-pointer' dataKey="Gantry" fill="#8884d8" />
                  <Bar className='cursor-pointer' dataKey="Unipoles" fill="#82ca9d" />
                  <Bar className='cursor-pointer' dataKey="Bus Shelter" fill="#FFBB28" />
                  <Bar className='cursor-pointer' dataKey="LED" fill="#FF8042" />
                  <Bar className='cursor-pointer' dataKey="Murals" fill="#00D3FF" />
                  <Bar className='cursor-pointer' dataKey="Lampost" fill="#00C49F" />
                  <Bar className='cursor-pointer' dataKey="Bridge Panels" fill="#6B7280" />
                  <Bar className='cursor-pointer' dataKey="Wallwrap" fill="#FF2500" />
                  <Bar className='cursor-pointer' dataKey="Fence Drape" fill="#0088FE" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className='bg-white w-full rounded-xl shadow-md space-y-10 p-6'>
            <div className='flex flex-row justify-between items-start'>
              <div>
                <h3 className='font-semibold text-lg'>
                  Bookings
                </h3>
                <p className='font-normal text-sm text-custom-ash'>Most recent bookings</p>
              </div>
              <div>
                <p className='text-[#9ecfff] font-medium cursor-pointer font-Poppins hover:text-custom-ash'>View all</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="pb-4 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-center">
                      <thead className="border-b bg-[#9ecfff]">
                        <tr>
                          <th className="text-sm text-center font-medium text-white py-4">
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
                            Date
                          </th>
                          <th className="text-sm font-medium text-white py-4">
                            
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className=" py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">1</td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            Gantry
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            Ajah, Lagos
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            12Mx12M
                          </td>
                          <td className="text-sm text-gray-900 font-light px-1 py-4 whitespace-nowrap">
                            Feb 18, 2022
                          </td>
                          <td className="text-sm text-[#1D4DE8] font-light py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                            View Details
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className=" py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">2</td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            Billboard
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            Ife, Osun
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            16Mx16M
                          </td>
                          <td className="text-sm text-gray-900 font-light px-1 py-4 whitespace-nowrap">
                            Feb 18, 2022
                          </td>
                          <td className="text-sm text-[#1D4DE8] font-light py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                            View Details
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className=" py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">3</td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            Fence Drape
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            Abeokuta, Ogun
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            10Mx10M
                          </td>
                          <td className="text-sm text-gray-900 font-light px-1 py-4 whitespace-nowrap">
                            Feb 17, 2022
                          </td>
                          <td className="text-sm text-[#1D4DE8] font-light py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                            View Details
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className=" py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">4</td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            Murals
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            Ibadan, Oyo
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            12Mx12M
                          </td>
                          <td className="text-sm text-gray-900 font-light px-1 py-4 whitespace-nowrap">
                            Feb 16, 2022
                          </td>
                          <td className="text-sm text-[#1D4DE8] font-light py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                            View Details
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className=" py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">5</td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            Lampost
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            Ajah, Lagos
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            8Mx8M
                          </td>
                          <td className="text-sm text-gray-900 font-light px-1 py-4 whitespace-nowrap">
                            Feb 15, 2022
                          </td>
                          <td className="text-sm text-[#1D4DE8] font-light py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                            View Details
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className=" py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">6</td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            Bridge Panels
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            Ikeja, Lagos
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            18Mx12M
                          </td>
                          <td className="text-sm text-gray-900 font-light px-1 py-4 whitespace-nowrap">
                            Feb 10, 2022
                          </td>
                          <td className="text-sm text-[#1D4DE8] font-light py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                            View Details
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className=" py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">7</td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            LED
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            Ebute Meta, Lagos
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            12Mx12M
                          </td>
                          <td className="text-sm text-gray-900 font-light px-1 py-4 whitespace-nowrap">
                            Feb 8, 2022
                          </td>
                          <td className="text-sm text-[#1D4DE8] font-light py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                            View Details
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className=" py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">8</td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            Gantry
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            Ilorin, Kwara
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            12Mx12M
                          </td>
                          <td className="text-sm text-gray-900 font-light px-1 py-4 whitespace-nowrap">
                            Jan 29, 2022
                          </td>
                          <td className="text-sm text-[#1D4DE8] font-light py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                            View Details
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className=" py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">9</td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            Bus Shelter
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            Akure, Ondo
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            12Mx12M
                          </td>
                          <td className="text-sm text-gray-900 font-light px-1 py-4 whitespace-nowrap">
                            Jan 19, 2022
                          </td>
                          <td className="text-sm text-[#1D4DE8] font-light py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                            View Details
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className=" py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">10</td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            Wallwrap
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            Ajah, Lagos
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                            12Mx12M
                          </td>
                          <td className="text-sm text-gray-900 font-light px-1 py-4 whitespace-nowrap">
                            Jan 10, 2022
                          </td>
                          <td className="text-sm text-[#1D4DE8] font-light py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                            View Details
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard