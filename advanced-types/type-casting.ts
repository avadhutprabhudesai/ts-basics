import { logger } from '../utils';

/*
 *      Type casting
          - DOM interface
          - Syntaxes
            - <>
            - as
 */

const PREAMBLE = 'advanced-types -> type-casting.ts -> ';

// DOM interface
(function () {
  const input1 = <HTMLInputElement>document.getElementById('text-input1');
  const input2 = document.getElementById('text-input2') as HTMLInputElement;
  const val1 = input1.value;
  const val2 = input2.value;

  logger(`\n[ ${PREAMBLE} DOM interface ] input value 1: `, `${val1}`);
  logger(`\n[ ${PREAMBLE} DOM interface ] input value 2: `, `${val2}`);
})();

// primitive values
(function () {
  function add(a: unknown, b: unknown, type: string) {
    switch (type) {
      case 'string':
        return (a as string) + (b as string);
      case 'number':
        return (a as number) + (b as number);
      case 'boolean':
        return (a as boolean) && (b as boolean);
      case 'object':
        return {
          ...(a as { id: number }),
          ...(b as { firstName: string; lastName: string }),
          toString() {
            return `id: ${this.id} firstName: ${this.firstName} lastName: ${this.lastName}`;
          },
        };
    }
  }
  logger(
    `\n[ ${PREAMBLE} type casting for unknown ] add(string, string): `,
    `${add('John', 'Wick', 'string')}`
  );
  logger(
    `\n[ ${PREAMBLE} type casting for unknown ] add(number, number): `,
    `${add(1, 5, 'number')}`
  );
  logger(
    `\n[ ${PREAMBLE} type casting for unknown ] add(boolean, boolean): `,
    `${add(true, false, 'boolean')}`
  );
  logger(
    `\n[ ${PREAMBLE} type casting for unknown ] add(object, object): `,
    `${add({ id: 1 }, { firstName: 'John', lastName: 'Wick' }, 'object')}`
  );
})();
