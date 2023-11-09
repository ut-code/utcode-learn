class Shape {
  color;
  constructor(color) {
    this.color = color;
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
  calculateArea() {
    return this.height * this.width;
  }
}

class Square extends Rectangle {
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
  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}
