import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`ut.code(); Learn`}
      description="東京大学のソフトウェアエンジニアリングコミュニティ ut.code(); の公式教材です。自由に利用可能です。"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--secondary button--lg",
                styles.getStarted,
              )}
              to={useBaseUrl("docs/")}
            >
              はじめる
            </Link>
          </div>
        </div>
      </header>
      <main>
        <p>
          ut.code(); Learn
          は、東京大学のソフトウェアエンジニアリングコミュニティである
          ut.code(); の公式教材です。
        </p>
        <p>
          この教材は、全くの未経験の状態からでも、自力で Web
          サービスが開発できるようになれるようにするためのものであり、誰でも自由に利用可能です。
        </p>
      </main>
    </Layout>
  );
}

export default Home;
