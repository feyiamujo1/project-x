// import React, { useEffect, useState } from 'react'
// import { FileUploader } from 'react-drag-drop-files'
// import BlogImage1 from '../../../src/assets/images/blogimage1.png'
// import BlogImage2 from '../../../src/assets/images/blogimage2.png'
// import BlogImage3 from '../../../src/assets/images/blogimage3.png'
// import BlogImage4 from '../../../src/assets/images/blogimage4.png'

// const CreateBlog = ({setOpenBlogNewDialog, selectedBlog}) => {
//     const [view, setView] = useState(1);
//     const imageTypes = ["JPEG", "PNG", "GIF"];
//     const [blogInfo, setBlogInfo] = useState({});

//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         if (view === 1) {
//             setView(2);
//         }else if (view === 2){
//             setOpenBlogNewDialog(false);
//             // Send data here
//         }else{

//         }
//     }

//     useEffect(() => {
//         if (selectedBlog >= 0 && selectedBlog != null){
//             setBlogInfo({topic: "End of the Year (2022) Celebrations", firstcontent: description, secondcontent: description, firstImage: BlogImage1, firstImageDescription: Imagedescription,
//             secondImage: BlogImage2, secondImageDescription: Imagedescription, thirdImage: BlogImage3, thirdImageDescription: Imagedescription, fourthImage: BlogImage4, fourthImageDescription: Imagedescription,
//             date: new Date(), description: description})
//         }
//     }, [selectedBlog]);

//     let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
//     let Imagedescription = "Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed"
//     const handleChange = (e) =>{
//         setBlogInfo({
//             ...blogInfo, [e.target.name] : e.target.value
//         })
//     }

//     const handleClose = () =>{
//         if (view === 1) {
//             setOpenBlogNewDialog(false);
//         }else if (view === 2){
//             setView(1);
//         }else{

//         }
//     }

//     const [firstImage, setFirstImage] = useState(null);
//     const handleFileChange = (file) => {
//         setFirstImage(file);
//         console.log("First", firstImage);
//     };

//     const [secondImage, setSecondImage] = useState(null);
//     const handleSecondFileChange = (file) => {
//         setSecondImage(file);
//         console.log("Second", secondImage);
//     };
//     const [thirdImage, setThirdImage] = useState(null);
//     const handleThirdFileChange = (file) => {
//         setThirdImage(file);
//         console.log("Third", thirdImage);
//     };
//     const [fourthImage, setfourthImage] = useState(null);
//     const handleFourthFileChange = (file) => {
//         setfourthImage(file);
//         console.log("Third", fourthImage);
//     };
//   return (
//     <div className='h-screen w-full fixed overflow-y-scroll left-0 right-0 top-0 bottom-0 bg-slate-300/30 flex justify-center items-center z-[100]'>
//         <div className='bg-white my-5 py-5 w-[92%] sm:w-[500px] md:w-[550px] rounded-md shadow-xl space-y-4'>
//             <p className='text-black px-5 font-semibold border-b-2 border-b-brown pb-1 text-lg flex flex-row justify-between items-center'>New Post</p>
//             <form onSubmit={handleSubmit} className="px-6 pb-4 space-y-5 box-border">
//                 {
//                     view === 1 ? 
//                     <div className="space-y-5 box-border">
//                         <p className='font-semibold'>Section 1</p>
//                         <div className="w-full flex flex-col gap-2">
//                             <label className="text-sm font-medium">Topic</label>
//                             <input type="text" name="topic" className="border w-full rounded-md p-3 outline-none border-custom-brown focus:border-[#152a3b] text-sm"  onChange={handleChange} value={blogInfo.topic} required/>
//                         </div>
//                         <div className="w-full flex flex-col gap-2">
//                             <label className="text-sm font-medium">Description</label>
//                             <textarea className="border w-full rounded-md p-3 outline-none border-custom-brown focus:border-[#152a3b] text-sm" name='firstcontent' rows={6} value={blogInfo.firstcontent} onChange={handleChange} required >

//                             </textarea> 
//                         </div>
//                         <div className="w-full flex flex-col gap-2">
//                             <label className="text-sm font-medium">First Image</label> 
//                             <FileUploader  multiple={false} handleChange={handleFileChange} name="file" type={imageTypes} required/>
//                         </div>
//                         <div className="w-full flex flex-col gap-2">
//                             <label className="text-sm font-medium">Image Description</label>
//                             <input type="text" name="firstImageDescription" className="border w-full rounded-md p-3 outline-none border-custom-brown focus:border-[#152a3b] text-sm"  onChange={handleChange} value={blogInfo.firstImageDescription} required/>
//                         </div>
//                         <div className="w-full flex flex-col gap-2">
//                             <label className="text-sm font-medium">Second Image</label> 
//                             <FileUploader  multiple={false} handleChange={handleSecondFileChange} name="file" type={imageTypes} />
//                         </div>
//                         <div className="w-full flex flex-col gap-2">
//                             <label className="text-sm font-medium">Image Description</label>
//                             <input type="text" name="secondImageDescription" className="border w-full rounded-md p-3 outline-none border-custom-brown focus:border-[#152a3b] text-sm"  onChange={handleChange} value={blogInfo.secondImageDescription} />
//                         </div>
//                     </div> : view === 2 ?
//                     <div className="space-y-5 box-border">
//                         <p className='font-semibold'>Section 2</p>
//                         <div className="w-full flex flex-col gap-2">
//                             <label className="text-sm font-medium">Description</label>
//                             <textarea className="border w-full rounded-md p-3 outline-none border-custom-brown focus:border-[#152a3b] text-sm" name='secondcontent' rows={6} value={blogInfo.secondcontent} onChange={handleChange} >

//                             </textarea> 
//                         </div>
//                         <div className="w-full flex flex-col gap-2">
//                             <label className="text-sm font-medium">Third Image</label> 
//                             <FileUploader  multiple={false} handleChange={handleThirdFileChange} name="file" type={imageTypes} />
//                         </div>
//                         <div className="w-full flex flex-col gap-2">
//                             <label className="text-sm font-medium">Image Description</label>
//                             <input type="text" name="secondImageDescription" className="border w-full rounded-md p-3 outline-none border-custom-brown focus:border-[#152a3b] text-sm"  onChange={handleChange} value={blogInfo.secondImageDescription} />
//                         </div>
//                         <div className="w-full flex flex-col gap-2">
//                             <label className="text-sm font-medium">Fourth Image</label> 
//                             <FileUploader  multiple={false} handleChange={handleFourthFileChange} name="file" type={imageTypes} />
//                         </div>
//                         <div className="w-full flex flex-col gap-2">
//                             <label className="text-sm font-medium">Image Description</label>
//                             <input type="text" name="secondImageDescription" className="border w-full rounded-md p-3 outline-none border-custom-brown focus:border-[#152a3b] text-sm"  onChange={handleChange} value={blogInfo.secondImageDescription} />
//                         </div>
//                     </div> : null
//                 }
//                 <div className="flex flex-row justify-between w-full">
//                     <button onClick={handleClose} className="py-3 px-4 w-fit text-black font-medium text-base rounded-md hover:text-custom-brown cursor-pointer"> 
//                         {view === 1 ? "Cancel" : "Back"}
//                     </button>
//                     <button type="submit" className="py-3 px-4 w-fit text-white font-medium text-base rounded-md hover:text-custom-brown bg-[#1D4ED8] cursor-pointer"> 
//                         {view === 1 ? "Continue" : "Submit"}
//                     </button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default CreateBlog