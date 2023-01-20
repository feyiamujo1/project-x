import Logo from '../../../src/assets/images/logo.png'
import * as IoIcon from "react-icons/io5"
import * as HiIcon from "react-icons/hi"
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
    const showSideBarar = () => {
       if (window.screen.width >= 640 && window.screen.width <= 768){
        document.getElementById("sidebar").style.width = "50%";
        
       }else if (window.screen.width < 640){
        document.getElementById("sidebar").style.width = "60%";
        
       }
       document.body.classList.toggle('lock-scroll');
    }
    const HideSideBar = () =>{
        if (window.screen.width < 768){
            document.getElementById("sidebar").style.width = "0%";
            document.body.classList.toggle('lock-scroll');
        }
        
    }
    
    // Set Nav bg color
    const [navbarBg, setNavbarbg] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80 && window.screen.width < 768) {
            setNavbarbg(true)
        } else {
            setNavbarbg(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    // let sideBarRef = useRef(); ref={sideBarRef}
  
    //This will close the side bar if anywhere outside the side bar is clicked
    // useEffect(() =>{
    //     let handler = (event) =>{
    //     if(!sideBarRef.current.contains(event.target))
    //         document.getElementById("sidebar").style.width = "0%";
    //         document.body.classList.toggle('lock-scroll');
    //     };

    //     document.addEventListener("mousedown", handler);
        
    //     return () =>{
    //     document.removeEventListener("mousedown", handler);
    //     }
    // });

  return (
    <nav className={navbarBg ? "bg-black md:bg-transparent fixed md:absolute top-0 w-full z-[100]" : "fixed md:absolute top-0 w-full z-10"}>
        <div className='w-11/12 lg:w-[85%] md:border-b md:border-b-[#FFFFFF4D] mx-auto py-2.5 md:py-0 flex items-center justify-between font-medium'>
            <div className='h-10 w-16 md:w-24 cursor-pointer flex items-center justify-between'>
                <img className='w-full' src={Logo} alt="" />
            </div>
            <ul  id='sidebar' className='absolute top-0 right-0 w-[0%] h-screen overflow-scroll box-border pb-20 md:pb-0 transition-multiple ease-in-out bg-black text-white z-20 space-y-10 md:space-y-0 text-left md:text-center  text-lg flex  md:bg-transparent md:h-fit md:flex md:w-fit md:bg-none md:relative md:z-0 md:overflow-hidden flex-col md:flex-row md:gap-8 md:text-sm'>
                <span className='md:hidden'><HiIcon.HiX id='closebtn' onClick={HideSideBar} className='text-4xl text-white active:text-custom-blue float-right mt-2.5 mr-4'/></span>
                <li>
                    <NavLink onClick={HideSideBar} to="/" 
                        className={
                            ({ isActive }) => isActive ?
                            'active:text-custom-blue pl-6 md:pt-[33px] md:pb-7 md:px-0 flex items-center gap-[22px] group md:border-b-[5px] md:border-transparent hover:border-custom-blue cursor-pointer hover:text-custom-blue text-custom-blue md:text-white md:border-custom-blue active-nav'
                            :
                            'active:text-custom-blue pl-6 md:pt-[33px] md:pb-7 md:px-0 flex items-center gap-[22px] group md:border-b-[5px] md:border-transparent hover:border-custom-blue cursor-pointer hover:text-custom-blue'
                        }>
                        <svg className='w-5 h-5 p-0 block fill-white group-active:fill-custom-blue md:hidden' xmlns="http://www.w3.org/2000/svg" data-name="Flat Color" viewBox="0 0 24 24">
                            <path d="m21.71 11.29-9-9a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 13h1v7.3A1.77 1.77 0 0 0 5.83 22H8.5a1 1 0 0 0 1-1v-4.9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V21a1 1 0 0 0 1 1h2.67A1.77 1.77 0 0 0 20 20.3V13h1a1 1 0 0 0 .92-.62 1 1 0 0 0-.21-1.09Z"/>
                        </svg>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={HideSideBar} to='/redirect' 
                        className={
                            ({ isActive }) => isActive ?
                            'active:text-custom-blue  pl-6 md:pt-[33px] md:pb-7 md:px-0 flex items-center gap-4 group md:border-b-[5px] md:border-transparent hover:border-custom-blue cursor-pointer hover:text-custom-blue text-custom-blue md:text-white md:border-custom-blue active-nav'
                            :
                            'active:text-custom-blue  pl-6 md:pt-[33px] md:pb-7 md:px-0 flex items-center gap-4 group md:border-b-[5px] md:border-transparent hover:border-custom-blue cursor-pointer hover:text-custom-blue'
                        }>
                        <svg className='w-6 h-4 p-0 block fill-white group-active:fill-custom-blue md:hidden' xmlns="http://www.w3.org/2000/svg">
                            <path className='w-full' d="M3 0a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H4v1a1 1 0 0 1-2 0V4H1a1 1 0 0 1 0-2h1V1a1 1 0 0 1 1-1Zm0 10a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H4v1a1 1 0 1 1-2 0v-1H1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 1-1Zm7-10a1 1 0 0 1 .967.744L12.146 5.2 15.5 7.134a1 1 0 0 1 0 1.732l-3.354 1.935-1.18 4.455a1 1 0 0 1-1.933 0L7.854 10.8 4.5 8.866a1 1 0 0 1 0-1.732l3.354-1.935L9.034.744A1 1 0 0 1 10 0Z"/>
                        </svg>
                        Our Platform
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={HideSideBar} to='/our-services' 
                    className={
                        ({ isActive }) => isActive ?
                        'active:text-custom-blue  pl-6 md:pt-[33px] md:pb-7 md:px-0 flex items-center gap-4 group md:border-b-[5px] md:border-transparent hover:border-custom-blue cursor-pointer hover:text-custom-blue text-custom-blue md:text-white md:border-custom-blue active-nav'
                        :
                        'active:text-custom-blue  pl-6 md:pt-[33px] md:pb-7 md:px-0 flex items-center gap-4 group md:border-b-[5px] md:border-transparent hover:border-custom-blue cursor-pointer hover:text-custom-blue'
                    }>
                    <svg className='w-6 h-4 p-0 block fill-white group-active:fill-custom-blue md:hidden' xmlns="http://www.w3.org/2000/svg" >
                        <path d="M16 10V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3l3 3 3-3h3a2 2 0 0 0 2-2ZM3 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm1 3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2H4Z"/>
                    </svg>
                    Our Services
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={HideSideBar} to="/blog" 
                        className={
                            ({ isActive }) => isActive ?
                            'active:text-custom-blue  pl-6 md:pt-[33px] md:pb-7 md:px-0 flex items-center gap-4 group md:border-b-[5px] md:border-transparent hover:border-custom-blue cursor-pointer hover:text-custom-blue text-custom-blue md:text-white md:border-custom-blue active-nav'
                            :
                            'active:text-custom-blue  pl-6 md:pt-[33px] md:pb-7 md:px-0 flex items-center gap-4 group md:border-b-[5px] md:border-transparent hover:border-custom-blue cursor-pointer hover:text-custom-blue'
                        }>
                        <svg className='w-6 p-0 block fill-white -mb-1.5 group-active:fill-custom-blue md:hidden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M.166 4A11.954 11.954 0 0 0 8 .943 11.954 11.954 0 0 0 15.834 4c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C3.34 15.67 0 11.225 0 6c0-.682.057-1.35.166-2Zm11.541 3.707a1 1 0 0 0-1.414-1.414L7 9.586 5.707 8.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" />
                        </svg>
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={HideSideBar} to="/about-us" 
                        className={
                            ({ isActive }) => isActive ?
                            'active:text-custom-blue  pl-6 md:pt-[33px] md:pb-7 md:px-0 flex items-center gap-4 group md:border-b-[5px] md:border-transparent hover:border-custom-blue cursor-pointer hover:text-custom-blue text-custom-blue md:text-white md:border-custom-blue active-nav'
                            :
                            'active:text-custom-blue  pl-6 md:pt-[33px] md:pb-7 md:px-0 flex items-center gap-4 group md:border-b-[5px] md:border-transparent hover:border-custom-blue cursor-pointer hover:text-custom-blue'
                        }>
                        <svg className='w-6 h-4 p-0 block fill-white group-active:fill-custom-blue md:hidden' xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8ZM8 5a1 1 0 0 0-.867.5 1 1 0 1 1-1.731-1A3 3 0 1 1 9 8.83V9a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1 1 1 0 0 0 0-2Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"/>
                        </svg>
                        About Us
                    </NavLink>
                </li>
            </ul>
            <div>
                <p className='hidden md:block px-5 py-4 rounded-xl bg-custom-blue cursor-pointer text-sm'>Contact Us</p>
                <IoIcon.IoMenu id='menubtn' onClick={showSideBarar} className='text-white text-4xl md:hidden active:text-custom-blue'/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar