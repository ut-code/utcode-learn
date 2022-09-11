import React from "react";
import clsx from "clsx";
import { SiGithub } from "react-icons/si";
import styles from "./styles.module.css";

/**
 * @param {Object} props
 * @param {boolean} props.path
 */
export default function ViewOnGitHub({ path }) {
  return (
    <div className={styles.root}>
      <a
        className={clsx("button button--secondary", styles.button)}
        target="_blank"
        rel="noopener"
        href={`https://github.com/ut-code/utcode-learn/tree/master${path}`}
      >
        <SiGithub className={styles.icon} />
        GitHub で表示
      </a>
    </div>
  );
}
