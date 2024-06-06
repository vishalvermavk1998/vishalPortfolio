import React from 'react'
import ChatApplication from "../assets/ChatApplication.png"
import todos from "../assets/Todos.png"


function Projects() {

  const projects = [
    {
      id: 1,
      src: ChatApplication,
      heading: "Chat Application",
      herf : 'https://github.com/vishalvermavk1998/chatApp',
      about: (
        <ul className=' text-white flex flex-col justify-start   '>
        <li className=' mb-2 '> <b> Frontend Development:</b> Used React.js, Redux Toolkit, and Tailwind for a modern UI.</li>
        <li className=' mb-2 ' ><b> Authentication:</b> Implemented JWT and bcrypt for secure login and registration.</li>
        <li className=' mb-2 '> <b> Real-time Communication:</b> Integrated Socket.IO for instant messaging.</li>
        <li className=' mb-2 '> <b> Backend:</b> Created a RESTful API with Node.js, Express.js, and MongoDB for efficient data management.</li>
        </ul>
      )
    },
    {
      id: 2,
      src: todos,
      heading: "Todos App",
      herf : 'https://github.com/vishalvermavk1998/todoUsingRedux',
      about: (
        <ul className=' text-white flex flex-col justify-start   '>
        <li className=' mb-2 '> <b> Frontend </b> Created a responsive UI with React.js and Tailwind CSS, Redux Toolkit Library</li>
        <li className=' mb-2 ' ><b>State Management:</b> Use Redux Toolkit for state management</li>
        <li className=' mb-2 '> <b> Todos Rendering: </b>  Implemented JavaScript logic for todos</li>
        <li className=' mb-2 '> <b> UI Design: </b> Designed an intuitive interface with input fields and todos lists. </li>
        </ul>
      )
    },

  ]

  return (
    <div name="projects" className='min-h-screen bg-black text-white flex flex-col justify-center items-center pt-12'>
      <div className='py-8'>
        <p className='inline text-4xl    border-b-2 text-white font-bold'>Projects</p>
      </div>
      <div className='py-8 text-white'>
        <p className='text-xl inline  border-b-4 border-white '>Check out some of my work here</p>
      </div>

      <div className='flex flex-col justify-center items-center gap-6 md:mx-20 mx-10'>

        {projects.map((project) => (
          <div key={project.id}>
            <div className={`shadow-md shadow-gray-400 rounded-lg flex justify-center items-center flex-col md:flex-row `}>
              <img src={project.src} alt="" className='rounded-lg md:w-1/3 w-full ' />
              <div className='w-2/3 md:p-4 mt-2'>
                <h6 className='my-4 text-2xl font-bold border-b-2'>{project.heading}</h6>
               {project.about}
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <a href={project.herf} target='_blank' className='text-xl my-6  w-1/2 py-4 rounded-2xl bg-gradient-to-l from-black to-gray-400 hover:scale-105 text-center text-white font-bold'> {project.heading} </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
