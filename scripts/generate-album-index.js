const fs = require("fs");
const glob = require("glob");
const path = require("path");

const album = glob
  .sync("public/posts/news/**/*.md", { cwd: "." })
  .map((file) => ({ filepath: file, data: fs.readFileSync(file, "utf-8") }))
  .map(extractMdData)
  .filter((item) => item.slideshows.length > 0);

fs.writeFileSync("out/album.json", JSON.stringify(album));

function extractMdData({ filepath, data }) {
  const reTitle = /title: (.*)/;
  const reSlideshow = /<slideshow( id="(.*)")*>/g;

  const title = reTitle.exec(data)[1];
  const filename = path.dirname(filepath).split("/").slice(-1)[0].split(".")[0];

  const id = "news-" + filename;
  const date = parseDate(filename);

  const slideshows = [];
  let m;

  while ((m = reSlideshow.exec(data)) !== null) {
    switch (true) {
      case m[2] === undefined:
        slideshows.push(id);
        break;

      case m[2].startsWith("*"):
        slideshows.push(`${id}-${m[2].slice(1)}`);
        break;

      default:
        slideshows.push(m[2]);
    }
  }
  return { title, date, slideshows };
}

function parseDate(date) {
  if (date === undefined) return null;

  date = date.split("-");
  if (date.length === 1) return null;

  const [year, month, day, id] = date;

  return { year, month, day, id };
}
