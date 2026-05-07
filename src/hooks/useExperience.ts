import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLoading } from '../context/store';
import type { ExperienceT } from '../types';
import { experiencesSchema } from '../types/experience.types';

const URL = `${import.meta.env.VITE_BASEURL}/experience.json`;

export function useExperience() {
    const [experience, setExperience] = useState<ExperienceT[]>();
    const [error, setError] = useState<unknown | null>(null);
    const { toggleLoading } = useLoading();

    useEffect(() => {
        (async () => {
            try {
                toggleLoading(true);
                if (!URL) throw new Error('data url is not available');

                const response = await axios.get(URL);
                const parse = experiencesSchema.parse(response.data);
                setExperience(parse);
            } catch (err) {
                setError(err);
            } finally {
                toggleLoading(false);
            }
        })();
    }, [toggleLoading]);

    return { experience, error };
}
