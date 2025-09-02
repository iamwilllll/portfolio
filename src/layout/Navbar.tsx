/* Import states */
import { useState, useEffect } from 'react';

/* Import icons .tsx */
import { MenuIcon } from '../components/icons/MenuIcon';
import { CloseIcon } from '../components/icons/CloseIcon';

/* Import components */
import SocialLinks from '../components/SocialLinks';

function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <button
                onClick={() => setIsActive(true)}
                className="text-second-font-color hover:cursor-pointer lg:hidden fixed z-1 top-5 right-5"
                aria-label="open navigation menu"
                title="Open menu"
            >
                <MenuIcon />
            </button>
            <nav
                className={`fixed left-0 w-full z-1 transition-all duration-500 bg-[#000000db] ${isActive ? 'h-screen top-0' : 'h-0 -top-50'} flex flex-col items-center justify-center gap-10 text-second-font-color lg:top-5 lg:left-1/2 lg:-translate-x-1/2 lg:h-15 lg:w-10/10 lg:max-w-[768px] lg:flex-row lg:rounded-full lg:px-10 lg:bg-nav-bg-color ${scrollY > 0 ? 'lg:scale-70 lg:opacity-70' : 'lg:scale-100 lg:opacity-100'}`}
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
