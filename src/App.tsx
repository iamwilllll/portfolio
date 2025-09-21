/* Import components */
import Navbar from './layout/Navbar';
import Header from './layout/Header';
import Projects from './layout/Projects';
import Technologies from './layout/Technologies';
import ContactMe from './layout/ContactMe';

function App() {
    return (
        <main className="font-first-font m-auto max-w-[2256px]">
            <Navbar />
            <Header />
            <Projects />
            <Technologies />
            <ContactMe />
        </main>
    );
}

export default App;
