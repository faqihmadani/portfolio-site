import ButtonPrimary from "./ButtonPrimary";
import { IoMdMail } from "react-icons/io"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"


const Intro = () => {
    return (
        <section id="home" className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto font-inter text-slate-900 dark:text-slate-100 transition-colors duration-300 mt-20">
            <div className="pt-10">
                <h3 className="text-xl mb-3 dark:text-slate-300 text-slate-700">Hello 🖐 I'm Faqih Madani</h3>
                <div className="flex flex-col text-4xl font-extrabold space-y-2 mb-7">
                    <h1>a <span className=" text-transparent bg-gradient-to-tr dark:from-blue-400 from-blue-700 to-blue-400 dark:to-blue-300 bg-clip-text">front-end developer</span></h1>
                    <h1>who loves to build</h1>
                    <h1 className="text-transparent bg-gradient-to-tr dark:from-blue-400 from-blue-700 to-blue-400 dark:to-blue-300 bg-clip-text">beautiful website</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <button class="flex items-center justify-center px-6 py-2 font-inter text-sm text-blue-100 transition-colors duration-300 bg-blue-500 rounded-full shadow-md hover:bg-blue-600 dark:shadow-blue-400/20 shadow-blue-800/30">
                        <IoMdMail className="mr-2" />
                        Contact Me
                    </button>
                    <a href="">
                        <FaGithub className="w-5 h-5 text-slate-500" />
                    </a>
                    <a href="">
                        <FaLinkedin className="w-5 h-5 text-slate-500" />
                    </a>
                    <a href="">
                        <FaTwitter className="w-5 h-5 text-slate-500" />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Intro;