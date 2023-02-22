import React from 'react'

const DialogBox = ({open, setOpen}) => {
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        setOpen(false);
         
        // Send data to API here
        
    }
  return (
    <div className='h-screen w-full fixed left-0 right-0 top-0 bottom-0 bg-slate-300/30 flex justify-center items-center z-[100]'>
        <div className='bg-white py-5 w-[92%] sm:w-[500px] rounded-md shadow-xl space-y-4'>
            <p className='text-black px-5 font-semibold border-b-2 border-b-brown pb-4 text-lg'>Delete Item</p>
            <p className='text-gray-900 px-5 text-sm md:text-lg'>
                This item will be deleted permanently, are you sure you want to delete? 
            </p>
            <div className='flex justify-end gap-4 px-5'>
                <p onClick={handleClose} className='py-3 px-4 text-black font-medium text-base rounded-md hover:text-custom-brown hover:text-white cursor-pointer'>
                    Cancel
                </p>
                <p onClick={handleSubmit} className='py-3 px-4 w-fit text-white font-medium text-base rounded-md hover:text-custom-brown bg-[#E02424] hover:text-slate-400 cursor-pointer'>
                    Submit
                </p>
            </div>
        </div>
    </div>
  )
}

export default DialogBox