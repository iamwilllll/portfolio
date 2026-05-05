import { useEffect } from 'react';
import { useLoading } from './context/store';
import { Navbar, Header, Projects, Technologies, ContactMe } from './layout';

function App() {
    const { isLoading } = useLoading();

    useEffect(() => {
        document.body.style.overflow = isLoading ? 'hidden' : 'auto ';
    }, [isLoading]);

    return (
        <main className="font-primary m-auto max-w-[2256px]">
            <section className={`${isLoading ? 'bg-modal-surface fixed z-100 flex size-full' : 'hidden'}`}>
                <div className="loader"></div>
            </section>

            <Navbar />
            <Header />
            <Projects />
            <Technologies />
            <ContactMe />

            <footer className="my-5 w-full px-20 text-center text-white">
                © 2026 Portfolio — Developed by Wilfryn Viloria Rosario
            </footer>
        </main>
    );
}

export default App;
