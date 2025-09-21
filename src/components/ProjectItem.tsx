import type { ReactNode } from 'react';

import TechnologiesItem from './TechnologiesItem';

import { GitHubIcon } from './icons/GitHubIcon';
import { LinkIcon } from './icons/LinkIcon';

type ProjectItemProps = {
    projectTitle: string;
    projectDescription: string;
    projectImage: string;
    AltProjectImage: string;
    technologies: string[];
    gitHunLink: string;
    previewLink: string;
};

type linksListType = {
    name: string;
    href: string;
    icon: ReactNode;
};

function ProjectItem({
    projectTitle,
    projectDescription,
    technologies,
    projectImage,
    AltProjectImage,
    gitHunLink,
    previewLink,
}: ProjectItemProps) {
    const linksList: linksListType[] = [
        { name: 'GitHub', href: gitHunLink, icon: <GitHubIcon /> },
        { name: 'Preview', href: previewLink, icon: <LinkIcon /> },
    ];

    return (
        <aside className="flex flex-col gap-5 lg:flex-row lg:justify-start">
            <figure className="border-border-color h-75 w-full overflow-hidden rounded-[30px] border-[0.1px] md:m-auto md:max-w-125 md:min-w-125 md:items-center lg:mx-0 lg:items-start">
                <img
                    src={projectImage}
                    alt={AltProjectImage}
                    loading="lazy"
                    className="h-15/10 w-15/10 object-cover object-left-top transition-transform duration-500 hover:scale-125"
                />
            </figure>

            <div className="flex w-full flex-col gap-5">
                <h3 className="text-first-font-color text-3xl font-bold md:text-center lg:text-left">
                    {projectTitle}
                </h3>
                <ul className="flex w-full flex-wrap gap-3 md:justify-center lg:justify-start">
                    {technologies.map((item, index) => (
                        <TechnologiesItem
                            key={index}
                            label={item}
                            item={item}
                            className="bg-second-bg-color hover:bg-third-bg-color w-full max-w-40 gap-3"
                        />
                    ))}
                </ul>
                <p className="text-first-font-color text-xl md:text-center lg:text-left">
                    {projectDescription}
                </p>
                <div className="mx-auto flex gap-3 lg:m-0">
                    {linksList.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            className="bg-third-bg-color font-second-font text-first-font-color hover:bg-primary-color flex h-10 w-35 items-center justify-center gap-2 rounded-full font-bold transition hover:scale-110"
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
