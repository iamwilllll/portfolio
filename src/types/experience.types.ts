import * as z from 'zod';

export const experienceSchema = z.object({
    id: z.number(),
    role: z.string(),
    organization: z.string(),
    summary: z.string(),
    date: z.string(),
    certificateSrc: z.string().optional(),
});

export const experiencesSchema = z.array(experienceSchema);

export type ExperienceT = z.infer<typeof experienceSchema>;
export type ExperiencesT = z.infer<typeof experiencesSchema>;
