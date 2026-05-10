import { motion } from 'motion/react';
import { Container } from '../components';

export function About({ className }: { className?: string }) {
    return (
        <Container className={`mt-10 grid gap-10 md:grid-cols-2 md:items-center${className}`} id="about">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="relative mx-auto w-full max-w-sm"
            >
                <motion.img
                    src="/profile.png"
                    alt="Wilfryn Viloria"
                    className="relative z-10 w-full rounded-2xl object-cover shadow-[0_0_50px_0_var(--color-primary-base)]"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    loading="lazy"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-5 text-center md:text-left"
            >
                <h2 className="text-primary-text text-3xl font-bold tracking-tight">About me</h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-primary-text leading-relaxed"
                >
                    I’ve been building things with code since I was <span className="text-brand font-semibold">14 years old</span>
                    . What started as curiosity quickly turned into something I genuinely enjoy and take seriously.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-primary-text leading-relaxed"
                >
                    I’m <span className="text-brand font-semibold">Wilfryn Viloria</span>, someone who enjoys creating, improving,
                    and challenging himself constantly. I like understanding how things work, breaking them down, and making them
                    better.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-primary-text leading-relaxed"
                >
                    For me, programming is not just about writing code, it’s about{' '}
                    <span className="text-brand font-semibold">
                        building ideas from scratch and turning them into something real
                    </span>
                    .
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-primary-text leading-relaxed"
                >
                    Outside of tech, I’m really into <span className="text-brand font-semibold">basketball</span> and sports in
                    general. That competitive mindset carries into everything I do — I always want to improve, push limits, and
                    reach the next level.
                </motion.p>
            </motion.div>
        </Container>
    );
}
