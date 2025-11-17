/* Import components */
import Navbar from './layout/Navbar';
import Header from './layout/Header';
import Projects from './layout/Projects';
import Technologies from './layout/Technologies';
import ContactMe from './layout/ContactMe';
import { useContext } from './context/store';

function App() {
    const { isLoading } = useContext();

    return (
        <main className="font-first-font m-auto max-w-[2256px]">
            <div className={`${isLoading ? 'bg-modal-bg-color fixed z-2 flex size-full' : 'hidden'}`}>
                <div className="loader"></div>
            </div>

            <Navbar />
            <Header />
            <Projects />
            <Technologies />
            <ContactMe />
        </main>
    );
}

export default App;
