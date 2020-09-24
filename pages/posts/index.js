import Posts from "components/posts";
import { filterByKind } from "lib/posts/utils";
import { useRouter } from "next/router";

export default function PostsContainer({ posts }) {
  const router = useRouter();
  const { kind } = router.query;

  if (!kind) return null;

  return <Posts data={filterByKind(posts, kind)} />;
}

export async function getStaticProps() {
  const { getPosts } = await import("lib/posts");

  return {
    props: {
      posts: getPosts(),
    },
  };
}
