const { readFileSync } = require("fs");
const glob = require("glob");

const regex = /title:\s?(.*)/;

function getPosts() {
  const files = glob.sync("public/posts/**/*.md");
  const posts = files.map((filepath) => {
    const content = readFileSync(filepath);
    const title = regex.exec(content)[1];

    const base = filepath.replace("public/posts", "").replace("/index.md", "");
    const components = base.split("/");
    const kind = components[1];
    const id = components[2].replace(".md", "");

    const route = `/posts/view?id=${components[2]}&kind=${kind}`;
    const md = filepath.replace("public", "");
    const thumbnail = `/posts${base}/thumbnail.jpg`;
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

  posts.reverse();

  return posts;
}

module.exports = () => {
  return { code: `export default ${JSON.stringify(getPosts())}` };
};
