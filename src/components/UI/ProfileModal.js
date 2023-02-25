import React, { useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';

const ProfileModal = ({ setShowProfileModal }) => {
    
    const [userInfo, setUserInfo] = useState({firstname: "Abiola", surname: "Adeyeye", email:"abiola@eyekontact.com.ng", 
    role: "Creative Director"});
    const [editable, setEditable] = useState(false);

    const handleChange = (e) => {
        setUserInfo({
            ...userInfo, [e.target.name] : e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowProfileModal(false);
        // Send data to API here
    }
  return (
    <div className='h-screen w-full fixed left-0 right-0 top-0 bottom-0 bg-slate-300/30 flex justify-center items-center z-[100]'>
        <div className='bg-white py-5 w-[92%] sm:w-[500px] md:w-[550px] rounded-md shadow-xl space-y-4'>
        <p className='text-black px-5 font-semibold border-b-2 border-b-brown pb-4 text-lg flex flex-row justify-between items-center'><span>{editable  ? "Edit Profile" : "Profile Details"}</span> <span onClick={()=>{setEditable(prevState => (!prevState))}} className={ editable ? "flex flex-row items-center gap-1 text-notification-red cursor-pointer" : "flex flex-row items-center gap-1 text-black cursor-pointer"}><FaRegEdit className="font-semibold text-xl -mt-1 " />Edit</span> </p>
            <form onSubmit={handleSubmit} className="px-6 py-4 space-y-5 box-border">
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className="w-full md:w-1/2 flex flex-col gap-2">
                        <label className="text-sm font-medium">First Name</label>
                        <input type="text" name="firstname" className="border p-3 h-12 box-border rounded-md border-custom-brown outline-none focus:border-[#152a3b] text-sm" value={userInfo.firstname} onChange={handleChange} readOnly={!editable ? true : false} />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-2">
                        <label className="text-sm font-medium">Surname</label>
                        <input type="text" name="surname" className="border p-3 h-12 box-border rounded-md border-custom-brown outline-none focus:border-[#152a3b] text-sm" value={userInfo.surname} onChange={handleChange} readOnly={!editable ? true : false} />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" name="email" className="lowercase border p-3 h-12 box-border rounded-md border-custom-brown outline-none focus:border-[#152a3b] text-sm" value={userInfo.email} onChange={handleChange} readOnly />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label className="text-sm font-medium">Role</label>
                    <input type="text" name="role" className="border p-3 h-12 box-border rounded-md border-custom-brown outline-none focus:border-[#152a3b] text-sm" value={userInfo.role} onChange={handleChange} readOnly={!editable ? true : false} />
                </div>
                <div className="flex flex-row justify-end w-full">
                    <button type="submit" className="py-3 px-4 w-fit text-white font-medium text-base rounded-md active:bg-custom-brown md:hover:bg-custom-brown bg-[#1D4ED8] cursor-pointer"> 
                        {editable ? 'Submit' : 'Done'}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ProfileModal