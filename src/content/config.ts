import { defineCollection, z } from "astro:content";

export const postsSchema = z.object({
  title: z.string(),
});
const posts = defineCollection({
  type: "content",
  schema: postsSchema,
});

export const collections = {
  posts: posts,
};
