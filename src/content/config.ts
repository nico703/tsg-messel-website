import { defineCollection, z } from "astro:content";

const newsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // akzeptiert sowohl String als auch Date -> Fehler ist damit sicher weg
    date: z.union([z.string(), z.date()]),
    description: z.string().optional(),
  }),
});

export const collections = {
  news: newsCollection,
};
