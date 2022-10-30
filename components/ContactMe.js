import { FaLinkedin, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const ContactMe = () => {
    return (
        <section id="contact" className="flex items-center max-w-screen-lg justify-between w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 min-h-screen xl:min-h-[564px] mx-auto font-inter text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <div className="w-full pb-24 md:pb-32">
                <h1 className="text-3xl pt-28 md:pt-10 md:text-4xl font-extrabold text-slate-900 dark:text-slate-100">Contact Me</h1>
                <p className="text-lg mt-5">If you interested to work with me or just want to make a friendship with me, please contact me on one of my social media accounts.</p>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="px-10 py-3 flex flex-col items-center justify-center rounded-lg border-[2px] bg-slate-50 dark:bg-slate-700 border-gray-300 dark:border-gray-500 text-slate-900 text-sm dark:text-slate-100  ">
                        <MdEmail className="w-5 h-5 mb-3" />
                        <h1 className="text-lg bold">Email</h1>
                        <p className="mt-1">faqihmadani123@gmail.com</p>
                        <a href="mailto:faqihmadani123@gmail.com" className="dark:text-blue-400 text-blue-600 font-medium mt-3 block text-md">Send Message</a>
                    </div>
                    <div className="px-10 py-3 flex flex-col items-center justify-center rounded-lg border-[2px] bg-slate-50 dark:bg-slate-700 border-gray-300 dark:border-gray-500 text-slate-900 text-sm dark:text-slate-100  ">
                        <FaLinkedin className="w-5 h-5 mb-3" />
                        <h1 className="text-lg bold">LinkedIn</h1>
                        <p className="mt-1">Muhammad Faqih Madani</p>
                        <a href="https://www.linkedin.com/in/faqihmadani/" target="_blank" rel="noreferrer" className="dark:text-blue-400 text-blue-600 font-medium mt-3 block text-md">Send Message</a>
                    </div>
                    <div className="px-10 py-3 flex flex-col items-center justify-center rounded-lg border-[2px] bg-slate-50 dark:bg-slate-700 border-gray-300 dark:border-gray-500 text-slate-900 text-sm dark:text-slate-100  ">
                        <FaTwitter className="w-5 h-5 mb-3" />
                        <h1 className="text-lg bold">Twitter</h1>
                        <p className="mt-1">@madaniui</p>
                        <a href="https://twitter.com/madaniui" target="_blank" rel="noreferrer" className=" dark:text-blue-400 text-blue-600 font-medium mt-3 block text-md">Send Message</a>

                    </div>
                    <div className="px-10 py-3 flex flex-col items-center justify-center rounded-lg border-[2px] bg-slate-50 dark:bg-slate-700 border-gray-300 dark:border-gray-500 text-slate-900 text-sm dark:text-slate-100  ">
                        <FaTelegramPlane className="w-5 h-5 mb-3" />
                        <h1 className="text-lg bold">Telegram</h1>
                        <p className="mt-1">@madani_22</p>
                        <a href="https://t.me/madani_22" target="_blank" rel="noreferrer" className=" dark:text-blue-400 text-blue-600 font-medium mt-3 block text-md">Send Message</a>

                    </div>
                    {/* <div className="mt-5 md:mt-0 md:w-2/3">
                        <form name="contact" method="POST" data-netlify="true" className="mb-6" data-netlify-honeypot="bot-field">
                            <input type="hidden" name="form-name" value="contact" />
                            <input name="bot-field" className="hidden" /> */}
                    {/* <label for="name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Full Name : </label> */}
                    {/* <input name="name" type="text" placeholder="Your full name" id="name" className="text-lg mt-0 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required /> */}

                    {/*     <label for="email" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Email : </label> */}
                    {/* <input name="email" type="email" placeholder="Your email" id="email" className="mt-5 text-lg bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            <textarea name="message" id="message" rows="4" className="mt-5 block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                            <button type="submit" className="mt-5 px-6 flex items-center justify-center hover:cursor-pointer py-2 font-inter text-sm text-blue-100 transition-colors duration-300 bg-blue-500 rounded-full shadow-md hover:bg-blue-600 dark:shadow-blue-400/20 shadow-blue-800/30" required>
                                <IoMdSend className='inline mr-2' />
                                Send Message
                            </button>
                        </form>

                    </div> */}
                </div>

            </div>
        </section >
    );
}

export default ContactMe;