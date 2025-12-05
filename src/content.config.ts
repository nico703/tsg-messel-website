import { defineCollection, z } from "astro:content";

// Eine einzige Collection "news" – Schema extra tolerant
const newsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    date: z.any().optional(),          // 👈 hier ist alles erlaubt
    description: z.string().optional(),
  }),
});

// Hier alle Collections registrieren
export const collections = {
  news: newsCollection,
};
