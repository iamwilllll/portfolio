import axios from 'axios';
import { useContext, useFormSuccess } from '../context/store';
import type { FormDataT } from '../types';

export const useSubmitForm = () => {
    const { toggleLoading } = useContext();
    const { toggleSuccess, toggleMistakes } = useFormSuccess();

    const submitForm = async (data: FormDataT) => {
        try {
            toggleLoading(true);

            const response = await axios.post(import.meta.env.VITE_SEND_FORM_URL, data, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 404) throw new Error('The request could not be made');
            toggleLoading(false);
            toggleSuccess(true);

            setTimeout(() => toggleSuccess(false), 5000);
        } catch (err) {
            toggleMistakes(true);
            toggleLoading(false);
            return err;
        }
    };

    return { submitForm };
};
