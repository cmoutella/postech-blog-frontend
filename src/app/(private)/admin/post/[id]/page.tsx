import { PostInterface } from "@/types";

const postEndpoint = "";

export async function generateStaticParams() {
  const posts = await fetch(postEndpoint).then((res) => res.json());

  return posts.map((post: PostInterface) => ({
    id: post.id,
  }));
}

//TODO
// Essa página deverá conter a visão de edição de um post
