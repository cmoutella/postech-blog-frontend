"use client";

import { getAllPosts } from "@/features/posts/getAll";
import { PostInterface } from "@/types";
import Pagination from "@/ui/components/pagination";
import BlankState from "@/ui/components/blankState";
import PostPreview from "@/ui/components/postPreview";
import SearchBar from "@/ui/components/search";
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
    <div className="p-4 pt-10 pb-16 flex flex-col">
      <SearchBar />
      <div className="container mt-14 flex items-center mx-auto p-4 flex-col">
        {(!posts || posts.length <= 0) && <BlankState />}
        {posts.map((post) => (
          <PostPreview post={post} key={post.id} />
        ))}
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default BlogPublicView;
