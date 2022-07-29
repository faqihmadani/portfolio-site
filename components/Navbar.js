import { FaMoon, FaSun } from 'react-icons/fa';
import Image from 'next/image'

const Navbar = ({ handleDarkMode }) => {

    return (
        <header className="fixed w-full dark:bg-slate-900 bg-slate-300 py-6 font-inter transition-colors duration-300">
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
                    <a className="px-[2px] border-b-2 border-slate-300 dark:border-slate-900 hover:border-blue-600 dark:hover:border-blue-600 transition-all duration-300" href="#home">Home</a>
                    <a className="px-[2px] border-b-2 border-slate-300 dark:border-slate-900 hover:border-blue-600 dark:hover:border-blue-600 transition-all duration-300" href="#projects">Projects</a>
                    <a className="px-[2px] border-b-2 border-slate-300 dark:border-slate-900 hover:border-blue-600 dark:hover:border-blue-600 transition-all duration-300" href="#about">About</a>
                    <a className="px-[2px] border-b-2 border-slate-300 dark:border-slate-900 hover:border-blue-600 dark:hover:border-blue-600 transition-all duration-300" href="#contact">Contact</a>
                </nav>
                <button onClick={handleDarkMode} className="dark:bg-slate-700 bg-slate-400 p-2 rounded dark:hover:bg-slate-800 hover:bg-slate-500 transition-colors duration-300">
                    <FaMoon className=" text-slate-100 hidden dark:block" />
                    <FaSun className=" text-slate-800 dark:hidden block" />
                </button>
            </div>
        </header>
    );
}

export default Navbar;