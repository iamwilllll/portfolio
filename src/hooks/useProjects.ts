import axios from 'axios';
import * as z from 'zod';
import { useEffect, useState } from 'react';
import { useContext } from '../context/store';

const URL = '/data/Projects.json';

const projectSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    projectHoverUrl: z.string(),
    technologies: z.array(
        z.object({
            name: z.string(),
            icon: z.string(),
        })
    ),
    gitHubLink: z.string(),
    previewLink: z.string(),
});

const projectsSchema = z.array(projectSchema);
export type ProjectT = z.infer<typeof projectSchema>;

export default function useProjects() {
    const [projects, setProjects] = useState<ProjectT[]>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown | null>(null);
    const { toggleLoading } = useContext();

    useEffect(() => {
        (async () => {
            try {
                if (!URL) throw new Error('data url is not available');

                toggleLoading(true);
                
                const response = await axios.get(URL);
                const parse = projectsSchema.parse(response.data);

                setProjects(parse);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
                toggleLoading(false);
            }
        })();
    }, [toggleLoading]);

    return { projects, loading, error };
}
