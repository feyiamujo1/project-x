import Logo from '../../../src/assets/images/logo.png'
import * as IoIcon from "react-icons/io5"
import * as HiIcon from "react-icons/hi"
// import {ReactComponent as HomeIcon} from '../../../src/assets/images/homeIcon.svg'
// import {ReactComponent as PlatformIcon} from '../../../src/assets/images/Vector2.svg'
// import {ReactComponent as ServiceIcon} from '../../../src/assets/images/Vector3.svg'
// import {ReactComponent as BlogIcon} from '../../../src/assets/images/Vector4.svg'
// import {ReactComponent as ContactIcon} from '../../../src/assets/images/Vector5.svg'

const Navbar = () => {
    const showSideBarar = () => {
       if (window.screen.width >= 640 && window.screen.width < 768){
        document.getElementById("sidebar").style.width = "50%";
       }else if (window.screen.width < 640){
        document.getElementById("sidebar").style.width = "60%";
       }
    }
    const HideSideBar = () =>{
        document.getElementById("sidebar").style.width = "0%";
    }

    // const iconStyle = 'svg path {fill: #000 !important;}';

  return (
    <nav className="absolute top-0 w-full">
        <div className='w-11/12 lg:w-[85%] mx-auto py-4 flex items-center justify-between font-medium'>
            <div className='h-11 w-20 md:w-24 cursor-pointer flex items-center justify-between'>
                <img className='w-full' src={Logo} alt="" />
            </div>
            <ul id='sidebar' className='absolute top-0 right-0 w-[0%] h-screen overflow-hidden transition-multiple ease-in-out bg-white text-black z-10 space-y-10 md:space-y-0 text-left md:text-center  text-lg flex md:text-white md:bg-transparent md:h-fit md:flex md:w-fit md:bg-none md:relative md:z-0 md:overflow-hidden flex-col md:flex-row md:gap-8 cursor-pointer md:text-sm'>
                <span className='md:hidden'><HiIcon.HiX id='closebtn' onClick={HideSideBar} className='text-5xl text-custom-blue float-right mt-4 mr-4'/></span>
                <li className='active:text-custom-blue md:hover:text-custom-blue pl-6 md:pr-0 inline-flex space-x-6'> Home</li>
                <li className='active:text-custom-blue md:hover:text-custom-blue pl-6 md:pr-0'>Our Platform</li>
                <li className='active:text-custom-blue md:hover:text-custom-blue pl-6 md:pr-0'>Our Services</li>
                <li className='active:text-custom-blue md:hover:text-custom-blue pl-6 md:pr-0'>Blog</li>
                <li className='active:text-custom-blue md:hover:text-custom-blue pl-6 md:pr-0'>About Us</li>
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