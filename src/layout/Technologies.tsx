import { TechnologiesItem, Container } from '../components';
import { useTechnologies } from '../hooks';

export function Technologies() {
    const { technologies } = useTechnologies();

    return (
        <Container id="technologies" className="mt-20 lg:m-auto">
            <h2 className="text-primary-text text-4xl">These are the technologies I’ve been using</h2>

            <section className="mt-10 flex flex-col items-center justify-center gap-5 lg:flex-row lg:items-start">
                {technologies?.map((item) => (
                    <aside
                        key={item.title}
                        className="border-default-border flex w-full max-w-100 flex-col flex-wrap gap-2 rounded-xl border p-10"
                    >
                        {item.technologies.map((item) => (
                            <div key={item.name} className="text-primary-text flex items-center gap-2">
                                <TechnologiesItem className="bg-tertiary-surface w-10" key={item.name} {...item} />
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </aside>
                ))}
            </section>
        </Container>
    );
}
