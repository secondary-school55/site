import Post from "components/post";
import { filterByKind, findPost } from "lib/posts/utils";
import { useRouter } from "next/router";

export default function View({ posts }) {
  const router = useRouter();
  const { id, kind } = router.query;

  if (!kind || !id) return null;

  const postsBy = filterByKind(posts, kind);
  return <Post data={findPost(postsBy, id)} />;
}

export async function getStaticProps() {
  const { getPosts } = await import("lib/posts");

  return {
    props: {
      posts: getPosts(),
    },
  };
}
