import React, { useState } from 'react'
import { BiEdit } from 'react-icons/bi';
import { MdOutlineVisibility } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import BlogImage1 from '../../src/assets/images/blogimage1.png'
import BlogImage2 from '../../src/assets/images/blogimage2.png'
import BlogImage3 from '../../src/assets/images/blogimage3.png'
import BlogImage4 from '../../src/assets/images/blogimage4.png'
import DialogBox from './UI/DialogBox';

const DashboardBlog = () => {
  // const [openBlogNewDialog, setOpenBlogNewDialog] = useState(false);
  // const [selectedBlog, setSelectedBlog] = useState(null)
  const [open, setOpen] = useState(false);

  return (
    <div className='w-full h-full min-h-screen bg-white rounded-xl shadow-md py-6'>
      {open && <DialogBox setOpen={setOpen} open={open}/>}
      {/* {openBlogNewDialog && <CreateBlogDialog setOpenBlogNewDialog={setOpenBlogNewDialog} selectedBlog={selectedBlog} />} */}
      <div className='px-6 pb-6 flex flex-row justify-between'>
        <div>
          <h3 className='font-semibold text-lg'>
            Blogs Post
          </h3>
          <p className='font-normal text-sm text-custom-ash'>Published Posts</p>
        </div>
        <div>
          <Link to='/dashboard/blog/create-blog/0'>
            <p className='py-2.5 px-3 text-sm flex flex-row gap-1 items-center bg-[#1D4ED8] text-white rounded-md hover:text-custom-brown cursor-pointer'><BiEdit className='font-semibold text-base' /> Create Post</p>
          </Link>
        </div>
      </div>
      {/* <div className='px-6 flex flex-row grid grid-cols-2 gap-4'>
        <div className="shadow p-3 flex flex-row gap-2 cursor-pointer rounded-md box-border">
          <div className='w-[200px]'>
            <img src={BlogImage1} alt='' className='h-fit w-full rounded-md'/>
          </div>
          <div className="w-full flex flex-col justify-end box-border gap-1">
            <div className=''>
              <p className='font-semibold'>End of the year (2022) celebration</p>
              <p className='md:text-justify text-sm line-clamp-4 md:line-clamp-3 lg:line-clamp-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <p className='text-custom-brown font-medium text-xs text-right'>Jan 24, 2023</p>
          </div>
        </div>
        
      </div> */}
      <div className="flex flex-col">
        <div className=""> 
          <div className="pb-4 inline-block min-w-full">
              <div className="overflow-hidden">
                  <table className="min-w-full text-left">
                      <thead className="border-b bg-[#152a3b] text-black">
                          <tr>
                          <th className="text-sm text-center px-3 font-medium text-white py-4">
                              S/N
                          </th>
                          <th className="text-sm font-medium text-white px-4 py-4">
                              Title
                          </th>
                          <th className="text-sm font-medium text-white px-4 py-4">
                              Date
                          </th>
                          <th className="text-sm font-medium text-white py-4">
                              
                          </th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className=" py-4 px-3 whitespace-nowrap text-sm font-medium text-black text-center">1</td>
                          <td className="text-sm text-black  px-4 py-4  flex flex-row items-end gap-2">
                            <img src={BlogImage1} className="w-[50px] h-[50px] rounded-md object-cover object-center " alt=''/>
                            <div>
                              <p className='font-semibold'>End of the year (2022) celebration</p>
                              <p className='text-sm line-clamp-1 md:line-clamp-1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              </p>
                            </div>
                          </td>
                          <td className="text-sm text-black  px-4 py-4 whitespace-nowrap">
                            Jan 1, 2023
                          </td>
                          <td className="text-sm text-[#1D4DE8] pr-4 h-full my-auto py-4 whitespace-nowrap text-center ">
                            <div className='flex flex-row gap-2 items-center w-fit mx-auto'>
                              <Link className='w-fit h-fit' to='/dashboard/blog/blog-details'><p className='cursor-pointer hover:text-custom-ash py-2 px-5 bg-[#1D4ED8] rounded-md flex flex-row gap-1 items-center text-white'><MdOutlineVisibility className='text-lg'/> View</p></Link>
                              <p onClick={()=>{setOpen(true)}} className='cursor-pointer hover:text-custom-ash p-3 py-2 px-4 bg-[#E02424] rounded-md flex flex-row gap-1 items-center text-white'><RiDeleteBinLine className='text-lg'/> Delete</p>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className=" py-4 px-3 whitespace-nowrap text-sm font-medium text-black text-center">2</td>
                          <td className="text-sm text-black  px-4 py-4  flex flex-row items-end gap-2">
                            <img src={BlogImage2} className="w-[50px] h-[50px] rounded-md object-cover object-center " alt=''/>
                            <div>
                              <p className='font-semibold'>Branding with technology</p>
                              <p className='text-sm line-clamp-1 md:line-clamp-1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              </p>
                            </div>
                          </td>
                          <td className="text-sm text-black  px-4 py-4 whitespace-nowrap">
                            Jan 7, 2023
                          </td>
                          <td className="text-sm text-[#1D4DE8] pr-4 h-full my-auto py-4 whitespace-nowrap text-center ">
                            <div className='flex flex-row gap-2 items-center w-fit mx-auto'>
                              <Link className='w-fit h-fit' to='/dashboard/blog/blog-details'><p className='cursor-pointer hover:text-custom-ash py-2 px-5 bg-[#1D4ED8] rounded-md flex flex-row gap-1 items-center text-white'><MdOutlineVisibility className='text-lg'/> View</p></Link>
                              <p onClick={()=>{setOpen(true)}} className='cursor-pointer hover:text-custom-ash p-3 py-2 px-4 bg-[#E02424] rounded-md flex flex-row gap-1 items-center text-white'><RiDeleteBinLine className='text-lg'/> Delete</p>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-black text-center">3</td>
                          <td className="text-sm text-black  px-4 py-4  flex flex-row items-end gap-2">
                            <img src={BlogImage4} className="w-[50px] h-[50px] rounded-md object-cover object-center " alt=''/>
                            <div>
                              <p className='font-semibold'>Our big white board</p>
                              <p className='text-sm line-clamp-1 md:line-clamp-1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              </p>
                            </div>
                          </td>
                          <td className="text-sm text-black  px-4 py-4 whitespace-nowrap">
                            Jan 20, 2023
                          </td>
                          <td className="text-sm text-[#1D4DE8] pr-4 h-full my-auto py-4 whitespace-nowrap text-center ">
                            <div className='flex flex-row gap-2 items-center w-fit mx-auto'>
                              <Link className='w-fit h-fit' to='/dashboard/blog/blog-details'><p className='cursor-pointer hover:text-custom-ash py-2 px-5 bg-[#1D4ED8] rounded-md flex flex-row gap-1 items-center text-white'><MdOutlineVisibility className='text-lg'/> View</p></Link>
                              <p onClick={()=>{setOpen(true)}} className='cursor-pointer hover:text-custom-ash p-3 py-2 px-4 bg-[#E02424] rounded-md flex flex-row gap-1 items-center text-white'><RiDeleteBinLine className='text-lg'/> Delete</p>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className=" py-4 px-3 whitespace-nowrap text-sm font-medium text-black text-center">4</td>
                          <td className="text-sm text-black  px-4 py-4  flex flex-row items-end gap-2">
                            <img src={BlogImage3} className="w-[50px] h-[50px] rounded-md object-cover object-center " alt=''/>
                            <div>
                              <p className='font-semibold'>End of the year (2021) celebration</p>
                              <p className='text-sm line-clamp-1 md:line-clamp-1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              </p>
                            </div>
                          </td>
                          <td className="text-sm text-black  px-4 py-4 whitespace-nowrap">
                            Jan 22, 2023
                          </td>
                          <td className="text-sm text-[#1D4DE8] pr-4 h-full my-auto py-4 whitespace-nowrap text-center ">
                            <div className='flex flex-row gap-2 items-center w-fit mx-auto'>
                              <Link className='w-fit h-fit' to='/dashboard/blog/blog-details'><p className='cursor-pointer hover:text-custom-ash py-2 px-5 bg-[#1D4ED8] rounded-md flex flex-row gap-1 items-center text-white'><MdOutlineVisibility className='text-lg'/> View</p></Link>
                              <p onClick={()=>{setOpen(true)}} className='cursor-pointer hover:text-custom-ash p-3 py-2 px-4 bg-[#E02424] rounded-md flex flex-row gap-1 items-center text-white'><RiDeleteBinLine className='text-lg'/> Delete</p>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className=" py-4 px-3 whitespace-nowrap text-sm font-medium text-black text-center">6</td>
                          <td className="text-sm text-black  px-4 py-4  flex flex-row items-end gap-2">
                            <img src={BlogImage1} className="w-[50px] h-[50px] rounded-md object-cover object-center " alt=''/>
                            <div>
                              <p className='font-semibold'>End of the year (2022) celebration</p>
                              <p className='text-sm line-clamp-1 md:line-clamp-1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              </p>
                            </div>
                          </td>
                          <td className="text-sm text-black  px-4 py-4 whitespace-nowrap">
                            Jan 25, 2023
                          </td>
                          <td className="text-sm text-[#1D4DE8] pr-4 h-full my-auto py-4 whitespace-nowrap text-center ">
                            <div className='flex flex-row gap-2 items-center w-fit mx-auto'>
                              <Link className='w-fit h-fit' to='/dashboard/blog/blog-details'><p className='cursor-pointer hover:text-custom-ash py-2 px-5 bg-[#1D4ED8] rounded-md flex flex-row gap-1 items-center text-white'><MdOutlineVisibility className='text-lg'/> View</p></Link>
                              <p onClick={()=>{setOpen(true)}} className='cursor-pointer hover:text-custom-ash p-3 py-2 px-4 bg-[#E02424] rounded-md flex flex-row gap-1 items-center text-white'><RiDeleteBinLine className='text-lg'/> Delete</p>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className=" py-4 px-3 whitespace-nowrap text-sm font-medium text-black text-center">7</td>
                          <td className="text-sm text-black  px-4 py-4  flex flex-row items-end gap-2">
                            <img src={BlogImage2} className="w-[50px] h-[50px] rounded-md object-cover object-center " alt=''/>
                            <div>
                              <p className='font-semibold'>End of the year celebration</p>
                              <p className='text-sm line-clamp-1 md:line-clamp-1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              </p>
                            </div>
                          </td>
                          <td className="text-sm text-black  px-4 py-4 whitespace-nowrap">
                            Feb 1, 2023
                          </td>
                          <td className="text-sm text-[#1D4DE8] pr-4 h-full my-auto py-4 whitespace-nowrap text-center ">
                            <div className='flex flex-row gap-2 items-center w-fit mx-auto'>
                              <Link className='w-fit h-fit' to='/dashboard/blog/blog-details'><p className='cursor-pointer hover:text-custom-ash py-2 px-5 bg-[#1D4ED8] rounded-md flex flex-row gap-1 items-center text-white'><MdOutlineVisibility className='text-lg'/> View</p></Link>
                              <p onClick={()=>{setOpen(true)}} className='cursor-pointer hover:text-custom-ash p-3 py-2 px-4 bg-[#E02424] rounded-md flex flex-row gap-1 items-center text-white'><RiDeleteBinLine className='text-lg'/> Delete</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                  </table>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardBlog