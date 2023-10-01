import React from "react";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import Tippy from "@tippyjs/react";
import { MdArrowForward } from "react-icons/md";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";
import styles from "./styles.module.css";
import definitions from "./definitions";

/**
 * @param {Object} props
 * @param {keyof typeof definitions} props.type
 * @param {boolean} props.strong
 * @param {React.ReactNode} props.children
 */
export default function Term({ type, strong = false, children }) {
  const term = definitions.terms[type];
  if (!term) throw new Error(`Type ${type} is not defined.`);
  const referencePageTitle =
    definitions.referencePageTitles[term.referencePage];
  const location = useLocation();

  const wrap = (content) => {
    const shouldLinkToReferencePage = () => {
      // referencePageがundefinedならばリンクを表示しない (refPageTitleがundefでもデバッグの容易性のために表示する、直せ)
      if (term.referencePage === undefined) return false;

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

  const Tag = strong ? "strong" : "span";
  const content = <Tag className={styles.text}>{children}</Tag>;

  return typeof window === "object" ? wrap(content) : content;
}
