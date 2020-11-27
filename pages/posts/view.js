import Loader from "components/loader";
import Post from "components/post";
import usePosts from "lib/posts/use";
import { filterByKind, findPost } from "lib/posts/utils";
import { useRouter } from "next/router";

export default function View() {
  const posts = usePosts();
  const router = useRouter();
  const { id, kind } = router.query;

  if (!kind || !id || posts.length === 0) return <Loader />;

  const postsBy = filterByKind(posts, kind);
  return <Post data={findPost(postsBy, id)} />;
}
