import raw from "rehype-raw";
import rehype2react from "rehype-react";
import frontmatter from "remark-frontmatter";
import parse from "remark-parse";
import remark2rehype from "remark-rehype";
import unified from "unified";

export function markdownToReact(content, options) {
  const processor = unified()
    .use(parse)
    .use(frontmatter, ["yaml"])
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(raw)
    .use(rehype2react, options);

  return processor.processSync(content).result;
}
