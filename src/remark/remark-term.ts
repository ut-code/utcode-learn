import type { Plugin } from "unified";
import type { Nodes, Root, RootContent } from "mdast";
import "mdast-util-mdx-jsx";
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

  node.children = transformChildren(
    node.children.flatMap((child) => transformChild(child)),
  );
}

function transformChild(node: RootContent): RootContent[] {
  if (node.type !== "text") return [node];

  const transformedChildren: RootContent[] = [];
  let text = node.value;

  if (text.startsWith("]]")) {
    transformedChildren.push({ type: "text", value: "]]" });
    text = text.slice(2);
  }

  if (text.endsWith("[[")) {
    text = text.slice(0, -2);
  }

  for (const segmentedText of text.split(/(\[\[.*?\]\])/)) {
    if (segmentedText === "") {
      continue;
    }
    if (segmentedText.startsWith("[[")) {
      transformedChildren.push({
        type: "mdxJsxTextElement",
        name: "Term",
        attributes: [],
        children: [
          {
            type: "text",
            value: segmentedText.slice(2, -2),
          },
        ],
      });
    } else {
      transformedChildren.push({
        type: "text",
        value: segmentedText,
      });
    }
  }

  if (node.value.endsWith("[[")) {
    transformedChildren.push({ type: "text", value: "[[" });
  }

  return transformedChildren;
}

function transformChildren(children: RootContent[]): RootContent[] {
  const transformedChildren: RootContent[] = [];

  let i = 0;
  while (i < children.length) {
    const openingBracket = children[i];
    const innerElement = children[i + 1];
    const closingBracket = children[i + 2];
    if (
      openingBracket.type !== "text" ||
      openingBracket.value !== "[[" ||
      !innerElement
    ) {
      transformedChildren.push(openingBracket);
      i++;
      continue;
    }

    if (
      !closingBracket ||
      closingBracket.type !== "text" ||
      closingBracket.value !== "]]"
    ) {
      transformedChildren.push(openingBracket, innerElement);
      i += 2;
      continue;
    }

    if (!phrasing(innerElement)) {
      transformedChildren.push(openingBracket, innerElement, closingBracket);
      i += 3;
      continue;
    }

    transformedChildren.push({
      type: "mdxJsxTextElement",
      name: "Term",
      attributes: [],
      children: [innerElement],
    });
    i += 3;
  }

  return transformedChildren;
}
