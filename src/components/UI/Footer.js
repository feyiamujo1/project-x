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
        <div className='w-11/12 lg:w-[85%] mx-auto space-y-10 text-white'>
            <div className="grid md:grid-cols-3 space-y-6">
                <h1 className="font-extrabold text-5xl">Hello.</h1>
                <div className=''>
                    <div className='space-y-6 md:w-[160px] md:mx-auto'>
                        <Link to="/" className='flex flex-row gap-5 items-start md:items-center group cursor-pointer md:w-fit box-border'>
                            {/* <Link to='/'> */}
                                <svg className='w-5 p-0 fill-white group-active:fill-custom-blue md:group-hover:fill-custom-blue' xmlns="http://www.w3.org/2000/svg" data-name="Flat Color" viewBox="0 0 24 24">
                                    <path d="m21.71 11.29-9-9a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 13h1v7.3A1.77 1.77 0 0 0 5.83 22H8.5a1 1 0 0 0 1-1v-4.9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V21a1 1 0 0 0 1 1h2.67A1.77 1.77 0 0 0 20 20.3V13h1a1 1 0 0 0 .92-.62 1 1 0 0 0-.21-1.09Z"/>
                                </svg>
                                <p className='group-active:text-custom-blue mt-1.5 md:group-hover:text-custom-blue'>Home</p>
                            {/* </Link> */}
                        </Link>
                        <Link to="/redirect" className='flex flex-row gap-4 items-start md:items-center group cursor-pointer md:w-fit'>
                            <svg className='w-6 h-4 p-0 block fill-white group-active:fill-custom-blue md:group-hover:fill-custom-blue' xmlns="http://www.w3.org/2000/svg">
                                <path className='w-full' d="M3 0a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H4v1a1 1 0 0 1-2 0V4H1a1 1 0 0 1 0-2h1V1a1 1 0 0 1 1-1Zm0 10a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H4v1a1 1 0 1 1-2 0v-1H1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 1-1Zm7-10a1 1 0 0 1 .967.744L12.146 5.2 15.5 7.134a1 1 0 0 1 0 1.732l-3.354 1.935-1.18 4.455a1 1 0 0 1-1.933 0L7.854 10.8 4.5 8.866a1 1 0 0 1 0-1.732l3.354-1.935L9.034.744A1 1 0 0 1 10 0Z"/>
                            </svg>
                            <p className='group-active:text-custom-blue md:group-hover:text-custom-blue'>Our Platform</p>
                        </Link>
                        <Link to='our-services' className='flex flex-row gap-4 items-start md:items-start group cursor-pointer md:w-fit'>
                            <svg className='w-6 h-4 mt-1 p-0 block fill-white group-active:fill-custom-blue md:group-hover:fill-custom-blue' xmlns="http://www.w3.org/2000/svg" >
                                <path d="M16 10V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3l3 3 3-3h3a2 2 0 0 0 2-2ZM3 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm1 3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2H4Z"/>
                            </svg>
                            <p className='group-active:text-custom-blue md:group-hover:text-custom-blue'>Our Services</p>
                        </Link>
                        <Link to='redirect' className='flex flex-row gap-[17px] items-start md:items-center group cursor-pointer md:w-fit'>
                            <svg className='w-6 p-0 block fill-white group-active:fill-custom-blue md:group-hover:fill-custom-blue' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M.166 4A11.954 11.954 0 0 0 8 .943 11.954 11.954 0 0 0 15.834 4c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C3.34 15.67 0 11.225 0 6c0-.682.057-1.35.166-2Zm11.541 3.707a1 1 0 0 0-1.414-1.414L7 9.586 5.707 8.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" />
                            </svg>
                            <p className='group-active:text-custom-blue -mt-0.5 md:group-hover:text-custom-blue'>Blog</p>
                        </Link>
                        <Link to='redirect' className='flex flex-row gap-4 items-center md:items-center group cursor-pointer md:w-fit'>
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
                    <svg className='w-6 h-4 p-0 block fill-white group-active:fill-custom-blue md:group-hover:fill-custom-blue' xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884Z"/>
                        <path d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118Z"/>
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
            <p className='text-white text-center mx-auto'>&#169; 2023 EyeKontact Limited, All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer