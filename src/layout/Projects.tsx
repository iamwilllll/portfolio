import { ProjectItem, Container } from '../components';
import { useProjects } from '../hooks';

export function Projects() {
    const { projects } = useProjects();

    return (
        <Container className="pt-25" id="projects">
            <h2 className="text-primary-text text-4xl">Some of the projects i've done i did</h2>

            {projects && (
                <section
                    className={`mt-10 flex flex-col gap-5 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-2 lg:grid-cols-3 lg:gap-5`}
                >
                    {projects.slice(0, 6).map((item, index) => (
                        <ProjectItem key={item.title + index} index={index} project={item} />
                    ))}
                </section>
            )}
        </Container>
    );
}
