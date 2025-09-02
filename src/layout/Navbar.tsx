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
        <>
            <button
                onClick={() => setIsActive(true)}
                className="fixed top-5 right-5 z-1 text-second-font-color hover:cursor-pointer lg:hidden"
                aria-label="open navigation menu"
                title="Open menu"
            >
                <MenuIcon />
            </button>
            <nav
                className={`fixed z-50 transition-all duration-500 ${isActive ? 'inset-0 w-screen h-screen' : 'top-[-100%] h-0'} flex flex-col items-center justify-center gap-10 bg-[#000000db] text-second-font-color lg:top-5 lg:left-1/2 lg:-translate-x-1/2 lg:h-15 lg:w-5/10 lg:flex-row lg:bg-nav-bg-color lg:rounded-full lg:px-10`}
            >
                <button
                    aria-label="close navigation menu"
                    title="Close menu"
                    onClick={() => setIsActive(false)}
                    className="text-second-font-color hover:text-first-font-color transition-colors hover:cursor-pointer lg:hidden"
                >
                    <CloseIcon />
                </button>
                <a
                    title="Home"
                    className="hover:text-first-font-color transition hover:underline text-2xl hover:scale-110 lg:text-lg hover:cursor-pointer"
                >
                    HOME
                </a>
                <a
                    title="Projects"
                    className="hover:text-first-font-color transition hover:underline text-2xl hover:scale-110 lg:text-lg hover:cursor-pointer"
                >
                    PROJECTS
                </a>
                <a
                    title="About me"
                    className="hover:text-first-font-color transition hover:underline text-2xl hover:scale-110 lg:text-lg hover:cursor-pointer"
                >
                    ABOUT ME
                </a>
                <a
                    title="Contact me"
                    className="hover:text-first-font-color transition hover:underline text-2xl hover:scale-110 lg:text-lg hover:cursor-pointer"
                >
                    CONTACT ME
                </a>
                <SocialLinks />
            </nav>
        </>
    );
}

export default Navbar;
