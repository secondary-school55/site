import { useEffect, useState } from "react";

export default function usePosts(f = () => true) {
  const [posts, setPosts] = useState([]);
  const load = f();

  useEffect(() => {
    if (!load) return;
    import("lib/posts").then((v) =>
      setPosts(
        v.default.map((item) => ({
          ...item,
          titleLower: item.title.toLowerCase(),
        }))
      )
    );
  }, [load]);

  return posts;
}
