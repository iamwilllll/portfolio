import { create } from 'zustand';

type useStoreProps = {
    isLoading: boolean;
    toggleLoading: (state: boolean) => void;
};
export const useContext = create<useStoreProps>((set) => ({
    isLoading: false,
    toggleLoading: (state) => set(() => ({ isLoading: state })),
}));
