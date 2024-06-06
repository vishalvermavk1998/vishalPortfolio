import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import heroImage from "../assets/heroImage5.jpg"
import {Link} from "react-scroll"
function Home() {
  return (
    <div name="home" className=' min-h-screen bg-black w-full  '>
      <div className='max-w-screen-lg h-min mx-auto my-auto flex flex-col items-center justify-center pt-24 px-4 md:flex-row '>
        <div className='text-white h-full flex flex-col justify-center gap-10 md:gap-0 '>
          <h2 className='text-5xl sm:text-7xl font-bold text-white pt-7 md:pt-0 '>I'm a Full Stack Developer</h2>
          <p className='text-gray-500 max-w-md py-4 text-2xl md:text-xl'>Currently, I love to work on web application using technology like React, Node, Express, MongoDB</p>
          <div>
            <Link to='projects' smooth ="500" className='group cursor-pointer text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-black to-gray-400 font-bold'>
              Projects
              <span className='pl-2 group-hover:rotate-90 duration-300'>
                <FaArrowRight size={15} />
              </span>
            </Link>
          </div>
        </div>
        <div className='hidden justify-center items-center md:flex '>
          <img src={heroImage} alt="my profile image " className=' md:w-full w-full  rounded-[30px]  mx-auto  ' />
        </div>
      </div>
    </div>
  )
}

export default Home
