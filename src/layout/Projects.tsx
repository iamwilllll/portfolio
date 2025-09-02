import Container from '../components/Container';

function Projects() {
    return (
        <Container className="pt-25">
            <h2 className="text-first-font-color text-4xl">Some of the projects i've done i did</h2>
            <section className="flex flex-col gap-10 mt-10">
                <div>
                    <div className="flex align-center p-5 h-75 w-125 bg-second-bg-color rounded-[60px]"></div>
                </div>

                <div className="flex">
                    <div className="h-75 w-125 bg-second-bg-color rounded-[60px]"></div>
                    <p className="text-first-font-color">wilfryn</p>
                </div>
            </section>
        </Container>
    );
}

export default Projects;
