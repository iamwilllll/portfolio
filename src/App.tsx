import { useEffect } from 'react';
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
        <main className="font-primary m-auto max-w-[2500px]">
            <section className={`${isLoading ? 'bg-modal-surface fixed z-100 flex size-full' : 'hidden'}`}>
                <div className="loader"></div>
            </section>

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
