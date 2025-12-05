import { defineCollection, z } from "astro:content";

const newsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // Extrem tolerant: akzeptiert alles als date-Feld
    date: z.any(),
    description: z.string().optional(),
  }),
});

export const collections = {
  news: newsCollection,
};
