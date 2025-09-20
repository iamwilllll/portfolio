import type { ReactNode, JSX } from 'react';

type ContainerProps = {
    children: ReactNode | JSX.Element;
    className?: string;
    id?: string;
};

function Container({ children, className, id }: ContainerProps) {
    return (
        <section className={`h-screen max-h-350 w-full p-10 lg:px-50 ${className}`} id={id}>
            {children}
        </section>
    );
}

export default Container;
