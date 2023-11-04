/**
 * Filename: complex_code.js
 * 
 * Description: A sophisticated and elaborate JavaScript code example
 * 
 * This code performs a complex task of creating a geometry engine that
 * calculates the properties of various 2D shapes such as circles,
 * rectangles, and triangles.
 * 
 * The code consists of multiple classes and functions, with each class
 * representing a shape and containing methods to perform calculations.
 * 
 * The code also includes a test suite at the bottom to validate the
 * functionality of the geometry engine.
 */

// Shape Class - Base class for all shapes
class Shape {
  constructor() {
    this.name = 'Shape';
  }

  toString() {
    return `This is a ${this.name}`;
  }
}

// Circle Class - Represents a circle shape, inherits from Shape
class Circle extends Shape {
  constructor(radius) {
    super();
    this.name = 'Circle';
    this.radius = radius;
  }

  getArea() {
    return Math.PI * (this.radius ** 2);
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

// Rectangle Class - Represents a rectangle shape, inherits from Shape
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.name = 'Rectangle';
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Triangle Class - Represents a triangle shape, inherits from Shape
class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.name = 'Triangle';
    this.base = base;
    this.height = height;
  }

  getArea() {
    return 0.5 * this.base * this.height;
  }

  getPerimeter() {
    return 3 * this.base;
  }
}

// Test Suite - Validate the functionality of the geometry engine
function runTests() {
  const circle = new Circle(5);
  console.log(circle.toString());
  console.log('Area:', circle.getArea());
  console.log('Circumference:', circle.getCircumference());

  const rectangle = new Rectangle(4, 6);
  console.log(rectangle.toString());
  console.log('Area:', rectangle.getArea());
  console.log('Perimeter:', rectangle.getPerimeter());

  const triangle = new Triangle(8, 10);
  console.log(triangle.toString());
  console.log('Area:', triangle.getArea());
  console.log('Perimeter:', triangle.getPerimeter());
}

runTests();
