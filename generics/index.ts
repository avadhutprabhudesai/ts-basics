import { logger } from '../utils';
/**
 *    Generics
 *      - Built in generics
 *        - Array
 *        - Promise
 *      - Generic function
 *      - Constraints
 *        - extends (types/interface)
 *        - keyof
 *      - Generic classes
 *      - Built in types
 *        - Partial
 *        - Readonly
 */

const PREAMBLE = 'generics -> index.ts -> ';

// built in generics
(async function () {
  const numArr: Array<number> = [1, 2, 3, 4];
  numArr.push(10);

  const prom = await new Promise<string>((resolve, reject) => {
    resolve('A resolved value');
  });

  logger(`\n[ ${PREAMBLE} built in Array generics ] numArr: `, `${numArr}`);
  logger(`\n[ ${PREAMBLE} built in Promise generics ] prom: `, `${prom}`);

  // compiler errors
  // numArr.push('string');
})();

// Generic function
(function () {
  function identity<T>(arg: T): T {
    return arg;
  }

  function adder<T, U>(a: T, b: U): T {
    return Object.assign(a, b);
  }

  const pi = identity(3.14);

  const mergedObject = adder(
    { id: 1, name: 'John' },
    {
      toString: function () {
        return `id: ${this.id}, name: ${this.name}`;
      },
    }
  );

  logger(`\n[ ${PREAMBLE} identity generic function ] pi: `, `${pi}`);
  logger(
    `\n[ ${PREAMBLE} object adder generic function ] mergedObject: `,
    `${mergedObject}`
  );

  // compiler errors
})();

// constraints
(function () {
  function adder<T extends object, U extends object>(a: T, b: U): T {
    return Object.assign(a, b);
  }

  const mergedObject = adder(
    { id: 1, name: 'John' },
    {
      toString: function () {
        return `id: ${this.id}, name: ${this.name}`;
      },
    }
  );

  logger(
    `\n[ ${PREAMBLE} object adder generic function ] mergedObject: `,
    `${mergedObject}`
  );

  function add<T extends string, U extends number | string>(x: T, y: U) {
    return x + y;
  }
  logger(
    `\n[ ${PREAMBLE} string and number constraint ] add(string, number): `,
    `${add('1', 2)}`
  );
  logger(
    `\n[ ${PREAMBLE} string and number constraint ] add(string, string): `,
    `${add('1', 'something')}`
  );

  interface Lengthy {
    length: number;
  }

  function countElements<T extends Lengthy>(x: T) {
    return x.length;
  }

  logger(
    `\n[ ${PREAMBLE} T extends interface ] countElement(string): `,
    `${countElements('avadhut')}`
  );
  logger(
    `\n[ ${PREAMBLE} T extends interface ] countElement(array): `,
    `${countElements([1, 2, 3, 4])}`
  );

  // compiler errors
  // adder(10, 20);
  //  add(10, 20);
  // countElements(1);
})();

// generic classes
(function () {
  interface Node {
    value: string;
    next: Node | null;
  }

  class List<T> {
    constructor(public item: T) {}

    addItem(arg: T) {}

    removeItem(arg: T): T {
      return arg;
    }
  }

  const numList = new List(1);
  numList.addItem(2);

  // compiler errors
  // adder(10, 20);
  //  add(10, 20);
  // countElements(1);
  // l.addItem('string');
})();
