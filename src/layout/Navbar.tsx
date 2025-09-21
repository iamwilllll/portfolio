/* Import states */
import { useState, useEffect } from 'react';

/* Import icons .tsx */
import { MenuIcon } from '../components/icons/MenuIcon';
import { CloseIcon } from '../components/icons/CloseIcon';

/* Import components */
import SocialLinks from '../components/SocialLinks';

type navLinksType = {
    name: string;
    href: string;
};

const navLinks: navLinksType[] = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#ProjectsSection' },
    { name: 'Skills', href: '#technologies' },
    { name: 'Contact Me', href: '#contactMe' },
];

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
                className="text-second-font-color fixed top-5 right-5 z-1 hover:cursor-pointer lg:hidden"
                aria-label="open navigation menu"
                title="Open menu"
            >
                <MenuIcon />
            </button>
            <nav
                className={`text-second-font-color lg:bg-nav-bg-color fixed left-0 z-1 flex w-full flex-col items-center justify-center gap-10 bg-[#000000db] transition-all duration-500 lg:top-5 lg:left-1/2 lg:h-15 lg:w-10/10 lg:max-w-[768px] lg:-translate-x-1/2 lg:flex-row lg:rounded-full lg:px-10 ${isActive ? 'top-0 h-screen' : '-top-50 h-0'} ${scrollY > 0 ? 'lg:scale-70 lg:opacity-70' : 'lg:scale-100 lg:opacity-100'} lg:hover:scale-100 lg:hover:opacity-100`}
            >
                <button
                    aria-label="close navigation menu"
                    title="Close menu"
                    onClick={() => setIsActive(false)}
                    className="text-second-font-color hover:text-first-font-color transition-colors hover:cursor-pointer lg:hidden"
                >
                    <CloseIcon />
                </button>

                {navLinks.map((item) => (
                    <a
                        title={item.name}
                        key={item.name}
                        href={item.href}
                        className="hover:text-first-font-color text-2xl uppercase transition hover:scale-110 hover:cursor-pointer hover:underline lg:text-lg"
                    >
                        {item.name}
                    </a>
                ))}

                <SocialLinks />
            </nav>
        </>
    );
}

export default Navbar;
