import AboutImage from '../../src/assets/images/about_image.png'
import AboutImageMobile from '../../src/assets/images/about_image_mobile.png'
import ManagingDirectorImage from '../../src/assets/images/md.png'
import OperationManager from '../../src/assets/images/lucky.png'
import ExecutiveAssistantImage from '../../src/assets/images/faith.png'
import OfficeAssistantImage from '../../src/assets/images/daniel.png'
import InnovationManagerImage from '../../src/assets/images/enare.png'
import MarketingManagerImage from '../../src/assets/images/gbemi.png'
import CreativeSpecialityImage from '../../src/assets/images/abiola.png'
import JohnDoeImage from '../../src/assets/images/john.png'
import DirectionImage from '../../src/assets/images/directions.png'
import {ReactComponent as DownButton}  from "../../src/assets/images/down-arrow-svgrepo-com.svg"
import { Link } from 'react-router-dom'
import { useRef } from "react"

const About = () => {
    
    const Members = [
        { id: 0, name: "Adeniyi Ganiyu", position: "Managing Director", image: ManagingDirectorImage },
        { id: 1, name: "Lucky Nwaka", position: "Operation Manager", image: OperationManager },
        { id: 2, name: "Faith Ikejiaku", position: "Executive Assistant", image: ExecutiveAssistantImage },
        { id: 3, name: "Daniel Olarewaju", position: "Office Assistant", image: OfficeAssistantImage},
        { id: 4, name: "Enare Ejim", position: "Innovation Manager", image: InnovationManagerImage},
        { id: 5, name: "Gbemisola Bello", position: "Marketing Manager", image: MarketingManagerImage },
        { id: 6, name: "Abiola Adeyeye", position: "Creative Specialist", image: CreativeSpecialityImage },
        { id: 7, name: "John Doe", position: "John Manager", image: JohnDoeImage }
    ]

    const firstContainer = useRef(null);
    const ScrollToView = () => {
        firstContainer.current?.scrollIntoView({behavior: 'smooth'});
    };
    document.title = 'About Us';
  return (
    <div>
        <div className="w-full h-[90vh] sm:h-screen bg-hero-image bg-cover bg-no-repeat bg-center relative">
            <div className='hidden md:block absolute top-32 left-[7.3%]'>
                <p className='hidden md:flex flex-row w-fit gap-4 justify-center items-center text-white'><Link to='/' className='hover:text-custom-blue'>Home</Link> <img src={DirectionImage} alt=""/> About Us</p>
            </div>
            <div className='w-11/12 h-full mx-auto py-4 flex flex-col items-center gap-4 md:gap-0 justify-center'>
                <div className="w-fit -mt-14 md:mt-0">
                    <h1 className="text-white font-extrabold text-[52px] sm:text-8xl">About Us</h1>
                    {/* <p className="text-white text-sm sm:text-xl text-right font-semibold -mt-3 sm:mt-0">Limited</p> */}
                </div>
                <div>
                    <p className="w-11/12 md:w-[550px] text-white text-center text-sm sm:text-base font-normal absolute left-0 right-0 mx-auto bottom-[110px] md:bottom-24 md:right-[50%] md:translate-x-2/4 md:left-auto">
                    We are an OOH advertising agency, known for iconic creativity and innovations.
                    </p>
                    {/* <p className="text-white text-xs sm:text-sm font-light absolute bottom-4 right-[5%] md:right-[2%]">RC 722750</p> */}
                    <div className="w-full absolute left-0 right-0 bottom-10 md:bottom-8 flex flex-row justify-center items-center">
                        <DownButton onClick={ScrollToView} className=" w-10 h-10 fill-custom-blue cursor-pointer animate-bounce" />
                    </div>
                </div>
            </div>
        </div>
        <div ref={firstContainer} className='bg-black'>
            <div className="w-11/12 lg:w-[85%] mx-auto min-h-[90vh] md:min-h-screen relative pb-16 pt-16  space-y-10">

                {/* <div className='hidden md:block'>
                    <p className='hidden md:flex flex-row w-fit gap-4 justify-center items-center text-white'><Link to='/' className='hover:text-custom-blue'>Home</Link> <img src={DirectionImage} alt=""/> About Us</p>
                </div> */}

                {/* <h1 className="font-extrabold abt -mt-10 text-4xl md:text-5xl text-white">About Us</h1> */}
                <div className='flex flex-col md:flex-row gap-10 md:gap-8 lg:gap-10 xl:gap-14 z-[10]'>
                    <div className='w-fit md:w-[500px]'>
                        <img className='hidden md:block' src={AboutImage} alt='' />
                        <img className='md:hidden block w-full h-full' src={AboutImageMobile} alt='' />
                    </div>
                    <div className='text-white space-y-5 md:space-y-3 w-full md:w-1/2'>
                        <p>
                            We are an OOH advertising agency , known for iconic creativity and innovations. 
                            We create , manage and execute high-impact campaigns for clients who wants to get their ads campaign in front of the right audience
                        </p>
                        <h2 className='font-bold text-2xl'>Our Mission</h2>
                        <p>
                            Our mission at Eyekontact Outdoor Limited is to provide brands and organisations
                            with our iconic innovations and help communicate your organisations message in the most effective visible way.
                        </p>
                        <h2 className='font-bold text-2xl'>Our Vision</h2>
                        <p>
                            Our vision at Eyekontact Limited is to be West Africa's leading and most impactful outdoor advertising company and to create a sense of 
                            connection and loyalty for brands through the provision of excellent and innovative OOH services.
                        </p>
                    </div>
                    
                </div>
                
            </div>
            <div className='w-full h-20 bg-white hidden md:block -mt-28'>

            </div>
        </div>
        <div className="w-11/12 lg:w-[85%] mx-auto py-16 bg-white space-y-14">
            <h1 className="font-extrabold text-3xl md:text-5xl max-w-[600px] expert">We are Experts in Out of Homes Advertising.</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                <div className='space-y-3'>
                    <h2 className='font-extrabold text-3xl md:text-5xl text-custom-blue-dark'>16+</h2>
                    <p className='text-custom-ash text-xl font-medium border-t pt-2 border-[#ACACACB2]'>Years of Experience</p>
                </div>
                <div className='space-y-3'>
                    <h2 className='font-extrabold text-3xl md:text-5xl text-custom-blue-dark'>82M+</h2>
                    <p className='text-custom-ash text-xl font-medium border-t pt-2 border-[#ACACACB2]'>Monthly Reach</p>
                </div>
                <div className='space-y-3'>
                    <h2 className='font-extrabold text-3xl md:text-5xl text-custom-blue-dark'>450k+</h2>
                    <p className='text-custom-ash text-xl font-medium border-t pt-2 border-[#ACACACB2]'>Advert Placed Nationwide</p>
                </div>
            </div>
        </div>
        <div className="bg-black overflow-hidden relative">
            <div className='w-11/12 lg:w-[85%] mx-auto py-16 space-y-16'>
                <div className='space-y-12'>
                    <h1 className="font-extrabold text-white text-4xl w-fit mx-auto">Our <span className='text-custom-blue'>Founder</span></h1>
                    <div className='w-fit mx-auto cursor-pointer group'>
                        <div className='w-[340px] h-[370px] box-border text-center'>
                            <img className='h-full w-auto mx-auto' src={Members[0].image} alt=""/>
                        </div>
                        <div className='w-[270px] border-t border-[#ACACACB2] mx-auto space-y-10'>
                            <div className='w-[110px] h-7 -mt-1 bg-custom-ash group-hover:bg-custom-blue-dark transform -skew-x-[24deg] mx-auto -rotate-[24deg]'></div>
                            <div className='space-y-2 text-center'>
                                <h3 className='text-white text-[28px] font-bold'>{Members[0].name}</h3>
                                <p className='text-custom-ash group-hover:text-custom-blue-dark'>{Members[0].position}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='space-y-12 z-10 pb-20'>
                    <h1 className="font-extrabold text-white text-4xl w-fit text-center mx-auto">Our <span className='text-custom-blue'>Amazing Crew</span></h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-14 z-10'>
                        {
                            Members.map((member, id) => (
                                id !== 0 ?
                                <div key={member.id} className='w-fit mx-auto cursor-pointer group z-50 relative'>
                                    <div className='w-[270px] h-[300px] box-border text-center'>
                                        <img className='h-full w-auto mx-auto' src={member.image} alt=""/>
                                    </div>
                                    <div className='w-[220px] border-t border-[#ACACACB2] mx-auto space-y-8'>
                                        <div className='w-[110px] h-7 -mt-1 bg-custom-blue-dark md:bg-custom-ash md:group-hover:bg-custom-blue-dark transform -skew-x-[24deg] mx-auto -rotate-[24deg]'></div>
                                        <div className='space-y-1 text-center'>
                                            <h3 className='text-white text-2xl font-bold'>{member.name}</h3>
                                            <p className='text-custom-blue-dark md:text-custom-ash md:group-hover:text-custom-blue-dark'>{member.position}</p>
                                        </div>
                                    </div>
                                    <div className='bg-[#1E1E1E] w-[700px] h-[230px] absolute -left-[185px] right-0 mx-auto -z-[9] -bottom-[25px] sm:hidden'></div>
                                </div>
                                : null
                            ))
                        }
                    </div>
                    <div className="bg-[#1E1E1E] sm:w-full h-[230px] absolute right-0 mx-auto z-[9] top-[980px]"></div>
                    <div className="bg-[#1E1E1E] sm:w-full sm:h-[230px] absolute right-0 mx-auto z-[9] top-[1450px]"></div>
                    <div className="bg-[#1E1E1E] sm:w-full sm:h-[230px] absolute right-0 mx-auto z-[9] top-[1920px]"></div>
                    <div className="bg-[#1E1E1E] sm:w-full sm:h-[230px] absolute right-0 mx-auto z-[9] top-[2390px]"></div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About