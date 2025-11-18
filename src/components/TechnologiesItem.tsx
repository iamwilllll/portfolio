type TechnologiesItemProps = {
    className?: string;
    label?: string;
    src: string;
};

function TechnologiesItem({ src, label, className }: TechnologiesItemProps) {
    return (
        <li
            className={`font-second-font flex h-10 items-center justify-center rounded-full font-semibold text-white transition ${className}`}
        >
            <img src={src} width={25} alt="technology icon" />
            <p>{label}</p>
        </li>
    );
}

export default TechnologiesItem;
