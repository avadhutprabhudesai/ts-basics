import { logger } from './../utils';

const PREAMBLE = 'types -> literal.ts -> ';

/**
 *  literals
 *    - es6 const for primitives
 *    - limiting possible values
 *    - limiting possible values as function params
 *    - limiting possible values as function return values
 */

// es6 const for primitives
(function () {
  let method = 'GET'; //TS compiler infers as 'string'

  const httpMethod = 'GET'; // TS compiler infers as 'GET' a literal value
})();

// limiting possible values
(function () {
  let method: 'GET' | 'POST'; //TS compiler infers as 'string'

  // allowed
  method = 'GET';
  method = 'POST';

  // compiler error
  // method = 'PUT';
  // method = 1;
})();

// limiting possible values as function params
(function () {
  function http(method: 'GET' | 'POST' | 'PUT') {}

  // allowed
  http('GET');
  http('POST');

  // compiler error
  // http('DELETE');
})();

// limiting possible values as function return value
(function () {
  function http(method: string): 1 | -1 {
    return -1;

    // compiler error
    // return 0;
  }
})();
