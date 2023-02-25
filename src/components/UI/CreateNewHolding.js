import React, { useEffect, useState } from 'react'
import { FileUploader } from 'react-drag-drop-files';
import { StateLga } from '../../../src/components/data/StateLga';


const CreateNewHolding = ({openNewProductDialog, setOpenNewProductDialog, selectedHoldings, setSelectedHoldings}) => {

    const imageTypes = ["JPEG", "PNG", "GIF"];
    const videoTypes = ["MP4", "AVI", "MOV", "MKV"];

    const [holdingInfo, setHoldingInfo] = useState({});
    const states = Object.keys(StateLga);
    const [lgas, setLgas] = useState([""]);
    const [view, setView] = useState(1);

    useEffect(() => {
        setLgas(StateLga[holdingInfo.state]);
    }, [holdingInfo.state]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (view === 1) {
            setView(2);
        }else if (view === 2){
            setOpenNewProductDialog(false);
            // Send data here
        }else{

        }
    }

    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    console.log(dateTimeAfterThreeDays);

    // const HoldingsDetails = {category: "Gantry", state: "Lagos", lga:"Ajah", size:"16Mx16M", time: dateTimeAfterThreeDays};
    let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    
    useEffect(() => {
        if (selectedHoldings >= 0 && selectedHoldings != null){
            setHoldingInfo({category: "Gantry", state: "Lagos", lga:"Ikeja", size:"16Mx16M", date: new Date(dateTimeAfterThreeDays).toISOString, description: description})
        }
    }, [selectedHoldings]);

    const handleChange = (e) =>{
        setHoldingInfo({
            ...holdingInfo, [e.target.name] : e.target.value
        })
    }

    const handleClose = () =>{
        if (view === 1) {
            setOpenNewProductDialog(false);
        }else if (view === 2){
            setView(1);
        }else{

        }
    }

    const [firstImage, setFirstImage] = useState(null);
    const handleFileChange = (file) => {
        setFirstImage(file);
        console.log("First", firstImage);
    };

    const [secondImage, setSecondImage] = useState(null);
    const handleSecondFileChange = (file) => {
        setSecondImage(file);
        console.log("Second", secondImage);
    };
    const [thirdImage, setThirdImage] = useState(null);
    const handleThirdFileChange = (file) => {
        setThirdImage(file);
        console.log("Third", thirdImage);
    };
    const [video, setVideo] = useState(null);
    const handleVideoFileChange = (file) => {
        setVideo(file);
        console.log("Video", video);
    };

  return (
    <div className='h-screen w-full fixed left-0 right-0 top-0 bottom-0 bg-slate-300/30 flex justify-center items-center z-[100]'>
        <div className='bg-white py-5 w-[92%] sm:w-[600px] md:w-[550px] rounded-md shadow-xl space-y-4'>
            <p className='text-black px-5 font-semibold border-b-2 border-b-brown pb-4 text-lg flex flex-row justify-between items-center'>{selectedHoldings >= 0 && selectedHoldings != null ? "Edit Holdings" : "New Holding"}</p>
            <form onSubmit={handleSubmit} className="px-6 py-4 pt-0 space-y-5 box-border">
                {
                    view === 1 ? 
                    <div className="space-y-5 box-border">
                        <div className="flex justify-between flex-row w-full box-border gap-2 sm:gap-4">
                            <div className="w-1/2 flex flex-col gap-2 box-border">
                                <label className="text-sm font-medium">Category</label>
                                {/* <input type="text" name="fullname" className="border p-3 box-border rounded-md"  onChange={handleChange} /> */}
                                <select className='border cursor-pointer  border-custom-brown focus:border-[#152a3b] rounded-md text-sm h-12 box-border p-3 space-y-2' name="category" id='category' onChange={handleChange} value={holdingInfo.category} required>
                                    <option className='hover:bg-custom-blue bg-white hover:text-white cursor-pointer' value="">-Select Outlet-</option>
                                    <option className='hover:bg-custom-blue bg-white hover:text-white cursor-pointer' value="Gantry">Gantry</option>
                                    <option className='hover:bg-custom-blue bg-white hover:text-white cursor-pointer' value="Unipoles">Unipoles</option>
                                    <option className='hover:bg-custom-blue bg-white hover:text-white cursor-pointer' value="Bus Shelte">Bus Shelter</option>
                                    <option className='hover:bg-custom-blue bg-white hover:text-white cursor-pointer' value="LED">LED</option>
                                    <option className='hover:bg-custom-blue bg-white hover:text-white cursor-pointer' value="Murals">Murals</option>
                                    <option className='hover:bg-custom-blue bg-white hover:text-white cursor-pointer' value="Lampost">Lampost</option>
                                    <option className='hover:bg-custom-blue bg-white hover:text-white cursor-pointer' value="Bridge Panels">Bridge Panels</option>
                                    <option className='hover:bg-custom-blue bg-white hover:text-white cursor-pointer' value="Wallwrap">Wallwrap</option>
                                    <option className='hover:bg-custom-blue bg-white hover:text-white cursor-pointer' value="Fence Drape">Fence Drape</option>
                                </select>
                            </div>
                            <div className="w-1/2 flex flex-col gap-2 box-border">
                                <label className="text-sm font-medium">State</label>
                                {/* <input type="text" name="location" className="border p-3 box-border rounded-md" value={holdingInfo.state} onChange={handleChange} /> */}
                                <select className='border cursor-pointer  border-custom-brown focus:border-[#152a3b] rounded-md text-sm h-12 box-border p-3 space-y-2' name="state" id='state' onChange={handleChange} value={holdingInfo.state}>
                                    <option className='hover:bg-custom-blue bg-white hover:text-white cursor-pointer' value="">-Select State-</option>
                                    {
                                        states.map((state, index) =>(
                                            <option key={index} className='hover:bg-custom-blue bg-white hover:text-white cursor-pointer' value={state}>{state}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-between flex-row w-full box-border gap-2 sm:gap-4">
                            <div className="w-1/2 flex flex-col gap-2">
                                <label className="text-sm font-medium">LGA</label>
                                {/* <input type="text" name="fullname" className="border p-3 box-border rounded-md" value={holdingInfo.lga} onChange={handleChange} /> */}
                                <select className='border cursor-pointer  border-custom-brown focus:border-[#152a3b] rounded-md text-sm h-12 p-3 space-y-2 w-full box-border' name="lga" id='lga' onChange={handleChange} value={holdingInfo.lga}>
                                    <option className='hover:bg-custom-blue bg-white hover:text-white cursor-pointer' value="">-Select Area-</option>    
                                    {
                                        lgas?.map((lga, index) =>(
                                            <option key={index} className='hover:bg-custom-blue bg-white hover:text-white cursor-pointer' value={lga}>{lga}</option>
                                        )
                                        )
                                    }
                                </select>
                            </div>
                            <div className="w-1/2 flex flex-col gap-2">
                                <label className="text-sm font-medium">Size</label>
                                <input type="text" name="location" className="w-full border p-3 h-12 box-border rounded-md border-custom-brown focus:border-[#152a3b] text-sm" value={holdingInfo.size} onChange={handleChange} />
                            </div>
                        </div>
                        <div className=" w-full flex flex-col gap-2 box-border">
                            <label className="text-sm font-medium">Expiration Date</label>
                            <input type="date" name="date" className="min-w-[130px] box-border border p-3 h-12 rounded-md border-custom-brown focus:border-[#152a3b] text-sm" value={holdingInfo.date} onChange={handleChange} />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-sm font-medium">Description</label>
                            <textarea className="border w-full rounded-md p-3 outline-none border-custom-brown focus:border-[#152a3b] text-sm" name='description' rows={4} value={holdingInfo.description} onChange={handleChange} required >

                            </textarea> 
                        </div>
                    </div> : view === 2 ?
                    <div className="space-y-5 box-border">
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-sm font-medium">Default Image</label> 
                            <FileUploader dropMessageStyle={{color:'black', border:"#000", fill:"#000", background:"black"}} multiple={false} handleChange={handleFileChange} name="file" type={imageTypes} />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-sm font-medium">Second Image</label> 
                            <FileUploader dropMessageStyle={{color:'black', border:"#000", fill:"#000", background:"black"}} multiple={false} handleChange={handleSecondFileChange} name="file" type={imageTypes} />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-sm font-medium">Third Image</label> 
                            <FileUploader dropMessageStyle={{color:'black', border:"#000", fill:"#000", background:"black"}} multiple={false} handleChange={handleThirdFileChange} name="file" type={imageTypes} />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-sm font-medium">Video</label> 
                            <FileUploader dropMessageStyle={{color:'black', border:"#000", fill:"#000", background:"black"}} multiple={false} handleChange={handleVideoFileChange} name="file" type={videoTypes} />
                        </div>
                    </div> : null
                    }
                <div className="flex flex-row justify-between w-full">
                    <button onClick={handleClose} className="py-3 px-4 w-fit text-black font-medium text-base rounded-md hover:text-custom-brown cursor-pointer"> 
                        {view === 1 ? "Cancel" : "Back"}
                    </button>
                    <button type="submit" className="py-3 px-4 w-fit text-white font-medium text-base rounded-md hover:text-custom-brown bg-[#1D4ED8] cursor-pointer"> 
                        {view === 1 ? "Continue" : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CreateNewHolding