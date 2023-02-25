import React, { useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import BlogImage1 from '../../src/assets/images/blogimage1.png'
import BlogImage2 from '../../src/assets/images/blogimage2.png'
import BlogImage3 from '../../src/assets/images/blogimage3.png'
import BlogImage4 from '../../src/assets/images/blogimage4.png'
import CreateBlogDialog from './DashboardCreateBlog';

const DasboardBlogDetails = () => {
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const Imagedescription = "Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed";
    
    const [blogInfo, setBlogInfo] = useState({topic: "End of the Year (2022) Celebrations", firstcontent: description, secondcontent: description, firstImage: BlogImage1, firstImageDescription: Imagedescription,
    secondImage: BlogImage2, secondImageDescription: Imagedescription, thirdImage: BlogImage3, thirdImageDescription: Imagedescription, fourthImage: BlogImage4, fourthImageDescription: Imagedescription,
    date: "22nd of December, 2022", description: description})
  return (
    <div className='w-full h-full bg-white rounded-xl shadow-md py-6'>
        <div className='px-6 pb-6 flex flex-row justify-between border-b '>
            <div>
            <h3 className='font-semibold text-lg'>
                {blogInfo.topic}
            </h3>
            <p className='font-normal text-sm text-custom-ash'>
                {blogInfo.date}
            </p>
            </div>
            <div>
                <Link to="/dashboard/blog/create-blog/1">
                    <p className='py-2.5 px-3 text-sm flex flex-row gap-1 items-center bg-[#1D4ED8] text-white rounded-md active:bg-custom-brown md:hover:bg-custom-brown cursor-pointer'><BiEdit className='font-semibold text-base' /> Edit Post</p>
                </Link>
            </div>
        </div>
        <div className='text-black p-6 space-y-3 pb-8'>
            <h3 className='font-semibold text-lg'>
                Blog Content
            </h3>
            <div className='space-y-10'>
                <p>
                Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. Sapien sapien vitae velit erat ut ultrices imperdiet ac sit. Gravida tellus laoreet 
                lectus scelerisque risus nulla sed dolor amet. Blandit et ullamcorper a non lacus erat pellentesque leo. Feugiat mattis viverra nisi lectus laoreet. Sed dapibus a a posuere eget. Lorem ipsum dolor 
                sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. 
                Sapien sapien vitae velit erat ut ultrices imperdiet ac sit. Gravida tellus laoreet lectus scelerisque risus nulla sed dolor amet. Blandit et ullamcorper a non lacus erat pellentesque leo. Feugiat mattis 
                viverra nisi lectus laoreet. Sed dapibus a a posuere eget. Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. 
                </p>
                <div className='flex flex-col md:flex-row gap-10 overflow-hidden'>
                    <div 
                        className='space-y-5'>
                        <img className='w-full sm:w-8/12 md:w-full mx-auto' src={BlogImage2} alt="" />
                        <p className=' text-sm text-center italic font-light'>Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed</p>
                    </div>
                    <div 
                        className='space-y-5'>
                        <img className='w-full sm:w-8/12 md:w-full mx-auto' src={BlogImage1} alt="" />
                        <p className=' text-sm text-center italic font-light'>Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed</p>
                    </div>
                </div>
            </div>
            <div className='space-y-10'>
                <p 
                    className=''>
                Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. Sapien sapien vitae velit erat ut ultrices imperdiet ac sit. Gravida tellus laoreet 
                lectus scelerisque risus nulla sed dolor amet. Blandit et ullamcorper a non lacus erat pellentesque leo. Feugiat mattis viverra nisi lectus laoreet. Sed dapibus a a posuere eget. Lorem ipsum dolor 
                sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. 
                Sapien sapien vitae velit erat ut ultrices imperdiet ac sit. Gravida tellus laoreet lectus scelerisque risus nulla sed dolor amet. Blandit et ullamcorper a non lacus erat pellentesque leo. Feugiat mattis 
                viverra nisi lectus laoreet. Sed dapibus a a posuere eget. Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. 
                </p>
                <div className='flex flex-col md:flex-row gap-10 overflow-hidden'>
                    <div 
                        className='space-y-5'>
                        <img className='w-full sm:w-8/12 md:w-full mx-auto' src={BlogImage4} alt="" />
                        <p className=' text-sm text-center italic font-light'>Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed</p>
                    </div>
                    <div 
                        className='space-y-5'>
                        <img className='w-full sm:w-8/12 md:w-full mx-auto' src={BlogImage3} alt="" />
                        <p className=' text-sm text-center italic font-light'>Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default DasboardBlogDetails