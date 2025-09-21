import Container from '../components/Container';
import TechnologiesItem from '../components/TechnologiesItem';

const languages: string[] = ['JavaScript', 'TypeScript'];
const technologies: string[] = ['HTML', 'CSS', 'Sass', 'React', 'Tailwind'];
const skills: string[] = ['VSCode', 'NPM', 'Git', 'GitHub', 'Figma', 'Prettier'];

function Technologies() {
    return (
        <Container id="technologies" className="mt-20 lg:m-auto">
            <h2 className="text-first-font-color text-4xl">
                These are the technologies I’ve been using
            </h2>

            <section className="mt-10 flex flex-col items-start justify-center gap-5 lg:flex-row">
                <aside className="border-border-color flex w-full max-w-100 flex-col gap-2 rounded-xl border p-10">
                    {technologies.map((item, index) => (
                        <div
                            key={index}
                            className="text-first-font-color flex items-center gap-3 font-semibold"
                        >
                            <TechnologiesItem item={item} className="bg-third-bg-color size-10" />
                            <p>{item}</p>
                        </div>
                    ))}
                </aside>

                <aside className="border-border-color flex w-full max-w-100 flex-col gap-2 rounded-xl border p-10">
                    {languages.map((item, index) => (
                        <div
                            key={index}
                            className="text-first-font-color flex items-center gap-3 font-semibold"
                        >
                            <TechnologiesItem item={item} className="bg-third-bg-color size-10" />
                            <p>{item}</p>
                        </div>
                    ))}
                </aside>

                <aside className="border-border-color flex w-full max-w-100 flex-col gap-2 rounded-xl border p-10">
                    {skills.map((item, index) => (
                        <div
                            key={index}
                            className="text-first-font-color flex items-center gap-3 font-semibold"
                        >
                            <TechnologiesItem item={item} className="bg-third-bg-color size-10" />
                            <p>{item}</p>
                        </div>
                    ))}
                </aside>
            </section>
        </Container>
    );
}

export default Technologies;
