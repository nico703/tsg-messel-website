import { z, defineCollection } from "astro:content";

const newsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),           // nicht 'titel', sondern 'title'
    date: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  news: newsCollection,
};

