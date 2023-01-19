import React, { useEffect, useState } from 'react'
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

const About = () => {
    const [backlights, setBacklights] = useState(3);


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

    const [screenSize, setScreenSize] = useState(window.screen.width);
    
    const divider = (screen_size) => {
        if (screen_size <= 640 ){
            setBacklights(Math.ceil(Members.length/1));
        }else if (screen_size > 640 && screen_size <= 768){
            setBacklights(Math.ceil(Members.length/2));
        }else if (screen_size > 768 && screen_size > 1024){
            setBacklights(Math.ceil(Members.length/3));
        }else{
            setBacklights(0);
        }
    }

    useEffect(() => {
        divider(screenSize);
    }, [divider, screenSize]);

  return (
    <div>
        <div className='bg-black'>
            <div className="w-11/12 lg:w-[85%] mx-auto min-h-[90vh] md:min-h-screen relative pb-16 pt-36 space-y-10">
                <h1 className="font-extrabold text-4xl md:text-5xl text-white">About Us</h1>
                <div className='flex flex-col md:flex-row gap-14 md:gap-8 lg:gap-10 xl:gap-14 z-[10]'>
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
                                <div className='w-fit mx-auto cursor-pointer group z-50 relative'>
                                    <div className='w-[270px] h-[300px] box-border text-center'>
                                        <img className='h-full w-auto mx-auto' src={member.image} alt=""/>
                                    </div>
                                    <div className='w-[220px] border-t border-[#ACACACB2] mx-auto space-y-8'>
                                        <div className='w-[110px] h-7 -mt-1 bg-custom-ash group-hover:bg-custom-blue-dark transform -skew-x-[24deg] mx-auto -rotate-[24deg]'></div>
                                        <div className='space-y-1 text-center'>
                                            <h3 className='text-white text-2xl font-bold'>{member.name}</h3>
                                            <p className='text-custom-ash group-hover:text-custom-blue-dark'>{member.position}</p>
                                        </div>
                                    </div>
                                    <div className='bg-[#1E1E1E] w-[700px] h-[230px] absolute -left-[150px] right-0 mx-auto -z-[9] -bottom-[25px]'></div>
                                </div>
                                : null
                            ))
                        }
                    </div>
                    {
                        Array.apply(null, {length: backlights}).map((e, i)=>(
                            <div className={`bg-[#1E1E1E] sm:w-full sm:h-[230px] absolute right-0 mx-auto z-[9] top-[${980+(i*470)}px]`}></div>
                        ))
                    }
                    
                    {
                        console.log(backlights)
                    }
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About