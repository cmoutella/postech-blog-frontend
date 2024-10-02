"use client";

import { Button } from "@/components/ui/button";
import { EMPTY_MESSAGE_DEFAULT } from "@/config/constants/default";
import { deletePost } from "@/features/posts/delete";
import { getAllPostsAdminView } from "@/features/posts/getAllAdminView";
import { useSessionContext } from "@/providers/authProvider";
import { PostInterface } from "@/types";
import AdmButtons from "@/ui/components/admButtons";
import { GenericPreviewComponent, ListPosts } from "@/ui/components/listPosts";
import { Modal } from "@/ui/components/modal";
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

  const cancelExclusion = () => {
    setExcludingPost(undefined);
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
    <div className="w-full h-full">
      <div className="container mx-auto p-4 flex flex-col gap-4">
        <AdmButtons />
        <ListPosts
          pagePosts={pagePosts}
          currentPage={currPage}
          itemsPerPage={perPage}
          totalPosts={totalPosts}
          blankStateMessage={EMPTY_MESSAGE_DEFAULT}
          setCurrentPage={setCurrPage}
          deletePost={excludePost}
          isLoading={isLoading}
          PostComponent={PostPreviewAdmin as unknown as GenericPreviewComponent}
        />
      </div>
      {excludingPost && excludingPost.id && (
        <Modal
          title={"Excluir post"}
          description={`Tem certeza que deseja excluir o Post ${excludingPost.title}?`}
          actions={
            <div className="w-full flex justify-end gap-3">
              <Button onClick={cancelExclusion} variant={"secondary"}>
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
    </div>
  );
};

export default AdminPostsView;
