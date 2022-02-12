import { logger } from './../utils';

const PREAMBLE = 'types -> custom-types.ts -> ';

/**
 *  - obejcts
 *  - literals
 *  - unions
 *
 */

// objects
(function () {
  type User = {
    id: number;
    name: string;
  };

  // allowed

  let user: User;
  user = {
    id: 1,
    name: 'John Doe',
  };

  // compiler errors
  // user = {
  //   name: 'John Doe',
  // };
  // user = {
  //   id: 1,
  // };
  // user = {
  //   id: '1',
  //   name: 2,
  // };
})();

// literals
(function () {
  type PI = 3.14;

  type HTTP = 'GET' | 'POST' | 'PUT' | 'DELETE';

  // allowed
  let method: HTTP;

  method = 'GET';
  method = 'POST';
  method = 'DELETE';

  // compiler errors
  // method = 'OPTION';
})();

// unions
(function () {
  type Response = boolean | 1 | 0;

  // allowed
  let ans: Response;

  ans = 1;
  ans = 0;
  ans = true;
  ans = false;

  // compiler errors
  // ans = 'true';
  // ans = 11;
})();
