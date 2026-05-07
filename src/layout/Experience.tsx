import { Container, ExperienceItem } from '../components';

export function Experience({ className }: { className?: string }) {
    const test = [
        {
            role: 'Senior Technician in Software Development',
            organization: 'Universidad Catolica Nordestana (UCNE)',
            summary: '',
            date: 'Current time',
        },
        {
            role: 'Computer Networks and Systems Technician',
            organization: 'Instituto Politecnico Juan Sanchez Ramirez (PJSR)',
            summary: '',
            date: '2024 - 2025',
            src: import.meta.env.VITE_BASEURL + '/assets/certificates/bachiller.jpg',
        },
    ];

    return (
        <Container className={className} id="experience">
            <h2 className="text-primary-text text-4xl">Little bit of my experience in the field</h2>

            {test.slice(0, 3).map((item, indx) => (
                <ExperienceItem key={indx} index={indx} {...item} />
            ))}
        </Container>
    );
}
