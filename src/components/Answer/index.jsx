import React from "react";
import Details from "@theme/Details";

/**
 * component that hide an answer
 */
export default function Answer({ children }) {
  return <Details summary={<summary>解答</summary>}>{children}</Details>;
}
