class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
  }
  fullName() {
    return `Your full names is ${this.firstName} ${this.lastName}`;
  }
  makeLate() {
    this.tardies += 1;
    return `Your full names is ${this.firstName} ${this.lastName} has been late ${this.tardies} time`;
  }
  static enrollStudenst(...studens) {
    console.log(studens);
  }
}
let me = new Student("Victor", "Ruiz");
let you = new Student("Pedro", "Ruiz");

me.makeLate();

console.log(me);

Student.enrollStudenst(me, you);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    // a and b are instance of Point
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}
const p1 = new Point(0, 0);
const p2 = new Point(100, 0);

console.log(Point.distance(p1, p2));
