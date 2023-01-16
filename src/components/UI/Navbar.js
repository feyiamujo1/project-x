import Logo from '../../../src/assets/images/logo.png'
import * as IoIcon from "react-icons/io5"
import * as HiIcon from "react-icons/hi"

const Navbar = () => {

    const showSideBarar = () => {
        // if (window.screen.width >= "640px") {
        //     document.getElementById("sidebar").style.width = "70%";
            document.getElementById("sidebar").style.opacity = "1";
        // }else{
            
        // }
        document.getElementById("sidebar").style.width = "100%";
        // document.getElementById("sidebar").style.opacity = "1";
        
    }
    const HideSideBar = () =>{
        document.getElementById("sidebar").style.width = "0%";
        // document.getElementById("sidebar").style.opacity = "0";
    }

  return (
    <nav className="absolute top-0 w-full">
        <div className='w-11/12 mx-auto py-4 flex items-center justify-between font-medium'>
            <div className='h-11 w-20 md:w-24 cursor-pointer flex items-center justify-between'>
                <img className='w-full' src={Logo} alt="" />
            </div>
            <ul id='sidebar' className='absolute top-0 right-0 w-[0%] h-screen overflow-x-hidden transition-multiple ease-out bg-white text-black z-10 space-y-10 md:space-y-0 text-center text-lg flex md:text-white md:bg-transparent md:h-fit md:flex md:w-fit md:bg-none md:relative md:z-0 md:overflow-hidden flex-col md:flex-row md:gap-8 cursor-pointer md:text-sm'>
                <span className='md:hidden'><HiIcon.HiX id='closebtn' onClick={HideSideBar} className='text-5xl text-custom-blue float-right mr-4 mt-4 '/></span>
                <li className='active:text-custom-blue'>Home</li>
                <li className='active:text-custom-blue'>Our Platform</li>
                <li className='active:text-custom-blue'>Our Services</li>
                <li className='active:text-custom-blue'>Blog</li>
                <li className='active:text-custom-blue'>About Us</li>
            </ul>
            <div>
                <p className='hidden md:block px-5 py-4 rounded-xl bg-custom-blue cursor-pointer text-sm'>Contact Us</p>
                <IoIcon.IoMenu id='menubtn' onClick={showSideBarar} className='text-white text-5xl md:hidden active:text-custom-blue'/>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar