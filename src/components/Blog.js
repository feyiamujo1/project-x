import { Link } from 'react-router-dom'
import DirectionImage from '../../src/assets/images/directions.png'

const Blog = () => {
  return (
    <div className='bg-black pb-8'>
        <div className="w-11/12 lg:w-[85%] mx-auto pb-16 pt-36 space-y-10 border-b border-[#ACACAC66]">
            <div className='hidden md:block'>
                <p className='hidden md:flex flex-row w-fit gap-4 justify-center items-center text-white'><Link to='/' className='hover:text-custom-blue'>Home</Link> <img src={DirectionImage} alt=""/> Blog</p>
            </div>
            <div className='space-y-4'>
                <h1 className="font-extrabold abt -mt-10 text-4xl md:text-5xl text-white">Blog</h1>
                <p className='text-white max-w-[600px] text-lg md:text-xl'>
                    We can create custom display that convey your brand messages and also help your company standout.
                    {/* WE CAN CREATE CUSTOM DISPLAY THAT CONVEY YOUR BRAND MESSAGES AND ALSO HELP YOUR COMPANY stand out. */}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Blog