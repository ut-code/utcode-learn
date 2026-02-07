import type { Plugin } from "unified";
import type { Nodes, Root, RootContent } from "mdast";
import { phrasing } from "mdast-util-phrasing";

/**
 * `[[用語]]`を`<Term>用語</Term>`に変換するプラグイン。
 * `[[**用語**]]`のように中身が単一のASTノードの場合も変換可能。
 *
 * @example
 * // returns "<Term>**HTML**</Term>と<Term>CSS</Term>、そして<Term>JavaScript</Term>です。"
 * String(
 *   await remark()
 *     .use(remarkMdx)
 *     .use(remarkTerm)
 *     .process("[[**HTML**]]と[[CSS]]、そして[[JavaScript]]です。"),
 * );
 */
const remarkTerm: Plugin<[], Root> = () => (tree) => transform(tree);

export default remarkTerm;

function isParent(node: Nodes) {
  return "children" in node;
}

function transform(node: Nodes) {
  if (!isParent(node)) return;

  for (const child of node.children) {
    transform(child);
  }

  node.children = wrapDelimitedPhrasingAsTerm(
    node.children.flatMap((child) => isolateTermDelimiters(child)),
  );
}

function isolateTermDelimiters(node: RootContent): RootContent[] {
  if (node.type !== "text") return [node];

  return node.value
    .split(/(\[\[|\]\])/)
    .filter((segment) => segment !== "")
    .map((segment) => ({
      type: "text",
      value: segment,
    }));
}

function wrapDelimitedPhrasingAsTerm(children: RootContent[]): RootContent[] {
  const result: RootContent[] = [];

  let i = 0;
  while (i < children.length) {
    const openingDelimiter = children[i];
    const innerNode = children[i + 1];
    const closingDelimiter = children[i + 2];
    if (
      openingDelimiter.type === "text" &&
      openingDelimiter.value === "[[" &&
      innerNode &&
      phrasing(innerNode) &&
      closingDelimiter &&
      closingDelimiter.type === "text" &&
      closingDelimiter.value === "]]"
    ) {
      result.push({
        type: "mdxJsxTextElement",
        name: "Term",
        attributes: [],
        children: [innerNode],
      });
      i += 3;
    } else {
      result.push(children[i]);
      i += 1;
    }
  }

  return result;
}
