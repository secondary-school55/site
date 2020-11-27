import { useEffect, useState } from "react";

export default function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    import("lib/posts").then((v) =>
      setPosts(
        v.default.map((item) => ({
          ...item,
          titleLower: item.title.toLowerCase(),
        }))
      )
    );
  }, []);

  return posts;
}
