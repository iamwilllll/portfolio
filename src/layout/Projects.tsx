import Container from '../components/Container';
import ProjectItem from '../components/ProjectItem';

function Projects() {
    return (
        <Container className="pt-25" id="ProjectsSection">
            <h2 className="text-first-font-color text-4xl">Some of the projects i've done i did</h2>
            <section className="mt-10 flex flex-col gap-15">
                <ProjectItem
                    projectTitle="TaskPodoro"
                    projectDescription="TaskPodoro is an interactive to-do list web app that lets you easily add, complete, and delete tasks. It includes a timer based on the Pomodoro Technique to improve time management."
                    projectImage={'/taskpodoro.png'}
                    AltProjectImage="Hover project image"
                    technologies={['JavaScript', 'React', 'Tailwind']}
                    gitHunLink="https://github.com/iamwilllll/TaskPodoro"
                    previewLink="https://iamwilllll.github.io/TaskPodoro"
                />
            </section>
        </Container>
    );
}

export default Projects;
