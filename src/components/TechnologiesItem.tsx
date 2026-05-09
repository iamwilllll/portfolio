type TechnologiesItemProps = {
    className?: string;
    label?: string;
    icon: string;
};

export function TechnologiesItem({ icon, label, className }: TechnologiesItemProps) {
    return (
        <li
            className={`font-secondary bg-secondary-surface flex h-5 items-center gap-1 rounded px-2 font-semibold text-white transition ${className}`}
        >
            <img src={icon} alt="technology icon" className="h-7/10 w-3/10" />
            <p className="text-[13px]">{label}</p>
        </li>
    );
}
