/* Import icons */
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { MailIcon } from './icons/MainIcon';

function SocialLinks() {
    return (
        <nav className="flex gap-3">
            <a
                className="text-primary-color hover:scale-125 transition hover:cursor-pointer hover:text-second-font-color"
                title="GitHub icon"
            >
                <GitHubIcon />
            </a>
            <a
                className="text-primary-color hover:scale-125 transition hover:cursor-pointer hover:text-second-font-color"
                title="Linkedin icon"
            >
                <LinkedinIcon />
            </a>
            <a
                className="text-primary-color hover:scale-125 transition hover:cursor-pointer hover:text-second-font-color"
                title="Mail icon"
            >
                <MailIcon />
            </a>
        </nav>
    );
}

export default SocialLinks;
