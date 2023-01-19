import React, { useEffect, useState } from 'react'
import AboutImage from '../../src/assets/images/about_image.png'
import ManagingDirectorImage from '../../src/assets/images/md.png'
import OperationManager from '../../src/assets/images/lucky.png'
import ExecutiveAssistantImage from '../../src/assets/images/faith.png'
import OfficeAssistantImage from '../../src/assets/images/daniel.png'
import InnovationManagerImage from '../../src/assets/images/enare.png'
import MarketingManagerImage from '../../src/assets/images/gbemi.png'
import CreativeSpecialityImage from '../../src/assets/images/abiola.png'
import JohnDoeImage from '../../src/assets/images/john.png'

const About = () => {
    const [backlights, setBacklights] = useState();


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
            // divisor = 1;
            setBacklights(Math.ceil(Members.length/1));
        }else if (screen_size > 640 && screen_size <= 768){
            // divisor = 2;
            setBacklights(Math.ceil(Members.length/2));
        }else if (screen_size > 768 && screen_size <= 1024){
            // divisor = 3;
            setBacklights(Math.ceil(Members.length/3));
        }else{
            // divisor = 0;
            setBacklights(0);
        }
        // return console.log(backlights);
    }
    // console.log(screenSize);

    useEffect(() => {
        divider(screenSize);
    }, );

    // console.log(backlights)
  return (
    <div>
        <div className='bg-black'>
            <div className="w-11/12 lg:w-[85%] mx-auto min-h-[90vh] md:min-h-screen relative pb-16 pt-36 space-y-10">
                <h1 className="font-extrabold text-5xl text-white">About Us</h1>
                <div className='flex flex-row space-x-14'>
                    <div className='w-[500px]'>
                        <img src={AboutImage} alt='' />
                    </div>
                    <div className='text-white space-y-5 w-1/2'>
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
        </div>
        <div className="w-11/12 lg:w-[85%] mx-auto py-16 bg-white space-y-14">
            <h1 className="font-extrabold text-3xl md:text-5xl max-w-[600px] expert">We are Experts in Out of Homes Advertising.</h1>
            <div className='grid grid-cols-3 space-x-10'>
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
                    <h1 className="font-extrabold text-white text-4xl w-fit mx-auto">Our <span className='text-custom-blue'>Amazing Crew</span></h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-14 z-10'>
                        {
                            Members.map((member, id) => (
                                id !== 0 ?
                                <div className='w-fit mx-auto cursor-pointer group z-10'>
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
                                </div>
                                : null
                            ))
                        }
                    </div>
                    {
                        Array.apply(null, {length: backlights}).map((e, i)=>(
                            // 980 + (470*i)
                            <div className={`bg-[red] w-full h-[230px] absolute right-0 mx-auto z-[12] top-[980]`}></div>

                        ))
                    }
                    <div className='bg-[#1E1E1E] w-full h-[230px] absolute right-0 mx-auto top-[980px] z-[9]'></div>
                    <div className='bg-[#1E1E1E] w-full h-[230px] absolute right-0 mx-auto top-[1450px] z-[9]'></div>
                    <div className='bg-[#1E1E1E] w-full h-[230px] absolute right-0 mx-auto top-[1920px] z-[9]'></div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About