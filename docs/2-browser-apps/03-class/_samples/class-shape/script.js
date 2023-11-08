class Shape {
  center_pos;
  getArea() {
    // 個別の図形で再定義する (オーバーライド)
    return undefined;
  }
}

class Trapezoid extends Shape {
  height;
  upperBase;
  lowerBase;
  constructor(center_pos, height, upperBase, lowerBase) {
    this.center_pos = center_pos;
    this.height = height;
    this.upperBase = upperBase;
    this.lowerBase = lowerBase;
  }
  getArea() {
    return (height * (upperBase + lowerBase)) / 2;
  }
}

class Rectangle extends Trapezoid {
  // 台形のプロパティを流用する
  constructor(center_pos, height, base) {
    this.center_pos = center_pos;
    this.height = height;
    this.upperBase = base;
    this.lowerBase = base;
  }
  getArea() {
    return height * lowerBase;
  }
}

class Circle extends Shape {
  radius;
  constructor(center_pos, radius) {
    this.center_pos = center_pos;
    this.radius = radius;
  }
  getArea() {
    return Math.PI * radius ** 2;
  }
}