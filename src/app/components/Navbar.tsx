"use client";
import React from 'react'
import Link from 'next/link';


const header = () => {
  return (
    <div>
      <nav className="bg-orange-500  text-white h-auto sm:h-12 md:h-16 lg:h-16 py-2 px-3 flex flex-col  sm:flex-row justify-between items-center">
        {/* div for logo side */}
        <div className='flex items-center space-x-2 mb-4 sm:mb-0 '>
        
          <h1 className='text-2xl sm:text-xl md:text-2xl lg-text-2xl font-semibold text-white'>
          <Link href="/" className='hover:text-blue-950 font-serif'>CODE NINJA</Link>
            
          </h1>
          
        </div>
          
         {/* div for menu side  */}
        <div className='w-full sm:w-auto mb-4 sm:mb-0  '>
          <ul className='flex flex-col text-2xl sm:flex-row  space-y-3sm:space-y-0 sm:space-x-6 font-serif'>
            <Link href="/" className='hover:text-blue-950'><li>Home</li></Link>
            <Link href="/about-us"className='hover:text-blue-950'><li>About</li></Link>
            <Link href="/contact-us"className='hover:text-blue-950'><li>  <fieldset> Contact</fieldset></li></Link>
            
          </ul>
        </div>
{/* 
        div for signup and login side */}
        {/* <div className='w-full sm:w-auto'>
            <ul className='flex flex-col sm:flex-row space-y-0 sm:y-0 sm:space-x-4 font-serif '>
                <li><Link href="#!" className='hover:text-blue-950'></Link>LogIn</li>
                <li><Link href="#!" className='hover:text-blue-950'></Link>SignUp</li>
            </ul>
        </div> */}
      </nav>
    </div>
  )
}

export default header
