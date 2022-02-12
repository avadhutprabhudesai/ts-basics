import { logger } from './../utils';

const PREAMBLE = 'types -> functions.ts -> ';

// functions
(function () {
  let sort: (x: number, y: number) => 1 | -1 | 0;

  // allowed
  sort = (x, y) => {
    return -1;
  };
  // compiler errors
  // sort = (x, y) => x + y;
})();
