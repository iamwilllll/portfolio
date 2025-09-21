import type { ReactNode, JSX } from 'react';

type ContainerProps = {
    children: ReactNode | JSX.Element;
    className?: string;
    id?: string;
};

function Container({ children, className, id }: ContainerProps) {
    return (
        <section className={`max-h-400 min-h-screen w-full p-10 lg:px-50 ${className}`} id={id}>
            {children}
        </section>
    );
}

export default Container;
