import Logo from '../../../src/assets/images/logo.png'
import * as IoIcon from "react-icons/io5"
import * as HiIcon from "react-icons/hi"

const Navbar = () => {

    const ToggleSidebar = (e) => {
        document.getElementById("menubtn").classList.toggle('hidden');
        document.getElementById("closebtn").classList.toggle('hidden');
        
    }

  return (
    <nav className="absolute top-0 w-full">
        <div className='w-11/12 mx-auto py-4 flex items-center justify-between font-medium'>
            <div className='h-11 w-20 md:w-24 cursor-pointer flex items-center justify-between'>
                <img className='w-full' src={Logo} alt="" />
            </div>
            <ul  className='hidden md:flex gap-8 text-white cursor-pointer text-sm'>
                <li>Home</li>
                <li>Our Platform</li>
                <li>Our Services</li>
                <li>Blog</li>
                <li>About Us</li>
            </ul>
            <div>
                <p className='hidden md:block px-5 py-4 rounded-xl bg-custom-blue cursor-pointer text-sm'>Contact Us</p>
                <IoIcon.IoMenu id='menubtn' onClick={ToggleSidebar} className='text-white text-5xl md:hidden active:text-custom-blue'/>
                <HiIcon.HiX id='closebtn' onClick={ToggleSidebar} className='hidden text-5xl text-custom-blue'/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar