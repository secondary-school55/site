export function findPost(posts, id) {
  return posts.find((post) => post.id === id);
}

export function filterByKind(posts, kind) {
  return posts.filter((post) => post.kind === kind);
}
