import React from 'react'
import { useEffect, useState } from 'react'

const NewCustomerDialog = ({setOpenNewCustomerDialog, openNewCustomerDialog, setSelectedCustomer, selectedCustomer}) => {
    const handleClose = () => {
        setOpenNewCustomerDialog(false);
        setSelectedCustomer(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpenNewCustomerDialog(false);
        // Send data to API here
    }

    const TeamMembers = [
        { id: 0, name: "Adeniyi Ganiyu", position: "Managing Director"},
        { id: 1, name: "Lucky Nwaka", position: "Asset Manager" },
        { id: 2, name: "Faith Ikejiaku", position: "Customer Service Manager"},
        { id: 3, name: "Daniel Olarewaju", position: "Office Assistant"},
        { id: 4, name: "Enare Ejim", position: "Innovation Manager"},
        { id: 5, name: "Abiola Adeyeye", position: "Creative Executive"},
        { id: 6, name: "Ibrahim Abiodun", position: "Operation Executive"}
    ]

    const [customerInfo, setCustomerInfo] = useState({name:"", email:"", phone:"0800098096"})

    useEffect(() => {
        if (selectedCustomer >= 0 && selectedCustomer != null){
            setCustomerInfo({name:TeamMembers[selectedCustomer].name, email: TeamMembers[selectedCustomer].name.split(/\s+/).splice(0, 1)+"@eyekontact.com.ng"})
        }
    }, [selectedCustomer]);

    const handleChange = (e) => {
        setCustomerInfo({
            ...customerInfo, [e.target.name] : e.target.value
        })
    }

  return (
    <div className='h-screen w-full fixed left-0 right-0 top-0 bottom-0 bg-slate-300/30 flex justify-center items-center z-[100]'>
        <div className='bg-white py-5 w-[92%] sm:w-[500px] md:w-[550px] rounded-md shadow-xl space-y-4'>
            <p className='text-black px-5 font-semibold border-b-2 border-b-brown pb-4 text-lg'>{selectedCustomer >= 0 && selectedCustomer != null ? "Customer's Details" : "Add Customer"}</p>
            <form onSubmit={handleSubmit} className="px-6 py-4 space-y-5 box-border">
                <div className="w-full flex flex-col gap-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <input type="text" name="name" className="border p-3 h-12 box-border rounded-md border-custom-brown outline-none focus:border-[#152a3b] text-sm" value={customerInfo.name} onChange={handleChange}/>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" name="email" className="lowercase border p-3 h-12 box-border rounded-md border-custom-brown outline-none focus:border-[#152a3b] text-sm" value={customerInfo.email} onChange={handleChange} />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <input type="tel" name="phone" className="border p-3 h-12 box-border rounded-md border-custom-brown outline-none focus:border-[#152a3b] text-sm" value={customerInfo.phone} onChange={handleChange} />
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

export default NewCustomerDialog