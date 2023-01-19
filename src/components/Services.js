import { Link } from 'react-router-dom'
import DirectionImage from '../../src/assets/images/directions.png'
import Service1Image from '../../src/assets/images/service1.png'
import Service2Image from '../../src/assets/images/service2.png'
import Service3Image from '../../src/assets/images/service3.png'
import Service4Image from '../../src/assets/images/service4.png'
import Service5Image from '../../src/assets/images/service5.png'
import Service6Image from '../../src/assets/images/service6.png'
import Service7Image from '../../src/assets/images/service7.png'


const Services = () => {
  return (
    <div className='bg-black pb-8'>
        <div className="w-11/12 lg:w-[85%] mx-auto pb-16 pt-36 space-y-10 border-b border-[#ACACAC66]">
            <div className='hidden md:block'>
                <p className='hidden md:flex flex-row w-fit gap-4 justify-center items-center text-white'><Link to='/' className='hover:text-custom-blue'>Home</Link> <img src={DirectionImage} alt=""/> Our Services</p>
            </div>
            <div className='space-y-4'>
                <h1 className="font-extrabold abt -mt-10 text-4xl md:text-5xl text-white">Our Services</h1>
                <p className='text-white max-w-[600px] text-lg md:text-xl'>
                    We can create custom display that convey your brand messages and also help your company standout.
                    {/* WE CAN CREATE CUSTOM DISPLAY THAT CONVEY YOUR BRAND MESSAGES AND ALSO HELP YOUR COMPANY stand out. */}
                </p>
            </div>
        </div>
        <div className='bg-black '>
            <div className='space-y-10 w-11/12 lg:w-[85%] mx-auto py-10 border-b border-[#ACACAC66]'>
                <h2 className='text-custom-blue-dark font-bold text-3xl'>Iconic Structure</h2>
                <div className='flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-8'>
                    <img className='w-full md:w-[310px] lg:w-[360px]' src={Service1Image} alt="" />
                    <p className='text-white'>
                    The iconic platforms is the modern form of advertising which has to do with the digital and creative forms of advertising in OOH. This kind of platform are especially made for bigger brands that know the 
                    effectiveness on their BRANDS . The most important of the iconic platform is that it must be LIT to show the beauty of the brands 
                    and tell a story of the brands. This takes creativity of outdoors to another level of thinking outside the box for your clients so they can reach their consumer audience perfection what their brands is about 
                    and what they can derive.
                    </p>
                </div>
            </div>
        </div>
        <div className='relative'>
            <div className='space-y-10 w-11/12 lg:w-[85%] mx-auto py-14 border-b border-[#ACACAC66] relative z-10'>
                <h2 className='text-white font-bold text-3xl text-right'>Media Planning</h2>
                <div className='flex flex-col-reverse md:flex-row gap-6 md:gap-4 lg:gap-8'>
                    <p className='text-white'>
                        At Eyekontact our approach to media planning is to understand our client brands’ marketing, adevertising and media goals. We incorporate the four core steps in media planning; market analysis, establishment of media 
                        objectives, media strategy development and implementation and evaluation and follow up.
                    </p>
                    <img className='w-full md:w-[310px] lg:w-[360px]' src={Service2Image} alt="" />
                </div>
            </div>
            <div className='h-[90%] w-full bg-[#1E1E1E] absolute z-[8] top-0 bottom-0 left-0 right-0 m-auto'></div>
        </div>
        <div className='bg-black '>
            <div className='space-y-10 w-11/12 lg:w-[85%] mx-auto py-14 border-b border-[#ACACAC66]'>
                <h2 className='text-custom-blue-dark font-bold text-3xl'>Branding</h2>
                <div className='flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-8'>
                    <img className='w-full md:w-[310px] lg:w-[360px]' src={Service3Image} alt="" />
                    <p className='text-white'>
                        Our strategy towards branding is developing brand recognition, customers loyalty and builds lasting relationships with our amiable clients.
                    </p>
                </div>
            </div>
        </div>
        <div className='relative'>
            <div className='space-y-10 w-11/12 lg:w-[85%] mx-auto py-14 border-b border-[#ACACAC66] relative z-10'>
                <h2 className='text-white font-bold text-3xl text-right'>Media Buying</h2>
                <div className='flex flex-col-reverse md:flex-row gap-6 md:gap-4 lg:gap-8'>
                    <p className='text-white'>
                        We put media planning into action, focusing on buying the right mix of media to deliver on the campaign goals effectively.
                    </p>
                    <img className='w-full md:w-[310px] lg:w-[360px]' src={Service4Image} alt="" />
                </div>
            </div>
            <div className='h-[90%] w-full bg-[#1E1E1E] absolute z-[8] top-0 bottom-0 left-0 right-0 m-auto'></div>
        </div>
        <div className='bg-black '>
            <div className='space-y-10 w-11/12 lg:w-[85%] mx-auto py-14 border-b border-[#ACACAC66]'>
                <h2 className='text-custom-blue-dark font-bold text-3xl'>Digital Marketing</h2>
                <div className='flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-8'>
                    <img className='w-full md:w-[310px] lg:w-[360px]' src={Service5Image} alt="" />
                    <p className='text-white'>
                        We put media planning into action, focusing on buying the right mix of media to deliver on the campaign goals effectively.
                    </p>
                </div>
            </div>
        </div>
        <div className='relative'>
            <div className='space-y-10 w-11/12 lg:w-[85%] mx-auto py-14 border-b border-[#ACACAC66] relative z-10'>
                <h2 className='text-white font-bold text-3xl text-right'>Creative Design</h2>
                <div className='flex flex-col-reverse md:flex-row gap-6 md:gap-4 lg:gap-8'>
                    <p className='text-white'>
                    Eyekontact creative design produces iconic, unique and memorable design that stand out to our customers for easy identification of their brand and products.
                    </p>
                    <img className='w-full md:w-[310px] lg:w-[360px]' src={Service6Image} alt="" />
                </div>
            </div>
            <div className='h-[90%] w-full bg-[#1E1E1E] absolute z-[8] top-0 bottom-0 left-0 right-0 m-auto'></div>
        </div>
        <div className='bg-black '>
            <div className='space-y-10 w-11/12 lg:w-[85%] mx-auto py-14 border-b border-[#ACACAC66]'>
                <h2 className='text-custom-blue-dark font-bold text-3xl'>PR Activation</h2>
                <div className='flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-8'>
                    <img className='w-full md:w-[310px] lg:w-[360px]' src={Service7Image} alt="" />
                    <p className='text-white'>
                        We do PR activation through campaigns, events and interact which your brand generates awareness and builds lasting connections with target audience.
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Services