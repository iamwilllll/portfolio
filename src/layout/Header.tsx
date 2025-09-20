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
        { name: 'CV', href: 'https://docs.google.com/document/d/1m6El1D5_eSy4y-9MZOJ49R9_RGsTCesycKU_e96cg2A/edit?usp=sharing' },
        { name: 'Linkedin', href: 'https://www.linkedin.com/in/iamwilllll', icon: <LinkedinIcon /> }
    ];
    return (
        <Container className="flex flex-col lg:flex-row-reverse justify-center items-center">
            <figure className="w-11/12 lg:w-1/2 flex items-center justify-center">
                <img
                    fetchPriority="high"
                    src="./avatar.webp"
                    alt="Avatar image"
                    width={400}
                    height={400}
                    className="mx-auto drop-shadow-[0px_0px_150px] drop-shadow-primary-color"
                />
            </figure>

            <div className="flex flex-col items-center lg:items-start gap-15 lg:w-1/2">
                <aside className="text-center">
                    <h1 className="text-5xl font-semibold text-first-font-color lg:text-left lg:text-7xl mb-10">
                        HI, i'm Wilfryn
                    </h1>
                    <p className="text-third-font-color text-xl mt-0 font-light lg:text-left lg:text-xl lg:leading-10">
                        As an learning <span className="font-bold text-first-font-color">Front-End Developer</span>, I combine
                        technical skills with creativity to build functional and user-friendly applications. Beyond coding, I
                        focus on clear communication and continuous learning to bring innovative ideas to life.
                    </p>
                </aside>

                <aside className="flex flex-col gap-2 lg:gap-5 md:flex-row">
                    {linksList.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            title={item.name}
                            target="_blank"
                            className="flex items-center justify-center gap-1 w-55 h-12 rounded-full bg-white font-second-font font-semibold text-xl text-black cursor-pointer hover:scale-110 hover:bg-primary-color hover:text-white transition"
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
