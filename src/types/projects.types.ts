import * as z from 'zod';

export const projectSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    projectHoverUrl: z.string(),
    technicalChallenge: z.array(z.string()).optional(),
    technologies: z.array(
        z.object({
            label: z.string(),
            icon: z.string(),
        })
    ),
    gitHubLink: z.string().optional(),
    previewLink: z.string().optional(),
});

export const projectsSchema = z.array(projectSchema);
export type ProjectT = z.infer<typeof projectSchema>;
