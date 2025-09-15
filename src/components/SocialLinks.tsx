/* Import icons */
import type { ReactNode } from 'react';

import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { MailIcon } from './icons/MainIcon';

type socialLinksType = {
    icon: ReactNode;
};
function SocialLinks() {
    const socialLinks: socialLinksType[] = [{ icon: <GitHubIcon /> }, { icon: <LinkedinIcon /> }, { icon: <MailIcon /> }];

    return (
        <nav className="flex gap-3">
            {socialLinks.map(item => (
                <a className="text-second-color hover:scale-125 transition hover:cursor-pointer hover:text-first-font-color" title="GitHub icon">
                    {item.icon}
                </a>
            ))}
        </nav>
    );
}

export default SocialLinks;
