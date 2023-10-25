import React from "react";
import Details from "@theme/Details";

/**
 * component that hides a hint
 */
export default function Answer({ children, title = null, summary = null }) {
  return (
    <Details
      summary={
        <summary style={{ borderColor: "#009400" }}>
          {summary || title ? "ヒント: " + title : "ヒント"}
        </summary>
      }
      style={{
        backgroundColor: "#e6f6e6",
        borderStyle: "none none none solid",
        borderWidth: "5px",
        borderColor: "#009400",
      }}
    >
      {children}
    </Details>
  );
}
