import { Data } from "./DataProjects";
import ProjectCard from "./ProjectCard";
import { FaGithub } from "react-icons/fa"

const Projects = () => {
    return (
        <section id="projects" className="flex items-center max-w-screen-lg justify-between w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 min-h-screen xl:min-h-[564px] mx-auto font-inter text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <div className="w-full">
                <h1 className="text-3xl pt-28 md:pt-10 md:text-4xl font-extrabold text-slate-900 dark:text-slate-100">Selected Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-16 md:gap-8 mt-8">
                    {Data.map(((aData, index) => (
                        <ProjectCard data={aData} key={index} />
                    )))}
                </div>
                <div className="flex justify-center mt-10">
                    <a className="flex text-sm md:text-base items-center py-2 px-5 border-slate-500 text-slate-700 dark:border-slate-400 dark:text-slate-400 border-[2px] rounded-full" href="https://github.com/faqihmadani" target="_blank" rel="noreferrer">
                        See Other Projects on My Github
                        <FaGithub className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;