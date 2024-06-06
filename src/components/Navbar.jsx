import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from "react-scroll";

function Navbar() {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "about"
        },
        {
            id: 3,
            link: "projects"
        },
        {
            id: 4,
            link: "experience"
        },
        {
            id: 5,
            link: "skills"
        },
        {
            id: 6,
            link: "contect"
        },
    ]
    return (
        <div className='flex items-center justify-between fixed w-full h-20 text-black bg-gradient-to-t from-black to-gray-400'>
            <div>
                <h1 className='font-bold text-5xl font-signature text-white px-4'>Vishal</h1>
            </div>

            <ul className='hidden md:flex'>
                {links.map((link) => (
                    <li key={link.id} className='text-white px-4 capitalize  cursor-pointer hover:scale-105 font-medium   '><Link to={link.link} smooth="500"> <span className='shadow-md  hover:shadow-gray-900 hover:text-black'> {link.link}</span></Link></li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-2 text-white z-10 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center text-4xl text-white  h-screen w-full absolute left-0 top-0 bg-gradient-to-b from-black to-gray-800 '>
                    {links.map((link) => (
                        <li key={link.id} className='px-4 cursor-pointer capitalize py-6'><Link onClick={()=> setNav(!nav)} to={link.link} smooth ="500">{link.link}</Link></li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Navbar
