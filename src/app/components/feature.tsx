import React from 'react'
import Image from 'next/image'
import Dash from "@/app/components/dash"
import grid1 from "@/app/public/BS.jpeg"
import grid2 from "@/app/public/DG.jpeg"
import grid3 from "@/app/public/EC.jpeg"


const feature = () => {
  return (
    <div className='container pl-10 '>
        <h2 className='text-6xl font-bold '>Courses</h2>
        <h2 className='text-6xl font-bold pt-2'>That <span className='text-orange-500'>I Have Done</span></h2>
         <p className='max-w-[550px] pt-10 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam perferendis blanditiis omnis quisquam repellat porro nisi eaque esse illum. Optio eligendi eaque quis harum? Neque eum eaque quibusdam voluptates.</p>
        <Dash/>

        <div className='grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10'>
            {/* first card */}
            <div className='w-fit mx-auto self-end'>
                <Image className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl rounded-3xl " src={grid1} width={300} height={600} alt="grid image"></Image>


                <div className='space-y-4'>
                    <Dash/>
                    <h2 className='font-medium text-xl'>Boostrap</h2>
                    <p className='text-gray-700 text-[14px] xl:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ipsam exercitationem quisquam! Voluptatum eius, quo vel quia ad nesciunt magni. Odio ut fugit sequi fuga eveniet error maiores similique!</p>

                </div>
            </div>

          {/* second card */}
            <div className='w-fit mx-auto '>
                <Image className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl rounded-3xl " src={grid2} width={500} height={900} alt="grid image"></Image>


                <div className='space-y-4'>
                    <Dash/>
                    <h2 className='font-medium text-xl'>Digital Marketing</h2>
                    <p className='text-gray-700 text-[14px] xl:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ipsam exercitationem quisquam! Voluptatum eius, quo vel quia ad nesciunt magni. Odio ut fugit sequi fuga eveniet error maiores similique!</p>

                </div>
             </div>


             {/* third card */}
             <div className='w-fit mx-auto self-end'>
                <Image className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl rounded-3xl" src={grid3} width={300} height={600} alt="grid image"></Image>


                <div className='space-y-4'>
                    <Dash/>
                    <h2 className='font-medium text-xl'>E-Commerce</h2>
                    <p className='text-gray-700 text-[14px] xl:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ipsam exercitationem quisquam! Voluptatum eius, quo vel quia ad nesciunt magni. Odio ut fugit sequi fuga eveniet error maiores similique!</p>

                </div>
             </div>


        </div>
    </div>
  )
}

export default feature
