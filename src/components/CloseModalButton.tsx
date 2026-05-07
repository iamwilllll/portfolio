type ModalProps = {
    className?: string;
    setModalVisibility: (value: React.SetStateAction<boolean>) => void;
};

export function CloseModalButton({ className, setModalVisibility }: ModalProps) {
    return (
        <button className={`text-primary-text group ${className}`} onClick={() => setModalVisibility(false)}>
            <svg width={40} height={40} className="group-hover:text-brand">
                <use href={`/assets/sprite.svg#close-icon`} />
            </svg>
        </button>
    );
}
