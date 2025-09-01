/* Import components */
import Navbar from './layout/Navbar';
import Header from './layout/Header';
import Projects from './layout/Projects';

function App() {
    return (
        <main className=" max-w-[2256px] font-first-font m-auto">
            <Navbar />
            <Header />
            <Projects/>
        </main>
    );
}

export default App;
