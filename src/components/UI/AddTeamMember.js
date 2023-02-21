import ManagingDirectorImage from '../../../src/assets/images/md.png'
import OperationManager from '../../../src/assets/images/lucky.png'
import CreativeSpecialityImage from '../../../src/assets/images/abiola.png'
import ExecutiveAssistantImage from '../../../src/assets/images/faith.png'
import OfficeAssistantImage from '../../../src/assets/images/daniel.png'
import InnovationManagerImage from '../../../src/assets/images/enare.png'
import JohnDoeImage from '../../../src/assets/images/john.png'
import ProfileImage from '../../../src/assets/images/profile.png'
import { FaRegEdit } from 'react-icons/fa'

const AddTeamMember = ({openNewUser, setOpenNewUser, selectedStaff, setSelectedStaff}) => {
    const handleClose = () => {
        setOpenNewUser(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpenNewUser(false);
         
        // Send data to API here
    }
    const TeamMembers = [
        { id: 0, name: "Adeniyi Ganiyu", position: "Managing Director", image: ManagingDirectorImage },
        { id: 1, name: "Lucky Nwaka", position: "Asset Manager", image: OperationManager },
        { id: 2, name: "Faith Ikejiaku", position: "Customer Service Manager", image: ExecutiveAssistantImage },
        { id: 3, name: "Daniel Olarewaju", position: "Office Assistant", image: OfficeAssistantImage},
        { id: 4, name: "Enare Ejim", position: "Innovation Manager", image: InnovationManagerImage},
        { id: 5, name: "Abiola Adeyeye", position: "Creative Executive", image: CreativeSpecialityImage },
        { id: 6, name: "Ibrahim Abiodun", position: "Operation Executive", image: JohnDoeImage }
    ]
  return (
    <div className='h-screen w-full fixed left-0 right-0 top-0 bottom-0 bg-slate-300/30 flex justify-center items-center z-[100]'>
        <div className='bg-white py-5 w-[92%] sm:w-[500px] md:w-[550px] rounded-md shadow-xl space-y-4'>
            <p className='text-black px-5 font-semibold border-b-2 border-b-brown pb-4 text-lg flex flex-row justify-between items-center'><span>{selectedStaff ? "Staff Details" : "Add Staff"}</span> <span className={selectedStaff ? "flex flex-row items-center gap-1" : "hidden"}><FaRegEdit className="font-semibold text-xl -mt-1 " />Edit</span> </p>
            <form onSubmit={handleSubmit} className="px-6 py-4 space-y-5 box-border">
                <div className="flex flex-col gap-2">
                    <img src={ProfileImage} alt="" className="w-[70px] h-[70px] rounded-full"/>
                    {/* <label className="text-sm font-medium">Upload Image</label> */}
                    <input type='file' className="w-fit" title='Upload Image'/>
                </div>
                <div className="flex flex-col justify-between md:flex-row w-full box-border gap-4">
                    <div className="w-full sm:w-1/2 flex flex-col gap-2">
                        <label className="text-sm font-medium">Full Name</label>
                        <input type="text" name="surname" className="border p-3 box-border rounded-md"/>
                    </div>
                    <div className="w-full sm:w-1/2 flex flex-col gap-2">
                        <label className="text-sm font-medium">Role</label>
                        <input type="text" name="firstname" className="border p-3 box-border rounded-md"/>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label className="text-sm font-medium">Description</label>
                    <textarea className="border w-full rounded-md" rows={4} >

                    </textarea> 
                </div>
                <div className="flex flex-row justify-between w-full">
                    <button onClick={handleClose} className="py-3 px-4 w-fit text-black font-medium text-base rounded-md hover:text-custom-brown cursor-pointer"> 
                        cancel
                    </button>
                    <button type="submit" className="py-3 px-4 w-fit text-white font-medium text-base rounded-md hover:text-custom-brown bg-[#1D4ED8] cursor-pointer"> 
                        Submit
                    </button>
                </div>
            </form>
        </div>
        
    </div>
  )
}

export default AddTeamMember