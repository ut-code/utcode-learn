import { Fragment } from "react";

export default function OriginExplanation() {
  return (
    <figure aria-hidden="true" style={{ overflowX: "auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "auto auto auto",
          gridAutoFlow: "column",
          width: "max-content",
          margin: "0.5em auto",
          textAlign: "center",
          lineHeight: 1.4,
          columnGap: "0.7em",
        }}
      >
        <div
          style={{
            gridRow: 1,
            gridColumn: "span 3",
            fontWeight: "bold",
            borderBottom: "3px solid",
            paddingBottom: "0.7em",
          }}
        >
          オリジン
        </div>
        {[
          { fragment: "http://", label: "プロトコル" },
          { fragment: "localhost", label: "ドメイン" },
          { fragment: ":3000", label: "ポート" },
          { fragment: "/lang/ja", label: "パス" },
        ].map(({ fragment, label }) => (
          <Fragment key={fragment}>
            <b
              style={{
                gridRow: 2,
                fontSize: "1.2em",
              }}
            >
              {fragment}
            </b>
            <span
              style={{
                gridRow: 3,
                borderTop: "3px solid",
                paddingTop: "0.7em",
              }}
            >
              {label}
            </span>
          </Fragment>
        ))}
      </div>
    </figure>
  );
}
