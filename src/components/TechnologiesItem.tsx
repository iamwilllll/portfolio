import icons from './icons';

type TechnologiesItemProps = {
    item: string;
    label: string;
};

function TechnologiesItem({ item, label }: TechnologiesItemProps) {
    const Icon = icons[item as keyof typeof icons];

    return (
        <li className="flex gap-2 h-10 max-w-40 w-full items-center justify-center bg-second-bg-color rounded-full text-white font-semibold font-second-font hover:bg-third-bg-color transition">
            <Icon className="size-6" />
            <p className="">{label}</p>
        </li>
    );
}

export default TechnologiesItem;
