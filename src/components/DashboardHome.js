import Billboard from '../../src/assets/images/billboard-weird-blue.png'
import Booked from '../../src/assets/images/bokking-weird-blue.png'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import PeopleImage from '../../src/assets/images/queue.png'
import { Link } from 'react-router-dom'

const DashboardHome = () => {
    const data = [
        {
          name: 'Jan',
          "Holdings Booked": 100,
        },
        {
          name: 'Feb',
          "Holdings Booked": 500,
        },
        {
          name: 'Mar',
          "Holdings Booked": 300,
        },
        {
          name: 'Apr',
          "Holdings Booked": 200,
        },
        {
          name: 'May',
          "Holdings Booked": 150,
        },
        {
          name: 'Jun',
          "Holdings Booked": 320,
        },
        {
          name: 'Jul',
          "Holdings Booked": 50,
        },
        {
          name: 'Aug',
          "Holdings Booked": 230,
        },
        {
          name: 'Sep',
          "Holdings Booked": 400,
        },
        {
          name: 'Oct',
          "Holdings Booked": 200,
        },
        {
          name: 'Nov',
          "Holdings Booked": 340,
        },
        {
          name: 'Dec',
          "Holdings Booked": 280, 
        }
      ];
    
      const barChartData = [
        {
          name: 'Holdings Distribution',
          "Gantry": 200,
          "Unipoles": 150,
          "Bus Shelter": 100,
          "LED": 70,
          "Murals": 75,
          "Lampost": 120,
          "Bridge Panels": 45,
          "Wallwrap": 25,
          "Fence Drape": 40
        },
      ];
  return (
    <div className='w-full space-y-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            <div className='h-32 rounded-xl shadow p-4 flex flex-row gap-3 items-center justify-center bg-white'>
            <div className='w-24 rounded-full p-4 text-center box-border bg-custom-blue-light'>
                <img className='' src={Billboard} alt="" />
            </div>
            <div className='w-full'>
                <h1 className='text-black font-bold'>500</h1>
                <h2 className='text-custom-brown font-medium text-sm'>Total Holdings</h2>
            </div>
            </div>
            <div className='h-32 rounded-xl shadow p-4 flex flex-row gap-3 items-center justify-center bg-white'>
            <div className='text-center w-24 rounded-full p-4 box-border bg-custom-blue-light'>
                <img className='' src={Booked} alt="" />
            </div>
            <div className='w-full'>
                <h1 className='text-black font-bold'>300</h1>
            <h2 className='text-custom-brown font-medium text-sm'>Booked Holdings</h2>
            </div>
            </div>
            <div className='h-32 rounded-xl shadow p-4 flex flex-row gap-3 items-center justify-center bg-white'>
            <div className=' text-center w-24 rounded-full p-4 box-border bg-custom-blue-light'>
                <img className='' src={Billboard} alt="" />
            </div>
            <div className='w-full'>
                <h1 className='text-black font-bold'>100</h1>
                <h2 className='text-custom-brown font-medium text-sm'>Available Holdings</h2>
            </div>
            </div>
            <div className='h-32 rounded-xl shadow p-4 flex flex-row gap-3 items-center justify-center bg-white'>
            <div className='text-center w-24 rounded-full p-4 box-border bg-custom-blue-light'>
                <img className='w-16' src={PeopleImage} alt="" />
                {/* <SlPeople className='w-20' /> */}
            </div>
            <div className='w-full'>
                <h1 className='text-black font-bold'>100</h1>
                <h2 className='text-custom-brown font-medium text-sm'>Wait List</h2>
            </div>
            </div>
        </div>
        <div className='bg-white w-full rounded-xl shadow-md space-y-10 py-6'>
            <div>
            <h3 className='font-semibold bg-dashboard-bluey pl-6 text-lg'>
                Bookings Analytics
            </h3>
            <p className='font-normal text-sm text-custom-ash pl-6'>Statistics for the year</p>
            </div>
            <div className='w-full p-0 m-0 pr-5 box-border'>
            <ResponsiveContainer className="w-full p-0 pr-4 m-0 "  aspect={3}>
                <LineChart className='w-full p-0 m-0' data ={data}>
                <XAxis dataKey="name" stroke ="#000000" />
                <YAxis stroke ="#000000" />
                <Line type ="monotone" dataKey = "Holdings Booked" fill="#82ca9d"/>
                <Tooltip/>
                <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>
                </LineChart>
            </ResponsiveContainer>
            </div>
        </div>
        <div className='bg-white w-full rounded-xl shadow-md space-y-10 p-6'>
            <div>
            <h3 className='font-semibold text-lg'>
                Holdings Analytics
            </h3>
            <p className='font-normal text-sm text-custom-ash'>Current holdings distribution</p>
            </div>
            <div className='w-full p-0 m-0 box-border'>
            <ResponsiveContainer className="w-full p-0 pr-4 m-0 " aspect={2.3}>
                <BarChart
                data={barChartData}
                margin={{
                    top: 5,
                    // right: 30,
                    left: -20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke='#000000'/>
                <YAxis stroke='#000000'/>
                <Tooltip />
                <Legend />
                <Bar className='cursor-pointer' dataKey="Gantry" fill="#8884d8" />
                <Bar className='cursor-pointer' dataKey="Unipoles" fill="#82ca9d" />
                <Bar className='cursor-pointer' dataKey="Bus Shelter" fill="#FFBB28" />
                <Bar className='cursor-pointer' dataKey="LED" fill="#FF8042" />
                <Bar className='cursor-pointer' dataKey="Murals" fill="#00D3FF" />
                <Bar className='cursor-pointer' dataKey="Lampost" fill="#00C49F" />
                <Bar className='cursor-pointer' dataKey="Bridge Panels" fill="#6B7280" />
                <Bar className='cursor-pointer' dataKey="Wallwrap" fill="#FF2500" />
                <Bar className='cursor-pointer' dataKey="Fence Drape" fill="#0088FE" />
                </BarChart>
            </ResponsiveContainer>
            </div>
        </div>
        <div className='bg-white w-full rounded-xl shadow-md space-y-6 py-6'>
            <div className='flex flex-row justify-between items-start px-6'>
                <div>
                    <h3 className='font-semibold text-lg'>
                    Bookings
                    </h3>
                    <p className='font-normal text-sm text-custom-ash'>Most recent bookings</p>
                </div>
                <div>
                    <p className='text-[#1D4DE8] font-medium cursor-pointer font-Poppins hover:text-custom-ash'><Link to='/dashboard/bookings'>View all</Link></p>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="">
                    <div className="pb-4 inline-block min-w-full">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left">
                                <thead className="border-b bg-[#152a3b] text-black">
                                    <tr>
                                    <th className="text-sm text-center font-medium text-white px-1 py-4">
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
                                    <th className="text-sm font-medium text-white px-1 py-4">
                                        Booked On
                                    </th>
                                    <th className="text-sm font-medium text-white py-4">
                                        
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">1</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Gantry
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ajah, Lagos
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        12Mx12M
                                    </td>
                                    <td className="text-sm text-black  px-1 py-4 whitespace-nowrap">
                                        Feb 18, 2022
                                    </td>
                                    <td className="text-sm text-[#1D4DE8]  py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                                        View Details
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">2</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Billboard
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ife, Osun
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        16Mx16M
                                    </td>
                                    <td className="text-sm text-black  px-1 py-4 whitespace-nowrap">
                                        Feb 18, 2022
                                    </td>
                                    <td className="text-sm text-[#1D4DE8]  py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                                        View Details
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">3</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Fence Drape
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Abeokuta, Ogun
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        10Mx10M
                                    </td>
                                    <td className="text-sm text-black  px-1 py-4 whitespace-nowrap">
                                        Feb 17, 2022
                                    </td>
                                    <td className="text-sm text-[#1D4DE8]  py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                                        View Details
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">4</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Murals
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ibadan, Oyo
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        12Mx12M
                                    </td>
                                    <td className="text-sm text-black  px-1 py-4 whitespace-nowrap">
                                        Feb 16, 2022
                                    </td>
                                    <td className="text-sm text-[#1D4DE8]  py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                                        View Details
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">5</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Lampost
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ajah, Lagos
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        8Mx8M
                                    </td>
                                    <td className="text-sm text-black  px-1 py-4 whitespace-nowrap">
                                        Feb 15, 2022
                                    </td>
                                    <td className="text-sm text-[#1D4DE8]  py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                                        View Details
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">6</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Bridge Panels
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ikeja, Lagos
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        18Mx12M
                                    </td>
                                    <td className="text-sm text-black  px-1 py-4 whitespace-nowrap">
                                        Feb 10, 2022
                                    </td>
                                    <td className="text-sm text-[#1D4DE8]  py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                                        View Details
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">7</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        LED
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ebute Meta, Lagos
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        12Mx12M
                                    </td>
                                    <td className="text-sm text-black  px-1 py-4 whitespace-nowrap">
                                        Feb 8, 2022
                                    </td>
                                    <td className="text-sm text-[#1D4DE8]  py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                                        View Details
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">8</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Gantry
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ilorin, Kwara
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        12Mx12M
                                    </td>
                                    <td className="text-sm text-black  px-1 py-4 whitespace-nowrap">
                                        Jan 29, 2022
                                    </td>
                                    <td className="text-sm text-[#1D4DE8]  py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                                        View Details
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">9</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Bus Shelter
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Akure, Ondo
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        12Mx12M
                                    </td>
                                    <td className="text-sm text-black  px-1 py-4 whitespace-nowrap">
                                        Jan 19, 2022
                                    </td>
                                    <td className="text-sm text-[#1D4DE8]  py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                                        View Details
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center">10</td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Wallwrap
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        Ajah, Lagos
                                    </td>
                                    <td className="text-sm text-black  px-2 py-4 whitespace-nowrap">
                                        12Mx12M
                                    </td>
                                    <td className="text-sm text-black  px-1 py-4 whitespace-nowrap">
                                        Jan 10, 2022
                                    </td>
                                    <td className="text-sm text-[#1D4DE8]  py-4 whitespace-nowrap text-center cursor-pointer hover:text-custom-ash">
                                        View Details
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardHome