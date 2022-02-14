import { logger } from './../../utils';

/**
 *    Inheritance
 *        - extends
 *        - super
 *        - overriding
 *        - getters/setters
 *        - abstract classes
 *        - private constructors and singletons
 */

const PREAMBLE = 'classes-interfaces -> inheritance.ts -> ';

// extends without child constructor
(function () {
  class User {
    constructor(public id: number, public name: string) {}

    displayUser() {
      logger(
        `\n[ ${PREAMBLE} extends ]: user.displayUser :`,
        `${this.id}: ${this.name}`
      );
    }
  }

  class PaidUser extends User {
    subAmount: number;
  }

  const p = new PaidUser(1, 'John Wick');
  logger(`\n[ ${PREAMBLE} extends ]: PaidUser :`, p);

  // compiler errors
  // const p = new PaidUser();
})();

// extends with child constructor
(function () {
  class User {
    constructor(public id: number, public name: string) {}

    displayUser() {
      logger(
        `\n[ ${PREAMBLE} extends ]: user.displayUser :`,
        `${this.id}: ${this.name}`
      );
    }
  }

  class PaidUser extends User {
    subAmount: number;
    constructor(id: number, name: string, subAmount: number) {
      super(id, name);
      this.subAmount = subAmount;
    }
  }

  const p = new PaidUser(1, 'John Wick', 500);
  logger(`\n[ ${PREAMBLE} extends with super ]: PaidUser :`, p);

  // compiler errors
  // const p = new PaidUser();
})();

// overriding
(function () {
  class Vehicle {
    move() {
      logger(
        `\n[ ${PREAMBLE} overriding ]: Vehicle.move() :`,
        'Move from point a to point b'
      );
    }
  }

  class Bike extends Vehicle {
    move() {
      logger(
        `\n[ ${PREAMBLE} overriding ]: Bike.move() :`,
        'Move from point a to point b on 2 wheels'
      );
    }
  }
  class Car extends Vehicle {
    move() {
      logger(
        `\n[ ${PREAMBLE} overriding ]: Car.move() :`,
        'Move from point a to point b on 4 wheels'
      );
    }
  }

  const v = new Vehicle();
  const c = new Car();
  const b = new Bike();

  v.move();
  c.move();
  b.move();
})();

// getters and setters
(function () {
  class Person {
    constructor(private firstName: string, private lastName: string) {}

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
      const [first, last] = name.split(' ');
      this.firstName = first;
      this.lastName = last;
    }
  }

  const p = new Person('John', 'Wick');
  logger(`\n[ ${PREAMBLE} getters/setters ]: Person :`, p.fullName);
  p.fullName = 'John Rambo';
  logger(`\n[ ${PREAMBLE} getters/setters ]: Person :`, p.fullName);

  // compiler error
  // p.firstName = 'Smith'
})();

// abstract classes
(function () {
  abstract class Shape {
    abstract calcArea(): number;
  }

  class Square extends Shape {
    constructor(public side: number) {
      super();
    }
    calcArea(): number {
      return this.side * this.side;
    }
  }

  class Circle extends Shape {
    constructor(public rad: number) {
      super();
    }
    calcArea(): number {
      return Math.PI * Math.pow(this.rad, 2);
    }
  }

  const s = new Square(4);
  const c = new Circle(4);
  logger(
    `\n[ ${PREAMBLE} abstract classes ]: Square.calcArea() :`,
    s.calcArea()
  );
  logger(
    `\n[ ${PREAMBLE} abstract classes ]: Circle.calcArea() :`,
    c.calcArea()
  );

  // compiler error
  // const s = new Shape();
})();

// singletons
(function () {
  class Logger {
    static i: Logger;
    private constructor() {}

    static getInstance() {
      if (!this.i) {
        this.i = new Logger();
        logger(
          `\n[ ${PREAMBLE} singleton ]: getInstance :`,
          'Creating the instance for the first time'
        );
      }
      return this.i;
    }

    log(s: string): void {
      logger(`\n[ ${PREAMBLE} singleton ]: log() :`, `loggeed ${s}`);
    }
  }
  const s1 = Logger.getInstance();
  const s2 = Logger.getInstance();
  const s3 = Logger.getInstance();

  s1.log('Some app logs 1');
  s2.log('Some app logs 2');
  s3.log('Some app logs 3');

  // compiler error
  // const l = new Logger();
})();
