const fs = require("fs");
const path = require("path");
const posthtml = require("posthtml");

const filePath = path.resolve(__dirname, "./out/index.html");

/**
 * Drop all next scripts from html
 *
 * @param {posthtml.PostHTML.Node} tree
 */
function removeNextScripts(tree) {
  tree.match({ tag: "script" }, node => {
    if (
      (node.attrs &&
        node.attrs["src"] &&
          node.attrs.src.startsWith("/_next/static") &&
          node.attrs.src.endsWith(".js")) ||
      node.attrs.id === "__NEXT_DATA__"
    ) {
      console.log("Dropping script", node.attrs.src);
      node.tag = false;
      node.content = [];
    }
    return node;
  });

  tree.match({ tag: "link" }, node => {
    if (
      node.attrs &&
      node.attrs["href"] &&
      node.attrs.href.startsWith("/_next/static") &&
      node.attrs.href.endsWith(".js")
    ) {
      console.log("Dropping link", node.attrs.href);
      node.tag = false;
      node.content = [];
    }
    return node;
  });
}

const main = async () => {
  const html = fs.readFileSync(filePath).toString("utf8");
  const result = await posthtml()
    .use(removeNextScripts)
    .process(html, { sync: true });
  fs.writeFileSync(filePath, result.html);
};

main();
