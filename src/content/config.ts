import { defineCollection, reference, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: reference("title"),
  }),
});

export const collectoins = {
  posts: postsCollection,
};
