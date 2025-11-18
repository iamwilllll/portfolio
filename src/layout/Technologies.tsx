import Container from '../components/Container';
import TechnologiesItem from '../components/TechnologiesItem';
import useTechnologies from '../hooks/useTechnologies';

function Technologies() {
    const { technologies } = useTechnologies();

    return (
        <Container id="technologies" className="mt-20 lg:m-auto">
            <h2 className="text-first-font-color text-4xl">These are the technologies I’ve been using</h2>

            <section className="mt-10 flex flex-col items-center justify-center gap-5 lg:flex-row lg:items-start">
                {technologies?.map((technology, index) => (
                    <aside
                        key={index}
                        className="border-border-color flex w-full max-w-100 flex-col flex-wrap gap-2 rounded-xl border p-10"
                    >
                        {technology.technologies.map((item, index) => (
                            <div key={index} className="text-first-font-color flex items-center gap-2">
                                <TechnologiesItem className="bg-third-bg-color w-10" key={index} src={item.icon} />
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </aside>
                ))}
            </section>
        </Container>
    );
}

export default Technologies;
