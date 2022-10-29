import { MdFileDownload } from 'react-icons/md'


const AboutMe = () => {
    const skills = ['NextJs', 'ReactJS', 'SvelteJS', 'Tailwind', 'Github', 'Vercel', 'HTML', 'CSS', 'Javascript']


    return (
        <section id="about" className="flex items-center max-w-screen-lg justify-between w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 min-h-screen xl:min-h-[564px] mx-auto font-inter text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <div className="w-full">
                <h1 className="text-3xl pt-28 md:pt-10 md:text-4xl font-extrabold text-slate-900 dark:text-slate-100">About Me</h1>
                <div className=" text-lg mt-5 flex md:flex-row md:items-center justify-between" >
                    <div className='md:mr-10 md:w-4/6'>
                        <p>
                            Hi! I am Faqih Madani an Informatics student at Telkom University, Bandung.
                            My interests are in Front End Engineering, and I love to create
                            beautiful and performant products with delightful user experiences.

                        </p>

                        <p className='mt-2 mx-auto'>
                            In my free time, I also like to play futsal and table tennis with my friends.
                        </p>
                    </div>

                    <div className='w-1/3 hidden md:block'>
                        <img src="hero-img.png" alt="faqih-madani" className='w-4/6 mx-auto' />

                    </div>

                </div>
                <h2 className="font-semibold text-xl mb-3 mt-5">Front-End Skills :</h2>
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