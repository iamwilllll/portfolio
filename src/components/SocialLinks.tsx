/* Import icons */
import { GitHubIcon } from '../../public/icons/GitHubIcon';
import { LinkedinIcon } from '../../public/icons/LinkedinIcon';
import { MailIcon } from '../../public/icons/MainIcon';

function SocialLinks() {
    return (
        <nav className="flex gap-3">
            <a
                className="text-second-color hover:scale-125 transition hover:cursor-pointer hover:text-first-font-color"
                title="GitHub icon"
            >
                <GitHubIcon />
            </a>
            <a
                className="text-second-color hover:scale-125 transition hover:cursor-pointer hover:text-first-font-color"
                title="Linkedin icon"
            >
                <LinkedinIcon />
            </a>
            <a
                className="text-second-color hover:scale-125 transition hover:cursor-pointer hover:text-first-font-color"
                title="Mail icon"
            >
                <MailIcon />
            </a>
        </nav>
    );
}

export default SocialLinks;
