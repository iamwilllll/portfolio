import Container from '../components/Container';
import useProjects from '../hooks/useProjects';

import ProjectItem from '../components/ProjectItem';

function Projects() {
    const { projects } = useProjects();

    return (
        <Container className="pt-25" id="ProjectsSection">
            <h2 className="text-first-font-color text-4xl">Some of the projects i've done i did</h2>
            <section className="mt-10 flex flex-col gap-15">
                {projects?.map((project, index) => (
                    <ProjectItem key={index} project={project} />
                ))}
            </section>
        </Container>
    );
}

export default Projects;
