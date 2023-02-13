import React from 'react'
import { MdDashboard } from 'react-icons/md'

const Dashboard = () => {
  return (
    <div>
      <div className='w-full px-6 py-3 h-[70px] flex flex-row justify-between bg-[]'>
        <div></div>
        <div>

        </div>
      </div>
      <div className='h-screen w-[250px] px-4 box-border'>
        <ul className='text-black space-y-6'>
          <li className='flex flex-row items-center gap-2'><MdDashboard className='text-2xl'/> Dashboard</li>
          <li className='flex flex-row items-center gap-2'>Holdings</li>
          <li className='flex flex-row items-center gap-2'>Blog</li>
          {/* <li></li> */}
        </ul>
      </div>
    </div>
  )
}

export default Dashboard