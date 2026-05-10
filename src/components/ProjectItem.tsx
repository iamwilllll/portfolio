import { useState } from 'react';
import { motion } from 'motion/react';
import { TechnologiesItem, ProjectModal } from './index';
import type { ProjectT } from '../types';

type ProjectItemProps = {
    project: ProjectT;
    index: number;
};

export function ProjectItem({ project, index }: ProjectItemProps) {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);

    const { technologies, description, title, projectHoverUrl } = project;

    return (
        <>
            {modalVisibility && projectHoverUrl && (
                <ProjectModal closeModal={() => setModalVisibility(false)} modalVisibility={modalVisibility} project={project} />
            )}

            <motion.div className="group relative m-auto overflow-hidden rounded-xl p-px" initial="initial" whileHover="hover">
                <motion.div
                    className={`pointer-events-none absolute top-1/2 left-1/2 size-500 -translate-1/2 rounded-full bg-conic-[from_0deg,transparent,#ff2c2c,transparent] opacity-0 ${animationComplete && 'group-hover:opacity-100'}`}
                    variants={{
                        initial: {
                            rotate: 0,
                        },
                        hover: {
                            rotate: 360,
                            transition: {
                                rotate: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'linear',
                                },
                                opacity: {
                                    duration: 0.3,
                                },
                            },
                        },
                    }}
                />

                <motion.aside
                    className="bg-tertiary-surface relative z-10 flex max-w-90 cursor-pointer flex-col gap-5 overflow-hidden rounded-xl p-3"
                    onClick={() => setModalVisibility(true)}
                    onAnimationComplete={() => setAnimationComplete(true)}
                    initial="initial"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={{
                        initial: {
                            y: 20,
                            opacity: 0,
                        },
                        visible: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.6,
                                delay: index * 0.2,
                            },
                        },
                    }}
                >
                    <figure className="border-default-border relative h-50 w-full overflow-hidden rounded-xl border-[0.1px] p-5">
                        <div className="before:bg-brand after:bg-brand z-1 before:absolute before:-top-20 before:-right-20 before:size-20 before:rounded-full before:shadow-[0_0_500px_130px_white] before:content-[''] after:absolute after:-bottom-20 after:-left-20 after:size-20 after:rounded-full after:shadow-[0_0_400px_150px_var(--color-brand)] after:content-['']"></div>
                        <div className="from-modal-surface absolute inset-0 z-10 size-full bg-linear-to-t"></div>

                        <img
                            className="absolute inset-0 top-1/2 left-1/2 z-5 size-9/10 -translate-1/2 rounded-xl object-contain"
                            loading="lazy"
                            src={projectHoverUrl}
                            alt={`hover picture of project ${title}`}
                        />

                        <h3 className="text-primary-text absolute bottom-1 left-2 z-20 text-xl font-bold">{title}</h3>
                    </figure>

                    <ul className="flex flex-wrap gap-1">
                        {technologies.slice(0, 4).map((item) => (
                            <TechnologiesItem key={item.label} {...item} />
                        ))}
                    </ul>

                    <p className="text-primary-text line-clamp-2 text-lg">{description}</p>
                    <div className="bg-default-border my-1 h-px w-full rounded-xl"></div>
                    <p className="text-brand/70 group-hover:text-brand font-secondary transition-colors duration-300 ease-out">
                        Show more <span> &gt;</span>
                    </p>
                </motion.aside>
            </motion.div>
        </>
    );
}
