import { defineCollection, z } from "astro:content";

const newsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    // extra tolerant – akzeptiert jede Form von Datum oder gar keins
    date: z.any().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  news: newsCollection,
};
