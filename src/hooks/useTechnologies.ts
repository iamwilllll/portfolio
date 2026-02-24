import axios from 'axios';
import { useEffect, useState } from 'react';
import { useContext } from '../context/store';
import { technologiesSchema, type TechnologiesT } from '../types/technologies.types';

export default function useTechnologies() {
    const [technologies, setTechnologies] = useState<TechnologiesT>();
    const [error, setError] = useState<unknown | null>(null);
    const { toggleLoading } = useContext();
    const URL = `${import.meta.env.VITE_BASEURL}/technologies.json`;

    useEffect(() => {
        (async () => {
            try {
                if (!URL) throw new Error('URL is not available');
                toggleLoading(true);

                const response = await axios.get(URL);
                const parse = technologiesSchema.parse(response.data);
                console.log(parse);
                setTechnologies(parse);
            } catch (err) {
                setError(err);
            } finally {
                toggleLoading(false);
            }
        })();
    }, [toggleLoading, URL]);

    return { technologies, error };
}
