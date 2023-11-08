class Shape {
  center_pos;
  area = undefined;
  getArea() {
    if (this.area !== undefined) {
      // area がすでに計算されているならそれを返す
      return this.area;
    } else {
      // 計算されていないなら計算して代入してから返す
      this.area = this.calculateArea();
      return this.area;
    }
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
  calculateArea() {
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
  calculateArea() {
    return height * lowerBase;
  }
}

class Circle extends Shape {
  radius;
  constructor(center_pos, radius) {
    this.center_pos = center_pos;
    this.radius = radius;
  }
  calculateArea() {
    return Math.PI * radius ** 2;
  }
}