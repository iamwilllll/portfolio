export type FormDataT = {
    name: string;
    email: string;
    information: string;
};

//! context
export type useStoreProps = {
    isLoading: boolean;
    toggleLoading: (newState: boolean) => void;
};

export type useFormSuccessProps = {
    isSuccess: boolean;
    wasMistake: boolean;
    toggleSuccess: (newState: boolean) => void;
    toggleMistakes: (newState: boolean) => void;
};

export type MessagesT = {
    success: string;
    error: string;
};
