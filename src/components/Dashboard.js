import React, { useState } from 'react'
// import { FaRegUserCircle } from 'react-icons/fa'
import ProfileImage from '../../src/assets/images/profileImage.jpg'
import Logo from '../../src/assets/images/logo.png'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import DashboardHome from './DashboardHome'
import SideBar from './UI/SideBar'
import DashboardHoldings from './DashboardHoldings'
import DashboardBookings from './DashboardBookings'
import DashboardBlog from './DashboardBlog'
import DashboardScrollToTop from './UI/DashboardScrollToTop'
import DashboardTeam from './DashboardTeam'
import BookingsDetails from './BookingsDetails'
import HoldingsDetails from './HoldingsDetails'

const Dashboard = () => {

  const [showDropDown, setShowDropDown] = useState(false);
  const toggleDropDown = () =>{
    setShowDropDown(prevState => !prevState);
  }

  document.title = "Dashboard";

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
        <SideBar />
        <section className='bg-[#f9fafb] min-h-screen w-full p-4 pl-[236px]'>
          <DashboardScrollToTop>
            <Routes>
              <Route path='/' element={<Navigate to='/home' />} />
              <Route path='/home' element={<DashboardHome />}/>
              <Route path='/holdings' element={<DashboardHoldings />} />
              <Route path='/holdings/holdings-details' element={<HoldingsDetails />} />
              <Route path='/bookings' element={<DashboardBookings />} />
              <Route path='/bookings/holdings-details' element={<BookingsDetails />} />
              <Route path='/blog' element={<DashboardBlog />} />
              <Route path='/team' element={<DashboardTeam />} />
            </Routes>
          </DashboardScrollToTop>
        </section>
      </div>
    </div>
  )
}

export default Dashboard