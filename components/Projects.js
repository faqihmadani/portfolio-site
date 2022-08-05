import { Data } from "./DataProjects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <section id="projects" className="flex items-center max-w-screen-lg justify-between w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 min-h-screen xl:min-h-[564px] mx-auto font-inter text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <div className="w-full">
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100">Selected Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 mt-8">
                    {Data.map(((aData, index) => (
                        <ProjectCard data={aData} key={index} />
                    )))}
                </div>
            </div>
        </section>
    );
}

export default Projects;