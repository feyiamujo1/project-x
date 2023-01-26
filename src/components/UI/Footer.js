import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {ReactComponent as FbIcon} from '../../../src/assets/images/fb.svg'
import {ReactComponent as IgIcon} from '../../../src/assets/images/instagram-logo-fill-svgrepo-com.svg'
import {ReactComponent as LinkedInIcon} from '../../../src/assets/images/linkedinn.svg'
import {ReactComponent as LocationIcon} from '../../../src/assets/images/LocationMarker.svg'

const Footer = () => {
    const location = useLocation().pathname;
    const [path, setPath] = useState("");

    useEffect(()=>{
        setPath(location);
       
    }, [location]);

  return (
    <div className={path === "/" ? 'py-14 bg-black' : 'py-14 bg-[#1E1E1E]'}>
        <div className='w-11/12 lg:w-[80%] mx-auto space-y-10 text-white'>
            <div className="grid md:grid-cols-3 space-y-6">
                <h1 className="font-extrabold text-5xl">Hello.</h1>
                <div className=''>
                    <div className='space-y-6 md:w-[160px] md:mx-auto'>
                        <Link to="/" className='flex flex-row gap-5 items-center md:items-center group cursor-pointer md:w-fit box-border'>
                            <svg className='w-5 p-0 fill-white group-active:fill-custom-blue md:group-hover:fill-custom-blue -mb-1' xmlns="http://www.w3.org/2000/svg" data-name="Flat Color" viewBox="0 0 24 24">
                                <path d="m21.71 11.29-9-9a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 13h1v7.3A1.77 1.77 0 0 0 5.83 22H8.5a1 1 0 0 0 1-1v-4.9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V21a1 1 0 0 0 1 1h2.67A1.77 1.77 0 0 0 20 20.3V13h1a1 1 0 0 0 .92-.62 1 1 0 0 0-.21-1.09Z"/>
                            </svg>
                            <p className='group-active:text-custom-blue mt-1.5 md:group-hover:text-custom-blue'>Home</p>
                        </Link>
                        <Link to="/redirect" className='flex flex-row gap-4 items-center md:items-center group cursor-pointer md:w-fit'>
                            <svg className='w-6 h-4 p-0 block fill-white group-active:fill-custom-blue md:group-hover:fill-custom-blue' xmlns="http://www.w3.org/2000/svg">
                                <path className='w-full' d="M3 0a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H4v1a1 1 0 0 1-2 0V4H1a1 1 0 0 1 0-2h1V1a1 1 0 0 1 1-1Zm0 10a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H4v1a1 1 0 1 1-2 0v-1H1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 1-1Zm7-10a1 1 0 0 1 .967.744L12.146 5.2 15.5 7.134a1 1 0 0 1 0 1.732l-3.354 1.935-1.18 4.455a1 1 0 0 1-1.933 0L7.854 10.8 4.5 8.866a1 1 0 0 1 0-1.732l3.354-1.935L9.034.744A1 1 0 0 1 10 0Z"/>
                            </svg>
                            <p className='group-active:text-custom-blue md:group-hover:text-custom-blue'>Our Platform</p>
                        </Link>
                        <Link to='/our-services' className='flex flex-row gap-4 items-start md:items-start group cursor-pointer md:w-fit'>
                            <svg className='w-6 h-4 mt-1 p-0 block fill-white group-active:fill-custom-blue md:group-hover:fill-custom-blue' xmlns="http://www.w3.org/2000/svg" >
                                <path d="M16 10V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3l3 3 3-3h3a2 2 0 0 0 2-2ZM3 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm1 3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2H4Z"/>
                            </svg>
                            <p className='group-active:text-custom-blue md:group-hover:text-custom-blue'>Our Services</p>
                        </Link>
                        <Link to='/blog' className='flex flex-row gap-[17px] items-start md:items-center group cursor-pointer md:w-fit'>
                            <svg className='w-6 p-0 block fill-white group-active:fill-custom-blue md:group-hover:fill-custom-blue' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M.166 4A11.954 11.954 0 0 0 8 .943 11.954 11.954 0 0 0 15.834 4c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C3.34 15.67 0 11.225 0 6c0-.682.057-1.35.166-2Zm11.541 3.707a1 1 0 0 0-1.414-1.414L7 9.586 5.707 8.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" />
                            </svg>
                            <p className='group-active:text-custom-blue -mt-0.5 md:group-hover:text-custom-blue'>Blog</p>
                        </Link>
                        <Link to='/about-us' className='flex flex-row gap-4 items-center md:items-center group cursor-pointer md:w-fit stubborn'>
                            <svg className=' w-6 h-5 p-0 -ml-1 block fill-white group-active:fill-custom-blue' viewBox="0 0 1024 1024">
                                <path className='group-active:fill-custom-blue' d="M789.333 853.333H234.667l-128 128V256c0-70.4 57.6-128 128-128h554.666c70.4 0 128 57.6 128 128v469.333c0 70.4-57.6 128-128 128z"/><path fill="#000" d="M469.333 426.667h85.334v234.666h-85.334zM469.333 320a42.667 42.667 0 1 0 85.334 0 42.667 42.667 0 1 0-85.334 0Z"/>
                            </svg>
                            <p className='group-active:text-custom-blue md:group-hover:text-custom-blue pl-1'>About Us</p>
                        </Link>
                        <Link to='/contact-us' className='flex flex-row gap-4 items-center md:items-center group cursor-pointer md:w-fit'>
                            <svg className='w-6 h-4 p-0 block fill-white group-active:fill-custom-blue md:group-hover:fill-custom-blue' xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8ZM8 5a1 1 0 0 0-.867.5 1 1 0 1 1-1.731-1A3 3 0 1 1 9 8.83V9a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1 1 1 0 0 0 0-2Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"/>
                            </svg>
                            <p className='group-active:text-custom-blue md:group-hover:text-custom-blue'>Contact Us</p>
                        </Link>
                    </div>
                </div>
                <div className='md:text-right md:space-y-4 space-y-8'>
                    <p className=''>
                        Place your business where it counts.
                    </p>
                    <p className='text-3xl'>
                        Contact Us
                    </p>
                    <div className='flex flex-row items-center md:justify-end space-x-4'>
                        <IgIcon className='w-6 h-6 fill-white active:fill-custom-blue md:hover:fill-custom-blue cursor-pointer ' />
                        <FbIcon className='w-6 h-6 fill-white active:fill-custom-blue md:hover:fill-custom-blue cursor-pointer'/>
                        <LinkedInIcon className='w-5 h-5 fill-white active:fill-custom-blue md:hover:fill-custom-blue cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className='space-y-4'>
                <p>Get in touch...</p>
                <div className='flex flex-row w-fit gap-4 items-center group cursor-pointer'>
                    <svg className='w-5 h-5 p-0 block fill-white group-active:fill-custom-blue md:group-hover:fill-custom-blue' viewBox="0 0 512 512">
                        <path d="M452.29 74.535H59.71C26.728 74.535 0 101.263 0 134.236v243.527c0 32.974 26.728 59.702 59.71 59.702h392.58c32.973 0 59.71-26.728 59.71-59.702V134.236c0-32.973-26.736-59.701-59.71-59.701zm31.2 319.314-11.366 13.46-159.167-129.902-24.65 23.454c-18.268 16.776-46.345 16.776-64.614 0l-24.65-23.454L39.876 407.309l-11.366-13.46 149.44-136.517L27.531 115.968l8.893-11.783L256 270.56l219.575-166.375 8.886 11.783-150.41 141.364L483.49 393.849z"/>
                    </svg>
                    <p className='group-active:text-custom-blue md:group-hover:text-custom-blue'>eyekontactlimited@gmail.com</p>
                </div>
                <div className='flex flex-row w-fit gap-6 items-center group cursor-pointer'>
                    <LocationIcon className='fill-white group-active:fill-custom-blue md:group-hover:fill-custom-blue' />
                    <p className='group-active:text-custom-blue md:group-hover:text-custom-blue'>No 49A, Adeniyi Jones, Ikeja Lagos, Nigeria.</p>
                </div>
            </div>
        </div>
        <div className='pt-14 w-11/12 lg:w-[85%] mx-auto'>
            <p className='text-white text-center mx-auto'>&#169; 2023 Eyekontact Limited, All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer