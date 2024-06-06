import React from 'react'
import css from "../assets/css.png"
import github from "../assets/github.png"
import html from "../assets/html.png"
import javascript from "../assets/javascript.png"
import node from "../assets/node.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import express from "../assets/expresslogo.png"
import java from "../assets/Java-Logo.png"
import mongodb from "../assets/mpngoDB.png"


function Skills() {

    const tech = [
        {
            id: 1,
            src: html,
            shadow: "shadow-orange-500",
            tech: "HTML"
        },
        {
            id: 2,
            src: css,
            shadow: "shadow-blue-500",
            tech: "CSS"
        },
        {
            id: 3,
            src: javascript,
            shadow: "shadow-yellow-500",
            tech: "Java Script"
        },
        {
            id: 4,
            src: react,
            shadow: "shadow-blue-500",
            tech: "React.JS"
        },
        {
            id: 5,
            src: tailwind,
            shadow: "shadow-blue-500",
            tech: "Tailwind"
        },
        {
            id: 6,
            src: node,
            shadow: "shadow-green-500",
            tech: "Node.JS"
        },
        {
            id: 7,
            src: express,
            shadow: "shadow-yellow-500",
            tech: "Express.JS"
        },
        {
            id: 8,
            src: mongodb,
            shadow: "shadow-green-500",
            tech: "MongoDB"
        },
        {
            id: 9,
            src: java,
            shadow: "shadow-red-500",
            tech: "Java"
        },
        {
            id: 10,
            src: github,
            shadow: "shadow-white",
            tech: "Github"
        },

    ]
    return (
        <div name ="skills" className='min-h-screen  bg-black text-white flex flex-col justify-center items-center pt-10'>
            <div className='py-8'>
                <p className='inline text-4xl border-b-2  text-white font-bold'>Skills</p>
            </div>
            <div className='py-8 text-gray-500'>
                <p className='text-xl inline  border-b-4 border-gray-500 '>I have worked with these technology</p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-14 md:mx-20 mx-10 py-8'>

                {tech.map((techno) => (
                    <div key={techno.id}>
                        <div className={`flex flex-col justify-center items-center hover:scale-105 shadow-md ${techno.shadow}`}>
                            <div className={` rounded-lg `}>
                                <img src={techno.src} alt="" className='rounded-lg h-full px-2 pt-2 md:px-16 ' />
                                <div className='py-8 text-center'>
                                    <p className='text-xl text-white font-medium'>{techno.tech}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
