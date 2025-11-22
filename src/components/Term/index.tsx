import { JSX } from "react";
// TypeScriptのセットアップをしていないことでエラーになるので無視する
// @ts-ignore
import Link from "@docusaurus/Link";
// @ts-ignore
import { useLocation } from "@docusaurus/router";
import Tippy from "@tippyjs/react";
import { MdArrowForward } from "react-icons/md";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";
import { onlyText } from "react-children-utilities";
// @ts-ignore
import styles from "./styles.module.css";
import { referencePageTitles, terms } from "./definitions";

type TermProps = {
  name?: string;
  children: React.ReactNode;
};

export default function Term(props: TermProps) {
  const name = props.name ? props.name : onlyText(props.children);
  const term = terms.find(
    (term) => term.name === name || term.aliases.includes(name),
  );
  if (!term) throw new Error(`${name}という用語は定義されていません`);

  const referencePageTitle = referencePageTitles[term.referencePage];

  const location = useLocation();

  const wrap = (content: JSX.Element) => {
    // 現在のページで用語が初出であればリンクを表示する必要がない
    const shouldLinkToReferencePage = Boolean(
      location.pathname !== term.referencePage &&
        location.pathname + "/" !== term.referencePage,
    );

    return (
      <Tippy
        theme="material"
        interactive={shouldLinkToReferencePage}
        appendTo={window.document.body}
        content={
          <div className={styles.tooltipContent}>
            <header className={styles.tooltipContentHeader}>{term.name}</header>
            <div>{term.definition}</div>
            {shouldLinkToReferencePage && (
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

  const content = <span className={styles.text}>{props.children}</span>;

  return typeof window === "object" ? wrap(content) : content;
}
