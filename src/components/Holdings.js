import { useEffect, useRef, useState } from 'react'
import DirectionImage from '../../src/assets/images/directions.png'
import Footer from "./UI/Footer"
import Navbar from "./UI/Navbar"
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import {ReactComponent as DownButton}  from "../../src/assets/images/down-arrow-svgrepo-com.svg"
import GantryImage from "../../src/assets/images/live-gantry.png"
import { IoLocationSharp } from "react-icons/io5"
import { SlSizeFullscreen } from "react-icons/sl"
import CountDownTimer from './UI/CountDownTimer';
import { StateLga } from './data/StateLga';

const Holdings = () => {
    document.title = 'Holdings';
    const firstContainer = useRef(null);
    const ScrollToView = () => {
        firstContainer.current?.scrollIntoView({behavior: 'smooth'});
    };

    const [holdingsDetails, setHoldingsDetails] = useState({});
    const states = Object.keys(StateLga);
    const [lgas, setLgas] = useState([""]);
    const [showAvailable, setShowAvailable] = useState(true);
    const [displayedHolding, setDisplayedHolding] = useState("")

    const HandleChange = (e) =>{
        setHoldingsDetails({
            ...holdingsDetails, [ e.target.name] : e.target.value
        })
        // console.log(holdingsDetails);
        // console.log(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(holdingsDetails);
        setDisplayedHolding(holdingsDetails.holding);
    }

    // useEffect(() => {
    //     // setDisplayedHolding(holdingsDetails.outlet);
        
    // }, [displayedHolding])
    

    // Custom date for now sha
    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    useEffect(() => {
        setLgas(StateLga[holdingsDetails.state]);
    }, [holdingsDetails.state])

  return (
    <div className='bg-black scroll-smooth'>
        <Navbar />
        <div className="w-full h-[90vh] sm:h-screen bg-holdings-image bg-cover bg-no-repeat bg-center relative">
            <div
                data-aos="fade-down" 
                data-aos-duration="1100"
                data-aos-delay="500"
                className='hidden md:block absolute top-32 left-[10%] z-50'>
                <p className='hidden md:flex flex-row w-fit gap-4 justify-center items-center text-white'><Link to='/' className='hover:text-custom-blue cursor-pointer'>Home</Link> <img src={DirectionImage} alt=""/> Our Holdings</p>
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
        <div ref={firstContainer} className="w-11/12 lg:w-[80%] pb-16 pt-[55px] space-y-10 mx-auto">
            <div className='space-y-4 py-5 px-4'>
                <h2 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='font-bold text-2xl text-center text-custom-blue'>Select Advert Category</h2>
                <form 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    onSubmit={handleSubmit}
                    className='grid gap-2 sm:grid-cols-3 sm:gap-3 md:gap-4 md:grid-cols-4 max-w-[900px] mx-auto'>
                    <select className='border-2 bg-[#ebfcff] cursor-pointer border-transparent hover:border-[#097B93] outline-none rounded-xl text-base h-12 box-border py- px-4 space-y-2' name="holding" id='holding' onChange={HandleChange} value={holdingsDetails.Holdings} required>
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
                    <select className='border-2 bg-[#ebfcff] cursor-pointer border-transparent hover:border-[#097B93] outline-none rounded-xl text-base h-12 box-border py-2 px-4' name="state" id='state' onChange={HandleChange} value={holdingsDetails.state}>
                        <option className='hover:bg-custom-blue bg-white hover:text-white cursor-pointer' value="">-Select State-</option>
                        {
                            states.map((state, index) =>(
                                <option key={index} className='hover:bg-custom-blue bg-white hover:text-white cursor-pointer' value={state}>{state}</option>
                            )
                            )
                        }
                    </select>
                    <select className='border-2 bg-[#ebfcff] cursor-pointer border-transparent hover:border-[#097B93] outline-none rounded-xl text-base h-12 box-border py-2 px-4 space-y-2' name="area" id='area' onChange={HandleChange} value={holdingsDetails.area}>
                        <option className='hover:bg-custom-blue bg-white hover:text-white cursor-pointer' value="">-Select Area-</option>    
                        {
                            lgas?.map((lga, index) =>(
                                <option key={index} className='hover:bg-custom-blue bg-white hover:text-white cursor-pointer' value={lga}>{lga}</option>
                            )
                            )
                        }
                    </select>
                    <button type='submit' className='bg-custom-blue font-bold sm:col-start-2 md:col-auto rounded-xl text-base py-3 px-4 space-y-2 hover:bg-custom-brown'>
                        Filter
                    </button>
                </form>
            </div>
            <div 
                data-aos="fade-up" 
                data-aos-duration="1000"
                className='flex flex-col gap-4 items-center md:items-start'>
                <h2 
                    className='text-white text-center font-bold text-3xl mx-auto max-w-xl md:text-left md:ml-0 w-fit'>{displayedHolding}</h2>
                <div 
                    className=' w-fit flex flex-row rounded-xl overflow-hidden border border-[#4d4d4d] font-bold'>
                    <p onClick={() => {setShowAvailable(true)}} className={ showAvailable ? 'text-black py-2.5 px-4 bg-custom-blue-dark cursor-pointer font-bold rounded-l-md' : 'text-white p-2.5 cursor-pointer py-2.5 px-4 hover:text-white  font-bold opacity-50 hover:opacity-100 bg-[#4d4d4d] hover:bg-transparent'}>Available</p>
                    <p onClick={() => {setShowAvailable(false)}} className={ showAvailable ?  'text-white p-2.5 cursor-pointer py-2.5 px-4  font-bold opacity-50 hover:opacity-100 rounded-r-md bg-[#4d4d4d] hover:bg-transparent' : 'text-black py-2.5 px-4 bg-custom-blue-dark cursor-pointer font-bold'}>Deployed</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3.5 lg:gap-4 xl:gap-6 min-h-[500px]'>
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='flex flex-col text-center md:text-left md:flex-row py-5 px-4 gap-4 h-fit rounded-2xl border-[#005466] border-2 relative'>
                    <div className='flex absolute z-50 right-7 top-[30px] md:right-3 md:top-3.5 bg-black p-1.5 rounded-full'>
                        <div className="w-3 h-3 bg-notification-red rounded-full animate-ping absolute"> </div>
                        <div className="w-3 h-3 bg-notification-red rounded-full relative"></div>
                    </div>
                    <div className='w-full md:w-[450px] relative'>
                        <img className='w-full md:w-[450px] h-full rounded-2xl' src={GantryImage} alt=""/>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <div>
                            <h2 className='font-bold text-xl text-custom-blue-dark'>Gantry</h2>
                            <CountDownTimer targetDate={dateTimeAfterThreeDays} />
                        </div>
                        <div>
                            <div className='text-custom-brown flex flex-row w-fit items-center gap-1.5 text-[13.5px] mx-auto md:mx-0'><IoLocationSharp className='text-[14px] mb-0.5' /><span className='font-bold -ml-1'>Cross River, Calabar</span></div>
                            <p className='text-custom-brown flex flex-row w-fit items-center gap-1.5 text-[13.5px] mx-auto md:mx-0'><SlSizeFullscreen className='text-[12px]' /><span className='font-bold'>16MX16M</span></p>
                        </div>
                        <Link to='/our-holdings/1'>
                            <p className="py-4 w-full bg-custom-blue-dark rounded-xl text-center text-black font-bold cursor-pointer hover:bg-custom-brown">Book Now</p>
                        </ Link>
                    </div>
                </div>
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='flex flex-col text-center md:text-left md:flex-row py-5 px-4 gap-4 h-fit rounded-2xl border-[#005466] border-2 relative'>
                    <div className='flex absolute z-50 right-7 top-[30px] md:right-3 md:top-3.5 bg-black p-1.5 rounded-full'>
                        <div className="w-3 h-3 bg-notification-red rounded-full animate-ping absolute"> </div>
                        <div className="w-3 h-3 bg-notification-red rounded-full relative"></div>
                    </div>
                    <div className='w-full md:w-[450px] relative'>
                        <img className='w-full md:w-[450px] h-full rounded-2xl' src={GantryImage} alt=""/>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <div>
                            <h2 className='font-bold text-xl text-custom-blue-dark'>Gantry</h2>
                            <CountDownTimer targetDate={dateTimeAfterThreeDays} />
                        </div>
                        <div>
                            <div className='text-custom-brown flex flex-row w-fit items-center gap-1.5 text-[13.5px] mx-auto md:mx-0'><IoLocationSharp className='text-[14px] mb-0.5' /><span className='font-bold -ml-1'>Cross River, Calabar</span></div>
                            <p className='text-custom-brown flex flex-row w-fit items-center gap-1.5 text-[13.5px] mx-auto md:mx-0'><SlSizeFullscreen className='text-[12px]' /><span className='font-bold'>16MX16M</span></p>
                        </div>
                        <Link to='/our-holdings/1'>
                            <p className="py-4 w-full bg-custom-blue-dark rounded-xl text-center text-black font-bold cursor-pointer hover:bg-custom-brown">Book Now</p>
                        </ Link>
                    </div>
                </div>
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='flex flex-col text-center md:text-left md:flex-row py-5 px-4 gap-4 h-fit rounded-2xl border-[#005466] border-2 relative'>
                    <div className='flex absolute z-50 right-7 top-[30px] md:right-3 md:top-3.5 bg-black p-1.5 rounded-full'>
                        <div className="w-3 h-3 bg-notification-red rounded-full animate-ping absolute"> </div>
                        <div className="w-3 h-3 bg-notification-red rounded-full relative"></div>
                    </div>
                    <div className='w-full md:w-[450px] relative'>
                        <img className='w-full md:w-[450px] h-full rounded-2xl' src={GantryImage} alt=""/>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <div>
                            <h2 className='font-bold text-xl text-custom-blue-dark'>Gantry</h2>
                            <CountDownTimer targetDate={dateTimeAfterThreeDays} />
                        </div>
                        <div>
                            <div className='text-custom-brown flex flex-row w-fit items-center gap-1.5 text-[13.5px] mx-auto md:mx-0'><IoLocationSharp className='text-[14px] mb-0.5' /><span className='font-bold -ml-1'>Cross River, Calabar</span></div>
                            <p className='text-custom-brown flex flex-row w-fit items-center gap-1.5 text-[13.5px] mx-auto md:mx-0'><SlSizeFullscreen className='text-[12px]' /><span className='font-bold'>16MX16M</span></p>
                        </div>
                        <Link to='/our-holdings/1'>
                            <p className="py-4 w-full bg-custom-blue-dark rounded-xl text-center text-black font-bold cursor-pointer hover:bg-custom-brown">Book Now</p>
                        </ Link>
                    </div>
                </div>
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='flex flex-col text-center md:text-left md:flex-row py-5 px-4 gap-4 h-fit rounded-2xl border-[#005466] border-2 relative'>
                    <div className='flex absolute z-50 right-7 top-[30px] md:right-3 md:top-3.5 bg-black p-1.5 rounded-full'>
                        <div className="w-3 h-3 bg-notification-red rounded-full animate-ping absolute"> </div>
                        <div className="w-3 h-3 bg-notification-red rounded-full relative"></div>
                    </div>
                    <div className='w-full md:w-[450px] relative'>
                        <img className='w-full md:w-[450px] h-full rounded-2xl' src={GantryImage} alt=""/>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <div>
                            <h2 className='font-bold text-xl text-custom-blue-dark'>Gantry</h2>
                            <CountDownTimer targetDate={dateTimeAfterThreeDays} />
                        </div>
                        <div>
                            <div className='text-custom-brown flex flex-row w-fit items-center gap-1.5 text-[13.5px] mx-auto md:mx-0'><IoLocationSharp className='text-[14px] mb-0.5' /><span className='font-bold -ml-1'>Cross River, Calabar</span></div>
                            <p className='text-custom-brown flex flex-row w-fit items-center gap-1.5 text-[13.5px] mx-auto md:mx-0'><SlSizeFullscreen className='text-[12px]' /><span className='font-bold'>16MX16M</span></p>
                        </div>
                        <Link to='/our-holdings/1'>
                            <p className="py-4 w-full bg-custom-blue-dark rounded-xl text-center text-black font-bold cursor-pointer hover:bg-custom-brown">Book Now</p>
                        </ Link>
                    </div>
                </div>
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='flex flex-col text-center md:text-left md:flex-row py-5 px-4 gap-4 h-fit rounded-2xl border-[#005466] border-2 relative'>
                    <div className='flex absolute z-50 right-7 top-[30px] md:right-3 md:top-3.5 bg-black p-1.5 rounded-full'>
                        <div className="w-3 h-3 bg-notification-green rounded-full animate-ping absolute"> </div>
                        <div className="w-3 h-3 bg-notification-green rounded-full relative"></div>
                    </div>
                    <div className='w-full md:w-[450px] relative'>
                        <img className='w-full md:w-[450px] h-full rounded-2xl' src={GantryImage} alt=""/>
                    </div>
                    <div className='flex flex-col justify-end gap-2 w-full'>
                        <div>
                            <h2 className='font-bold text-xl text-custom-blue-dark'>Gantry</h2>
                            <CountDownTimer targetDate={new Date().getTime()} />
                        </div>
                        <div>
                            <div className='text-custom-brown flex flex-row w-fit items-center gap-1.5 text-[13.5px] mx-auto md:mx-0'><IoLocationSharp className='text-[14px] mb-0.5' /><span className='font-bold -ml-1'>Cross River, Calabar</span></div>
                            <p className='text-custom-brown flex flex-row w-fit items-center gap-1.5 text-[13.5px] mx-auto md:mx-0'><SlSizeFullscreen className='text-[12px]' /><span className='font-bold'>16MX16M</span></p>
                        </div>
                        <Link to='/our-holdings/1'>
                            <p className="py-4 w-full bg-custom-blue-dark rounded-xl text-center text-black font-bold cursor-pointer hover:bg-custom-brown">Book Now</p>
                        </ Link>
                    </div>
                </div>
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='flex flex-col text-center md:text-left md:flex-row py-5 px-4 gap-4 h-fit rounded-2xl border-[#005466] border-2 relative'>
                    <div className='flex absolute z-50 right-7 top-[30px] md:right-3 md:top-3.5 bg-black p-1.5 rounded-full'>
                        <div className="w-3 h-3 bg-notification-green rounded-full animate-ping absolute"> </div>
                        <div className="w-3 h-3 bg-notification-green rounded-full relative"></div>
                    </div>
                    <div className='w-full md:w-[450px] relative'>
                        <img className='w-full md:w-[450px] h-full rounded-2xl' src={GantryImage} alt=""/>
                    </div>
                    <div className='flex flex-col justify-end gap-2 w-full'>
                        <div>
                            <h2 className='font-bold text-xl text-custom-blue-dark'>Gantry</h2>
                            <CountDownTimer targetDate={new Date().getTime()} />
                        </div>
                        <div>
                            <div className='text-custom-brown flex flex-row w-fit items-center gap-1.5 text-[13.5px] mx-auto md:mx-0'><IoLocationSharp className='text-[14px] mb-0.5' /><span className='font-bold -ml-1'>Cross River, Calabar</span></div>
                            <p className='text-custom-brown flex flex-row w-fit items-center gap-1.5 text-[13.5px] mx-auto md:mx-0'><SlSizeFullscreen className='text-[12px]' /><span className='font-bold'>16MX16M</span></p>
                        </div>
                        <Link to='/our-holdings/1'>
                            <p className="py-4 w-full bg-custom-blue-dark rounded-xl text-center text-black font-bold cursor-pointer hover:bg-custom-brown">Book Now</p>
                        </ Link>
                    </div>
                </div>
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='flex flex-col text-center md:text-left md:flex-row py-5 px-4 gap-4 h-fit rounded-2xl border-[#005466] border-2 relative'>
                    <div className='flex absolute z-50 right-7 top-[30px] md:right-3 md:top-3.5 bg-black p-1.5 rounded-full'>
                        <div className="w-3 h-3 bg-notification-green rounded-full animate-ping absolute"> </div>
                        <div className="w-3 h-3 bg-notification-green rounded-full relative"></div>
                    </div>
                    <div className='w-full md:w-[450px] relative'>
                        <img className='w-full md:w-[450px] h-full rounded-2xl' src={GantryImage} alt=""/>
                    </div>
                    <div className='flex flex-col justify-end gap-2 w-full'>
                        <div>
                            <h2 className='font-bold text-xl text-custom-blue-dark'>Gantry</h2>
                            <CountDownTimer targetDate={new Date().getTime()} />
                        </div>
                        <div>
                            <div className='text-custom-brown flex flex-row w-fit items-center gap-1.5 text-[13.5px] mx-auto md:mx-0'><IoLocationSharp className='text-[14px] mb-0.5' /><span className='font-bold -ml-1'>Cross River, Calabar</span></div>
                            <p className='text-custom-brown flex flex-row w-fit items-center gap-1.5 text-[13.5px] mx-auto md:mx-0'><SlSizeFullscreen className='text-[12px]' /><span className='font-bold'>16MX16M</span></p>
                        </div>
                        <Link to='/our-holdings/1'>
                            <p className="py-4 w-full bg-custom-blue-dark rounded-xl text-center text-black font-bold cursor-pointer hover:bg-custom-brown">Book Now</p>
                        </ Link>
                    </div>
                </div>
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='flex flex-col md:flex-row py-5 px-4 gap-4 h-fit rounded-2xl border-[#005466] border-2 relative'>
                    <div className='flex absolute z-50 right-7 top-[30px] md:right-3 md:top-3.5 bg-black p-1.5 rounded-full'>
                        <div className="w-3 h-3 bg-notification-green rounded-full animate-ping absolute"> </div>
                        <div className="w-3 h-3 bg-notification-green rounded-full relative"></div>
                    </div>
                    <div className='w-full md:w-[450px] relative'>
                        <img className='w-full md:w-[450px] h-full rounded-2xl' src={GantryImage} alt=""/>
                    </div>
                    <div className='flex flex-col justify-end gap-2 w-full'>
                        <div>
                            <h2 className='font-bold text-xl text-custom-blue-dark'>Gantry</h2>
                            <CountDownTimer targetDate={new Date().getTime()} />
                        </div>
                        <div>
                            <div className='text-custom-brown flex flex-row w-fit items-center gap-1.5 text-[13.5px] '><IoLocationSharp className='text-[14px] mb-0.5' /><span className='font-bold -ml-1'>Cross River, Calabar</span></div>
                            <p className='text-custom-brown flex flex-row w-fit items-center gap-1.5 text-[13.5px]'><SlSizeFullscreen className='text-[12px]' /><span className='font-bold'>16MX16M</span></p>
                        </div>
                        <Link to='/our-holdings/1'>
                            <p className="py-4 w-full bg-custom-blue-dark rounded-xl text-center text-black font-bold cursor-pointer hover:bg-custom-brown">Book Now</p>
                        </ Link>
                    </div>
                </div>
                
                {/* <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='flex flex-col py-5 px-4 gap-4 border-[#005466] border-2 rounded-2xl'>
                    <div className='flex justify-end'>
                        <div className="w-3 h-3 bg-notification-red rounded-full animate-ping absolute"> </div>
                        <div className="w-3 h-3 bg-notification-red rounded-full relative"></div>
                    </div>
                    <div className='w-full md:max-h-[450px]'>
                        <img className='w-full h-full rounded-2xl' src={GantryImage} alt=""/>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <h2 className='font-bold text-xl text-custom-blue-dark text-center'>Gantry</h2>
                        <CountDownTimer targetDate={dateTimeAfterThreeDays} />
                        <div className='flex flex-col md:flex-row justify-between gap-2 w-full'>
                            <p className='text-custom-ash flex flex-row w-fit items-center gap-1.5'><IoLocationSharp /><span className='font-bold text-white'>Lagos, Ajah</span></p>
                            <p className='text-custom-ash flex flex-row w-fit items-center gap-1.5'><SlSizeFullscreen /><span className='font-bold text-white'>16MX16M</span></p>   
                        </div>
                        <div className=''>
                            <p className='md:text-justify text-custom-ash text-sm line-clamp-4 md:line-clamp-3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <Link to='/our-holdings/1'>
                            <p className="py-4 max-w-[300px] mx-auto mt-4 bg-custom-blue-dark rounded-xl text-center text-white font-bold cursor-pointer hover:bg-custom-brown">View Details</p>
                        </Link>
                    </div>
                </div> */}
                {/* <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className='flex flex-col py-5 px-4 gap-4 border-[#005466] border-2 rounded-2xl'>
                    <div className='flex justify-end'>
                        <div className="w-3 h-3 bg-notification-green rounded-full animate-ping absolute"> </div>
                        <div className="w-3 h-3 bg-notification-green rounded-full relative"></div>
                    </div>
                    <div className='w-full md:max-h-[450px]'>
                        <img className='w-full h-full rounded-2xl' src={GantryImage} alt=""/>
                    </div>
                    <div className='flex flex-col justify-end gap-2 w-full'>
                        <CountDownTimer targetDate={new Date().getTime()} />
                        <h2 className='font-bold text-xl text-custom-blue-dark'>Gantry</h2>
                        <div className='flex flex-col md:flex-row justify-between gap-2 w-full'>
                            <p className='text-custom-ash flex flex-row w-fit items-center gap-1.5'><IoLocationSharp /><span className='font-bold text-white'>Lagos, Ajah</span></p>
                            <p className='text-custom-ash flex flex-row w-fit items-center gap-1.5'><SlSizeFullscreen /><span className='font-bold text-white'>16MX16M</span></p>   
                        </div>
                        <div className=''>
                            <p className='md:text-justify text-custom-ash text-sm line-clamp-4 md:line-clamp-3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <Link to='/our-holdings/1'>
                            <p className="py-4 max-w-[300px] mx-auto mt-4 bg-custom-blue-dark rounded-xl text-center text-white font-bold cursor-pointer hover:bg-custom-brown">Book Now</p>
                        </Link>
                    </div>
                </div> */}
                
            </div>
            <div 
                // data-aos="zoom-in" 
                // data-aos-duration="1000"
                // data-aos-delay={ window.innerWidth < 768? "0": "1000"}
                className='flex flex-row gap-2 justify-center'>
                <p className='text-black border border-custom-blue bg-custom-blue cursor-pointer w-[50px] h-[46px] rounded-md flex justify-center items-center font-bold hover:bg-custom-brown hover:border-custom-ash'>1</p>
                <p className='text-white border border-white active:bg-custom-blue active:text-black active:border-custom-blue md:hover:bg-custom-blue cursor-pointer font-bold md:hover:text-black hover:border-custom-blue w-[50px] h-[46px] rounded-md flex justify-center items-center'>2</p>
                <p className='text-white border border-white active:bg-custom-blue active:text-black active:border-custom-blue md:hover:bg-custom-blue cursor-pointer font-bold md:hover:text-black hover:border-custom-blue w-[50px] h-[46px] rounded-md flex justify-center items-center'>3</p>
                <p className='text-white border border-white active:bg-custom-blue active:text-black active:border-custom-blue md:hover:bg-custom-blue cursor-pointer font-bold md:hover:text-black hover:border-custom-blue w-[50px] h-[46px] rounded-md flex justify-center items-center'>4</p>
            </div>
            
        </div>
        <Footer />
    </div>
  )
}

export default Holdings