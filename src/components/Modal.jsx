import React from "react";
import { useRef, useState } from 'react'
import { AiOutlineArrowRight, AiOutlineClose } from 'react-icons/ai'
import pontam from '../assets/pontam.png'
import raise from '../assets/raise.svg'
import ImportWallet from './ImportWallet'

export default function Modal({ setShowModal, showModal }) {
    const [walletImport, setWalletImport] = useState(false);

    const cancelButtonRef = useRef(null)

    const menus = [
        { name: 'Petra', popular: false, img: pontam },
        { name: 'Blocto', popular: false, img: "https://raw.githubusercontent.com/hippospace/aptos-wallet-adapter/main/logos/blocto.svg" },
        { name: 'Rise Wallet', popular: true, img: raise },
        { name: 'Pontem', popular: true, img: "https://www.gitbook.com/cdn-cgi/image/width=20,height=20,fit=contain,dpr=2,format=auto/https%3A%2F%2F736486047-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MVVJKmKQGx983dZy_jr%252Favatar-1619180126965.png%3Fgeneration%3D1619180127194239%26alt%3Dmedia" },
        { name: 'Fletch', popular: false, img: "https://i.ibb.co/7p6fRK4/download.png" },
        { name: 'Martain', popular: false, img: "https://raw.githubusercontent.com/hippospace/aptos-wallet-adapter/main/logos/martian.png" },
        { name: 'Fewcha', popular: false, img: "https://miro.medium.com/fit/c/176/176/1*a0WaY-q7gjCRiuryRG6TkQ.png" },
    ]
    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="transition-10 duration-50 justify-center items-center flex fixed inset-0  top-96 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative my-6 mx-auto ounded-lg">
                            <div >
                                {
                                    !walletImport ?
                                        <div className='lg:w-[500px] w-[23rem] py-8 px-4 flex transform flex-col gap-8 overflow-hidden border-[1px] border-gray-50 bg-white p-6 text-left align-middle drop-shadow-2xl transition-all dark:border-stone-800 dark:bg-stone-900 opacity-100 scale-100'>
                                            <div className='flex  relative w-full flex-row items-center justify-center text-center  font-semibold leading-6 text-gray-400'>
                                                <p className='text-lg'>Connect a Wallet</p>
                                                <p className='absolute top-1 left-5 text-xl cursor-pointer'
                                                    onClick={() => setShowModal((prevState) => !prevState)}
                                                    ref={cancelButtonRef}
                                                ><AiOutlineClose /></p>
                                            </div>

                                            <div className='flex px-2  flex-col items-center transition duration-300 '>

                                                {
                                                    menus.map((menu) => (
                                                        <div onClick={() => setWalletImport((pre) => !pre)} className='hover:bg-gray-100 dark:hover:bg-stone-800 cursor-pointer flex items-center justify-between px-3 my-1 w-full py-3 rounded-2xl'>
                                                            <div className='flex items-center'>
                                                                <img className='w-10 mr-5' src={menu.img} alt="" />
                                                                <p className='text-left text-black dark:text-white text-lg font-[500]'>{menu.name}</p>
                                                            </div>
                                                            <div className='flex items-center'>
                                                                {menu.popular && (
                                                                    <div class="rounded-md mr-4 bg-green-500 px-2 py-1 text-sm font-bold uppercase text-white">Popular</div>
                                                                )}
                                                                <AiOutlineArrowRight className='bg-[#cccccc] dark:bg-[#494745] text-white dark:text-black p-2 rounded-2xl text-3xl' />
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <p className="px-4 pb-2 pt-4 text-sm text-gray-400 dark:text-stone-400">By connecting your wallet and using Topaz,  <br/> you agree to our Terms of Service <br/> and Privacy Policy.</p>
                                        </div>
                                        :
                                        <ImportWallet />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}