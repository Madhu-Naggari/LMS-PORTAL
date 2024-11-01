
import React from "react"
import { courses } from "../components/assets/data/dummydata"
import { FaBook } from "react-icons/fa"
import { AiFillStar } from "react-icons/ai"
import { NavLink } from "react-router-dom"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import Cardlogo from './assets/images/Cardlogo.jpg'
import CourseBg from './assets/images/CourseBg.jpg'
function Course() {
  return (
     <div className='relative w-full  '>
      <div className='main flex relative items-center justify-center bg-slate-800  h-[91vh] text-5xl md:text-3xl'>
               <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${CourseBg})` }}>
          </div>
                <div className="relative text-center z-10 p-8 text-white">
        <h2 className="text-3xl  font-bold mb-4 text-green-500">Courses</h2>
        <p className="mb-6 text-lg">
          Engage with high quality  courses across diverse topics and levels
        </p>
      </div>
          <p className='absolute top-5 left-1 text-lg md:text-sm text-white'> Home/Course</p>
            </div>
            <div className='relative h-full w-full flex items-center justify-center'>
                <div className='w-[98%] h-full bg-red-500'>
    <>
      <div className='courses bg-[#F3F4F8] py-16 '>
        <div className='w-4/5 m-auto'>
          <div className='heading mb-16'>
            <h1 className='text-3xl font-semibold text-black'>
              Your <br />
              Online Courses Here
            </h1>
            <span className='text-sm mt-2 block'>you don't have to struggle alone, you've got our assistance and help.</span>
          </div>
          <div className='grid grid-cols-3 gap-8 md:grid-cols-1'>
            {courses.slice(0,3).map((item) => (
              <div className='box rounded-lg shadow-shadow1 bg-white'>
                <div className='images rounded-t-lg relative overflow-hidden h-40 w-ful'>
                  <img src={item.cover} alt='' className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300' />
                </div>
                <div className='text p-3'>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                      <FaBook />
                      <span className='text-[14px] ml-2'> 10 lessons</span>
                    </div>
                    <div className='flex items-center'>
                      <AiFillStar className='text-orange-500' />
                      <span className='text-[14px] ml-2'> 4.50(2)</span>
                    </div>
                  </div>
                  <h3 className='text-black my-4 font-medium h-10'>{item.title}</h3>
                  <div className='user flex items-center'>
                    <img className='rounded-full w-8 h-8' src={Cardlogo} alt='' />
                    <span className='text-[14px] ml-2'>lecture Madhu</span>
                  </div>
                </div>
                <div to='/' className='flex items-center justify-between border-t border-gray-200 p-3'>
                  <span className='text-sm text-lime-600'>your course</span>
                  <NavLink className='text-[14px] ml-2 flex items-center' to='/CourseInfo'>
                    Continue learning <HiOutlineArrowNarrowRight />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
        </div>
        
            </div>
            <div className='relative h-full w-full flex items-center justify-center'>
                <div className='w-[98%] h-full bg-red-500'>
    <>
      <div className='courses bg-[#F3F4F8] py-16 '>
        <div className='w-4/5 m-auto'>
          <div className='heading mb-16'>
            <h1 className='text-3xl font-semibold text-black'>
              Find The Right <br />
              Online Course For You
            </h1>
            <span className='text-sm mt-2 block'>you don't have to struggle alone, you've got our assistance and help.</span>
          </div>
          <div className='grid grid-cols-3 gap-8 md:grid-cols-1'>
            {courses.map((item) => (
              <div className='box rounded-lg shadow-shadow1 bg-white'>
                <div className='images rounded-t-lg relative overflow-hidden h-40 w-ful'>
                  <img src={item.cover} alt='' className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300' />
                </div>
                <div className='text p-3'>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                      <FaBook />
                      <span className='text-[14px] ml-2'> 10 lessons</span>
                    </div>
                    <div className='flex items-center'>
                      <AiFillStar className='text-orange-500' />
                      <span className='text-[14px] ml-2'> 4.50(2)</span>
                    </div>
                  </div>
                  <h3 className='text-black my-4 font-medium h-10'>{item.title}</h3>
                  <div className='user flex items-center'>
                    <img className='rounded-full w-8 h-8' src={Cardlogo} alt='' />
                    <span className='text-[14px] ml-2'>lecture sunil</span>
                  </div>
                </div>
                <div to='/' className='flex items-center justify-between border-t border-gray-200 p-3'>
                  <span className='text-md text-red-700'>₹490</span>
                  <NavLink className='text-[14px] ml-2 flex items-center' to='/Upi'>
                    Register <HiOutlineArrowNarrowRight />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
        </div>
      </div>
        </div>
  )
}

export default Course

