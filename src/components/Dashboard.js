import React, { useState } from 'react'
// import { FaRegUserCircle } from 'react-icons/fa'
import ProfileImage from '../../src/assets/images/profileImage.jpg'
import Logo from '../../src/assets/images/logo.png'
import { Link, Navigate,NavLink, Route, Routes } from 'react-router-dom'
import DashboardHome from './DashboardHome'
import DashboardHoldings from './DashboardHoldings'
import DashboardBookings from './DashboardBookings'
import DashboardBlog from './DashboardBlog'
import DashboardScrollToTop from './UI/DashboardScrollToTop'
import DashboardTeam from './DashboardTeam'
import BookingsDetails from './BookingsDetails'
import HoldingsDetails from './HoldingsDetails'
import DasboardBlogDetails from './DasboardBlogDetails'
import DashboardCreateBlog from './DashboardCreateBlog'
import ProfileModal from './UI/ProfileModal'
import { HiX } from 'react-icons/hi'
import { IoMenu } from 'react-icons/io5'
import { MdDashboard } from 'react-icons/md'
import { RiArtboardFill } from 'react-icons/ri'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { AiFillContainer } from 'react-icons/ai'
import { IoIosPeople } from 'react-icons/io'

const Dashboard = () => {

  const [showDropDown, setShowDropDown] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const toggleDropDown = () =>{
    setShowDropDown(prevState => !prevState);
  }

  document.title = "Dashboard";

  const HideSideBar = () =>{
    if (window.innerWidth < 768){
        document.getElementById("dashboard_sidebar").style.width = "0px";
        document.getElementById("menubtn").style.display = "block";
        document.getElementById("closebtn").style.display = "none";
        // document.body.classList.toggle('lock-scroll');
    }
  }
  const showSideBar = () => {
    if (window.innerWidth < 768){
        document.getElementById("dashboard_sidebar").style.width = "220px";
        document.getElementById("closebtn").style.display = "block";
        document.getElementById("menubtn").style.display = "none";
        // document.body.classList.toggle('lock-scroll');
    }
  }

  return (
    <div>
      <div className='w-full px-3 md:px-6 py-3 h-[70px] flex flex-row justify-between items-center border-b fixed z-50 bg-white'>
        <div className='flex flex-row gap-2 items-center'>
          <div className='flex flex-row items-center w-fit'>
            <IoMenu id='menubtn' onClick={showSideBar} className='cursor-pointer active:text-custom-brown md:hover:text-custom-brown text-black text-4xl md:hidden  '/>
            <HiX id='closebtn' onClick={HideSideBar} className='cursor-pointer active:text-custom-brown md:hover:text-custom-brown text-black text-4xl hidden'/>
          </div>
          <img className='w-16 hidden md:block cursor-pointer mx-auto' src={Logo} alt="" />
        </div>
        <div onClick={()=>{setShowDropDown(true)}} className='relative rounded-full flex flex-row gap-2 items-center group border border-white cursor-pointer'>
          <p className='font-semibold text-lg group-active:text-custom-brown md:group-hover:text-custom-brown'>Hi, Abiola</p>
          <img src={ProfileImage} alt="" className='w-10 h-10 rounded-full object-cover cursor-pointer active:group-hover:border-2 active:group-hover:border-custom-blue-dark md:group-hover:brightness-50 group-active:brightness-50' />
            { showDropDown && 
              <div className='absolute w-[260px] md:w-[190px] top-[40px] -right-4 bg-white rounded-md shadow box-border hidden group-hover:block'>
                <div className='p-3 border-b box-border text-base'>
                  <p className='w-full break-words font-medium '>Abiola Adeyeye</p>
                  <p className='break-words text-sm'>abiolaadeyeye@eyekontact.com</p>
                </div>
                <div className='py-1 box-border text-base'>
                  <p onClick={()=>{setShowProfileModal(true); setShowDropDown(false)}} className='px-3 py-1.5 cursor-pointer hover:bg-[#d8ecff]'>Profile</p>
                  <Link to='/login'>
                    <p className='px-3 py-1.5 cursor-pointer hover:bg-[#d8ecff]'>Sign Out</p>
                  </Link>
                </div>
              </div>
            }
        </div>
      </div>
      <div className='flex flex-row w-full relative h-full pt-[70px]'>
        <nav id='dashboard_sidebar' className='transition-multiple ease-in-out h-screen overflow-x-hidden box-border md:h-full w-[0px] md:w-[220px] py-10 border-r z-[49] md:z-0 fixed bg-white'>
          <ul className='space-y-8'>
              <li>
                  <NavLink to="/dashboard/home" onClick={HideSideBar} 
                      className={
                          ({ isActive }) => isActive ?
                              'flex flex-row items-center gap-2 px-6 font-medium cursor-pointer border-l-4 border-dashboard-blue text-dashboard-blue'
                          :
                              'flex flex-row items-center gap-2 px-6 font-medium cursor-pointer hover:border-l-4 text-gray-700 hover:border-custom-ash'
                      }
                      >
                      <MdDashboard className='text-2xl'/> Dashboard
                  </NavLink>
              </li>
              <li>
                  <NavLink to='/dashboard/holdings' onClick={HideSideBar} 
                  className={
                      ({ isActive }) => isActive ?
                          'flex flex-row items-center gap-2 px-6 font-medium cursor-pointer border-l-4 border-dashboard-blue text-dashboard-blue'
                      :
                          'flex flex-row items-center gap-2 px-6 font-medium cursor-pointer hover:border-l-4 text-gray-700 hover:border-custom-ash'
                  }
                  >
                      <RiArtboardFill className='text-2xl'/> Holdings
                  </NavLink>
              </li>
              <li>
                  <NavLink to='/dashboard/bookings' onClick={HideSideBar} 
                      className={
                          ({ isActive }) => isActive ?
                              'flex flex-row items-center gap-2 px-6 font-medium cursor-pointer border-l-4  border-dashboard-blue text-dashboard-blue'
                          :
                              'flex flex-row items-center gap-2 px-6 font-medium cursor-pointer hover:border-l-4 text-gray-700 hover:border-custom-ash'
                      }
                      >
                      <AiFillContainer className='text-2xl'/> Bookings
                  </NavLink>
              </li>    
              <li>
                  <NavLink to='/dashboard/blog' onClick={HideSideBar} 
                  className={
                      ({ isActive }) => isActive ?
                          'flex flex-row items-center gap-2 px-6 font-medium cursor-pointer border-l-4 border-dashboard-blue text-dashboard-blue'
                      :
                          'flex flex-row items-center gap-2 px-6 font-medium cursor-pointer hover:border-l-4 text-gray-700 hover:border-custom-ash'
                  }
                  >
                      <BsFillChatLeftTextFill className='text-2xl mt-1 p-[1.8px]'/> Blog
                  </NavLink>
              </li>
              <li>
                  <NavLink to='/dashboard/team' onClick={HideSideBar} 
                  className={
                      ({ isActive }) => isActive ?
                          'flex flex-row items-center gap-2 px-6 font-medium cursor-pointer border-l-4 border-dashboard-blue text-dashboard-blue'
                      :
                          'flex flex-row items-center gap-2 px-6 font-medium cursor-pointer hover:border-l-4 text-gray-700 hover:border-custom-ash '
                  }
                  >
                      <IoIosPeople className='text-2xl'/> Team
                  </NavLink>
              </li>
          </ul>
        </nav>
        <section className='bg-[#f9fafb] min-h-screen w-full p-4 md:pl-[236px]'>
          {showProfileModal && <ProfileModal setShowProfileModal={setShowProfileModal} />}
          <DashboardScrollToTop>
            <Routes>
              <Route path='/' element={<Navigate to='/home' />} />
              <Route path='/home' element={<DashboardHome />}/>
              <Route path='/holdings' element={<DashboardHoldings />} />
              <Route path='/holdings/holdings-details' element={<HoldingsDetails />} />
              <Route path='/bookings' element={<DashboardBookings />} />
              <Route path='/bookings/holdings-details' element={<BookingsDetails />} />
              <Route path='/blog' element={<DashboardBlog />} />
              <Route path='/blog/blog-details' element={<DasboardBlogDetails />} />
              <Route path='/blog/create-blog/:blog_id' element={<DashboardCreateBlog />} />
              <Route path='/team' element={<DashboardTeam />} />
            </Routes>
          </DashboardScrollToTop>
        </section>
      </div>
    </div>
  )
}

export default Dashboard