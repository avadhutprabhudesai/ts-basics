import { logger } from '../utils';

/*
 *      Function overloads
 */

const PREAMBLE = 'advanced-types -> funtion-overloads.ts -> ';

(function () {
  type Addable = number | string;

  function add(a: string, b: string): string;
  function add(a: string, b: number): string;
  function add(a: number, b: string): string;
  function add(a: number, b: number): number;
  function add(a: number): number;
  function add(a: string): string;
  function add(a: Addable, b: Addable = 0) {
    if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString();
    }
    return a + b;
  }
  logger(
    `\n[ ${PREAMBLE} Function Overloads ] add(string, string): `,
    `${add('John', 'Wick')}`
  );
  logger(
    `\n[ ${PREAMBLE} Function Overloads ] add(string, number): `,
    `${add('John', 1)}`
  );
  logger(
    `\n[ ${PREAMBLE} Function Overloads ] add(number, string): `,
    `${add(7, 'Wick')}`
  );
  logger(
    `\n[ ${PREAMBLE} Function Overloads ] add(number, number): `,
    `${add(4, 8)}`
  );
  logger(
    `\n[ ${PREAMBLE} Function Overloads ] add(string): `,
    `${add('John')}`
  );
  logger(`\n[ ${PREAMBLE} Function Overloads ] add(number): `, `${add(100)}`);
})();
