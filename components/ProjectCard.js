import Image from "next/image";
import { FaGithub } from "react-icons/fa"
import { TbWorld } from "react-icons/tb"

const ProjectCard = ({ data }) => {
    return (
        <div className="rounded-xl bg-slate-50 dark:bg-slate-700 flex flex-col shadow-lg hover:shadow-xl min-h-[500px] border border-gray-300 dark:border-gray-500 hover:scale-105 transition-transform  dark:hover:shadow-gray-300/10  ">
            <Image className=" rounded-t-xl" src={data.img} height={"60%"} width={"100%"} layout="responsive" objectFit="cover" quality={100} alt="project image" />
            <div className="p-6 flex flex-col justify-between">
                <div>
                    <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
                    <p>{data.desc}</p>
                    <div className="flex space-x-2">
                        {data.stacks.map((stack, index) => (
                            <div key={index} className="px-2 mt-5 py-1 flex items-center rounded-2xl border-[2px] border-gray-400 dark:border-gray-300 text-slate-900 text-xs dark:text-slate-100  ">
                                <p className=" text-center">{stack}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex space-x-4 items-center mt-8">
                    {data.demo ? 
                        <>
                            <a href={data.demo} target="_blank" rel="noreferrer" className="flex items-center justify-center px-6 py-2 font-inter text-sm text-blue-100 transition-colors duration-300 bg-blue-500 rounded-full shadow-md hover:bg-blue-600 dark:shadow-blue-400/20 shadow-blue-800/30">
                                <TbWorld className="mr-2" />
                                Visit Website
                            </a>
                            <a href={data.github} target="_blank" rel="noreferrer">
                                <FaGithub className="w-7 h-7 dark:text-slate-300 text-slate-500 hover:text-slate-700  dark:hover:text-slate-400 transition-colors duration-300" />
                            </a>
                        </> :

                        <a href={data.demo} target="_blank" rel="noreferrer" className="flex items-center justify-center px-6 py-2 font-inter text-sm text-blue-100 transition-colors duration-300 bg-blue-500 rounded-full shadow-md hover:bg-blue-600 dark:shadow-blue-400/20 shadow-blue-800/30">
                            <FaGithub className="mr-2" />
                            Visit Github
                        </a>
                    }
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;