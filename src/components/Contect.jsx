import React from 'react'
import { CiLinkedin} from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaGithub } from 'react-icons/fa'



function Contect() {

    const formHandler = (e) =>{

       const value =  e.target.value;
       console.log(value);
    }

    const data = [
      {
        id : 1,
        element : (<CiLinkedin />),
        href : "https://www.linkedin.com/in/vishal-verma-912a1626b",
        heading : "Linkdin",
        para : "Click Here"
      },
      {
        id : 2,
        element : (<CiMail />),
        heading : "Mail Id : ",
        para : "vishalvermavk1998@gmail.com"
      },
      {
        id : 3,
        element : (<IoIosPhonePortrait />),
        heading : "Phone No : ",
        para : "9034629329"
      },
      {
        id : 4,
        element : (<FaGithub/>),
        heading : "Github",
        para : "Click Here",
        href : "https://github.com/vishalvermavk1998",
        target : "_blank"
      }
    ]
  return (
    <div name="contect" className='min-h-screen bg-black pt-14'>
      <div className='flex justify-center items-center bg-black py-8'>
        <p className='text-4xl font-bold  inline border-b-2 text-white'>Contect</p>
      </div>
      <div className='text-white text-[100px] flex flex-col md:flex-row justify-center items-center gap-5 md:gap-[100px]'>
      
      { data.map((data) => (
        <a key={data.id}  href={data.href} className='flex flex-col justify-center items-center' target={data.target}>
          {data.element}
          <p className='text-white text-[20px]'>{data.heading}</p>
          <p className='text-white text-[20px]'>{data.para}</p>
        </a>
      ))}
      </div>
    </div>
  )
}

export default Contect
