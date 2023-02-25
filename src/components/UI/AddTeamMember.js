import ManagingDirectorImage from '../../../src/assets/images/md.png'
import OperationManager from '../../../src/assets/images/lucky.png'
import CreativeSpecialityImage from '../../../src/assets/images/abiola.png'
import ExecutiveAssistantImage from '../../../src/assets/images/faith.png'
import OfficeAssistantImage from '../../../src/assets/images/daniel.png'
import InnovationManagerImage from '../../../src/assets/images/enare.png'
import JohnDoeImage from '../../../src/assets/images/john.png'
import ProfileImage from '../../../src/assets/images/profile.png'
import { FaRegEdit } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const AddTeamMember = ({openNewUser, setOpenNewUser, selectedStaff, setSelectedStaff, editable, setEditable}) => {
    const handleClose = () => {
        setOpenNewUser(false);
        setSelectedStaff(null);
        setEditable(false)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editable) {
            setOpenNewUser(false);
            setEditable(false);
        }
        // Send data to API here
    }

    const TeamMembers = [
        { id: 0, name: "Adeniyi Ganiyu", position: "Managing Director", image: ManagingDirectorImage},
        { id: 1, name: "Lucky Nwaka", position: "Asset Manager", image: OperationManager },
        { id: 2, name: "Faith Ikejiaku", position: "Customer Service Manager", image: ExecutiveAssistantImage },
        { id: 3, name: "Daniel Olarewaju", position: "Office Assistant", image: OfficeAssistantImage},
        { id: 4, name: "Enare Ejim", position: "Innovation Manager", image: InnovationManagerImage},
        { id: 5, name: "Abiola Adeyeye", position: "Creative Executive", image: CreativeSpecialityImage },
        { id: 6, name: "Ibrahim Abiodun", position: "Operation Executive", image: JohnDoeImage }
    ]

    let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    const [staffInfo, setStaffInfo] = useState({fullname:"", position:"", description:"", image:ProfileImage})
    const [uploadedImage, setUploadedImage] = useState(null);
    

    useEffect(() => {
        if (selectedStaff >= 0 && selectedStaff != null){
            setStaffInfo({fullname:TeamMembers[selectedStaff].name, position: TeamMembers[selectedStaff].position, description: description, image:TeamMembers[selectedStaff].image})
        }
    }, [selectedStaff]);

    const handleChange = (e) => {
        setStaffInfo({
            ...staffInfo, [e.target.name] : e.target.value
        })
    }

    const handleFileChange = (e) => {
        setStaffInfo({
            ...staffInfo, image : e.target.files[0]
        })

        setUploadedImage(URL.createObjectURL(e.target.files[0]));

        console.log(uploadedImage);
    }
    
  return (
    <div className='h-screen w-full fixed left-0 right-0 top-0 bottom-0 bg-slate-300/30 flex justify-center items-center z-[100]'>
        <div className='bg-white py-5 w-[92%] sm:w-[500px] md:w-[550px] rounded-md shadow-xl space-y-4'>
            <p className='text-black px-5 font-semibold border-b-2 border-b-brown pb-4 text-lg flex flex-row justify-between items-center'><span>{selectedStaff >= 0 && selectedStaff != null ? "Staff Details" : "Add Staff"}</span> <span onClick={()=>{setEditable(prevState => (!prevState))}} className={selectedStaff >= 0 && selectedStaff != null ? editable ? "flex flex-row items-center gap-1 text-notification-red cursor-pointer" : "flex flex-row items-center gap-1 cursor-pointer" : "hidden"}><FaRegEdit className="font-semibold text-xl -mt-1 " />Edit</span> </p>
            <form onSubmit={handleSubmit} className="px-6 py-4 space-y-5 box-border">
                <div className="flex flex-col gap-2">
                    <img src={uploadedImage === null ? staffInfo.image: uploadedImage} alt="" className="w-[70px] h-[70px] rounded-full"/>
                    {/* <label className="text-sm font-medium">Upload Image</label> */}
                    <input type='file' name='image' className="w-fit cursor-pointer" title='Upload Image' onChange={handleFileChange} accept="image/png, image/jpeg, image/jpg" readOnly={!editable}/>
                </div>
                <div className="flex flex-col justify-between md:flex-row w-full box-border gap-4">
                    <div className="w-full sm:w-1/2 flex flex-col gap-2">
                        <label className="text-sm font-medium">Full Name</label>
                        <input type="text" name="fullname" className="border p-3 h-12 box-border rounded-md border-custom-brown outline-none focus:border-[#152a3b] text-sm" value={staffInfo.fullname} onChange={handleChange} readOnly={!editable}/>
                    </div>
                    <div className="w-full sm:w-1/2 flex flex-col gap-2">
                        <label className="text-sm font-medium">Role</label>
                        <input type="text" name="position" className="border p-3 h-12 box-border rounded-md border-custom-brown outline-none focus:border-[#152a3b] text-sm" value={staffInfo.position} onChange={handleChange} readOnly={!editable}/>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label className="text-sm font-medium">Description</label>
                    <textarea className="border w-full rounded-md p-3 border-custom-brown focus:border-[#152a3b] outline-none text-sm" name='description' rows={5} value={staffInfo.description} onChange={handleChange} readOnly={!editable}>

                    </textarea> 
                </div>
                <div className="flex flex-row justify-between w-full">
                    <button onClick={handleClose} className="py-3 px-4 w-fit text-black font-medium text-base rounded-md active:bg-custom-brown md:hover:bg-custom-brown cursor-pointer"> 
                        cancel
                    </button>
                    <button type="submit" className={!editable ? "py-3 px-4 w-fit text-white font-medium text-base rounded-md active:bg-custom-brown md:hover:bg-custom-brown bg-[#1D4ED8] cursor-pointer opacity-50" : "py-3 px-4 w-fit text-white font-medium text-base rounded-md active:bg-custom-brown md:hover:bg-custom-brown bg-[#1D4ED8] cursor-pointer"}> 
                        Submit
                    </button>
                </div>
            </form>
        </div>
        
    </div>
  )
}

export default AddTeamMember