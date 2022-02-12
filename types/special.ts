const PREAMBLE = 'types -> primitives.ts -> ';

/**
 *    Special types  
 *      - any
 *      - unknown
 *      - never
 *      - void
 */

// any
(function () {
  let a: any,
    s: string,
    n: number,
    b: boolean,
    o: {
      id: number;
      name: string
    },
    nu: null,
    und: undefined;
  
  // allowed
  // can hold any value
  a = 8;
  a = '8';
  a = true;
  a = {};
  a = function () { };
  
  // can be to a variable of all types
  s = a;
  n = a;
  b = a;
  o = a;
  nu = a;
  und = a;
  
  // compiler error
  
})();

// unknown
(function () {
  let u: unknown,
    s: string,
    n: number,
    b: boolean,
    o: {
      id: number;
      name: string
    },
    nu: null,
    und: undefined;
  
  // allowed
  // can hold any value
  u = 8;
  u = '8';
  u = true;
  u = {};
  u = function () { };
  
  // compiler error
  // cannot be to a variable of any other types without propert modifications/assertions/guards
  // s = u;
  // n = u;
  // b = u;
  // o = u;
  // nu = u;
  // und = u;
  
  
})();

// void
(function () {
  function inner(): void {
    // allowed
    return undefined;
    // or no return statement at all

    // compiler error
    // return 1;
    // return '1';
    // return true;
    // return {};
    // return [];
    // return null; // when strictNullChecks: true
  }
})()
