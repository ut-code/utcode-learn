import React from "react";
import clsx from "clsx";
import { BiLinkExternal } from "react-icons/bi";
import styles from "./styles.module.css";

/**
 * @param {Object} props
 * @param {boolean} props.path
 */
export default function Term({ path }) {
  return (
    <a
      className={clsx("button button--primary", styles.root)}
      target="_blank"
      rel="noopener"
      href={`https://githubbox.com/ut-code/utcode-learn/tree/master${path}`}
    >
      このプログラムを実行する
      <BiLinkExternal className={styles.icon} />
    </a>
  );
}
