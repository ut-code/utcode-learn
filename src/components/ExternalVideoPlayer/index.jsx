import React from "react";
import styles from "./styles.module.css";

/**
 * @param {Object} props
 * @param {string} props.src
 */
export default function ExternalVideoPlayer({ src }) {
  return (
    <p>
      <div className={styles.root}>
        <iframe
          className={styles.iframe}
          src={src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </p>
  );
}
