"use client";

import { posts } from "@/__mocks__/posts";
import PostPreviewAdmin from "@/ui/components/postPreviewAdmin";

const AdminPostsView = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-4">
      {posts.map((post) => (
        <PostPreviewAdmin post={post} key={post.id} />
      ))}
    </div>
  );
};

export default AdminPostsView;
