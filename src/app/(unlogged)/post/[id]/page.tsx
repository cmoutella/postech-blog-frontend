import { Post } from "@/types";

const postEndpoint = "";

export async function generateStaticParams() {
  const posts = await fetch(postEndpoint).then((res) => res.json());

  return posts.map((post: Post) => ({
    id: post.id,
  }));
}

// Essa página deverá conter uma listagem de posts para usuários não autenticados

// Podemos incluir no layout da navbar uma possibilidade de navegar para a edição, visivel apenas para usuários logados
