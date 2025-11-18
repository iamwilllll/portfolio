import * as z from 'zod';

export const projectSchema = z.object({
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

export const projectsSchema = z.array(projectSchema);
export type ProjectT = z.infer<typeof projectSchema>;
