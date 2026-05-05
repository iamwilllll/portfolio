import { TechnologiesItem } from './index';

import type { ProjectT } from '../types/projects.types';

type ProjectItemProps = {
    project: ProjectT;
};

type linksListType = {
    name: string;
    href: string;
    icon: string;
};

export function ProjectItem({ project }: ProjectItemProps) {
    const { technologies, description, title, projectHoverUrl, gitHubLink, previewLink } = project;

    const linksList: linksListType[] = [
        { name: 'GitHub', href: gitHubLink, icon: 'github-icon' },
        { name: 'Preview', href: previewLink, icon: 'link-icon' },
    ];

    return (
        <aside className="flex flex-col gap-5 lg:flex-row lg:justify-start">
            <figure className="border-default-border h-75 w-full overflow-hidden rounded-[30px] border-[0.1px] md:m-auto md:max-w-125 md:min-w-125 md:items-center lg:mx-0 lg:items-start">
                <img
                    src={projectHoverUrl}
                    alt="project hover"
                    loading="lazy"
                    className="h-15/10 w-15/10 object-cover transition-transform duration-500 hover:scale-125"
                />
            </figure>

            <div className="flex w-full flex-col gap-5">
                <h3 className="text-primary-text text-3xl font-bold md:text-center lg:text-left">{title}</h3>
                <ul className="flex w-full flex-wrap gap-3 md:justify-center lg:justify-start">
                    {technologies.map((item, index) => (
                        <TechnologiesItem
                            key={index}
                            label={item.name}
                            src={item.icon}
                            className="bg-secondary-surface hover:bg-tertiary-surface w-full max-w-40 gap-3"
                        />
                    ))}
                </ul>
                <p className="text-primary-text text-xl md:text-center lg:text-left">{description}</p>
                <div className="mx-auto flex flex-wrap items-center justify-center gap-3 lg:m-0 lg:justify-start">
                    {linksList.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            className="bg-tertiary-surface font-secondary text-primary-text hover:bg-brand flex h-10 w-35 items-center justify-center gap-2 rounded-full font-bold transition hover:scale-110"
                        >
                            <svg width={25} height={25}>
                                <use href={`/assets/sprite.svg#${item.icon}`} />
                            </svg>

                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </aside>
    );
}
