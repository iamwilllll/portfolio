import { ProjectItem, Container } from '../components';
import {useProjects} from '../hooks';

export function Projects() {
    const { projects } = useProjects();

    return (
        <Container className="pt-25" id="projects">
            <h2 className="text-primary-text text-4xl">Some of the projects i've done i did</h2>
            <section className="mt-10 flex flex-col gap-15">
                {projects?.map((project, index) => (
                    <ProjectItem key={index} project={project} />
                ))}
            </section>
        </Container>
    );
}
