import axios from 'axios';
import { useEffect, useState } from 'react';
import { useContext } from '../context/store';
import { technologiesSchema, type TechnologiesT } from '../types/technologies.types';

const URL = import.meta.env.VITE_TECHNOLOGIES_URL;

export default function useTechnologies() {
    const [technologies, setTechnologies] = useState<TechnologiesT>();
    const [error, setError] = useState<unknown | null>(null);
    const { toggleLoading } = useContext();

    useEffect(() => {
        (async () => {
            try {
                if (!URL) throw new Error('data url is not available');
                toggleLoading(true);

                const response = await axios.get(URL);
                const parse = technologiesSchema.parse(response.data);

                setTechnologies(parse);
            } catch (err) {
                setError(err);
            } finally {
                toggleLoading(false);
            }
        })();
    }, [toggleLoading]);

    return { technologies, error };
}
