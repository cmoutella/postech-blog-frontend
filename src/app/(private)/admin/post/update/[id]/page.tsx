import PostUpdate from "@/ui/pages/admin/update";

export default function Page({ params }: { params: { id: string } }) {
  return <PostUpdate postId={params.id} />;
}
