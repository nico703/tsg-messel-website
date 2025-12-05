import { defineCollection, z } from "astro:content";

const newsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // ganz bewusst super tolerant:
    date: z.any().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  news: newsCollection,
};

