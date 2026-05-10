import type { ReactNode, JSX } from 'react';

type ContainerProps = {
    children: ReactNode | JSX.Element;
    className?: string;
    id?: string;
};

export function Container({ children, className, id }: ContainerProps) {
    return (
        <section className={`min-h-screen w-full lg:max-h-450 ${className}`} id={id}>
            {children}
        </section>
    );
}
