import React from "react";
import Details from "@theme/Details";

/**
 * component that hide an answer
 */
export default function Answer({ type = undefined, children }) {
  return (
    <Details
      summary={
        type ? <summary>{type} の解答例</summary> : <summary>解答例</summary>
      }
    >
      {children}
    </Details>
  );
}
