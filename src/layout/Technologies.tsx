import { TechnologiesItem, Container } from '../components';
import { useTechnologies } from '../hooks';

export function Technologies() {
    const { technologies } = useTechnologies();

    return (
        <Container id="technologies" className="mt-20">
            <h2 className="text-primary-text text-4xl">These are the technologies I’ve been using</h2>

            <section className="mt-10 flex flex-col items-center justify-center gap-5 lg:flex-row lg:items-start">
                {technologies?.map((item) => (
                    <ul
                        key={item.title}
                        className="border-default-border flex w-full max-w-100 flex-col flex-wrap gap-2 rounded-xl border p-10"
                    >
                        {item.technologies.map((item) => (
                            <li key={item.label} className="text-primary-text flex items-center gap-2">
                                <TechnologiesItem className="size-10" key={item.label} noLabel={true} {...item} />
                                <p>{item.label}</p>
                            </li>
                        ))}
                    </ul>
                ))}
            </section>
        </Container>
    );
}
