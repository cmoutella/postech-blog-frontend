import { PostInterface } from "@/types";

const postEndpoint = "";

export async function generateStaticParams() {
  const posts = await fetch(postEndpoint).then((res) => res.json());

  return posts.map((post: PostInterface) => ({
    id: post.id,
  }));
}

// Essa página deverá apresentar o conteúdo de um post

// Podemos incluir no layout da navbar uma possibilidade de navegar para a edição, visivel apenas para usuários logados
