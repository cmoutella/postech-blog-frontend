"use client";

import { Button } from "@/components/ui/button";
import { deletePost } from "@/features/posts/delete";
import { getAllPostsAdminView } from "@/features/posts/getAllAdminView";
import { useSessionContext } from "@/providers/AuthProvider";
import { PostInterface } from "@/types";
import { Modal } from "@/ui/components/modal";
import PostPreviewAdmin from "@/ui/components/postPreviewAdmin";
import { showToast } from "@/ui/components/toast";
import { useEffect, useState } from "react";

type ExcludingPost = {
  id: string;
  title: string;
};

const AdminPostsView = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [excludingPost, setExcludingPost] = useState<ExcludingPost | undefined>(
    undefined
  );
  const { user } = useSessionContext();

  const initPosts = async () => {
    if (!user || !user.id) return;

    try {
      const allPosts = await getAllPostsAdminView(user.id);

      if (!allPosts) {
        throw new Error("Não foi possível buscar os posts no momento");
      }

      setPosts(allPosts);
    } catch (err) {
      console.log(err);
      showToast({
        type: "error",
        message: "Não foi possivel realizar o login tente mais tarde",
      });
    }
  };

  const excludePost = (id: string, title: string) => {
    setExcludingPost({ id: id, title: title });
  };

  const confirmExcludePost = async () => {
    if (!excludingPost) return;

    try {
      const res = await deletePost(excludingPost.id);

      if (res.status >= 400) {
        throw new Error("Não foi possível deletar o post.");
      }

      showToast({
        type: "success",
        message: "Post deletado com sucesso",
      });
      setExcludingPost(undefined);
      await initPosts();
    } catch (err) {
      console.log(err);
      showToast({
        type: "error",
        message: "Não foi possivel deletar o post.",
      });
      setExcludingPost(undefined);
    }
  };

  useEffect(() => {
    initPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container mx-auto p-4 flex flex-col gap-4">
        {posts &&
          posts.length >= 1 &&
          posts.map((post) => (
            <PostPreviewAdmin
              post={post}
              key={post.id}
              deletePost={excludePost}
            />
          ))}
      </div>
      {excludingPost && excludingPost.id && (
        <Modal
          title={"Excluir post"}
          description={`Tem certeza que deseja excluir o Post ${excludingPost.title}?`}
          actions={
            <div className="w-full flex justify-end gap-3">
              <Button onClick={confirmExcludePost} variant={"secondary"}>
                Não
              </Button>
              <Button onClick={confirmExcludePost} variant={"destructive"}>
                Excluir
              </Button>
            </div>
          }
          close={() => setExcludingPost(undefined)}
        />
      )}
    </>
  );
};

export default AdminPostsView;
