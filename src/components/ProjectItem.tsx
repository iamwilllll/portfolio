import type { ReactNode } from 'react';

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

type linksListType = {
    name: string;
    href: string;
    icon: ReactNode;
};

function ProjectItem({ projectTitle, projectDescription, technologies, projectImage, gitHunLink, previewLink }: ProjectItemProps) {
    const linksList: linksListType[] = [
        { name: 'GitHub', href: gitHunLink, icon: <GitHubIcon /> },
        { name: 'Preview', href: previewLink, icon: <LinkIcon /> }
    ];

    return (
        <aside className=" flex flex-col gap-5 lg:flex-row lg:justify-start">
            <figure className="h-75 w-full rounded-[30px] overflow-hidden border-[0.1px] border-border-color md:min-w-125 md:max-w-125 md:items-center md:m-auto lg:items-start lg:mx-0">
                <img
                    src={projectImage}
                    alt={AltProjectImage}
                    loading="lazy"
                    className="h-15/10 w-15/10 object-cover object-left-top transition-transform duration-500 hover:scale-125"
                />
            </figure>

            <div className="flex flex-col gap-5 w-full">
                <h3 className="text-3xl text-first-font-color font-bold md:text-center lg:text-left">{projectTitle}</h3>
                <ul className="flex flex-wrap gap-3 md:justify-center w-full lg:justify-start">
                    {technologies.map((item, index) => (
                        <TechnologiesItem key={index} label={item} item={item} />
                    ))}
                </ul>
                <p className="text-xl text-first-font-color md:text-center lg:text-left">{projectDescription}</p>
                <div className="flex gap-3 mx-auto lg:m-0">
                    {linksList.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            className="bg-third-bg-color w-35 h-10 rounded-full flex gap-2 items-center justify-center font-bold font-second-font text-first-font-color hover:scale-110 hover:bg-primary-color transition "
                        >
                            {item.icon}
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </aside>
    );
}

export default ProjectItem;
