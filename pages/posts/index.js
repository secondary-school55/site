import Loader from "components/loader";
import Posts from "components/posts";
import usePosts from "lib/posts/use";
import { filterByKind } from "lib/posts/utils";
import { useRouter } from "next/router";

export default function PostsContainer() {
  const posts = usePosts();
  const router = useRouter();
  const { kind } = router.query;

  if (!kind || posts.length === 0) return <Loader />;

  return <Posts data={filterByKind(posts, kind)} />;
}
