import { logger } from './../../utils';

/**
 *    Classes
 *      - property initializer
 *      - without constructor
 *      - single constructor
 *      - constructor overloading
 *      - readonly
 *      - getters/setters
 *      - static
 */

const PREAMBLE = 'classes-interfaces -> basics.ts -> ';

// property initializer
(function () {
  class Point {
    x: number = 0;
    y: number = 0;
  }

  const p = new Point();
  logger(`\n[ ${PREAMBLE} property initializer ]: Point :`, p);

  //compiler error
  // const p = new Point(1, 3);
})();

// without constructor
(function () {
  class Point {
    x: number;
    y: number;
  }

  const p = new Point();
  logger(`\n[ ${PREAMBLE} without constructor ]: Point :`, p);

  //compiler error
  // const p = new Point(1, 3);
})();

// with constructor
(function () {
  class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }

  const p = new Point(1, 3);
  logger(`\n[ ${PREAMBLE} with constructor ]: Point :`, p);

  //compiler error
  // const p = new Point();
})();

// constructor overloading
(function () {
  class Point {
    x: string | number;
    y: string | number;

    constructor(x: number);
    constructor(x: number, y: number);
    constructor(x: string, y: string);
    constructor(p: [number, number]);
    constructor(x: number | string | [number, number], y?: number | string) {
      if (Array.isArray(x)) {
        this.x = x[0];
        this.y = x[1];
      } else {
        this.x = +x;
        this.y = +(y || 5);
      }
    }
  }

  const p1 = new Point(1, 3);
  const p2 = new Point('1', '2');
  const p3 = new Point([1, 4]);
  const p4 = new Point(1);

  logger(`\n[ ${PREAMBLE} constructor overloading ]: Point p1:`, p1);
  logger(`\n[ ${PREAMBLE} constructor overloading ]: Point p2:`, p2);
  logger(`\n[ ${PREAMBLE} constructor overloading ]: Point p3:`, p3);
  logger(`\n[ ${PREAMBLE} constructor overloading ]: Point p4:`, p4);

  //compiler error
  // const p = new Point();
})();

// readonly
(function () {
  class Point {
    constructor(readonly x: number, readonly y: number) {}
  }

  const p = new Point(4, 6);
  logger(`\n[ ${PREAMBLE} readonly ]: Point :`, p);

  //compiler error
  // p.x = 20;
  // p.y = 10;
})();

// getter/setter
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

  logger(`\n[ ${PREAMBLE} getter/setter ]: Person :`, p.fullName);
  p.fullName = 'Steve Rogers';
  logger(`\n[ ${PREAMBLE} getter/setter ]: Person :`, p.fullName);

  //compiler error
  // p.firstName = 'John';
})();

// static
(function () {
  class Calc {
    static factor: number = 10;
    static tenTimes(num: number) {
      return num * this.factor;
    }
  }

  logger(`\n[ ${PREAMBLE} static ]: Calc.tenTimes() :`, Calc.tenTimes(4));

  const c = new Calc();
  //compiler error
  // console.log(c.factor);
})();
