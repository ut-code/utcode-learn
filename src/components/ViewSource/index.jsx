import clsx from "clsx";
import { BiLinkExternal } from "react-icons/bi";
import { SiGithub } from "react-icons/si";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

const repositoryRootPathLength =
  import.meta.url.split("/").slice(0, -4).join("/").length + 1;

/**
 * @param {Object} props
 * @param {string} props.url
 * @param {boolean} props.path
 * @param {boolean} props.noCodeSandbox
 */
export default function ViewSource({ url, path, noCodeSandbox }) {
  const basePath = url.slice(repositoryRootPathLength);
  const commitRef = useDocusaurusContext()?.siteConfig.customFields.commitRef;
  const gitHubUrl = new URL(
    path,
    `https://github.com/ut-code/utcode-learn/tree/${commitRef}/${basePath}`,
  );
  const codeSandboxUrl = new URL(
    path,
    `https://githubbox.com/ut-code/utcode-learn/tree/${commitRef}/${basePath}`,
  );
  return (
    <div className={styles.root}>
      <a
        className={clsx("button button--secondary", styles.button)}
        target="_blank"
        rel="noopener"
        href={gitHubUrl.toString()}
      >
        <SiGithub className={styles.icon} />
        GitHub で表示
      </a>
      {!noCodeSandbox && (
        <a
          className={clsx("button button--primary", styles.button)}
          target="_blank"
          rel="noopener"
          href={codeSandboxUrl.toString()}
        >
          このプログラムを実行する
          <BiLinkExternal className={styles.icon} />
        </a>
      )}
    </div>
  );
}
