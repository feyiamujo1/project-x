import React, { useState } from 'react'

const BroadcastMessageDialog = ({setOpenBroadcastDialog}) => {
  const [message, setMessage] = useState("");

  const handleChange = (e) =>{
    setMessage(e.target.value);
  }

  const handleClose = () => {
    setOpenBroadcastDialog(false);
};

const handleSubmit = (e) => {
    e.preventDefault();
    setOpenBroadcastDialog(false);
    // Send data to API here
}
  return (
    <div className='h-screen w-full fixed left-0 right-0 top-0 bottom-0 bg-slate-300/30 flex justify-center items-center z-[100]'>
      <div className='bg-white py-5 w-[92%] sm:w-[500px] md:w-[550px] rounded-md shadow-xl space-y-4'>
        <p className='text-black px-5 font-semibold border-b-2 border-b-brown pb-4 text-lg flex flex-row justify-between items-center'>Notification Message</p>
        <form onSubmit={handleSubmit} className="px-6 py-4 space-y-5 box-border">
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm font-medium">Message</label>
            <textarea className="border w-full rounded-md p-3 border-custom-brown focus:border-[#152a3b] outline-none text-sm" name='message' rows={5} onChange={handleChange} >

            </textarea> 
          </div>
          <div className="flex flex-row justify-between w-full">
            <button onClick={handleClose} className="py-3 px-4 w-fit text-black font-medium text-base rounded-md active:bg-custom-brown md:hover:bg-custom-brown cursor-pointer"> 
                cancel
            </button>
            <button type="submit" className="py-3 px-4 w-fit text-white font-medium text-base rounded-md active:bg-custom-brown md:hover:bg-custom-brown bg-[#1D4ED8] cursor-pointer"> 
                Send
            </button>
          </div>
        </form>
      </div> 
    </div>
  )
}

export default BroadcastMessageDialog