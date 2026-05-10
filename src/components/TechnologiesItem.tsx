type TechnologiesItemProps = {
    className?: string;
    label?: string;
    icon: string;
    noLabel?: boolean;
};

export function TechnologiesItem({ icon, label, className = '', noLabel = false }: TechnologiesItemProps) {
    return (
        <div
            className={`font-secondary bg-secondary-surface list-none rounded-xl font-semibold text-white transition ${!noLabel ? 'flex h-5 items-center gap-1 px-2' : 'p-1'} ${className}`}
        >
            <img
                src={icon}
                alt={label ? `${label} icon` : 'Technology icon'}
                className={` ${noLabel ? 'size-full p-1' : 'h-7/10 w-3/10 p-0'}`}
                loading="lazy"
            />

            {!noLabel && <p className="text-[13px] leading-none">{label}</p>}
        </div>
    );
}
