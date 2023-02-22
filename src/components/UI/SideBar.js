import { MdDashboard } from 'react-icons/md'
import { RiArtboardFill } from 'react-icons/ri'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { AiFillContainer } from 'react-icons/ai'
import { IoIosPeople } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
    const HideSideBar = () =>{
        if (window.innerWidth < 768){
            document.getElementById("dashboard_sidebar").style.width = "0%";
            // document.body.classList.toggle('lock-scroll');
        }
    }
  return (
    <nav id='dashboard_sidebar' className=' h-full w-[250px] py-10 box-border border-r fixed bg-white'>
        <ul className='space-y-8'>
            <li>
                <NavLink to="/dashboard/home" onClick={HideSideBar} 
                    className={
                        ({ isActive }) => isActive ?
                            'flex flex-row items-center gap-2 px-5 font-medium cursor-pointer border-l-4 border-dashboard-blue text-dashboard-blue'
                        :
                            'flex flex-row items-center gap-2 px-5 font-medium cursor-pointer hover:border-l-4 text-gray-700 hover:border-custom-ash '
                    }
                    >
                    <MdDashboard className='text-2xl'/> Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/holdings' onClick={HideSideBar} 
                className={
                    ({ isActive }) => isActive ?
                        'flex flex-row items-center gap-2 px-5 font-medium cursor-pointer border-l-4 border-black border-dashboard-blue text-dashboard-blue'
                    :
                        'flex flex-row items-center gap-2 px-5 font-medium cursor-pointer hover:border-l-4 text-gray-700 hover:border-custom-ash'
                }
                >
                    <RiArtboardFill className='text-2xl'/> Holdings
                </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/bookings' onClick={HideSideBar} 
                    className={
                        ({ isActive }) => isActive ?
                            'flex flex-row items-center gap-2 px-5 font-medium cursor-pointer border-l-4 border-black border-dashboard-blue text-dashboard-blue'
                        :
                            'flex flex-row items-center gap-2 px-5 font-medium cursor-pointer hover:border-l-4 text-gray-700 hover:border-custom-ash'
                    }
                    >
                    <AiFillContainer className='text-2xl'/> Bookings
                </NavLink>
            </li>    
            <li>
                <NavLink to='/dashboard/blog' onClick={HideSideBar} 
                className={
                    ({ isActive }) => isActive ?
                        'flex flex-row items-center gap-2 px-5 font-medium cursor-pointer border-l-4 border-black border-dashboard-blue text-dashboard-blue'
                    :
                        'flex flex-row items-center gap-2 px-5 font-medium cursor-pointer hover:border-l-4 text-gray-700 hover:border-custom-ash'
                }
                >
                    <BsFillChatLeftTextFill className='text-2xl mt-1 p-[1.8px]'/> Blog
                </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/team' onClick={HideSideBar} 
                className={
                    ({ isActive }) => isActive ?
                        'flex flex-row items-center gap-2 px-5 font-medium cursor-pointer border-l-4 border-black border-dashboard-blue text-dashboard-blue'
                    :
                        'flex flex-row items-center gap-2 px-5 font-medium cursor-pointer hover:border-l-4 text-gray-700 hover:border-custom-ash '
                }
                >
                    <IoIosPeople className='text-2xl'/> Team
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default SideBar