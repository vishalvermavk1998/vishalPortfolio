import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from "react-icons/bs"
import resume from "../assets/mernVishalVerma.pdf"

function SocialLinks() {

    const links = [
        {
            id: 1,
            child: (
                <div className='flex justify-between items-center w-full'><span className='pr-3'> Linkedin</span><FaLinkedin size={30} /></div>
            ),
            href: "https://www.linkedin.com/in/vishal-verma-912a1626b",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <div className='flex justify-between items-center w-full'><span className='pr-3'> Github</span><FaGithub size={30} /></div>
            ),
            href: "https://github.com/vishalvermavk1998"
        },
        {
            id: 3,
            child: (
                <div className='flex justify-between items-center w-full'><span className='pr-3'> Mail</span><HiOutlineMail size={30} /></div>
            ),
            href: "mailto:vishalvermavk1998@gmail.com"
        },
        {
            id: 4,
            child: (
                <div className='flex justify-between items-center w-full'><span className='pr-3'> Resume</span><BsFillPersonLinesFill size={30} /></div>
            ),
            style: "rounded-br-md",
            href: resume ,
            download: "mernVishalVerma.pdf"
        }

    ]

    return (
        <div className='flex-col top-[35%] left-0 fixed hidden lg:flex'>

            <ul>
                {links.map((link) => (
                    
                    <li key={link.id}
                    
                        className={`flex justify-between items-center w-36 h-11 px-4 bg-gray-500 ml-[-80px] hover:ml-[-10px] hover:rounded-md duration-300 mb-1 ${links.style}`}>

                        <a href={link.href} className=' w-full text-white' target='_blank' download={link.download ? link.download : undefined}>
                            {link.child}
                        </a>
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default SocialLinks
