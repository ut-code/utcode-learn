import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import Tippy from "@tippyjs/react";
import { MdArrowForward } from "react-icons/md";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";
import { onlyText } from "react-children-utilities";
import styles from "./styles.module.css";
import definitions from "./definitions";
import typeMap from "./type-map.js";

/**
 * @param {Object} props
 * @param {keyof typeof definitions | null} props.type
 * @param {React.ReactNode} props.children
 */
export default function Term({ type = null, children }) {
  if (type === null) type = typeMap.get(onlyText(children));
  if (!type)
    throw new Error(
      `Problem: Term ${onlyText(children)} is not defined in type-map.js .
      Solution: explicitly specify term type, or add type definition to type-map.js`,
    );

  const term = definitions.terms[type];
  if (!term) throw new Error(`Type ${type} is not defined.`);
  const referencePageTitle =
    definitions.referencePageTitles[term.referencePage];
  const location = useLocation();

  const wrap = (content) => {
    const shouldLinkToReferencePage = () => {
      // referencePageがundefinedならばリンクを表示しない
      if (term.referencePage === undefined) return false;

      // referencePageTitleがundefinedならばエラーを投げる (明らかに人的ミスのため)
      if (referencePageTitle === undefined) {
        throw new Error(
          `The page title of the reference "${term.referencePage}" is not defined in referencePageTitles in "src/components/Term/definition.js"`,
        );
      }

      // referencePageの#アンカーを除外
      const referenceLink = term.referencePage.split("#")[0];
      // 現在のページで用語が初出であればリンクを表示する必要がない
      if (location.pathname === referenceLink) return false;
      if (location.pathname + "/" === referenceLink) return false;
      return true;
    };

    return (
      <Tippy
        theme="material"
        interactive={shouldLinkToReferencePage()}
        appendTo={window.document.body}
        content={
          <div className={styles.tooltipContent}>
            <header className={styles.tooltipContentHeader}>{term.name}</header>
            <div>{term.definition}</div>
            {shouldLinkToReferencePage() && (
              <Link className={styles.tooltipLink} to={term.referencePage}>
                <span>{referencePageTitle} へ</span>
                <MdArrowForward size="1.2rem" />
              </Link>
            )}
          </div>
        }
      >
        {content}
      </Tippy>
    );
  };

  const content = <span className={styles.text}>{children}</span>;

  return typeof window === "object" ? wrap(content) : content;
}
