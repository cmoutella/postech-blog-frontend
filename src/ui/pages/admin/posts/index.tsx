"use client";

import { getAllPostsAdminView } from "@/features/posts/getAllAdminView";
import { useSessionContext } from "@/providers/AuthProvider";
import { PostInterface } from "@/types";
import PostPreviewAdmin from "@/ui/components/postPreviewAdmin";
import { useEffect, useState } from "react";

const AdminPostsView = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const { user } = useSessionContext();

  const initPosts = async () => {
    if (user?.id) {
      const allPosts = await getAllPostsAdminView(user.id);
      if (!allPosts) return;

      setPosts(allPosts);
    }
  };

  useEffect(() => {
    initPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mx-auto p-4 flex flex-col gap-4">
      {posts.map((post) => (
        <PostPreviewAdmin post={post} key={post.id} />
      ))}
    </div>
  );
};

export default AdminPostsView;
