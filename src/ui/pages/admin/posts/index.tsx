"use client";

import { Button } from "@/components/ui/button";
import { deletePost } from "@/features/posts/delete";
import { getAllPostsAdminView } from "@/features/posts/getAllAdminView";
import { useSessionContext } from "@/providers/AuthProvider";
import { PostInterface } from "@/types";
import BlankState from "@/ui/components/blankState";
import { Loading } from "@/ui/components/loading";
import { Modal } from "@/ui/components/modal";
import Pagination from "@/ui/components/pagination";
import PostPreviewAdmin from "@/ui/components/postPreviewAdmin";
import { showToast } from "@/ui/components/toast";
import { useEffect, useState } from "react";

type ExcludingPost = {
  id: string;
  title: string;
};

const AdminPostsView = () => {
  const [pagePosts, setPagePosts] = useState<PostInterface[]>([]);
  const [excludingPost, setExcludingPost] = useState<ExcludingPost | undefined>(
    undefined
  );
  const [currPage, setCurrPage] = useState<number>(1);
  const [totalPosts, setTotalPosts] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const perPage = 6;
  const { user } = useSessionContext();

  const initPosts = async (page: number) => {
    if (!user || !user.id) return;

    try {
      setIsLoading(true);
      const res = await getAllPostsAdminView(user.id, page, perPage);

      if (!res || !res.data) {
        throw new Error("Não foi possível buscar pelos posts no momento");
      }

      const { data, totalItems } = res.data;

      setPagePosts(data);
      setTotalPosts(totalItems);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      showToast({
        type: "error",
        message: "Não foi possível buscar posts no momento",
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
      await initPosts(1);
      setCurrPage(1);
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
    initPosts(currPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currPage]);

  return (
    <>
      <div className="container mx-auto p-4 flex flex-col gap-4">
        {isLoading && <Loading />}
        {!isLoading && (!pagePosts || pagePosts.length <= 0) && <BlankState />}
        {!isLoading &&
          pagePosts &&
          pagePosts.length >= 1 &&
          pagePosts.map((post) => (
            <PostPreviewAdmin
              post={post}
              key={post.id}
              deletePost={excludePost}
            />
          ))}
        {totalPosts > 0 && (
          <div>
            <Pagination
              currentPage={currPage}
              setCurrentPage={setCurrPage}
              totalItems={totalPosts}
              perPage={perPage}
            />
          </div>
        )}
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
