import Logo from '../../../src/assets/images/logo.png'

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full">
        <div className='w-11/12 mx-auto py-4 flex flex-1 items-center justify-between font-medium'>
            <div className='h-8 w-24 cursor-pointer flex items-center justify-between'>
                <img src={Logo} alt="" />
            </div>
            <ul  className='flex gap-8 text-white cursor-pointer text-sm'>
                <li>Home</li>
                <li>Our Platform</li>
                <li>Our Services</li>
                <li>Blog</li>
                <li>About Us</li>
            </ul>
            <div>
                <p className='px-5 py-4 rounded-xl bg-custom-blue cursor-pointer text-sm'>Contact Us</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar