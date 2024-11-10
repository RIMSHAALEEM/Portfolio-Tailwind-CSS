import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import img2 from "@/app/public/img2.png"
// import Navbar from './Navbar'
const hero = () => {
  return (
    <div className='relative min-h-screen'>
      <Image className='lg:w-[580px] xl:w-[620px] h-auto absolute right-0 top-0 -z-10' src={img2} width={1000} height={600} alt="hero-bgJ"></Image>
     {/* <Navbar/> */}

     <div className='container h-[calc(100vh-120px)] grid items-center'>
        <div className='space-y-4 bg-[#ffffff98] w-fit p-4'>
            <p className='uppercase font-medium '>I am</p>
            <h2 className='text-4xl sm:text-6xl font-bold'>Rimsha <span className='text-orange-500'>Aleem</span></h2>
            <p className='text-gray-700 text-[12px] sm:text-[16px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Expedita, blanditiis suscipit doloremque eos, cupiditate accusantium re </p>
             
            <Link href="/about-us "><button className='bg-orange-500 mt-5 text-white px-6 py-2 rounded-3xl text-[14px] sm:text[16px]'>Read More</button></Link>
        </div>
     </div>
    </div>
  )
}

export default hero
