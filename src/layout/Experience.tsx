import { Container, ExperienceItem } from '../components';

export function Experience({ className }: { className?: string }) {
    const test = [
        {
            role: 'Computer Networks and Systems Technician',
            organization: 'Instituto Politecnico Juan Sanchez Ramirez',
            summary: '',
            date: '2024 - 2025',
        },
    ];

    return (
        <Container className={className} id="experience">
            <h2 className="text-primary-text text-4xl">Little bit of my experience in the field</h2>

            {test.slice(0, 3).map((item, indx) => (
                <ExperienceItem
                    key={indx}
                    index={indx}
                    role={item.role}
                    organization={item.organization}
                    summary={item.summary}
                    date={item.date}
                    src={import.meta.env.VITE_BASEURL + '/assets/certificates/bachiller.jpg'}
                />
            ))}
        </Container>
    );
}
