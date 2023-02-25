import React, { useEffect, useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'
import { BiEdit } from 'react-icons/bi'
import { useParams } from 'react-router-dom'
import BlogImage1 from '../../src/assets/images/blogimage1.png'
import BlogImage2 from '../../src/assets/images/blogimage2.png'
import BlogImage3 from '../../src/assets/images/blogimage3.png'
import BlogImage4 from '../../src/assets/images/blogimage4.png'

const DashboardCreateBlog = () => {
    // const [view, setView] = useState(1);
    const imageTypes = ["JPEG", "PNG", "GIF"];
    const [blogInfo, setBlogInfo] = useState({});

    let {blog_id} = useParams();

    const handleSubmit = (e) =>{
        e.preventDefault();
        // if (view === 1) {
        //     setView(2);
        // }else if (view === 2){
        //     setOpenBlogNewDialog(false);
        //     // Send data here
        // }else{

        // }
    }

    let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    let Imagedescription = "Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed";

    useEffect(() => {
        if (blog_id > 0){
            setBlogInfo({topic: "End of the Year (2022) Celebrations", firstcontent: description, secondcontent: description, firstImage: BlogImage1, firstImageDescription: Imagedescription,
            secondImage: BlogImage2, secondImageDescription: Imagedescription, thirdImage: BlogImage3, thirdImageDescription: Imagedescription, fourthImage: BlogImage4, fourthImageDescription: Imagedescription,
            date: new Date(), description: description})
        }
    }, [blog_id]);

    
    const handleChange = (e) =>{
        setBlogInfo({
            ...blogInfo, [e.target.name] : e.target.value
        })
    }

    // const handleClose = () =>{
    //     if (view === 1) {
    //         setOpenBlogNewDialog(false);
    //     }else if (view === 2){
    //         setView(1);
    //     }else{

    //     }
    // }

    const [blogImages, setBlogImages] = useState({});
    const handleFileChange = (e) => {
        setBlogImages({
            ...blogImages, [e.target.name] : e.target.files[0]
        });
        console.log("Images", blogImages);
    };

  return (
    <div className='w-full h-full bg-white rounded-xl shadow-md py-6'>
        <div className='px-6 pb-6 flex flex-row justify-between border-b '>
            <div>
            <h3 className='font-semibold text-lg'>
                {blog_id === 0 ? "New Blog Post": "Edit Blog Post"}
            </h3>
            <p className='font-normal text-sm text-custom-ash'>Fill blog content below</p>
            </div>
            {/* <div>
                <p className='py-2.5 px-3 text-sm flex flex-row gap-1 items-center bg-[#1D4ED8] text-white rounded-md active:bg-custom-brown md:hover:bg-custom-brown cursor-pointer'><BiEdit className='font-semibold text-base' /> Submit?</p>
            </div> */}
        </div>
        <div className=' p-6 box-border w-full flex flex-col gap-4 justify-center items-center select-none'>
            <form onSubmit={handleSubmit} className="w-full pb-4 space-y-5 box-border">
                <div className="space-y-5 box-border">
                    <div className="w-full flex flex-col gap-2">
                        <label className="text-sm font-medium">Topic</label>
                        <input type="text" name="topic" className="border w-full rounded-md p-3 outline-none border-custom-brown focus:border-[#152a3b] text-sm"  onChange={handleChange} value={blogInfo.topic} required/>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label className="text-sm font-medium">Description</label>
                        <textarea className="border w-full rounded-md p-3 outline-none border-custom-brown focus:border-[#152a3b] text-sm" name='firstcontent' rows={6} value={blogInfo.firstcontent} onChange={handleChange} required >

                        </textarea> 
                    </div>
                    <div className='flex flex-col md:flex-row box-border gap-5'>
                        <div className='w-full md:w-1/2 space-y-5'>
                            <div className="w-full flex flex-col gap-2">
                                <label className="text-sm font-medium">First Image</label> 
                                <input type="file" name="firstImage" onChange={handleFileChange} required className="border w-full rounded-md p-3 outline-none border-custom-brown focus:border-[#152a3b] text-sm" />
                                {/* <FileUploader dropMessageStyle={{color: 'red'}}  multiple={false} handleChange={handleFileChange} name="file" type={imageTypes} required/> */}
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <label className="text-sm font-medium">Image Description</label>
                                <input type="text" name="firstImageDescription" className="border w-full rounded-md p-3 outline-none border-custom-brown focus:border-[#152a3b] text-sm"  onChange={handleChange} value={blogInfo.firstImageDescription} required/>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 space-y-5'>
                            <div className="w-full flex flex-col gap-2">
                                <label className="text-sm font-medium">Second Image</label> 
                                <input type="file" name="secondImage" required onChange={handleFileChange} className="border w-full rounded-md p-3 outline-none border-custom-brown focus:border-[#152a3b] text-sm" />
                                {/* <FileUploader  multiple={false} handleChange={handleSecondFileChange} name="file" type={imageTypes} /> */}
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <label className="text-sm font-medium">Image Description</label>
                                <input type="text" name="secondImageDescription" required className="border w-full rounded-md p-3 outline-none border-custom-brown focus:border-[#152a3b] text-sm"  onChange={handleChange} value={blogInfo.secondImageDescription} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-5 box-border">
                    {/* <p className='font-semibold'>Section 2</p> */}
                    <div className="w-full flex flex-col gap-2">
                        <label className="text-sm font-medium">Description</label>
                        <textarea className="border w-full rounded-md p-3 outline-none border-custom-brown focus:border-[#152a3b] text-sm" name='secondcontent' rows={6} value={blogInfo.secondcontent} onChange={handleChange} >

                        </textarea> 
                    </div>
                    <div className='flex flex-col md:flex-row box-border gap-5'>
                        <div className='w-full md:w-1/2 space-y-5'>
                            <div className="w-full flex flex-col gap-2">
                                <label className="text-sm font-medium">Third Image</label> 
                                <input type="file" name="thirdImage" onChange={handleFileChange} className="border w-full rounded-md p-3 outline-none border-custom-brown focus:border-[#152a3b] text-sm" />
                                {/* <FileUploader  multiple={false} handleChange={handleThirdFileChange} name="file" type={imageTypes} /> */}
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <label className="text-sm font-medium">Image Description</label>
                                <input type="text" name="secondImageDescription" className="border w-full rounded-md p-3 outline-none border-custom-brown focus:border-[#152a3b] text-sm"  onChange={handleChange} value={blogInfo.secondImageDescription} />
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 space-y-5'>
                            <div className="w-full flex flex-col gap-2">
                                <label className="text-sm font-medium">Fourth Image</label> 
                                <input type="file" name="fourthImage" onChange={handleFileChange} className="border w-full rounded-md p-3 outline-none border-custom-brown focus:border-[#152a3b] text-sm" />
                                {/* <FileUploader  multiple={false} handleChange={handleFourthFileChange} name="file" type={imageTypes} /> */}
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <label className="text-sm font-medium">Image Description</label>
                                <input type="text" name="secondImageDescription" className="border w-full rounded-md p-3 outline-none border-custom-brown focus:border-[#152a3b] text-sm"  onChange={handleChange} value={blogInfo.secondImageDescription} />
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="flex flex-row justify-end w-full">
                    {/* <button onClick={handleClose} className="py-3 px-4 w-fit text-black font-medium text-base rounded-md active:bg-custom-brown md:hover:bg-custom-brown cursor-pointer"> 
                        {view === 1 ? "Cancel" : "Back"}
                    </button> */}
                    <button type="submit" className="py-3 px-4 w-fit text-white font-medium text-base rounded-md active:bg-custom-brown md:hover:bg-custom-brown bg-[#1D4ED8] cursor-pointer"> 
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default DashboardCreateBlog