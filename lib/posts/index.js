import { readFileSync } from "fs";
import glob from "glob";
import path from "path";

const regex = /title:\s?(.*)/;
let posts = [];

export function getPosts() {
  const files = glob.sync("public/posts/**/*.md");
  if (posts.length !== 0) return posts;
  posts = files.map((filepath) => {
    const content = readFileSync(filepath);
    const title = regex.exec(content)[1];

    const base = filepath.replace("public/posts", "").replace("/index.md", "");
    const components = base.split("/");
    const kind = components[1];
    const id = components[2].replace(".md", "");

    const route = `/posts/view?id=${components[2]}&kind=${kind}`;
    const md = filepath.replace("public", "");
    const thumbnail = `/posts${base}/thumbnail.webp`;
    const [year, month, day, slug] = id.split("-");

    let date = {
      year,
      month,
      day,
    };
    if (slug) date.slug = parseInt(slug);
    else date.slug = 1;

    return {
      title,
      route,
      md,
      kind,
      id,
      date,
      thumbnail,
    };
  });

  posts.sort((a, b) => {
    const a_d = new Date(a.date.year, a.date.month, a.date.day);
    const b_d = new Date(b.date.year, b.date.month, b.date.day);

    if (a_d.valueOf() < b_d.valueOf()) return 1;
    else if (a_d.valueOf() === b_d.valueOf()) {
      if (a.date.slug < b.date.slug) return 1;
      return -1;
    }
    return -1;
  });

  return posts;
}
