import React from 'react'
import { AiOutlineTwitter, AiOutlineSearch } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';

const Explore = () => {
    return (
        <div className='flex flex-col items-center justify-center py-5 dark:border-stone-800 md:px-0 text-center'>
            <p className='text-black dark:text-white text-3xl font-[700] my-3'>Create, collect & explore NFTs on Aptos</p>
            <button className='my-3 hover:bg-yellow-200 hover:border-yellow-200 flex text-base flex-row items-center justify-center rounded-lg border-2 border-[#FFE32B] bg-[#FFE32B] font-medium text-black hover:cursor-pointer dark:bg-fuchsia-900 dark:border-fuchsia-800 dark:text-white dark:hover:bg-fuchsia-800 dark:hover:border-fuchsia-800 px-4 h-10 flex-shrink-0 whitespace-nowrap' >
                <span className='text-lg '>Explore</span>
            </button>
            <p className='text-black dark:text-white flex my-3'>
                <AiOutlineTwitter className='text-3xl mx-2' />
                <SiDiscord className='text-3xl mx-2' />
            </p>
        </div>
    )
}

export default Explore