class Shape {
  color;
  constructor(color) {
    this.color = color;
  }
  getArea() {
    return 0;
    // 個別のクラスで再定義 (オーバーライド) する
  }
}

class Rectangle extends Shape {
  height;
  width;
  constructor(color, height, width) {
    super(color);
    this.height = height;
    this.width = width;
  }
  getArea() {
    return height * width;
  }
}

class Square extends Rectangle {
  // 長方形のプロパティ・メソッドを流用する
  constructor(color, sidesLength) {
    super(color, sidesLength, sidesLength);
  }
}

class Circle extends Shape {
  radius;
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  getArea() {
    return Math.PI * radius ** 2;
  }
}
