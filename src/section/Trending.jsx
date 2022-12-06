import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiStripedSun } from 'react-icons/gi';
import { nftslft, nftrgt } from '../utils/mockup'
const Trending = () => {
  return (
    <div className='text-white border-t border-stone-200 flex flex-col items-center border-t-2 py-12 dark:border-stone-800 md:py-12 md:px-0'>
      <div className='mb-8 text-center text-2xl font-bold md:mb-8 md:text-3xl'>
        Trending collections
        <br className='md:hidden' />
        in the past 24 hours
      </div>
      <div className="flex w-full flex-col lg:flex-row lg:gap-8">
        <div className="mx-auto w-full">
          {
            nftslft.map((item, index) => (
              <NavLink key={index} to='/' className="flex  items-center gap-6 border-b-[1px] border-gray-200 py-4 px-6 text-base hover:bg-gray-50 dark:border-stone-800 dark:hover:bg-stone-800">
                <div className="hidden flex-shrink-0 text-center text-gray-400 md:block md:w-[2%]">1</div>
                <div className='flex-shrink-0'><img className="h-10 w-10 rounded-full border-[1px] border-gray-200 bg-gray-200 object-cover text-gray-400 dark:border-stone-800 md:h-16 md:w-16" src={item.img} alt='nft' /></div>
                <div className="grow" />
                <div className="hidden h-full flex-shrink-0 flex-col gap-2 text-center text-xs md:flex md:w-[12%]">
                  <div className="whitespace-nowrap text-gray-400">Volume</div>
                  <div className="text-green-500">+∞%</div>
                  <div className="flex h-full text-black dark:text-white flex-shrink-0 flex-row justify-center gap-2">
                    <div className="w-3 flex-shrink-0 md:w-4"><GiStripedSun /></div>
                    <div>1,503.71</div>
                  </div>
                </div>
                <div className="h-full w-[30%] flex-shrink-0 flex-col items-center gap-2 text-center text-xs md:flex md:w-[10%]">
                  <div className="whitespace-nowrap pb-2 text-gray-400 md:pb-0">Floor Price</div>
                  <div className="flex text-black dark:text-white h-full flex-row items-center justify-center gap-2">
                    <div className="w-3 flex-shrink-0 md:w-4"><GiStripedSun /></div>
                    <div >2.8</div>
                  </div>
                </div>
                <div className="hidden text-black dark:text-white h-full w-[8%] flex-shrink-0 flex-col items-center gap-2 text-center text-xs md:flex md:w-[10%]">
                  <div className="text-gray-400">Items</div>
                  <div>1782</div>
                </div>
              </NavLink>
            ))
          }
        </div>
        <div className="mx-auto w-full">
          {
            nftrgt.map((item, index) => (
              <NavLink key={index} to='/' className="flex  items-center gap-6 border-b-[1px] border-gray-200 py-4 px-6 text-base hover:bg-gray-50 dark:border-stone-800 dark:hover:bg-stone-800">
                <div className="hidden flex-shrink-0 text-center text-gray-400 md:block md:w-[2%]">1</div>
                <div className='flex-shrink-0'><img className="h-10 w-10 rounded-full border-[1px] border-gray-200 bg-gray-200 object-cover text-gray-400 dark:border-stone-800 md:h-16 md:w-16" src={item.img} alt='nft'/></div>
                <div className="grow" />
                <div className="hidden h-full flex-shrink-0 flex-col gap-2 text-center text-xs md:flex md:w-[12%]">
                  <div className="whitespace-nowrap text-gray-400">Volume</div>
                  <div className="text-green-500">+∞%</div>
                  <div className="flex h-full text-black dark:text-white flex-shrink-0 flex-row justify-center gap-2">
                    <div className="w-3 flex-shrink-0 md:w-4"><GiStripedSun /></div>
                    <div>1,503.71</div>
                  </div>
                </div>
                <div className="h-full w-[30%] flex-shrink-0 flex-col items-center gap-2 text-center text-xs md:flex md:w-[10%]">
                  <div className="whitespace-nowrap pb-2 text-gray-400 md:pb-0">Floor Price</div>
                  <div className="flex text-black dark:text-white h-full flex-row items-center justify-center gap-2">
                    <div className="w-3 flex-shrink-0 md:w-4"><GiStripedSun /></div>
                    <div >2.8</div>
                  </div>
                </div>
                <div className="hidden text-black dark:text-white h-full w-[8%] flex-shrink-0 flex-col items-center gap-2 text-center text-xs md:flex md:w-[10%]">
                  <div className="text-gray-400">Items</div>
                  <div>1782</div>
                </div>
              </NavLink>
            ))
          }
        </div>

      </div>
      <div className="mt-10">
        <button className='my-3 hover:bg-yellow-200 hover:border-yellow-200 flex text-base flex-row items-center justify-center rounded-lg border-2 border-[#FFE32B] bg-[#FFE32B] font-medium text-black hover:cursor-pointer dark:bg-fuchsia-900 dark:border-fuchsia-800 dark:text-white dark:hover:bg-fuchsia-800 dark:hover:border-fuchsia-800 px-4 h-10 flex-shrink-0 whitespace-nowrap' >
          <span className='text-lg '>See more</span>
        </button>
      </div>
    </div>
  )
}

export default Trending