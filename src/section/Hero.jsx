import React from 'react'
import banner from '../assets/hero_banner.jpg'
const Hero = () => {
    return (
        <div className='hero lg:h-[68vh] md:h-[80vh]  h-screen lg:pt-20 md:pt-20 pt-8' >
            <div className='flex lg:flex-row flex-col-reverse lg:items-start  items-center justify-center text py-10'>
                <div className='bg-text lg:w-[35rem] mx-10 flex flex-col lg:items-start lg:text-left items-center text-center'>
                    <button className='mb-6 flex w-[250px] flex-row items-center justify-center rounded-lg bg-green-600 py-2 text-base text-white'>Featured Launchpad Project</button>
                    <p className='text-3xl font-bold text-black dark:text-white'>Aptos Alpha Alpacas</p>
                    <p className='mt-2 text-lg font-[500] leading-7 text-black dark:text-white'>A community of 3333 Alpacas vibing and MOVING <br/> on the Aptos Blockchain. paca paca~ 🦙🅰️🅰️🅰️ 🤗 <br/> 🅿️🅿️🅿️🦙</p>
                    <button className='mt-6 hover:bg-yellow-200 hover:border-yellow-200 flex text-base flex-row items-center justify-center rounded-lg border-2 border-[#FFE32B] bg-[#FFE32B] font-medium text-black hover:cursor-pointer dark:bg-fuchsia-900 dark:border-fuchsia-800 dark:text-white dark:hover:bg-fuchsia-800 dark:hover:border-fuchsia-800 px-4 h-10 flex-shrink-0 whitespace-nowrap' >
                        <span className='text-lg '>Mint Nov 30th</span>
                    </button>
                </div>
                <img src={banner} className="h-[290px] w-[290px] rounded-lg md:h-[280px] md:w-[280px] mb-10" alt='banner'/>
            </div>
        </div>
    )
}

export default Hero