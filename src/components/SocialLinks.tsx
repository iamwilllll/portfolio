/* Import icons */
import type { ReactNode } from 'react';

import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { MailIcon } from './icons/MainIcon';

type socialLinksType = {
    icon: ReactNode;
    href: string;
};
function SocialLinks() {
    const socialLinks: socialLinksType[] = [
        { icon: <GitHubIcon />, href: 'https://github.com/iamwilllll' },
        { icon: <LinkedinIcon />, href: '' },
        { icon: <MailIcon />, href: 'mailto:wilfrynbusiness@gmail.com' }
    ];

    return (
        <nav className="flex gap-3">
            {socialLinks.map((item, index) => (
                <a
                    key={index}
                    className="text-second-color hover:scale-125 transition hover:cursor-pointer hover:text-first-font-color"
                    title="icon"
                    href={item.href}
                    target="_blank"
                >
                    {item.icon}
                </a>
            ))}
        </nav>
    );
}

export default SocialLinks;
