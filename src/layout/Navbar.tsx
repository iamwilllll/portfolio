/* Import states */
import { useState } from 'react';

/* Import icons .tsx */
import { MenuIcon } from '../components/icons/MenuIcon';
import { CloseIcon } from '../components/icons/CloseIcon';

/* Import components */
import SocialLinks from '../components/SocialLinks';

function Navbar() {
    const [isActive, setIsActive] = useState(false);

    return (
        <section className="flex justify-end">
            <button
                onClick={() => setIsActive(true)}
                className="text-first-font-color hover:cursor-pointer md:hidden"
                aria-label="open navigation menu"
                title="Open menu"
            >
                <MenuIcon />
            </button>

            <nav
                className={`absolute transition-all duration-500 ${isActive ? 'h-full top-0' : 'h-0 -top-50'} left-0 w-full md:top-5 md:left-1/2 md:-translate-x-1/2 md:w-8/10 md:h-15 lg:w-5/10 bg-[#ffffff20] flex flex-col md:flex-row items-center justify-center text-first-font-color gap-10 md:rounded-full lg:px-10`}
            >
                <button
                    aria-label="close navigation menu"
                    title="Close menu"
                    onClick={() => setIsActive(false)}
                    className="text-second-font-color hover:text-first-font-color transition-colors hover:cursor-pointer md:hidden"
                >
                    <CloseIcon />
                </button>
                <a
                    title="Home"
                    className="hover:text-second-font-color transition hover:underline text-2xl hover:scale-110 md:text-lg hover:cursor-pointer"
                >
                    HOME
                </a>
                <a
                    title="Projects"
                    className="hover:text-second-font-color transition hover:underline text-2xl hover:scale-110 md:text-lg hover:cursor-pointer"
                >
                    PROJECTS
                </a>
                <a
                    title="About me"
                    className="hover:text-second-font-color transition hover:underline text-2xl hover:scale-110 md:text-lg hover:cursor-pointer"
                >
                    ABOUT ME
                </a>
                <a
                    title="Contact me"
                    className="hover:text-second-font-color transition hover:underline text-2xl hover:scale-110 md:text-lg hover:cursor-pointer"
                >
                    CONTACT ME
                </a>
                <SocialLinks />
            </nav>
        </section>
    );
}

export default Navbar;
