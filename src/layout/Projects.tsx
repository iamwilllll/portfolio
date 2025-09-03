import Container from '../components/Container';
import ProjectItem from '../components/ProjectItem';

function Projects() {
    return (
        <Container className="pt-25">
            <h2 className="text-first-font-color text-4xl">Some of the projects i've done i did</h2>
            <section className="flex flex-col gap-15 mt-10">
                <ProjectItem
                    projectTitle="Project title"
                    projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sequi vitae labore minus facilis ab
                    obcaecati quidem explicabo neque nihil debitis."
                    projectImage={'a'}
                    technologies={['TypeScript', 'React', 'TailwindCSS']}
                />
            </section>
        </Container>
    );
}

export default Projects;
