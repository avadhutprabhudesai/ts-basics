import { logger } from './../utils';

const PREAMBLE = 'types -> tuples.ts -> ';

/**
 *  tuples
 *
 */

// tuples
(function () {
  let t: [number, string];

  // allowed
  t = [0, 'ADMIN'];
  t[0] = 1;
  t[1] = 'USER';
  t.push(0);

  // compiler errors
  // t = [1, 2, 3];
  // t[0] = 'lsdf';
})();
