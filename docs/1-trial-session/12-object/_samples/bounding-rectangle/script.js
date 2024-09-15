function getBoundingRectangle(points) {
  const rectangle = {
    topLeft: {
      x: points[0].x,
      y: points[0].y,
    },
    bottomRight: {
      x: points[0].x,
      y: points[0].y,
    },
  };
  for (const point of points) {
    if (point.x < rectangle.topLeft.x) {
      rectangle.topLeft.x = point.x;
    }
    if (point.y < rectangle.topLeft.y) {
      rectangle.topLeft.y = point.y;
    }
    if (point.x > rectangle.bottomRight.x) {
      rectangle.bottomRight.x = point.x;
    }
    if (point.y > rectangle.bottomRight.y) {
      rectangle.bottomRight.y = point.y;
    }
  }
  return rectangle;
}

// 建物の場所
const buildingLocations = [
  { x: 2, y: 1 },
  { x: -1, y: 4 },
  { x: -2, y: -1 },
];
// 全ての建物が収まる地図を表す長方形
// { topLeft: { x: -2, y: -1 }, bottomRight: { x: 2, y: 4 } }
const mapRectangle = getBoundingRectangle(buildingLocations);
document.write(
  `地図の左上の点は(${mapRectangle.topLeft.x}, ${mapRectangle.topLeft.y})で、右下の点は(${mapRectangle.bottomRight.x}, ${mapRectangle.bottomRight.y})です。`,
);
