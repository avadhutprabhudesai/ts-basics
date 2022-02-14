import { logger } from './../../utils';
/**
 *
 *    Interfaces
 *      - props
 *        - optional props and methods
 *      - methods
 *      - interface inheritance
 *      - @todo: interface vs types
 *      - @todo: interface for function types
 */

const PREAMBLE = 'classes-interfaces -> interface/index.ts -> ';

// props
(function () {
  interface Movable {
    engineType: string;
    noOfWheels?: number;
    move: () => void;
  }

  class Car implements Movable {
    constructor(public engineType: string, public noOfWheels: number) {}

    move(): void {
      logger(
        `\n[ ${PREAMBLE} props ]: methods: `,
        `A car moves with ${this.noOfWheels} wheels and a ${this.engineType} engine`
      );
    }
  }

  class Plane implements Movable {
    constructor(public engineType: string) {}

    move(): void {
      logger(
        `\n[ ${PREAMBLE} props ]: methods: `,
        `A plane flies with a ${this.engineType} engine`
      );
    }
  }

  const c = new Car('diesel', 4);
  c.move();
  const p = new Plane('nuclear');
  p.move();
})();

// interface inheritance
(function () {
  interface Person {
    name: string;
    getName: () => string;
  }

  interface Workable extends Person {
    skills: string[];
    getSkills: () => string[];
  }

  class Employee implements Workable {
    constructor(public name: string, public skills: string[]) {}
    getSkills = (): string[] => {
      return this.skills;
    };
    getName = (): string => {
      return this.name;
    };
  }

  const e = new Employee('John', ['React', 'Vue']);
  logger(
    `\n[ ${PREAMBLE} interface inheritance ]: `,
    `name: ${e.getName()}, skills: ${e.getSkills().join(',')}`
  );
})();
