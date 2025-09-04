import Container from '../components/Container';
import ProjectItem from '../components/ProjectItem';

function Projects() {
    return (
        <Container className="pt-25">
            <h2 className="text-first-font-color text-4xl">Some of the projects i've done i did</h2>
            <section className="flex flex-col gap-15 mt-10">
                <ProjectItem
                    projectTitle="Taskodoro"
                    projectDescription="Taskodoro is an interactive to-do list web app that lets you easily add, complete, and delete tasks. It includes a timer based on the Pomodoro Technique to improve time management."
                    projectImage={'/projectHover/taskodoro.png'}
                    technologies={['JavaScript', 'React', 'TailwindCSS']}
                    gitHunLink='https://github.com/iamwilllll/Taskodoro'
                    previewLink='https://iamwilllll.github.io/Taskodoro'
                />

            </section>
        </Container>
    );
}

export default Projects;
