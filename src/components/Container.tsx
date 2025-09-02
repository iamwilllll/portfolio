import type { ReactNode, JSX } from 'react';

type ContainerProps = {
    children: ReactNode | JSX.Element;
    className?: string;
};

function Container({ children, className = '' }: ContainerProps) {
    return (
        <section
            className={`h-screen w-full p-10 lg:px-50 ${className}`}
        >
            {children}
        </section>
    );
}

export default Container;
