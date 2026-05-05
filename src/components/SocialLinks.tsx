type SocialLinksType = {
    icon: string;
    href: string;
};

const socialLinks: SocialLinksType[] = [
    { icon: 'github-icon', href: 'https://github.com/iamwilllll' },
    { icon: 'linkedin-icon', href: 'https://www.linkedin.com/in/iamwilllll' },
    {
        icon: 'doc-icon',
        href: 'https://docs.google.com/document/d/1m6El1D5_eSy4y-9MZOJ49R9_RGsTCesycKU_e96cg2A/edit?tab=t.0',
    },
];

export function SocialLinks({ className }: { className?: string }) {
    return (
        <nav className="flex items-center gap-3">
            {socialLinks.map((item, index) => (
                <a
                    key={index}
                    className={`text-second-color hover:text-brand transition hover:scale-125 hover:cursor-pointer ${className}`}
                    title="icon"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg width={30} height={30}>
                        <use href={`/assets/sprite.svg#${item.icon}`} />
                    </svg>
                </a>
            ))}
        </nav>
    );
}
