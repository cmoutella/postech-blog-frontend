import { PostInterface } from "@/types";
import BlankState from "../blankState";

import { Loading } from "../loading";
import Pagination from "../pagination";

export type GenericPreviewComponent = (props: {
  post: PostInterface;
  deletePost?: (id: string, title: string) => void;
}) => React.JSX.Element;

type ListPostsProps = {
  isLoading: boolean;
  pagePosts: PostInterface[];
  totalPosts: number;
  currentPage: number;
  itemsPerPage: number;
  deletePost?: (id: string, title: string) => void;
  setCurrentPage: (n: number) => void;
  PostComponent: GenericPreviewComponent;
  blankStateMessage: string;
};

export const ListPosts = ({
  isLoading,
  pagePosts,
  totalPosts,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  deletePost,
  PostComponent,
  blankStateMessage,
}: ListPostsProps) => {
  return (
    <>
      <div className="container mt-14 flex items-center mx-auto p-4 flex-col">
        {isLoading && <Loading />}
        {!isLoading && (!pagePosts || pagePosts.length <= 0) && (
          <BlankState message={blankStateMessage} />
        )}
        {!isLoading &&
          pagePosts.map((post) => (
            <PostComponent
              post={post}
              key={post.id}
              deletePost={() => deletePost && deletePost(post.id, post.title)}
            />
          ))}
      </div>
      {totalPosts >= 1 && (
        <div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalItems={totalPosts}
            perPage={itemsPerPage}
          />
        </div>
      )}
    </>
  );
};
