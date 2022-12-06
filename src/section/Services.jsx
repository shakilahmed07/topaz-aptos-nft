import React from 'react'
import {services} from '../utils/mockup';
const Services = () => {

    return (
        <section className="py-10 px-4 dark:border-stone-800 md:px-0">
            <div className="mx-auto flex max-w-screen-lg flex-col items-center gap-8 md:flex-row">
                {
                      services.map((item) => (
                        <div key={item.id} className="md:w-1/3">
                            <div className="flex flex-col items-center rounded-lg border-2 border-gray-200 py-8 px-8 dark:border-stone-800">
                                <div className="text-7xl">{item.icon}</div>
                                <div className="pt-8 text-2xl font-bold text-black dark:text-white">{item.title}</div>
                                <div className="py-6 text-lg text-gray-400 font-[500]">{item.info}</div>
                                <div className='mt-6'></div>
                                <button>
                                    <div className="hover:bg-yellow-200 hover:border-yellow-200 flex text-base
                                                    flex-row items-center justify-center rounded-lg border-2 border-[#FFE32B] bg-[#FFE32B]
                                                    font-medium text-black hover:cursor-pointer
                                                    dark:bg-fuchsia-900 dark:border-fuchsia-800 dark:text-white dark:hover:bg-fuchsia-800 dark:hover:border-fuchsia-800 px-4 h-10 flex-shrink-0 whitespace-nowrap">{item.btn}</div>
                                </button>
                            </div>
                        </div>
                        ))
                }
            </div>
        </section>
    )
}

export default Services