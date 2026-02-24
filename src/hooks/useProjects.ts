import axios from 'axios';
import { useEffect, useState } from 'react';
import { useContext } from '../context/store';
import { projectsSchema, type ProjectT } from '../types/projects.types';

const URL = `${import.meta.env.VITE_BASEURL}/projects.json`;

export default function useProjects() {
    const [projects, setProjects] = useState<ProjectT[]>();
    const [error, setError] = useState<unknown | null>(null);
    const { toggleLoading } = useContext();

    useEffect(() => {
        (async () => {
            try {
                toggleLoading(true);
                if (!URL) throw new Error('data url is not available');

                const response = await axios.get(URL);
                const parse = projectsSchema.parse(response.data);
                setProjects(parse);
            } catch (err) {
                setError(err);
            } finally {
                toggleLoading(false);
            }
        })();
    }, [toggleLoading]);

    return { projects, error };
}
