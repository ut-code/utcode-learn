import React from "react";
import clsx from "clsx";
import { useLocation } from "@docusaurus/router";
import config from "@generated/docusaurus.config";
import { BiLinkExternal } from "react-icons/bi";
import { SiGithub } from "react-icons/si";
import styles from "./styles.module.css";

/**
 * @param {Object} props
 * @param {boolean} props.path
 * @param {boolean} props.noCodeSandbox
 */
export default function ViewSource({ path, noCodeSandbox }) {
  const pathname = useLocation().pathname.slice(config.baseUrl.length - 1);
  return (
    <div className={styles.root}>
      <a
        className={clsx("button button--secondary", styles.button)}
        target="_blank"
        rel="noopener"
        href={`https://github.com/ut-code/utcode-learn/tree/master${pathname}${path}`}
      >
        <SiGithub className={styles.icon} />
        GitHub で表示
      </a>
      {!noCodeSandbox && (
        <a
          className={clsx("button button--primary", styles.button)}
          target="_blank"
          rel="noopener"
          href={`https://githubbox.com/ut-code/utcode-learn/tree/master${path}`}
        >
          このプログラムを実行する
          <BiLinkExternal className={styles.icon} />
        </a>
      )}
    </div>
  );
}
