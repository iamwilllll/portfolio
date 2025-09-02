import { LinkedinIcon } from '../components/icons/LinkedinIcon';

import Container from '../components/Container';
function Header() {
    return (
        <Container>
            <figure className="w-11/12 lg:w-1/2 flex items-center justify-center">
                <img
                    src="./avatar.png"
                    alt="Avatar image"
                    className="mx-auto drop-shadow-[0px_0px_150px] drop-shadow-primary-color md:w-100 lg:w-full max-w-100"
                />
            </figure>

            <div className="flex flex-col items-center lg:items-start gap-15 lg:w-1/2">
                <aside className="text-center">
                    <h1 className="text-5xl font-semibold text-first-font-color lg:text-left lg:text-8xl mb-10">
                        HI, i'm Wilfryn
                    </h1>
                    <p className="text-third-font-color text-xl mt-0 font-light lg:text-left lg:text-2xl lg:leading-10">
                        As an learning <span className="font-bold text-first-font-color">Front-End Developer</span>, I combine
                        technical skills with creativity to build functional and user-friendly applications. Beyond coding, I
                        focus on clear communication and continuous learning to bring innovative ideas to life.
                    </p>
                </aside>

                <aside className="flex flex-col gap-2 lg:gap-5 md:flex-row">
                    <a
                        href="https://docs.google.com/document/d/1m6El1D5_eSy4y-9MZOJ49R9_RGsTCesycKU_e96cg2A/edit?usp=sharing"
                        target="_blank"
                        className="flex items-center justify-center gap-1 w-65 h-15 rounded-full bg-white font-second-font font-semibold text-xl text-black cursor-pointer hover:scale-110 hover:bg-primary-color hover:text-white transition"
                    >
                        Download CV
                    </a>

                    <a
                        href="https://www.linkedin.com/in/iamwilllll"
                        target="_blank"
                        className="flex items-center justify-center gap-1 w-65 h-15 rounded-full bg-white font-second-font font-semibold text-xl text-black cursor-pointer hover:scale-110 hover:bg-primary-color hover:text-white transition"
                    >
                        <LinkedinIcon />
                        Linkedin
                    </a>
                </aside>
            </div>
        </Container>
    );
}

export default Header;
