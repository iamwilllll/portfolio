import * as z from 'zod';

export const technologySchema = z.object({
    id: z.number(),
    title: z.string(),
    technologies: z.array(
        z.object({
            name: z.string(),
            icon: z.string(),
        })
    ),
});

export const technologiesSchema = z.array(technologySchema);

export type TechnologyT = z.infer<typeof technologySchema>;
export type TechnologiesT = z.infer<typeof technologiesSchema>;
