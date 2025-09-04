import TechnologiesItem from './TechnologiesItem';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkIcon } from './icons/LinkIcon';

type ProjectItemProps = {
    projectTitle: string;
    projectDescription: string;
    projectImage: string;
    technologies: string[];
    gitHunLink: string;
    previewLink: string;
};

function ProjectItem({
    projectTitle,
    projectDescription,
    technologies,
    projectImage,
    gitHunLink,
    previewLink
}: ProjectItemProps) {
    return (
        <aside className=" flex flex-col gap-5 lg:flex-row lg:justify-start">
            <figure className="h-75 w-full rounded-[30px] overflow-hidden border-[0.1px] border-border-color md:min-w-125 md:max-w-125 md:items-center md:m-auto lg:items-start lg:mx-0">
                <img
                    src={projectImage}
                    loading="lazy"
                    className="h-15/10 w-15/10 object-cover object-left-top transition-transform duration-500 hover:scale-125"
                />
            </figure>

            <div className="flex flex-col gap-5 w-full">
                <h3 className="text-3xl text-first-font-color font-bold md:text-center lg:text-left">{projectTitle}</h3>
                <ul className="flex flex-wrap gap-3 md:justify-center w-full lg:justify-start">
                    {technologies.map((item, index) => (
                        <TechnologiesItem key={index} label={item} src={`/projectIcons/${item}.svg`} />
                    ))}
                </ul>
                <p className="text-xl text-first-font-color md:text-center lg:text-left">{projectDescription}</p>
                <div className="flex gap-3">
                    <a
                        href={gitHunLink}
                        target="_blank"
                        className="bg-third-bg-color w-35 h-10 rounded-full flex gap-2 items-center justify-center font-bold font-second-font text-first-font-color hover:scale-110 hover:bg-primary-color transition "
                    >
                        <GitHubIcon />
                        GitHub
                    </a>
                    <a
                        href={previewLink}
                        target="_blank"
                        className="bg-third-bg-color w-35 h-10 rounded-full flex gap-2 items-center justify-center font-bold font-second-font text-first-font-color hover:scale-110 hover:bg-primary-color transition "
                    >
                        <LinkIcon />
                        Preview
                    </a>
                </div>
            </div>
        </aside>
    );
}

export default ProjectItem;
