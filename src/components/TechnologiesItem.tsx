type TechnologiesItemProps = {
    src: string;
    label: string;
};

function TechnologiesItem({ src, label }: TechnologiesItemProps) {
    const formattedSrc = `/projectIcons/${src}.svg`;

    return (
        <li className="flex gap-2 h-10 max-w-40 w-full items-center justify-center bg-second-bg-color rounded-full text-white font-semibold font-second-font hover:bg-third-bg-color transition">
            <img src={formattedSrc} alt="technologies icon" className="size-6" />
            <p className="">{label}</p>
        </li>
    );
}

export default TechnologiesItem;
