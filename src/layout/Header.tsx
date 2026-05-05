import { Container } from '../components';
import { motion } from 'motion/react';
type linksListType = {
    href: string;
    name?: string;
    icon: string;
};

const linksList: linksListType[] = [
    {
        name: 'Curriculum',
        href: 'https://docs.google.com/document/d/1m6El1D5_eSy4y-9MZOJ49R9_RGsTCesycKU_e96cg2A/edit?usp=sharing',
        icon: 'doc-icon',
    },
    {
        href: 'https://www.linkedin.com/in/iamwilllll',
        icon: 'linkedin-icon',
    },
    {
        href: 'https://github.com/iamwilllll',
        icon: 'github-icon',
    },
];

export function Header() {
    const fadeUp = {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <Container className="mx-auto flex max-w-300 flex-col items-center justify-center gap-5">
            <div className="flex flex-col-reverse items-center justify-center gap-5 md:flex-row">
                <motion.figure
                    className="flex items-center justify-center overflow-hidden rounded-full bg-linear-to-r from-[#ff2c2c] to-black"
                    {...fadeUp}
                    transition={{ duration: 1 }}
                >
                    <img
                        fetchPriority="high"
                        src="./avatar.png"
                        alt="Wilfryn Viloria avatar"
                        width={90}
                        height={90}
                        className="translate-y-1.5"
                    />
                </motion.figure>

                <motion.div
                    className="relative flex h-7 w-40 justify-center overflow-hidden rounded-full p-0.5"
                    {...fadeUp}
                    transition={{
                        y: { duration: 1.5 },
                        opacity: { duration: 1.5 },
                    }}
                >
                    <motion.div
                        className="absolute top-1/2 size-60 -translate-y-1/2 rounded-full bg-conic-[from_0deg,transparent,#ff2c2c,transparent]"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />

                    <p className="bg-primary-surface text-brand relative z-10 flex h-full w-full items-center justify-center rounded-full text-center text-[13px]">
                        Available for work
                    </p>
                </motion.div>
            </div>

            <div className="flex flex-col items-center gap-3">
                <aside>
                    <motion.h1
                        className="text-primary-text mb-5 text-center text-5xl font-bold"
                        {...fadeUp}
                        transition={{ duration: 0.5 }}
                    >
                        Hi,
                        <motion.span
                            className="bg-[linear-gradient(110deg,#ff2c2c,#ff9b9b,#ff2c2c)] bg-size-[200%_100%] bg-clip-text text-transparent"
                            animate={{ backgroundPosition: ['200% 50%', '0% 50%'], y: 0, opacity: 1 }}
                            initial={{ y: 20, opacity: 0 }}
                            transition={{
                                backgroundPosition: { duration: 10 },
                                y: { duration: 1.5 },
                                opacity: { duration: 1.5 },
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        >
                            &nbsp; i'm Wilfryn Viloria
                        </motion.span>
                    </motion.h1>
                    <motion.p
                        className="text-tertiary-text t mt-0 text-center text-xl font-light"
                        {...fadeUp}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-primary-text font-bold">full-stack Developer</span>, I combine technical skills with
                        creativity to build functional and user-friendly applications. Beyond coding, I focus on clear
                        communication and continuous learning to bring innovative ideas to life.
                    </motion.p>
                </aside>

                <aside className="flex w-full items-center justify-center gap-3.5 text-center">
                    {linksList.map((item, index) => (
                        <motion.a
                            {...fadeUp}
                            transition={{ delay: index * 0.5, duration: 0.7 }}
                            key={index}
                            href={item.href}
                            title={item.name}
                            target="_blank"
                            className="font-secondary hover:bg-brand focus:bg-brand flex h-12 cursor-pointer items-center justify-center gap-1 rounded-xl bg-white px-3.5 text-xl font-semibold text-black transition hover:scale-110 hover:text-white focus:scale-110 focus:text-white"
                        >
                            <svg width={25} height={25} className="group-hover:text-brand">
                                <use href={`/assets/sprite.svg#${item.icon}`} />
                            </svg>

                            {item.name && <p className="hidden md:block"> {item.name}</p>}
                        </motion.a>
                    ))}
                </aside>
            </div>
        </Container>
    );
}
