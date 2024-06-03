import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export type SlideShowProps = {
  imagePaths: string[];
};

export default function SlideShow(props: SlideShowProps) {
  return (
    <Slider>
      {props.imagePaths.map((imagePath, i) => {
        return <img key={imagePath} src={imagePath} alt={`スライド ${i}`} />;
      })}
    </Slider>
  );
}
