import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { StateLga } from './data/StateLga';
import { BsPlusLg } from 'react-icons/bs'
import CreateNewHolding from './UI/CreateNewHolding';

const DashboardHoldings = () => {
  const [holdingsDetails, setHoldingsDetails] = useState({});
  const states = Object.keys(StateLga);
  const [lgas, setLgas] = useState([""]);
  // const [showAvailable, setShowAvailable] = useState(true);
  const [displayedHolding, setDisplayedHolding] = useState("")
  const [openNewProductDialog, setOpenNewProductDialog] = useState(false);


  const HandleChange = (e) =>{
      setHoldingsDetails({
          ...holdingsDetails, [ e.target.name] : e.target.value
      })
  }

  const handleSubmit = (e) =>{
      e.preventDefault();
      setDisplayedHolding(holdingsDetails.holding);
  }

  useEffect(() => {
    setLgas(StateLga[holdingsDetails.state]);
  }, [holdingsDetails.state])

  const [selectedHoldings, setSelectedHoldings] = useState(null);

  return (
    <div className='w-full h-full bg-white rounded-xl shadow-md py-6'>
      {openNewProductDialog && <CreateNewHolding openNewProductDialog={openNewProductDialog} setOpenNewProductDialog={setOpenNewProductDialog} selectedHoldings={selectedHoldings} setSelectedHoldings={setSelectedHoldings} />}
      <div className='px-4 pt-0 mb-6 flex flex-col'>
        <div className='sm:flex sm:gap-0 sm:flex-row justify-between sm:items-center'>
          <div>
            <h3 className='font-semibold text-lg'>
              Holdings
            </h3>
            <p className='font-normal text-sm text-custom-ash mb-4'>Inventory of all holdings</p>
          </div>
          <div className='w-full sm:w-fit'>
            <p onClick={()=>{setOpenNewProductDialog(true)}} className='w-fit py-3 md:py-2.5 px-3 flex flex-row gap-1 items-center bg-[#1D4ED8] text-sm text-white rounded-md md:hover:bg-custom-brown active:bg-custom-brown cursor-pointer'><BsPlusLg className='font-semibold' /> Add Holdings</p>
          </div>
        </div>
        <p className='text-sm font-semibold mx-auto md:ml-0 mt-3 mb-2 md:mt-0'>Search</p>
        <form 
            onSubmit={handleSubmit}
            className='grid gap-2 sm:grid-cols-3 sm:gap-3 sm:mx-auto md:ml-0 md:grid-cols-4 max-w-[700px]'>

            <select className='border outline-none cursor-pointer bg-[#f9fafb] border-custom-brown focus:border-[#152a3b] rounded-md text-sm h-10 box-border py-2 px-4 space-y-2' name="holding" id='holding' onChange={HandleChange} value={holdingsDetails.Holdings} required>
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
            <select className='border outline-none cursor-pointer bg-[#f9fafb] border-custom-brown focus:border-[#152a3b] rounded-md text-sm h-10 box-border py-2 px-4 space-y-2' name="state" id='state' onChange={HandleChange} value={holdingsDetails.state}>
                <option className='hover:bg-custom-blue bg-white hover:text-white cursor-pointer' value="">-Select State-</option>
                {
                    states.map((state, index) =>(
                        <option key={index} className='hover:bg-custom-blue bg-white hover:text-white cursor-pointer' value={state}>{state}</option>
                    )
                    )
                }
            </select>
            <select className='border outline-none cursor-pointer bg-[#f9fafb] border-custom-brown focus:border-[#152a3b] rounded-md text-sm h-10 box-border py-2 px-4 space-y-2' name="area" id='area' onChange={HandleChange} value={holdingsDetails.area}>
                <option className='hover:bg-custom-blue bg-white hover:text-white cursor-pointer' value="">-Select Area-</option>    
                {
                    lgas?.map((lga, index) =>(
                        <option key={index} className='hover:bg-custom-blue bg-white hover:text-white cursor-pointer' value={lga}>{lga}</option>
                    )
                    )
                }
            </select>
            <button type='submit' className='bg-[#1D4ED8] text-white sm:col-start-2 md:col-auto rounded-md text-sm py-3 md:py-2 px-4 space-y-2 md:hover:bg-custom-brown active:bg-custom-brown'>
                Filter
            </button>
        </form>
      </div>
      <div className="flex flex-col overflow-x-scroll md:overflow-x-hidden">
                <div className="">
                    <div className="pb-4 inline-block min-w-full">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left">
                                <thead className="border-b bg-[#152a3b] text-black">
                                    <tr>
                                    <th className="text-sm text-center font-medium text-white px-4 md:px-2">
                                        ID
                                    </th>
                                    <th className="text-sm font-medium text-white px-2 py-4">
                                        Category
                                    </th>
                                    <th className="text-sm font-medium text-white px-2 py-4">
                                        location
                                    </th>
                                    <th className="text-sm font-medium text-white px-2 py-4">
                                        Size
                                    </th>
                                    <th className="text-sm font-medium text-white md:px-2 px-4 py-4">
                                        Status
                                    </th>
                                    <th className="text-sm font-medium text-white py-4">
                                        
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center px-4 md:px-2">1</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Gantry
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ajah, Lagos
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        12Mx12M
                                    </td>
                                    <td className="text-sm text-black md:px-2 px-4 py-4 whitespace-nowrap">
                                      <div className='flex flex-row items-center w-fit gap-2'>
                                        <p className='bg-notification-green w-2 h-2 rounded-full'> </p> Available
                                      </div>
                                    </td>
                                    <td className="text-sm  px-4 md:pr-6 whitespace-nowrap text-center ">
                                      <Link to='/dashboard/holdings/holdings-details' className='text-[#1D4DE8] hover:text-custom-ash cursor-pointer'>
                                        View Details
                                      </Link>
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center px-4 md:px-2">2</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Billboard
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ife, Osun
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        16Mx16M
                                    </td>
                                    <td className="text-sm text-black md:px-2 px-4 py-4 whitespace-nowrap">
                                      <div className='flex flex-row items-center w-fit gap-2'>
                                        <p className='bg-notification-green w-2 h-2 rounded-full'> </p> Available
                                      </div>
                                    </td>
                                    <td className="text-sm  px-4 md:pr-6 whitespace-nowrap text-center">
                                      <Link to='/dashboard/holdings/holdings-details' className='text-[#1D4DE8] hover:text-custom-ash cursor-pointer'>
                                        View Details
                                      </Link>
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center px-4 md:px-2">3</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Fence Drape
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Abeokuta, Ogun
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        10Mx10M
                                    </td>
                                    <td className="text-sm text-black md:px-2 px-4 py-4 whitespace-nowrap">
                                      <div className='flex flex-row items-center w-fit gap-2'>
                                        <p className='bg-notification-red w-2 h-2 rounded-full'> </p> Deployed
                                      </div>
                                    </td>
                                    <td className="text-sm  px-4 md:pr-6 whitespace-nowrap text-center ">
                                      <Link to='/dashboard/holdings/holdings-details' className='text-[#1D4DE8] hover:text-custom-ash cursor-pointer'>
                                        View Details
                                      </Link>
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center px-4 md:px-2">4</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Murals
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ibadan, Oyo
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        12Mx12M
                                    </td>
                                    <td className="text-sm text-black md:px-2 px-4 py-4 whitespace-nowrap">
                                      <div className='flex flex-row items-center w-fit gap-2'>
                                        <p className='bg-notification-green w-2 h-2 rounded-full'> </p> Available
                                      </div>
                                    </td>
                                    <td className="text-sm  px-4 md:pr-6 whitespace-nowrap text-center ">
                                      <Link to='/dashboard/holdings/holdings-details' className='text-[#1D4DE8] hover:text-custom-ash cursor-pointer'>
                                        View Details
                                      </Link>
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center px-4 md:px-2">5</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Lampost
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ajah, Lagos
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        8Mx8M
                                    </td>
                                    <td className="text-sm text-black md:px-2 px-4 py-4 whitespace-nowrap">
                                      <div className='flex flex-row items-center w-fit gap-2'>
                                        <p className='bg-notification-red w-2 h-2 rounded-full'> </p> Deployed
                                      </div>
                                    </td>
                                    <td className="text-sm px-4 md:pr-6 whitespace-nowrap text-center">
                                      <Link to='/dashboard/holdings/holdings-details' className='text-[#1D4DE8] hover:text-custom-ash cursor-pointer'>
                                        View Details
                                      </Link>
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center px-4 md:px-2">6</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Bridge Panels
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ikeja, Lagos
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        18Mx12M
                                    </td>
                                    <td className="text-sm text-black md:px-2 px-4 py-4 whitespace-nowrap">
                                      <div className='flex flex-row items-center w-fit gap-2'>
                                        <p className='bg-notification-green w-2 h-2 rounded-full'> </p> Available
                                      </div>
                                    </td>
                                    <td className="text-sm px-4 md:pr-6 whitespace-nowrap text-center ">
                                      <Link to='/dashboard/holdings/holdings-details' className='text-[#1D4DE8] hover:text-custom-ash cursor-pointer'>
                                        View Details
                                      </Link>
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center px-4 md:px-2">7</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        LED
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ebute Meta, Lagos
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        12Mx12M
                                    </td>
                                    <td className="text-sm text-black md:px-2 px-4 py-4 whitespace-nowrap">
                                      <div className='flex flex-row items-center w-fit gap-2'>
                                        <p className='bg-notification-red w-2 h-2 rounded-full'> </p> Deployed
                                      </div>
                                    </td>
                                    <td className="text-sm px-4 md:pr-6 whitespace-nowrap text-center">
                                      <Link to='/dashboard/holdings/holdings-details' className='text-[#1D4DE8] hover:text-custom-ash cursor-pointer'>
                                        View Details
                                      </Link>
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center px-4 md:px-2">8</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Gantry
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ilorin, Kwara
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        12Mx12M
                                    </td>
                                    <td className="text-sm text-black md:px-2 px-4 py-4 whitespace-nowrap">
                                      <div className='flex flex-row items-center w-fit gap-2'>
                                        <p className='bg-notification-red w-2 h-2 rounded-full'> </p> Deployed
                                      </div>
                                    </td>
                                    <td className="text-sm px-4 md:pr-6 whitespace-nowrap text-center ">
                                      <Link to='/dashboard/holdings/holdings-details' className='text-[#1D4DE8] hover:text-custom-ash cursor-pointer'>
                                        View Details
                                      </Link>
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center px-4 md:px-2">9</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Bus Shelter
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Akure, Ondo
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        12Mx12M
                                    </td>
                                    <td className="text-sm text-black md:px-2 px-4 py-4 whitespace-nowrap">
                                      <div className='flex flex-row items-center w-fit gap-2'>
                                        <p className='bg-notification-green w-2 h-2 rounded-full'> </p> Available
                                      </div>
                                    </td>
                                    <td className="text-sm px-4 md:pr-6 whitespace-nowrap text-center">
                                      <Link to='/dashboard/holdings/holdings-details' className='text-[#1D4DE8] hover:text-custom-ash cursor-pointer'>
                                        View Details
                                      </Link>
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center px-4 md:px-2">10</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Wallwrap
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ajah, Lagos
                                    </td>
                                    <td className="text-sm text-black px-2 py-4 whitespace-nowrap">
                                        12Mx12M
                                    </td>
                                    <td className="text-sm text-black px-4 md:px-2 py-4 whitespace-nowrap">
                                      <div className='flex flex-row items-center w-fit gap-2'>
                                        <p className='bg-notification-red w-2 h-2 rounded-full'> </p> Deployed
                                      </div>
                                    </td>
                                    <td className="text-sm  px-4 md:pr-6 whitespace-nowrap text-center ">
                                      <Link to='/dashboard/holdings/holdings-details' className='text-[#1D4DE8] hover:text-custom-ash cursor-pointer'>
                                        View Details
                                      </Link>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
      </div>
      <div>
        <p className='text-custom-brown text-sm text-center font-medium'>Showing <span className='text-black'>1-20</span> of <span className='text-black'>60</span></p>
        <div className='py-3 px-5 flex flex-row justify-between text-sm'>
          <p className='flex flex-row gap-1 items-center py-2 px-3 rounded-md bg-[#1D4ED8] md:hover:bg-custom-brown active:bg-custom-brown text-white cursor-pointer'><IoIosArrowBack /> Previous</p>
          <p className='flex flex-row gap-1 items-center py-2 px-5 rounded-md bg-[#1D4ED8] md:hover:bg-custom-brown active:bg-custom-brown text-white cursor-pointer'>Next <IoIosArrowForward /></p>
        </div>
      </div>
    </div>
  )
}

export default DashboardHoldings