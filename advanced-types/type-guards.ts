import { logger } from '../utils';

/*
 *      Type guards
 *        - for primitive unions
 *          - typeof
 *        - for object unions
 *          - in method
 *          - instanceof
 */

const PREAMBLE = 'advanced-types -> type-guards.ts -> ';

// for primitive unions
(function () {
  type StringOrNumber = string | number;

  function add(a: StringOrNumber, b: StringOrNumber) {
    if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString();
    }
    return a + b;
  }
  logger(`\n[ ${PREAMBLE} for primitve unions ]: `, `${add(1, 3)}`);
  logger(`\n[ ${PREAMBLE} for primitve unions ]: `, `${add('1', '3')}`);

  // compiler errors
  // logger(`\n[ ${PREAMBLE} for primitve unions ]: `, `${add(true, 1)}`);
})();

// in method for unions of types
(function () {
  type Backend = {
    database: string;
    server: string;
  };

  type Frontend = {
    javascript: string;
  };

  type Developer = Backend | Frontend;

  const d: Developer = {
    database: 'Mongo',
    server: 'NodeJS',
    javascript: 'React',
  };

  function printDeveloper(developer: Developer) {
    if ('database' in developer) {
      logger(
        `\n[ ${PREAMBLE} in method for union of types ]: `,
        `${developer.database}`
      );
    }
    if ('server' in developer) {
      logger(
        `\n[ ${PREAMBLE} in method for union of types ]: `,
        `${developer.server}`
      );
    }
    if ('javascript' in developer) {
      logger(
        `\n[ ${PREAMBLE} in method for union of types ]: `,
        `${developer.javascript}`
      );
    }
  }

  printDeveloper(d);
})();

// instanceof method for unions of classes
(function () {
  class Backend {
    writeCode() {
      logger(
        `\n[ ${PREAMBLE} for unions of classes ]: `,
        `This developer can write backend code`
      );
    }
    deployCode() {
      logger(
        `\n[ ${PREAMBLE} for unions of classes ]: `,
        `This developer can deploy code`
      );
    }
  }

  class Frontend {
    writeCode() {
      logger(
        `\n[ ${PREAMBLE} for unions of classes ]: `,
        `This developer can write frontend code`
      );
    }
  }

  type Developer = Backend | Frontend;

  const b = new Backend();
  const f = new Frontend();

  function printDeveloper(developer: Developer) {
    if (developer instanceof Backend) {
      developer.writeCode();
      developer.deployCode();
    }
    if (developer instanceof Frontend) {
      developer.writeCode();

      // compiler error
      // developer.deployCode();
    }
  }
})();
