import React from 'react'


function About() {
    return (
        <div id='about' name="about" className='w-full min-h-screen bg-black text-white leading-[5px] pt-20 '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full'>
                <div className='pb-2'>
                    <p className='text-4xl font-bold inline border-b-2 border-white'> About</p>
                </div>
                <p className='text-xl mt-20'>👋 Hello there! I'm Vishal Verma, a passionate MERN stack developer with a knack for turning ideas into powerful, user-friendly applications. <br />
                    🚀 Armed with a solid foundation in MongoDB, Express.js, React.js,Redux, Node.js, Data structures and Algorithms. I thrive on architecting scalable and efficient solutions. My journey in web development has been a continuous exploration of new technologies and methodologies to stay at the forefront of the ever-evolving tech landscape.</p><br />
                <p className='text-xl'>💻 My love for coding is complemented by a keen eye for design and usability. I believe that an outstanding user experience is just as important as clean and maintainable code. Whether it's creating RESTful APIs, crafting interactive front-end interfaces, or optimizing server-side performance, I am dedicated to delivering top-notch results. </p>
            </div>

        </div>
    )
}

export default About
