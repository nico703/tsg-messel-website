import { defineCollection, z } from "astro:content";

const newsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // Vercel erwartet hier einen STRING → also definieren wir ihn so
    date: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  news: newsCollection,
};
