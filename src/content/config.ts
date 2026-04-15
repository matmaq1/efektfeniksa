import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Zespół Efekt Feniksa'),
    image: z.string().optional(),
  }),
});

export const collections = { news };
