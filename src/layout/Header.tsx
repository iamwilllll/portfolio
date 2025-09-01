import { LinkedinIcon } from '../components/icons/LinkedinIcon';

function Header() {
    return (
        <section className="h-screen w-full flex flex-col lg:flex-row-reverse justify-center items-center p-10 lg:px-50">
            <figure className="w-11/12 lg:w-1/2 flex items-center justify-center">
                <img
                    src="./avatar.png"
                    alt="Avatar image"
                    className="mx-auto drop-shadow-[0px_0px_150px] drop-shadow-primary-color md:w-50 lg:w-full max-w-100"
                />
            </figure>

            <div className="flex flex-col items-center lg:items-start gap-10 lg:w-1/2">
                <aside className="text-center">
                    <h1 className="text-5xl font-semibold text-first-font-color lg:text-left">HI, i'm Wilfryn</h1>
                    <p className="text-third-font-color text-xl mt-5 font-light lg:text-left">
                        As an learning <span className="font-bold text-first-font-color">Front-End Developer</span>, I combine
                        technical skills with creativity to build functional and user-friendly applications. Beyond coding, I
                        focus on clear communication and continuous learning to bring innovative ideas to life.
                    </p>
                </aside>

                <aside className="flex flex-col gap-2 lg:gap-5 md:flex-row">
                    <a
                        href="https://docs.google.com/document/d/1m6El1D5_eSy4y-9MZOJ49R9_RGsTCesycKU_e96cg2A/edit?usp=sharing"
                        target="_blank"
                        className="flex h-12 items-center align-center gap-2 bg-white px-15 py-2 rounded-full font-bold text-black font-second-font hover:cursor-pointer hover:bg-primary-color hover:text-first-font-color hover:scale-110 transition"
                    >
                        Download CV
                    </a>

                    <a
                        href="https://www.linkedin.com/in/iamwilllll"
                        target="_blank"
                        className="flex h-12 items-center align-center gap-2 bg-white px-15 py-2 rounded-full font-bold text-black font-second-font hover:cursor-pointer hover:bg-primary-color hover:text-first-font-color hover:scale-110 transition"
                    >
                        <LinkedinIcon />
                        Linkedin
                    </a>
                </aside>
            </div>
        </section>
    );
}

export default Header;
