import PostView from "@/ui/pages/post-view";

export default function Page({ params }: { params: { id: string } }) {
  return <PostView postId={params.id} />;
}
