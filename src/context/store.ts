import { create } from 'zustand';
import type { useFormSuccessProps, useStoreProps } from '../types';

export const useContext = create<useStoreProps>((set) => ({
    isLoading: false,
    toggleLoading: (newState) => set(() => ({ isLoading: newState })),
}));

export const useFormSuccess = create<useFormSuccessProps>((set) => ({
    isSuccess: false,
    wasMistake: false,
    toggleSuccess: (newState) => set(() => ({ isSuccess: newState })),
    toggleMistakes: (newState) => set(() => ({ wasMistake: newState })),
}));
