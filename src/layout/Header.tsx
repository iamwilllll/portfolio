import type { ReactNode } from 'react';

import Container from '../components/Container';

import { LinkedinIcon } from '../components/icons/LinkedinIcon';

type linksListType = {
    href: string;
    name: string;
    icon?: ReactNode;
};

function Header() {
    const linksList: linksListType[] = [
        {
            name: 'CV',
            href: 'https://docs.google.com/document/d/1m6El1D5_eSy4y-9MZOJ49R9_RGsTCesycKU_e96cg2A/edit?usp=sharing',
        },
        {
            name: 'Linkedin',
            href: 'https://www.linkedin.com/in/iamwilllll',
            icon: <LinkedinIcon />,
        },
    ];
    return (
        <Container className="flex flex-col items-center justify-center lg:flex-row-reverse">
            <figure className="flex w-11/12 items-center justify-center lg:w-1/2">
                <img
                    fetchPriority="high"
                    src="./avatar.webp"
                    alt="Avatar image"
                    width={400}
                    height={400}
                    className="drop-shadow-primary-color mx-auto drop-shadow-[0px_0px_150px]"
                />
            </figure>

            <div className="flex flex-col items-center gap-15 lg:w-1/2 lg:items-start">
                <aside className="text-center">
                    <h1 className="text-first-font-color mb-10 text-5xl font-semibold lg:text-left lg:text-7xl">
                        HI, i'm Wilfryn
                    </h1>
                    <p className="text-third-font-color mt-0 text-xl font-light lg:text-left lg:text-xl lg:leading-10">
                        As an learning <span className="text-first-font-color font-bold">Front-End Developer</span>, I combine
                        technical skills with creativity to build functional and user-friendly applications. Beyond coding, I
                        focus on clear communication and continuous learning to bring innovative ideas to life.
                    </p>
                </aside>

                <aside className="flex flex-col gap-2 md:flex-row lg:gap-5">
                    {linksList.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            title={item.name}
                            target="_blank"
                            className="font-second-font hover:bg-primary-color flex h-12 w-55 cursor-pointer items-center justify-center gap-1 rounded-full bg-white text-xl font-semibold text-black transition hover:scale-110 hover:text-white"
                        >
                            {item.icon}
                            {item.name}
                        </a>
                    ))}
                </aside>
            </div>
        </Container>
    );
}

export default Header;
