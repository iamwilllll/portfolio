import { Container, ExperienceItem } from '../components';
import { useExperience } from '../hooks';

export function Experience({ className }: { className?: string }) {
    const { experience } = useExperience();

    return (
        <Container className={className} id="experience">
            <h2 className="text-primary-text text-4xl">Little bit of my experience in the field</h2>

            {experience &&
                experience
                    .slice(0, 3)
                    .map((item, index) => <ExperienceItem key={item.role} index={index} experienceItem={item} />)}
        </Container>
    );
}
