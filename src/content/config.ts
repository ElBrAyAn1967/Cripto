import { defineCollection, z } from "astro:content";

const schema = z.object({
  title: z.string(),
  author: z.string(),
  img: z.string(),
  readtime: z.number(),
  description: z.string(),
  buy: z.object({
    spain: z.string().url(),
    usa: z.string().url(),
  }),
});
const books = defineCollection({
  schema
});

const Inter = defineCollection({
  schema
});

const Random = defineCollection({
  schema
});


// Esquema para la colección 'team'
const teamSchema = z.object({
  title: z.string(),
  author: z.string(),
  topics: z.array(
    z.object({
      title: z.string(),
      role: z.string(),
      img: z.string().url(),
      description: z.string(),
    })
  ),
});

const team = defineCollection({
  schema: teamSchema
});


export const collections = { Inter, books, Random, team };
