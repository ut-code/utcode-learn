import Details from "@theme/Details";

/**
 * component that hide an answer
 */
export default function Answer({ title = undefined, children }) {
  return (
    <Details
      summary={
        title ? <summary>解答例: {title}</summary> : <summary>解答例</summary>
      }
    >
      {children}
    </Details>
  );
}
