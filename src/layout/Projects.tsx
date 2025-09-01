function Projects() {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-between p-10 lg:p lg:px-50 lg:items-start overflow-hidden gap-5">
            <h2 className="text-first-font-color text-4xl lg:text-5xl mt-25">
                Some of the projects I've done
            </h2>

            <div className="w-full h-5/10 overflow-x-auto overflow-y-hidden relative">
                <div className="flex gap-5 w-max">
                    <div className="w-70 h-50 lg:w-85 lg:h-55 bg-primary-color rounded-4xl flex-shrink-0"></div>
                    <div className="w-70 h-50 lg:w-85 lg:h-55 bg-primary-color rounded-4xl flex-shrink-0"></div>
                    <div className="w-70 h-50 lg:w-85 lg:h-55 bg-primary-color rounded-4xl flex-shrink-0"></div>
                    <div className="w-70 h-50 lg:w-85 lg:h-55 bg-primary-color rounded-4xl flex-shrink-0"></div>
                    <div className="w-70 h-50 lg:w-85 lg:h-55 bg-primary-color rounded-4xl flex-shrink-0"></div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
