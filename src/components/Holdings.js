import { useRef, useState } from 'react'
import DirectionImage from '../../src/assets/images/directions.png'
import Footer from "./UI/Footer"
import Navbar from "./UI/Navbar"
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import {ReactComponent as DownButton}  from "../../src/assets/images/down-arrow-svgrepo-com.svg"
import GantryImage from "../../src/assets/images/live-gantry.png"

const Holdings = () => {
    document.title = 'Holdings';
    const firstContainer = useRef(null);
    const ScrollToView = () => {
        firstContainer.current?.scrollIntoView({behavior: 'smooth'});
    };

    const [holdingsDetails, setHoldingsDetails] = useState({holding:"", state:"", area:""});

    const HandleChange = (e) =>{
        setHoldingsDetails({
            ...holdingsDetails,[ e.target.name] : e.target.value
        })
    }

    const HandleSubmit = (e) =>{
        e.PreventDefault();
        console.log(holdingsDetails);
    }



  return (
    <div className='bg-black scroll-smooth'>
        <Navbar />
        <div className="w-full h-[90vh] sm:h-screen bg-holdings-image bg-cover bg-no-repeat bg-center relative">
            <div
                data-aos="fade-down" 
                data-aos-duration="1100"
                data-aos-delay="500"
                className='hidden md:block absolute top-32 left-[10%]'>
                <p className='hidden md:flex flex-row w-fit gap-4 justify-center items-center text-white'><Link to='/' className='hover:text-custom-blue'>Home</Link> <img src={DirectionImage} alt=""/> Our Holdings</p>
            </div>
            <div 
                data-aos="zoom-in" 
                data-aos-duration="1500"
                data-aos-delay="500"
                className='w-11/12 h-full mx-auto py-4 flex flex-col items-center gap-4 md:gap-0 justify-center'>
                <div className="w-fit -mt-14 md:mt-0">
                    <h1 className="text-white text-center font-extrabold text-[52px] sm:text-8xl">Our Holdings</h1>
                </div>
                <div>
                    <p className="w-11/12 md:w-[550px] text-white text-center text-sm sm:text-base font-normal absolute left-0 right-0 mx-auto bottom-[110px] md:bottom-24 md:right-[50%] md:translate-x-2/4 md:left-auto">
                        Look through our list of advertising outlets located all over Nigeria to identify the ones that best suits your needs.
                    </p>
                    <div className="w-full absolute left-0 right-0 bottom-10 md:bottom-8 flex flex-row justify-center items-center">
                        <DownButton onClick={ScrollToView} className=" w-10 h-10 fill-custom-blue cursor-pointer animate-bounce" />
                    </div>
                </div>
            </div>
        </div>
        <div ref={firstContainer} className="w-11/12 lg:w-[80%] mx-auto pb-16 pt-[55px] space-y-10">
            <div className='space-y-4 py-5 px-4'>
                <h2 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='font-semibold text-2xl text-center text-custom-blue'>Select advert category</h2>
                <form 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    onSubmit={HandleSubmit}
                    className='grid gap-2 sm:grid-cols-3 sm:gap-x-0 sm:gap-y-4 md:gap-0 md:grid-cols-4 max-w-[800px] mx-auto'>
                    <select className='border cursor-pointer border-custom-brown hover:border-custom-blue outline-none rounded-xl text-base p-3 space-y-2' name="holding" id='holding' onChange={HandleChange} value={holdingsDetails["holding"]} required>
                        <option className='hover:bg-custom-blue hover:text-white' value="">-Select Outlet-</option>
                        <option className='hover:bg-custom-blue hover:text-white' value="Gantry">Gantry</option>
                        <option className='hover:bg-custom-blue hover:text-white' value="Unipoles">Unipoles</option>
                        <option className='hover:bg-custom-blue hover:text-white' value="Bus Shelte">Bus Shelter</option>
                        <option className='hover:bg-custom-blue hover:text-white' value="LED">LED</option>
                        <option className='hover:bg-custom-blue hover:text-white' value="Murals">Murals</option>
                        <option className='hover:bg-custom-blue hover:text-white' value="Lampost">Lampost</option>
                        <option className='hover:bg-custom-blue hover:text-white' value="Bridge Panels">Bridge Panels</option>
                        <option className='hover:bg-custom-blue hover:text-white' value="Wallwrap">Wallwrap</option>
                        <option className='hover:bg-custom-blue hover:text-white' value="Fence Drape">Fence Drape</option>
                    </select>
                    <select className='border cursor-pointer border-custom-brown hover:border-custom-blue outline-none rounded-xl text-base p-3' name="state" id='state' onChange={HandleChange} value={holdingsDetails["state"]} required>
                        <option className='hover:bg-custom-blue hover:text-white' value="">-Select State-</option>
                        <option className='hover:bg-custom-blue hover:text-white' value="">Lagos</option>
                        <option className='hover:bg-custom-blue hover:text-white' value="">Abuja</option>
                        <option className='hover:bg-custom-blue hover:text-white' value="">Ondo</option>
                        <option className='hover:bg-custom-blue hover:text-white' value="">Ogun</option>
                        <option className='hover:bg-custom-blue hover:text-white' value="">Oyo</option>
                        <option className='hover:bg-custom-blue hover:text-white' value="">Oyo</option>
                    </select>
                    <select className='border cursor-pointer border-custom-brown hover:border-custom-blue outline-none rounded-xl text-base p-3 space-y-2' name="area" id='area' onChange={HandleChange} value={holdingsDetails["area"]}>
                        <option className='hover:bg-custom-blue hover:text-white' value="">-Choose Area-</option>    
                        <option className='hover:bg-custom-blue hover:text-white' value="Gantry">Ikeja</option>
                        <option className='hover:bg-custom-blue hover:text-white' value="Unipoles">Ebute Meta</option>
                        <option className='hover:bg-custom-blue hover:text-white' value="Bus Shelte">Ikorodu</option>
                        <option className='hover:bg-custom-blue hover:text-white' value="LED">Main Land</option>
                        <option className='hover:bg-custom-blue hover:text-white' value="Murals">Alausa</option>
                        <option className='hover:bg-custom-blue hover:text-white' value="Lampost">Mushin</option>
                        <option className='hover:bg-custom-blue hover:text-white' value="Bridge Panels">Shomolu</option>
                    </select>
                    <button type='button' className='bg-custom-blue font-semibold sm:col-start-2 md:col-auto text-white rounded-xl text-base p-3 space-y-2 hover:bg-custom-brown'>
                        Filter
                    </button>
                </form>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='flex flex-col md:flex-row py-5 px-4 gap-4 bg-[#eeeeee] rounded-2xl'>
                    <div className='w-full md:w-[450px]'>
                        <img className='w-full md:w-[450px] h-full rounded-2xl' src={GantryImage} alt=""/>
                    </div>
                    <div className='flex flex-col justify-end gap-2 w-full'>
                        <h2 className='font-bold text-xl'>Gantry</h2>
                        <p>Location: <span className='font-bold'>Lagos, Ajah</span></p>
                        <p>Size: <span className='font-bold'>16MX16M</span></p>
                        <Link to='/our-holdings/1'>
                            <p className="py-4 w-full bg-custom-blue-dark rounded-xl text-center text-white font-semibold cursor-pointer hover:bg-custom-brown">Book Now</p>
                        </ Link>
                    </div>
                </div>
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='flex flex-col md:flex-row py-5 px-4 gap-4 bg-[#eeeeee] rounded-2xl'>
                    <div className='w-full md:w-[450px]'>
                        <img className='w-full md:w-[450px] h-full rounded-2xl' src={GantryImage} alt=""/>
                    </div>
                    <div className='flex flex-col justify-end gap-2 w-full'>
                        <h2 className='font-bold text-xl'>Gantry</h2>
                        <p>Location: <span className='font-bold'>Lagos, Ajah</span></p>
                        <p>Size: <span className='font-bold'>16MX16M</span></p>
                        <Link to='/our-holdings/2'>
                            <p className="py-4 w-full bg-custom-blue-dark rounded-xl text-center text-white font-semibold cursor-pointer hover:bg-custom-brown">Book Now</p>
                        </ Link>
                    </div>
                </div>
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='flex flex-col md:flex-row py-5 px-4 gap-4 bg-[#eeeeee] rounded-2xl'>
                    <div className='w-full md:w-[450px]'>
                        <img className='w-full md:w-[450px] h-full rounded-2xl' src={GantryImage} alt=""/>
                    </div>
                    <div className='flex flex-col justify-end gap-2 w-full'>
                        <h2 className='font-bold text-xl'>Gantry</h2>
                        <p>Location: <span className='font-bold'>Lagos, Ajah</span></p>
                        <p>Size: <span className='font-bold'>16MX16M</span></p>
                        <Link to='/our-holdings/3'>
                            <p className="py-4 w-full bg-custom-blue-dark rounded-xl text-center text-white font-semibold cursor-pointer hover:bg-custom-brown">Book Now</p>
                        </ Link>
                    </div>
                </div>
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='flex flex-col md:flex-row py-5 px-4 gap-4 bg-[#eeeeee] rounded-2xl'>
                    <div className='w-full md:w-[450px]'>
                        <img className='w-full md:w-[450px] h-full rounded-2xl' src={GantryImage} alt=""/>
                    </div>
                    <div className='flex flex-col justify-end gap-2 w-full'>
                        <h2 className='font-bold text-xl'>Gantry</h2>
                        <p>Location: <span className='font-bold'>Lagos, Ajah</span></p>
                        <p>Size: <span className='font-bold'>16MX16M</span></p>
                        <Link to='/our-holdings/4'>
                            <p className="py-4 w-full bg-custom-blue-dark rounded-xl text-center text-white font-semibold cursor-pointer hover:bg-custom-brown">Book Now</p>
                        </ Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Holdings