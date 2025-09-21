import icons from './icons';

type TechnologiesItemProps = {
    item: string;
    label?: string;
    className?: string;
};

function TechnologiesItem({ item, label, className }: TechnologiesItemProps) {
    const Icon = icons[item as keyof typeof icons];

    if (!Icon) return;

    return (
        <li
            className={`font-second-font flex h-10 items-center justify-center rounded-full font-semibold text-white transition ${className}`}
        >
            <Icon className="size-6" />
            <p className="">{label}</p>
        </li>
    );
}

export default TechnologiesItem;
