function ErrroItem({ children }: { children: React.ReactNode }) {
    return (
        <p id="name-error" className="mt-1 text-sm text-red-400">
            {children}
        </p>
    );
}

export default ErrroItem;
