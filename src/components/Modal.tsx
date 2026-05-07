import { motion } from 'motion/react';
import { useEffect, type ReactNode } from 'react';

type ModalProps = {
    className?: string;
    children: ReactNode;
    modalVisibility?: boolean;
    setModalVisibility: (value: React.SetStateAction<boolean>) => void;
};

export function Modal({ className, children, modalVisibility, setModalVisibility }: ModalProps) {
    useEffect(() => {
        document.body.style.overflow = modalVisibility ? 'hidden' : 'auto';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [modalVisibility]);

    return (
        <motion.div
            onClick={() => setModalVisibility(false)}
            className={`bg-modal-surface max-size-screen fixed inset-0 z-50 flex cursor-pointer items-center justify-center p-5 ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
}
