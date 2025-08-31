/* Import states */
import { useState } from 'react';

/* Import icons .tsx */
import { MenuIcon } from '../../public/icons/MenuIcon';
import { CloseIcon } from '../../public/icons/CloseIcon';

/* Import components */
import SocialLinks from '../components/SocialLinks';

function Navbar() {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsActive(true)}
                className="text-second-font-color hover:cursor-pointer md:hidden fixed z-1 top-5 right-5"
                aria-label="open navigation menu"
                title="Open menu"
            >
                <MenuIcon />
            </button>
            <nav
                className={`fixed transition-all duration-500 z-1 ${isActive ? 'h-screen top-0' : 'h-0 -top-50'} left-0 w-full md:top-5 md:left-1/2 md:-translate-x-1/2 md:w-9/10 max-w-[768px] md:h-15 lg:w-5/10 bg-[#000000db] md:bg-nav-bg-color flex flex-col md:flex-row items-center justify-center text-second-font-color gap-10 md:rounded-full lg:px-10`}
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
                    className="hover:text-first-font-color transition hover:underline text-2xl hover:scale-110 md:text-lg hover:cursor-pointer"
                >
                    HOME
                </a>
                <a
                    title="Projects"
                    className="hover:text-first-font-color transition hover:underline text-2xl hover:scale-110 md:text-lg hover:cursor-pointer"
                >
                    PROJECTS
                </a>
                <a
                    title="About me"
                    className="hover:text-first-font-color transition hover:underline text-2xl hover:scale-110 md:text-lg hover:cursor-pointer"
                >
                    ABOUT ME
                </a>
                <a
                    title="Contact me"
                    className="hover:text-first-font-color transition hover:underline text-2xl hover:scale-110 md:text-lg hover:cursor-pointer"
                >
                    CONTACT ME
                </a>
                <SocialLinks />
            </nav>
        </>
    );
}

export default Navbar;
