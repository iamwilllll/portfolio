import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import { MenuIcon } from '../components/icons/MenuIcon';
import { CloseIcon } from '../components/icons/CloseIcon';
import SocialLinks from '../components/SocialLinks';

const navLinks: { name: string; href: string }[] = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#ProjectsSection' },
    { name: 'Skills', href: '#technologies' },
    { name: 'Contact Me', href: '#contactMe' },
];

function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const [isNavBarIsVisible, setIsNavBarIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    const handleScroll = () => {
        if (window.scrollY < lastScrollY.current) {
            setIsNavBarIsVisible(true);
        } else {
            setIsNavBarIsVisible(false);
        }

        lastScrollY.current = window.scrollY;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <button
                onClick={() => setIsActive(true)}
                aria-label="open navigation menu"
                title="Open menu"
                className="text-second-font-color border-first-font-color/30 bg-nav-bg-color/40 hover:bg-nav-bg-color/60 fixed top-5 right-5 z-20 rounded-full border p-2 backdrop-blur-md transition lg:hidden"
            >
                <MenuIcon />
            </button>

            <AnimatePresence>
                {isActive && (
                    <motion.nav
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-second-font-color fixed inset-0 z-20 flex flex-col items-center justify-center gap-10 bg-black/80 backdrop-blur-xl"
                    >
                        <button
                            onClick={() => setIsActive(false)}
                            className="border-first-font-color/30 bg-nav-bg-color/40 hover:bg-nav-bg-color/60 absolute top-5 right-5 rounded-full border p-2 transition"
                        >
                            <CloseIcon />
                        </button>

                        {navLinks.map((item, i) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                title={item.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                onClick={() => setIsActive(false)}
                                className="hover:text-first-font-color text-3xl tracking-wide uppercase transition-all hover:tracking-widest"
                            >
                                {item.name}
                            </motion.a>
                        ))}

                        <SocialLinks />
                    </motion.nav>
                )}
            </AnimatePresence>

            <motion.nav
                animate={{
                    scale: isNavBarIsVisible ? 1 : 0.9,
                    y: isNavBarIsVisible ? 0 : -100,
                    opacity: isNavBarIsVisible ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="text-second-font-color fixed top-5 left-1/2 z-20 hidden -translate-x-1/2 lg:flex"
            >
                <div className="bg-nav-bg-color/40 flex items-center gap-8 rounded-full border border-white/10 px-8 py-3 shadow-lg backdrop-blur-xl">
                    {navLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            title={item.name}
                            className="group relative text-sm tracking-wide uppercase transition"
                        >
                            <span className="group-hover:text-first-font-color relative transition">{item.name}</span>
                            <span className="bg-first-font-color absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}

                    <div className="ml-2">
                        <SocialLinks />
                    </div>
                </div>
            </motion.nav>
        </>
    );
}

export default Navbar;
