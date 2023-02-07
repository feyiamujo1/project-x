import React from 'react'

import { MdCancel } from 'react-icons/md'
import ManagingDirectorImage from '../../../src/assets/images/md.png'
import OperationManager from '../../../src/assets/images/lucky.png'
import CreativeSpecialityImage from '../../../src/assets/images/abiola.png'
import ExecutiveAssistantImage from '../../../src/assets/images/faith.png'
import OfficeAssistantImage from '../../../src/assets/images/daniel.png'
import InnovationManagerImage from '../../../src/assets/images/enare.png'
import MarketingManagerImage from '../../../src/assets/images/gbemi.png'
import JohnDoeImage from '../../../src/assets/images/john.png'

const Modal = (props) => {
    const Members = [
        { id: 0, name: "Adeniyi Ganiyu", position: "Managing Director", image: ManagingDirectorImage },
        { id: 1, name: "Lucky Nwaka", position: "Asset Manager", image: OperationManager },
        { id: 2, name: "Faith Ikejiaku", position: "Customer Service Manager", image: ExecutiveAssistantImage },
        { id: 3, name: "Daniel Olarewaju", position: "Office Assistant", image: OfficeAssistantImage},
        { id: 4, name: "Enare Ejim", position: "Innovation Manager", image: InnovationManagerImage},
        { id: 5, name: "Gbemisola Bello", position: "Marketing Manager", image: MarketingManagerImage },
        { id: 6, name: "Abiola Adeyeye", position: "Creative Executive", image: CreativeSpecialityImage },
        { id: 7, name: "Ibrahim Abiodun", position: "Operation Executive", image: JohnDoeImage }
    ]

    if (!props.showModal || props.member_id === null) return null
    else
    
  return (
    <div 
        data-aos="zoom-out" 
        // data-aos-duration="1100"
        // data-aos-delay="500"
        className='fixed z-[101] w-full h-screen top-0 bottom-0 right-0 left-0 modal-bg flex justify-center items-center overflow-y-scroll sm:overflow-hidden'>
        {
            props.member_id || props.member_id === 0 ? (
                <div 
                    data-aos="zoom-in" 
                    data-aos-duration="1100"
                    className='w-11/12 h-fit min-h-[480px] sm:w-[340px] sm:h-[500px] relative flex justify-center items-center bg-black shadow-xl backdrop:blur-sm py-10'>
                    <MdCancel onClick={props.HideModal} className='absolute top-4 right-4 text-white bg-black rounded-full text-4xl  hover:text-custom-blue-dark cursor-pointer' />
                    <img className='h-[500px] sm:h-[430px] w-fit' src={Members[props.member_id].image} alt="" />
                    <div className='bg-[#FFFAFA] absolute w-full h-fit bottom-0 p-6 space-y-1'>
                        <div>
                            <h2 className='text-custom-blue-dark text-2xl font-bold'>{Members[props.member_id].name}</h2>
                            <p className='font-bold'>{Members[props.member_id].position}</p>
                        </div>
                        <p className='text-justify text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            ) : null
        }
    </div>
  )
}

export default Modal