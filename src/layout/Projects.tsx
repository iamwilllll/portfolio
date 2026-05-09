import { ProjectItem, Container } from '../components';
import { useProjects } from '../hooks';

export function Projects() {
    const { projects } = useProjects();

    return (
        <Container className="pt-25" id="projects">
            <h2 className="text-primary-text text-4xl">Some of the projects i've done i did</h2>

            <section className="mt-10 flex grid-cols-3 grid-rows-2 flex-col gap-5 lg:grid">
                {projects?.map((item, index) => (
                    <ProjectItem key={item.title} index={index} project={item} />
                ))}
            </section>
        </Container>
    );
}
