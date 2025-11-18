/* Import icons */
import type { ReactNode } from 'react';

import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { DocIcon } from './icons/DocIcon';



type SocialLinksProps = {
    className?: string;
};


type SocialLinksType = {
    icon: ReactNode;
    href: string;
};

function SocialLinks({className}:SocialLinksProps) {
    const socialLinks: SocialLinksType[] = [
        { icon: <GitHubIcon />, href: 'https://github.com/iamwilllll' },
        { icon: <LinkedinIcon />, href: 'https://www.linkedin.com/in/iamwilllll' },
        {
            icon: <DocIcon />,
            href: 'https://docs.google.com/document/d/1m6El1D5_eSy4y-9MZOJ49R9_RGsTCesycKU_e96cg2A/edit?tab=t.0',
        },
    ];

    return (
        <nav className="flex items-center gap-3">
            {socialLinks.map((item, index) => (
                <a
                    key={index}
                    className={`text-second-color hover:text-first-font-color transition hover:scale-125 hover:cursor-pointer ${className}`}
                    title="icon"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {item.icon}
                </a>
            ))}
        </nav>
    );
}

export default SocialLinks;
