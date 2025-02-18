import { defineCollection, z } from "astro:content";

// Esquema para cada video
const videoSchema = z.object({
  title: z.string(),         // Título del video
  description: z.string(),   // Descripción del video
  youtubeId: z.string(),     // ID del video de YouTube
  date: z.string()           // Fecha en formato YYYY-MM-DD
});

// Esquema para la colección "gratis" que contiene un array de videos
const gratisCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    videos: z.array(videoSchema) // Lista de videos
  }),
});

// Esquema para la colección de libros
const bookSchema = z.object({
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

// Definir la colección de libros
const books = defineCollection({
  schema: bookSchema,
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

// Definir la colección 'team'
const team = defineCollection({
  schema: teamSchema,
});

// ✅ Exportar todas las colecciones (ahora incluyendo `gratis`)
export const collections = {
  books,
  team,
  gratis: gratisCollection, // 🔹 Agregar la colección de videos
};
