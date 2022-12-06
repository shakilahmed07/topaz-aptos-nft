import React from 'react'
import { GiStripedSun } from 'react-icons/gi';

const PoweredBy = () => {
    return (
        <div className="py-16 dark:border-stone-800">
            <div className="mx-auto flex max-w-screen-sm flex-col items-center">
                <div className="flex flex-row font-[500] items-center gap-4 text-xl text-gray-400">
                    <div className='text-2xl opacity-50'><GiStripedSun /></div>
                    <div>Powered by Aptos</div>
                </div>
                <div className="py-8 text-5xl text-black dark:text-white font-bold">gm, Aptos</div>
                <div className="px-8 text-2xl font-[500] text-gray-500 dark:text-stone-400">
                    Topaz is an NFT marketplace built on the powerful Aptos blockchain, with a focus on safety and scalability.
                    <br />
                    <br />
                    <span >Learn more about Aptos here</span>
                </div>
            </div>
        </div>
    )
}

export default PoweredBy