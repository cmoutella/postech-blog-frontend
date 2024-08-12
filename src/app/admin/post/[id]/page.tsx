import { Post } from "@/types";

const postEndpoint = "";

export async function generateStaticParams() {
  const posts = await fetch(postEndpoint).then((res) => res.json());

  return posts.map((post: Post) => ({
    id: post.id,
  }));
}

//TODO
// Essa página deverá conter a visão de edição de um post
