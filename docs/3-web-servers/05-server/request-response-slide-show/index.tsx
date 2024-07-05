import React from "react";
import SlideShow from "../../../../src/components/SlideShow";

export default function RequestResponseSlideShow() {
  return (
    <SlideShow
      imagePaths={Array.from(
        { length: 13 },
        (_, i) =>
          require(`./${(i + 1).toString().padStart(2, "0")}.webp`).default,
      )}
    />
  );
}
