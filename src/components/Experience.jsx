import React from 'react'

function Experience() {
  return (
    <div id='experience' name="experience" className='w-full min-h-screen bg-black text-white leading-[5px] pt-20 '>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full'>
        <div className='pb-2'>
            <p className='text-4xl font-bold inline border-b-2 border-white'> Experience</p>
        </div>
        <p className='text-2xl mt-10'> Company Name : Coding Pulse </p> <br /> <br />
        <p className='text-xl'>I have done 3 months of training in Web Development from Coding Pulse, Rohtak <br /> 
        I have implemented a chat application there using the technologies : <br />
        React.Js, Node.JS, Express.JS, MongoDB, Tailwind, CSS, HTML
         </p>
         <a href = "../public/mernVishalVerma.pdf" download = "mernVishalVerma.pdf" className='text-xl my-6  w-1/2 py-4 text-center rounded-2xl bg-gradient-to-l from-black to-gray-400 hover:scale-105 text-white font-bold'> Download Resume</a>
    </div>

</div>
  )
}

export default Experience
