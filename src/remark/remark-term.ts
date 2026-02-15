import type { Plugin } from "unified";
import type { Nodes, PhrasingContent, Root, RootContent } from "mdast";
import { phrasing } from "mdast-util-phrasing";

/**
 * `[[用語]]`を`<Term>用語</Term>`に変換するプラグイン。
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

  node.children = wrapDelimitedPhrasingContentsAsTerm(
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

function wrapDelimitedPhrasingContentsAsTerm(
  children: RootContent[],
): RootContent[] {
  const result: RootContent[] = [];
  const buffer: PhrasingContent[] = [];

  for (const child of children) {
    if (buffer.length === 0) {
      if (child.type === "text" && child.value === "[[") {
        buffer.push(child);
        continue;
      }
      result.push(child);
      continue;
    }

    if (child.type === "text" && child.value === "]]") {
      result.push({
        type: "mdxJsxTextElement",
        name: "Term",
        attributes: [],
        children: buffer.slice(1),
      });
      buffer.length = 0;
      continue;
    }

    if (phrasing(child)) {
      buffer.push(child);
      continue;
    }

    result.push(...buffer, child);
    buffer.length = 0;
  }

  result.push(...buffer);

  return result;
}
