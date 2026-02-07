import { JSX } from "react";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import Tippy from "@tippyjs/react";
import { MdArrowForward } from "react-icons/md";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";
import { onlyText } from "react-children-utilities";
import styles from "./styles.module.css";
import { referencePageTitles, terms } from "./definitions";

type TermProps = {
  id?: string;
  children: React.ReactNode;
};

export default function Term(props: TermProps) {
  const term = props.id
    ? terms.find((term) => term.id === props.id)
    : terms.find(
        (term) =>
          term.name === onlyText(props.children) ||
          term.aliases.includes(onlyText(props.children)),
      );
  if (!term)
    throw new Error(
      `${props.id ? props.id : onlyText(props.children)}という用語は定義されていません`,
    );

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
