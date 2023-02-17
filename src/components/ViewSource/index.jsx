import React from "react";
import clsx from "clsx";
import { BiLinkExternal } from "react-icons/bi";
import { SiGithub } from "react-icons/si";
import styles from "./styles.module.css";

/**
 * @param {Object} props
 * @param {boolean} props.path
 * @param {boolean} props.noCodeSandbox
 */
export default function ViewSource({ url, path, noCodeSandbox }) {
  const fullPathSplit = url.split("/");
  const pathFromDocs = fullPathSplit.slice(fullPathSplit.lastIndexOf("docs"));
  const dirPath = pathFromDocs.slice(0, pathFromDocs.length - 1);
  const relativePath = `${dirPath.join("/")}/${path}`;
  return (
    <div className={styles.root}>
      <a
        className={clsx("button button--secondary", styles.button)}
        target="_blank"
        rel="noopener"
        href={`https://github.com/ut-code/utcode-learn/tree/master/${relativePath}`}
      >
        <SiGithub className={styles.icon} />
        GitHub で表示
      </a>
      {!noCodeSandbox && (
        <a
          className={clsx("button button--primary", styles.button)}
          target="_blank"
          rel="noopener"
          href={`https://githubbox.com/ut-code/utcode-learn/tree/master/${relativePath}`}
        >
          このプログラムを実行する
          <BiLinkExternal className={styles.icon} />
        </a>
      )}
    </div>
  );
}
