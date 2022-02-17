import { logger } from '../utils';

/**
 *         Basics
 *          - simple decorator function
 *          - decorator factory
 */

const PREAMBLE = 'decorators -> basics.ts -> ';

// simple decorator function
(function () {
  function decorator(_: any) {
    logger(`\n[ ${PREAMBLE} simple decorator function ] decorator(): `, ``);
  }

  @decorator
  class MyClass {}
})();

// decorator factory
(function () {
  function decoratorFactory(param: string) {
    logger(`\n[ ${PREAMBLE} evaluation ] param: `, `${param}`);
    return function (_: any) {
      logger(`\n[ ${PREAMBLE} call ] param: `, `${param}`);
    };
  }

  @decoratorFactory('class')
  class MyClass {}
})();
