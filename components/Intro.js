import { IoMdMail } from "react-icons/io"
import { FaGithub, FaLinkedin, FaTelegramPlane, FaTwitter } from "react-icons/fa"
import Image from 'next/image'

const Intro = () => {
    return (
        <section id="home" className="flex max-w-screen-lg justify-between items-center w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 min-h-screen 2xl:min-h-[660px] mx-auto font-inter text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <div className=" flex flex-col-reverse sm:flex-row justify-between items-center h-full w-full">
                <div>
                    <h3 className="md:text-xl text-lg  mb-3 dark:text-slate-300 text-slate-700">Hello 🖐 I&lsquo;m Faqih Madani</h3>
                    <div className="flex flex-col text-3xl md:text-4xl font-extrabold space-y-2 mb-7">
                        <h1>a <span className=" text-transparent bg-gradient-to-tr dark:from-blue-400 from-blue-700 to-blue-400 dark:to-blue-300 bg-clip-text">front-end developer</span></h1>
                        <h1>who loves to build</h1>
                        <h1 className="text-transparent bg-gradient-to-tr dark:from-blue-400 from-blue-700 to-blue-400 dark:to-blue-300 bg-clip-text">beautiful website</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="mailto:faqihmadani123@gmail.com" className="flex items-center justify-center px-6 py-2 font-inter text-sm text-blue-100 transition-colors duration-300 bg-blue-500 rounded-full shadow-md hover:bg-blue-600 dark:shadow-blue-400/20 shadow-blue-800/30">
                            <IoMdMail className="mr-2" />
                            Contact Me
                        </a>
                        <a href="https://github.com/faqihmadani" target="_blank" rel="noreferrer">
                            <FaGithub className="w-5 h-5 dark:text-slate-500 text-slate-500 hover:text-slate-700  dark:hover:text-slate-600 transition-colors duration-300" />
                        </a>
                        <a href="https://www.linkedin.com/in/faqihmadani/" target="_blank" rel="noreferrer">
                            <FaLinkedin className="w-5 h-5 dark:text-slate-500 text-slate-500 hover:text-slate-700  dark:hover:text-slate-600 transition-colors duration-300" />
                        </a>
                        <a href="https://twitter.com/madaniui" target="_blank" rel="noreferrer">
                            <FaTwitter className="w-5 h-5 dark:text-slate-500 text-slate-500 hover:text-slate-700  dark:hover:text-slate-600 transition-colors duration-300" />
                        </a>
                        <a href="https://t.me/madani_22" target="_blank" rel="noreferrer">
                            <FaTelegramPlane className="w-5 h-5 dark:text-slate-500 text-slate-500 hover:text-slate-700  dark:hover:text-slate-600 transition-colors duration-300" />
                        </a>
                    </div>
                </div>
                <div className="flex w-6/12 justify-center pt-20 sm:pt-0 mb-10 sm:mb-0">
                    <div className="relative flex items-center justify-center">
                        {/* <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-blue-700 to-blue-400 absolute "></div> */}
                        {/* <div className="w-[280px] h-[280px] rounded-full transition-colors duration-300 dark:bg-slate-900 bg-slate-300 absolute "></div> */}
                        <img src="/profil-blue.png" alt="hero-image" className=" z-30 w-[140px]  sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;