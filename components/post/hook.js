import { useRouter } from "next/router";

export function useRelative(link) {
  const router = useRouter();
  const { kind, id } = router.query;

  return `/posts/${kind}/${id}/${link}`;
}
