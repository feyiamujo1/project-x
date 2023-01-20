import { Link } from 'react-router-dom'
import DirectionImage from '../../src/assets/images/directions.png'
import BlogImage1 from '../../src/assets/images/blogimage1.png'
import BlogImage2 from '../../src/assets/images/blogimage2.png'
import BlogImage3 from '../../src/assets/images/blogimage3.png'
import BlogImage4 from '../../src/assets/images/blogimage4.png'


const Blog = () => {
  return (
    <div className='bg-black pb-8'>
        <div className="w-11/12 lg:w-[85%] mx-auto pb-16 pt-36 space-y-10">
            <div className='hidden md:block'>
                <p className='hidden md:flex flex-row w-fit gap-4 justify-center items-center text-white'><Link to='/' className='hover:text-custom-blue'>Home</Link> <img src={DirectionImage} alt=""/> Blog</p>
            </div>
            <h1 className="font-extrabold abt -mt-10 text-4xl md:text-5xl text-white">Blog</h1>
            <div className='space-y-10 py-5'>
                <div className='space-y-3'>
                    <h2 className='text-custom-blue font-bold text-3xl '>End  of the Year (2022) Celebrations</h2>
                    <p className='text-white text-sm leading-4'>22nd of December, 2022</p>
                </div>
                <div className='space-y-10'>
                    <p className='text-white'>
                    Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. Sapien sapien vitae velit erat ut ultrices imperdiet ac sit. Gravida tellus laoreet 
                    lectus scelerisque risus nulla sed dolor amet. Blandit et ullamcorper a non lacus erat pellentesque leo. Feugiat mattis viverra nisi lectus laoreet. Sed dapibus a a posuere eget. Lorem ipsum dolor 
                    sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. 
                    Sapien sapien vitae velit erat ut ultrices imperdiet ac sit. Gravida tellus laoreet lectus scelerisque risus nulla sed dolor amet. Blandit et ullamcorper a non lacus erat pellentesque leo. Feugiat mattis 
                    viverra nisi lectus laoreet. Sed dapibus a a posuere eget. Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. 
                    </p>
                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='space-y-5'>
                            <img className='w-full sm:w-8/12 md:w-full mx-auto' src={BlogImage2} alt="" />
                            <p className='text-white text-sm text-center italic font-extralight'>Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed</p>
                        </div>
                        <div className='space-y-5'>
                            <img className='w-full sm:w-8/12 md:w-full mx-auto' src={BlogImage1} alt="" />
                            <p className='text-white text-sm text-center italic font-extralight'>Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-10'>
                    <p className='text-white'>
                    Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. Sapien sapien vitae velit erat ut ultrices imperdiet ac sit. Gravida tellus laoreet 
                    lectus scelerisque risus nulla sed dolor amet. Blandit et ullamcorper a non lacus erat pellentesque leo. Feugiat mattis viverra nisi lectus laoreet. Sed dapibus a a posuere eget. Lorem ipsum dolor 
                    sit amet consectetur. <span className='font-extrabold'> Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. </span> Ornare non maecenas mauris at risus. 
                    Sapien sapien vitae velit erat ut ultrices imperdiet ac sit. Gravida tellus laoreet lectus scelerisque risus nulla sed dolor amet. Blandit et ullamcorper a non lacus erat pellentesque leo. Feugiat mattis 
                    viverra nisi lectus laoreet. Sed dapibus a a posuere eget. Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed sodales in. Ornare non maecenas mauris at risus. 
                    </p>
                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='space-y-5'>
                            <img className='w-full sm:w-8/12 md:w-full mx-auto' src={BlogImage4} alt="" />
                            <p className='text-white text-sm text-center italic font-extralight'>Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed</p>
                        </div>
                        <div className='space-y-5'>
                            <img className='w-full sm:w-8/12 md:w-full mx-auto' src={BlogImage3} alt="" />
                            <p className='text-white text-sm text-center italic font-extralight'>Lorem ipsum dolor sit amet consectetur. Enim quis turpis sed</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-2 justify-center'>
                <p className='text-black border border-custom-blue bg-custom-blue cursor-pointer hover:text-white w-[50px] h-[46px] rounded-md flex justify-center items-center'>1</p>
                <p className='text-white border border-white active:bg-custom-blue active:text-black active:border-custom-blue md:hover:bg-custom-blue cursor-pointer md:hover:text-black hover:border-custom-blue w-[50px] h-[46px] rounded-md flex justify-center items-center'>2</p>
                <p className='text-white border border-white active:bg-custom-blue active:text-black active:border-custom-blue md:hover:bg-custom-blue cursor-pointer md:hover:text-black hover:border-custom-blue w-[50px] h-[46px] rounded-md flex justify-center items-center'>3</p>
                <p className='text-white border border-white active:bg-custom-blue active:text-black active:border-custom-blue md:hover:bg-custom-blue cursor-pointer md:hover:text-black hover:border-custom-blue w-[50px] h-[46px] rounded-md flex justify-center items-center'>4</p>
            </div>
        </div>
        
    </div>
  )
}

export default Blog