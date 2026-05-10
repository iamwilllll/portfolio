import { useEffect } from 'react';
import { motion } from 'motion/react';
import { useLoading } from './context/store';
import { Navbar, Header, Experience, Projects, Technologies, About, ContactMe } from './layout';

function App() {
    const { isLoading } = useLoading();

    useEffect(() => {
        document.body.style.overflow = isLoading ? 'hidden' : 'auto';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isLoading]);

    return (
        <main className="font-primary m-auto max-w-[2500px] px-10 lg:px-50">
            <motion.section
                className={`${isLoading ? 'bg-modal-surface fixed left-0 z-100 flex size-full' : 'hidden'}`}
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="loader"></div>
            </motion.section>

            <Navbar />
            <Header />
            <Experience />
            <Projects />
            <Technologies />
            <About />
            <ContactMe />

            <footer className="my-5 w-full px-20 text-center text-white">
                © 2026 Portfolio — Developed by Wilfryn Viloria Rosario
            </footer>
        </main>
    );
}

export default App;
