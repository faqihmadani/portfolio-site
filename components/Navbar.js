import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image'
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"

const Navbar = ({ handleDarkMode }) => {
    const [border, setBorder] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const handleChangeBorder = () => {
        if (window.scrollY >= 20) {
            setBorder(true)
        } else {
            setBorder(false)
        }
    }

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    window.addEventListener('scroll', handleChangeBorder)

    return (
        <header className='fixed w-full z-50'>
            <div className="w-full dark:bg-slate-900 bg-slate-100 py-4 font-inter transition-colors duration-300 z-30 ">
                <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 max-w-screen-lg mx-auto text-slate-900 dark:text-slate-100 flex items-center justify-between">
                    {isOpen ? <FaTimes className="text-blue-500 sm:hidden text-xl " onClick={handleIsOpen} /> : <FaBars className="text-blue-500 sm:hidden text-xl " onClick={handleIsOpen} />}
                    <nav className="sm:flex hidden items-center space-x-5">
                        <a className="flex items-center mr-10" href="#home">
                            <div className='dark:hidden flex items-center'>
                                <Image alt='logo' src='/logo-dark.svg' width={20} height={20} />
                            </div>
                            <div className='hidden dark:flex items-center'>
                                <Image alt='logo' src='/logo-light.svg' width={20} height={20} />
                            </div>
                        </a>
                        {/* <a className="py-1 px-4 rounded-lg dark:text-slate-400 dark:hover:text-slate-100 text-slate-600 hover:text-slate-900  dark:border-slate-900 hover:bg-blue-200 dark:hover:bg-slate-700 transition-all duration-300" href="#home">Home</a> */}
                        <a className="py-1 font-medium px-4 rounded-lg dark:text-slate-400 dark:hover:text-slate-100 text-slate-500 hover:text-slate-900  dark:border-slate-900 hover:bg-blue-200 dark:hover:bg-slate-700 transition-all duration-300" href="#projects">Projects</a>
                        <a className="py-1 font-medium px-4 rounded-lg dark:text-slate-400 dark:hover:text-slate-100 text-slate-500 hover:text-slate-900  dark:border-slate-900 hover:bg-blue-200 dark:hover:bg-slate-700 transition-all duration-300" href="#about">About</a>
                        <a className="py-1 font-medium px-4 rounded-lg dark:text-slate-400 dark:hover:text-slate-100 text-slate-500 hover:text-slate-900  dark:border-slate-900 hover:bg-blue-200 dark:hover:bg-slate-700 transition-all duration-300" href="#contact">Contact</a>
                    </nav>
                    <button onClick={handleDarkMode} className="dark:bg-slate-700 bg-blue-300 p-2 rounded dark:hover:bg-slate-800 hover:bg-blue-200 transition-colors duration-300">
                        <FaMoon className=" text-blue-700 dark:hidden block" />
                        <FaSun className=" text-slate-100 hidden dark:block " />
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {border || isOpen ?
                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ opacity: 0 }} transition={{ type: "tween" }} className='w-full h-[3px] bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-700 dark:to-blue-500 absolute z-40'></motion.div> : ""
                }
            </AnimatePresence>
            <AnimatePresence>
                {isOpen && <motion.nav initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ type: "tween" }} className="flex  items-start flex-col justify-center transition-colors duration-300 bg-slate-100 dark:bg-slate-900 space-y-3 py-2 border-b-[2px] border-slate-300 dark:border-gray-800">
                    {/* <a className="flex items-center" href="#home">
                    <div className='dark:hidden flex items-center'>
                        <Image src='/logo-dark.svg' width={20} height={20} />
                    </div>
                    <div className='hidden dark:flex items-center'>
                        <Image src='/logo-light.svg' width={20} height={20} />
                    </div>
                </a> */}
                    {/* <a className="py-1 px-4 rounded-lg dark:text-slate-400 dark:hover:text-slate-100 text-slate-600 hover:text-slate-900  dark:border-slate-900 hover:bg-blue-200 dark:hover:bg-slate-700 transition-all duration-300" href="#home">Home</a> */}
                    <a className="py-2 font-medium px-4 rounded-lg dark:text-slate-400 dark:hover:text-slate-100 text-slate-500   dark:border-slate-900 transition-all duration-300" href="#projects">Projects</a>
                    <a className="py-2 font-medium px-4 rounded-lg dark:text-slate-400 dark:hover:text-slate-100 text-slate-500   dark:border-slate-900 transition-all duration-300" href="#about">About</a>
                    <a className="py-2 font-medium px-4 rounded-lg dark:text-slate-400 dark:hover:text-slate-100 text-slate-500   dark:border-slate-900 transition-all duration-300" href="#contact">Contact</a>
                </motion.nav>}
            </AnimatePresence>
        </header>
    );
}

export default Navbar;