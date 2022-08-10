import { MdFileDownload } from 'react-icons/md'


const AboutMe = () => {
    const skills = ['NextJs', 'ReactJS', 'SvelteJS', 'Tailwind', 'Github', 'Vercel', 'HTML', 'CSS', 'Javascript']


    return (
        <section id="about" className="flex items-center max-w-screen-lg justify-between w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 min-h-screen xl:min-h-[564px] mx-auto font-inter text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <div className="w-full">
                <h1 className="text-3xl pt-28 md:pt-10 md:text-4xl font-extrabold text-slate-900 dark:text-slate-100">About Me</h1>
                <div className="w-10/12 text-lg mt-5" >
                    <p>I am an Informatics student at Telkom University, Bandung.</p>

                </div>
                <h2 className="font-semibold mb-3 mt-5">Front-End Skill :</h2>
                <div className="grid grid-cols-3 lg:grid-cols-9  gap-2 ">
                    {skills.map((skill, index) => (
                        <div key={index} className="px-2   py-1 flex items-center justify-center rounded-lg border-[2px] bg-slate-50 dark:bg-slate-700 border-gray-300 dark:border-gray-500 text-slate-900 text-sm dark:text-slate-100  ">
                            <p className=" text-center">{skill}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8 flex">
                    <a target="_blank" rel="noreferrer" className="px-6 flex items-center justify-center hover:cursor-pointer py-2 font-inter text-sm text-blue-100 transition-colors duration-300 bg-blue-500 rounded-full shadow-md hover:bg-blue-600 dark:shadow-blue-400/20 shadow-blue-800/30">
                        <MdFileDownload className='inline mr-2' />
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;