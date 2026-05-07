import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

type ExperienceItemProps = {
    className?: string;
    index: number;

    role: string;
    organization: string;
    summary: string;
    date: string;
    src?: string;
};

export function ExperienceItem({ className, index, role, organization, summary, date, src }: ExperienceItemProps) {
    const [modalVisibility, setModalVisibility] = useState(false);

    useEffect(() => {
        document.body.style.overflow = modalVisibility ? 'hidden' : 'auto';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [modalVisibility]);

    return (
        <>
            {modalVisibility && src && (
                <motion.div
                    onClick={() => setModalVisibility(false)}
                    className="bg-modal-surface fixed inset-0 z-50 flex cursor-pointer items-center justify-center p-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-secondary-surface outline-tertiary-surface relative w-full rounded-xl p-5 outline-4 lg:h-full lg:w-auto lg:p-10"
                        initial={{ y: 10 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <button
                            className="text-primary-text group absolute top-1 right-1 hidden lg:block"
                            onClick={() => setModalVisibility(false)}
                        >
                            <svg width={40} height={40} className="group-hover:text-brand">
                                <use href={`/assets/sprite.svg#close-icon`} />
                            </svg>
                        </button>

                        <img
                            src={src}
                            className="border-tertiary-surface size-full rounded-xl border-4 object-contain"
                            alt={`Certificate of ${role}`}
                            loading="lazy"
                        />
                    </motion.div>
                </motion.div>
            )}

            <motion.section
                className={`group group relative mt-10 flex size-full min-h-75 flex-col gap-10 lg:flex-row lg:items-start ${className}`}
                initial={{ x: index % 2 === 0 ? -80 : 80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
            >
                <div className="absolute top-0 -left-5 flex h-full w-0.5 items-center justify-center">
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#ff2c2c]/60 to-transparent opacity-60 transition duration-300 group-hover:opacity-100"></div>
                    <div className="absolute top-1 z-10 size-4 rounded-full bg-[#ff2c2c] shadow-[0_0_25px_5px_#ff2c2c] transition duration-500 group-hover:scale-125 group-hover:shadow-[0_0_40px_10px_#ff2c2c]"></div>
                </div>

                <aside className="text-secondary-text top-25 lg:sticky lg:w-2/5">
                    <p className="border-brand bg-brand/15 font-secondary text-brand mb-5 rounded-full border text-center lg:w-50">
                        {date}
                    </p>

                    <h3 className="group-hover:text-brand text-center text-2xl font-semibold transition duration-300 md:text-left">
                        {role}
                    </h3>

                    {organization && <h4 className="text-center md:text-left">{organization}</h4>}
                </aside>

                <aside className="border-default-border bg-secondary-surface rounded-xl border p-3 lg:w-3/5">
                    {summary && (
                        <p className="font-secondary text-secondary-text mb-2.5 w-full text-left leading-relaxed wrap-break-word">
                            {summary}
                        </p>
                    )}

                    {src && (
                        <button
                            className="text-brand font-secondary group/btn text-center"
                            onClick={() => setModalVisibility(true)}
                        >
                            See certificate &gt;
                            <div className="bg-brand h-px w-0 origin-left transition-all duration-300 group-hover/btn:w-full"></div>
                        </button>
                    )}
                </aside>
            </motion.section>
        </>
    );
}
