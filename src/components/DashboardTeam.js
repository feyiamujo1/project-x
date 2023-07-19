import ManagingDirectorImage from '../../src/assets/images/md.png'
import ExecutiveAssistantImage from '../../src/assets/images/faith.png'
import OfficeAssistantImage from '../../src/assets/images/daniel.png'
import InnovationManagerImage from '../../src/assets/images/enare.png'
import JohnDoeImage from '../../src/assets/images/john.png'
import { BsPlusLg } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'
import DialogBox from './UI/DialogBox'
import { useEffect, useState } from 'react'
import AddTeamMember from './UI/AddTeamMember'

const DashboardTeam = () => {
  const TeamMembers = [
    { id: 0, name: "Adeniyi Ganiyu", position: "Managing Director", image: ManagingDirectorImage },
    { id: 1, name: "Faith Ikejiaku", position: "Customer Service Manager", image: ExecutiveAssistantImage },
    { id: 2, name: "Daniel Olarewaju", position: "Office Assistant", image: OfficeAssistantImage},
    { id: 3, name: "Enare Ejim", position: "Innovation Manager", image: InnovationManagerImage},
    { id: 4, name: "Ibrahim Abiodun", position: "Operation Executive", image: JohnDoeImage }
]
  const [open, setOpen] = useState(false);
  const [openNewUser, setOpenNewUser] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    console.log(selectedStaff)
  }, [selectedStaff])
  

  return (
    <div className='w-full h-full bg-white rounded-xl shadow-md py-6'>
      {open && <DialogBox setOpen={setOpen} open={open}/>}
      {openNewUser && <AddTeamMember openNewUser={openNewUser} setOpenNewUser={setOpenNewUser} selectedStaff={selectedStaff} setSelectedStaff={setSelectedStaff} editable={editable} setEditable={setEditable}/>}
      <div className='px-6 pt-0 mb-6 flex flex-col gap-4 sm:flex-row justify-between'>
        <div>
          <h3 className='font-semibold text-lg'>
            Staff Members
          </h3>
          <p className='font-normal text-sm text-custom-ash'>List of current staff members</p>
        </div>
        <div>
          <p onClick={()=>{setOpenNewUser(true); setEditable(true)}} className='w-fit py-2.5 px-3 text-sm flex flex-row gap-1 items-center bg-[#1D4ED8] text-white rounded-md active:bg-custom-brown md:hover:bg-custom-ash cursor-pointer'><BsPlusLg className='font-semibold' /> Add member</p>
        </div>
      </div>
      <div className="flex flex-col overflow-x-scroll md:overflow-x-hidden">
        <div className=""> 
          <div className="pb-4 inline-block min-w-full">
              <div className="overflow-hidden">
                  <table className="min-w-full text-left">
                      <thead className="border-b bg-[#152a3b] text-black">
                          <tr>
                          <th className="text-sm text-center font-medium text-white px-4 md:px-0">
                              S/N
                          </th>
                          <th className="text-sm font-medium text-white px-4 py-4">
                              Name
                          </th>
                          <th className="text-sm font-medium text-white px-2 py-4">
                              Role
                          </th>
                          <th className="text-sm font-medium text-white px-6 md:px-0 py-4">
                              
                          </th>
                          </tr>
                      </thead>
                      <tbody>
                        {
                          TeamMembers.map((teamMember, i) => (
                            <tr key={i} className="bg-white border-b">
                              <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">{teamMember.id + 1}</td>
                              <td className="text-sm text-black px-4  md:px-2 py-4 whitespace-nowrap flex flex-row items-center gap-2">
                                <img src={teamMember.image} className="min-w-[50px] min-h-[50px] w-[50px] h-[50px] whitespace-nowrap rounded-full object-contain object-top bg-custom-brown" alt=''/>
                                <div>
                                  <p>{teamMember.name}</p>
                                  {/* <p className='text-custom-brown lowercase'>{teamMember.name.split(/\s+/).splice(0, 1)}@eyekontact.com.ng</p> */}
                                </div>
                              </td>
                              <td className="text-sm text-black px-2 py-4 whitespace-nowrap">
                                {teamMember.position}
                              </td>
                              <td className="text-sm text-[#1D4DE8] px-6 md:pr-6 h-full my-auto py-4 whitespace-nowrap text-center ">
                                <div className='flex flex-row gap-2 items-center justify-end'>
                                  <p onClick={()=>{setOpenNewUser(true); setSelectedStaff(teamMember.id)}} className='cursor-pointer active:bg-custom-brown md:hover:bg-custom-brown py-2 px-5 bg-[#1D4ED8] rounded-md flex flex-row gap-1 items-center text-white'><BiEdit className='text-lg'/> Edit</p>
                                  <p onClick={()=>{setOpen(true)}} className='cursor-pointer active:bg-custom-brown md:hover:bg-custom-brown p-3 py-2 px-4 bg-[#E02424] rounded-md flex flex-row gap-1 items-center text-white'><RiDeleteBinLine className='text-lg'/> Delete</p>
                                </div>
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                  </table>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardTeam