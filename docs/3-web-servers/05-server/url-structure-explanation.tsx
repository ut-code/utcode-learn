import React, { Fragment } from "react";

export default function UrlStructureExplanation() {
  return (
    <figure style={{ overflowX: "auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "auto auto",
          gridAutoFlow: "column",
          width: "max-content",
          margin: "0.5em auto",
          textAlign: "center",
          lineHeight: 1.4,
          gap: "0.7em",
        }}
      >
        {[
          { fragment: "http://", label: "プロトコル" },
          { fragment: "localhost", label: "ドメイン" },
          { fragment: ":3000", label: "ポート" },
          { fragment: "/lang/ja", label: "パス" },
        ].map(({ fragment, label }) => (
          <Fragment key={fragment}>
            <b
              style={{
                fontSize: "1.2em",
                borderBottom: "3px solid",
              }}
            >
              {fragment}
            </b>
            <span>{label}</span>
          </Fragment>
        ))}
      </div>
    </figure>
  );
}
