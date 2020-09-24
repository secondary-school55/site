const xlsx = require("xlsx");

module.exports = (source) => {
  const book = xlsx.read(source, { type: "buffer" });
  const sheet = book.Sheets[book.SheetNames[0]];
  const table = /<table>.*<\/table>/g.exec(xlsx.utils.sheet_to_html(sheet))[0];

  return `export default ${JSON.stringify(tableToJS(table))}`;
};

module.exports.raw = true;

function tableToJS(html) {
  const reTR = /<tr>.*?<\/tr>/g;
  const reTD = /<td(.*?)>(.*?)<\/td>/g;
  const reAttrs = /(\S*?)="(.*?)"/g;
  const reNewline = /(&#x000d;|&#x000a;)/g;

  const match = (re, src, f) => {
    let m;
    while ((m = re.exec(src)) !== null) {
      f(m);
    }
  };

  const table = [];
  match(reTR, html, (tr) => {
    const row = [];

    match(reTD, tr, (td) => {
      const col = {
        text: td[2].replace(reNewline, ""),
        colspan: "1",
        rowspan: "1",
      };

      match(reAttrs, td[1], (attrs) => {
        switch (attrs[1]) {
          case "rowspan":
          case "colspan": {
            col[attrs[1]] = attrs[2];
          }
        }
      });

      row.push(col);
    });

    table.push(row);
  });

  return {
    headers: table[0].map((a) => a.text),
    table: table.slice(1),
  };
}
