import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SocialLinks } from '../components';

type NavLinks = {
    name: string;
    href: string;
    icon: string;
};

const navLinks: NavLinks[] = [
    { name: 'Experience', href: '#experience', icon: 'job-icon' },
    { name: 'Projects', href: '#projects', icon: 'code-icon' },
    { name: 'Technologies', href: '#technologies', icon: 'technologies-icon' },
    { name: 'About me', href: '#about', icon: 'user-icon' },
    { name: 'Contact', href: '#contact', icon: 'mail-icon' },
];

export function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const [isNavBarIsVisible, setIsNavBarIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => setIsNavBarIsVisible(window.scrollY > 0 ? true : false));
    }, []);

    return (
        <>
            <button
                onClick={() => setIsActive(true)}
                aria-label="open navigation menu"
                title="Open menu"
                className="text-second-font-color fixed top-5 right-5 z-20 size-10 cursor-pointer rounded-full transition lg:hidden"
            >
                <svg width={40} height={40}>
                    <use href="/assets/sprite.svg#menu-icon" />
                </svg>
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
                            className="text-second-font-color absolute top-5 right-5 size-10 cursor-pointer rounded-full transition"
                        >
                            <svg width={40} height={40}>
                                <use href="/assets/sprite.svg#close-icon" />
                            </svg>
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

            <nav
                className={`text-second-font-color fixed top-5 left-1/2 z-20 hidden -translate-x-1/2 items-center justify-center gap-7 rounded-full px-10 py-3 lg:flex ${isNavBarIsVisible && 'bg-nav-bg-color/40 border border-white/10 shadow-lg backdrop-blur-xl'}`}
            >
                {navLinks.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        title={item.name}
                        className="group flex items-center justify-center gap-2 text-sm tracking-wide transition"
                    >
                        <svg width={20} height={20} className="group-hover:text-primary-color block">
                            <use href={`/assets/sprite.svg#${item.icon}`} />
                        </svg>

                        <span className="group-hover:text-primary-color leading-none font-bold">{item.name}</span>
                    </a>
                ))}
            </nav>
        </>
    );
}
