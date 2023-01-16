import {ReactComponent as HomeIcon} from '../../../src/assets/images/Vector1.svg'
import {ReactComponent as PlatformIcon} from '../../../src/assets/images/Vector2.svg'
import {ReactComponent as ServiceIcon} from '../../../src/assets/images/Vector3.svg'
import {ReactComponent as BlogIcon} from '../../../src/assets/images/Vector4.svg'
import {ReactComponent as ContactIcon} from '../../../src/assets/images/Vector5.svg'
import {ReactComponent as FbIcon} from '../../../src/assets/images/fb.svg'
import {ReactComponent as IgIcon} from '../../../src/assets/images/instagram-logo-fill-svgrepo-com.svg'
import {ReactComponent as LinkedInIcon} from '../../../src/assets/images/linkedinn.svg'
import {ReactComponent as MailIcon} from '../../../src/assets/images/Mail.svg'
import {ReactComponent as LocationIcon} from '../../../src/assets/images/LocationMarker.svg'

const Footer = () => {
  return (
    <div className="py-14 bg-black">
        <div className='w-11/12 lg:w-[85%] mx-auto space-y-10 text-white'>
            <div className="grid md:grid-cols-3 space-y-6">
                <h1 className="font-extrabold text-5xl">Hello.</h1>
                <div className=''>
                    <div className='space-y-6 md:w-[160px] md:mx-auto'>
                        <div className='flex flex-row gap-6 items-center'>
                            <HomeIcon />
                            <p>Home</p>
                        </div>
                        <div className='flex flex-row gap-6 items-center'>
                            <PlatformIcon />
                            <p>Our Platform</p>
                        </div>
                        <div className='flex flex-row gap-6 items-center'>
                            <ServiceIcon />
                            <p>Our Services</p>
                        </div>
                        <div className='flex flex-row gap-6 items-center'>
                            <BlogIcon />
                            <p>Blog</p>
                        </div>
                        <div className='flex flex-row gap-6 items-center'>
                            <ContactIcon />
                            <p>Contact Us</p>
                        </div>
                    </div>
                </div>
                <div className='md:text-right space-y-4'>
                    <p className=''>
                        Place your business where it counts.
                    </p>
                    <p className='text-3xl'>
                        Contact Us
                    </p>
                    <div className='flex flex-row items-center md:justify-end space-x-4'>
                        <IgIcon className='w-6 h-6 fill-white' />
                        <FbIcon className='w-6 h-6 fill-white'/>
                        <LinkedInIcon className='w-5 h-5 fill-white' />
                    </div>
                </div>
            </div>
            <div className='space-y-4'>
                <p>Get in touch...</p>
                <div className='flex flex-row gap-6 items-center'>
                    <MailIcon />
                    <p>eyekontactlimited@gmail.com</p>
                </div>
                <div className='flex flex-row gap-6 items-center'>
                    <LocationIcon />
                    <p>No 49A, Adeniyi Jones, Ikeja Lagos, Nigeria.</p>
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