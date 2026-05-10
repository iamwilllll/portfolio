import { motion } from 'motion/react';
import { Modal, TechnologiesItem, CloseModalButton } from './index';
import { type ProjectT } from '../types';

type ProjectModalProps = {
    closeModal: (value: React.SetStateAction<boolean>) => void;
    modalVisibility: boolean;
    project: ProjectT;
};

export function ProjectModal({ closeModal, modalVisibility, project }: ProjectModalProps) {
    const { technologies, description, title, projectHoverUrl, gitHubLink, previewLink, technicalChallenge } = project;

    const projectActions = [
        { href: gitHubLink, label: 'View code', svg: 'github-icon' },
        { href: previewLink, label: 'Preview project', svg: 'arrow-icon' },
    ];

    return (
        <Modal setModalVisibility={closeModal} modalVisibility={modalVisibility} className="text-primary-text p-10">
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="bg-secondary-surface outline-tertiary-surface relative flex size-full flex-col rounded-xl outline-4"
                initial={{ y: 5 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
            >
                <nav className="bg-secondary-surface border-default-border flex flex-col-reverse items-center justify-between border-b p-5 md:h-25 md:flex-row">
                    <h3 className="text-3xl font-bold">{title}</h3>
                    <div className="mb-2 flex place-items-center gap-5 lg:mb-0">
                        {projectActions.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-xl first bg-brand first-of-type:border-default-border mr-2.5 flex place-items-center rounded-xl px-3 py-2 text-center text-[10px] font-semibold transition duration-500 first-of-type:mr-0 first-of-type:flex-row-reverse first-of-type:gap-2.5 first-of-type:border first-of-type:bg-transparent hover:scale-105 lg:text-lg"
                            >
                                <p>{item.label}</p>
                                <svg>
                                    <use href={`/assets/sprite.svg#${item.svg}`} />
                                </svg>
                            </a>
                        ))}
                        <CloseModalButton setModalVisibility={closeModal} />
                    </div>
                </nav>

                <div className="overflow-y-auto p-5">
                    <section className="mb-5 flex flex-col gap-5 lg:flex-row">
                        <figure className="border-default-border bg-tertiary-surface rounded-xl border-2 p-1 lg:w-7/10">
                            <img
                                src={projectHoverUrl}
                                alt={`Project hover view of ${title}`}
                                className="size-full rounded-xl object-contain"
                                loading="lazy"
                            />
                        </figure>

                        <section className="flex flex-col gap-5 lg:w-3/10">
                            <aside className="border-default-border bg-tertiary-surface rounded-xl border-2 p-3">
                                <h4 className="mb-2 text-xl font-semibold">Technologies</h4>
                                <ul className="flex flex-wrap gap-2.5">
                                    {technologies.map((item) => (
                                        <TechnologiesItem key={item.label} className="h-8 px-5" {...item} />
                                    ))}
                                </ul>
                            </aside>

                            <aside className="border-default-border bg-tertiary-surface h-full rounded-xl border-2 p-3">
                                <h4 className="mb-2 text-xl font-semibold">Project description</h4>
                                <p>{description}</p>
                            </aside>
                        </section>
                    </section>

                    {technicalChallenge && (
                        <footer className="bg-tertiary-surface border-default-border rounded-xl border-2 p-3">
                            <h4 className="mb-2 text-xl font-semibold">Technologies</h4>

                            <ul className="flex flex-wrap gap-2.5">
                                {technicalChallenge.map((item) => (
                                    <li className="flex gap-1" key={item}>
                                        <svg className="text-brand">
                                            <use href={`/assets/sprite.svg#check-icon`} />
                                        </svg>

                                        <p key={item} className="text-primary-text">
                                            {item}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </footer>
                    )}
                </div>
            </motion.div>
        </Modal>
    );
}
