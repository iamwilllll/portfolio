import TechnologiesItem from './TechnologiesItem';

type ProjectItemProps = {
    projectTitle: string;
    projectDescription: string;
    projectImage: string;
    technologies: string[];
};

function ProjectItem({ projectTitle, projectDescription, technologies, projectImage }: ProjectItemProps) {
    return (
        <aside className="flex flex-col gap-5 lg:flex-row">
            <figure className="h-75 w-full rounded-[30px] overflow-hidden border-[0.1px] border-border-color md:min-w-125 md:max-w-125 md:items-center md:m-auto lg">
                <img
                    src={`/${projectImage}.png`}
                    loading="lazy"
                    className="h-full w-full object-cover object-left-top transition-transform duration-500 hover:scale-125"
                />
            </figure>

            <div className="flex flex-col gap-5">
                <h3 className="text-3xl text-first-font-color font-bold md:text-center lg:text-left">{projectTitle}</h3>
                <ul className="flex flex-wrap gap-3 md:justify-center lg:justify-start">
                    {technologies.map((item, index) => (
                        <TechnologiesItem key={index} label={item} src={item} />
                    ))}
                </ul>

                <p className="text-xl text-first-font-color md:text-center lg:text-left">{projectDescription}</p>
            </div>
        </aside>
    );
}

export default ProjectItem;
