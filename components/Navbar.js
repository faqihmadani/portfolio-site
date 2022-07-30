import { FaMoon, FaSun } from 'react-icons/fa';
import Image from 'next/image'
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"

const Navbar = ({ handleDarkMode }) => {
    const [border, setBorder] = useState(false)

    const handleChangeBorder = () => {
        if (window.scrollY >= 20) {
            setBorder(true)
        } else {
            setBorder(false)
        }
    }

    window.addEventListener('scroll', handleChangeBorder)

    return (
        <header className='fixed w-full z-50'>
            <div className="w-full dark:bg-slate-900 bg-slate-300 py-4 font-inter transition-colors duration-300 ">
                <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto text-slate-900 dark:text-slate-100 flex justify-between">
                    <nav className="flex items-center space-x-5">
                        <a className="flex items-center mr-10" href="#home">
                            <div className='dark:hidden flex items-center'>
                                <Image src='/logo-dark.svg' width={20} height={20} />
                            </div>
                            <div className='hidden dark:flex items-center'>
                                <Image src='/logo-light.svg' width={20} height={20} />
                            </div>
                        </a>
                        <a className="py-1 px-4 rounded-lg dark:text-slate-400 dark:hover:text-slate-100 text-slate-600 hover:text-slate-900  dark:border-slate-900 hover:bg-blue-300 dark:hover:bg-slate-700 transition-all duration-300" href="#home">Home</a>
                        <a className="py-1 px-4 rounded-lg dark:text-slate-400 dark:hover:text-slate-100 text-slate-600 hover:text-slate-900  dark:border-slate-900 hover:bg-blue-300 dark:hover:bg-slate-700 transition-all duration-300" href="#projects">Projects</a>
                        <a className="py-1 px-4 rounded-lg dark:text-slate-400 dark:hover:text-slate-100 text-slate-600 hover:text-slate-900  dark:border-slate-900 hover:bg-blue-300 dark:hover:bg-slate-700 transition-all duration-300" href="#about">About</a>
                        <a className="py-1 px-4 rounded-lg dark:text-slate-400 dark:hover:text-slate-100 text-slate-600 hover:text-slate-900  dark:border-slate-900 hover:bg-blue-300 dark:hover:bg-slate-700 transition-all duration-300" href="#contact">Contact</a>
                    </nav>
                    <button onClick={handleDarkMode} className="dark:bg-slate-700 bg-blue-500 p-2 rounded dark:hover:bg-slate-800 hover:bg-blue-600 transition-colors duration-300">
                        <FaMoon className=" text-blue-200 dark:hidden block" />
                        <FaSun className=" text-slate-100 hidden dark:block " />
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {border &&
                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ opacity: 0 }} transition={{ type: "tween" }} className='w-full h-[3px] bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-700 dark:to-blue-500'></motion.div>
                }
            </AnimatePresence>

        </header>
    );
}

export default Navbar;