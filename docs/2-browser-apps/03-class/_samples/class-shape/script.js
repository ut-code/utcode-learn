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
  base;
  constructor(color, height, base) {
    super(color);
    this.height = height;
    this.base = base;
  }
  getArea() {
    return height * base;
  }
}

class Square extends Rectangle {
  // 長方形のプロパティを流用する
  constructor(color, sides) {
    this.color = color;
    this.height = sides;
    this.base = sides;
  }
  getArea() {
    return base ** 2;
  }
}

class Circle extends Shape {
  radius;
  constructor(color, radius) {
    this.color = color;
    this.radius = radius;
  }
  getArea() {
    return Math.PI * radius ** 2;
  }
}
