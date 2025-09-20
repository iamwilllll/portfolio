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
            className={`flex items-center justify-center h-10 rounded-full text-white font-second-font font-semibold transition ${className}`}
        >
            <Icon className="size-6" />
            <p className="">{label}</p>
        </li>
    );
}

export default TechnologiesItem;
