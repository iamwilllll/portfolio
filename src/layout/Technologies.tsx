import Container from '../components/Container';
import TechnologiesItem from '../components/TechnologiesItem';

const languages: string[] = ['JavaScript', 'TypeScript'];
const technologies: string[] = ['HTML', 'CSS', 'Sass', 'React', 'Tailwind'];
const skills: string[] = ['VSCode','NPM', 'Git', 'GitHub', 'Figma', 'Prettier'];

function Technologies() {
    return (
        <Container id="technologies" className="mt-20 lg:m-auto">
            <h2 className="text-first-font-color text-4xl">These are the technologies I’ve been using</h2>

            <section className="flex flex-col items-start justify-center gap-5 mt-10 lg:flex-row">
                <aside className="flex flex-col gap-2 max-w-100 w-full border border-border-color rounded-xl p-10">
                    {technologies.map((item, index) => (
                        <div key={index} className="flex gap-3 items-center font-semibold text-first-font-color">
                            <TechnologiesItem item={item} className="size-10 bg-third-bg-color" />
                            <p>{item}</p>
                        </div>
                    ))}
                </aside>

                <aside className="flex flex-col gap-2 max-w-100 w-full border border-border-color rounded-xl p-10">
                    {languages.map((item, index) => (
                        <div key={index} className="flex gap-3 items-center font-semibold text-first-font-color">
                            <TechnologiesItem item={item} className="size-10 bg-third-bg-color" />
                            <p>{item}</p>
                        </div>
                    ))}
                </aside>

                <aside className="flex flex-col gap-2 max-w-100 w-full border border-border-color rounded-xl p-10">
                    {skills.map((item, index) => (
                        <div key={index} className="flex gap-3 items-center font-semibold text-first-font-color">
                            <TechnologiesItem item={item} className="size-10 bg-third-bg-color" />
                            <p>{item}</p>
                        </div>
                    ))}
                </aside>
            </section>
        </Container>
    );
}

export default Technologies;
