"use client";

import { getAllPosts } from "@/features/posts/getAll";
import { PostInterface } from "@/types";
import PostPreview from "@/ui/components/postPreview";
import { useEffect, useState } from "react";

const BlogPublicView = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  const iniciatePosts = async () => {
    const allPosts = await getAllPosts();

    if (!allPosts) return;

    setPosts(allPosts);
  };

  useEffect(() => {
    iniciatePosts();
  }, []);

  return (
    <div className="container mx-auto p-4 flex-col">
      <h1>HOME</h1>
      {posts.map((post) => (
        <PostPreview post={post} key={post.id} />
      ))}
    </div>
  );
};

export default BlogPublicView;
