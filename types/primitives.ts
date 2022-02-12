import { logger } from "../utils";

const PREAMBLE = 'types -> primitives.ts -> ';
/**
 *    Primitives  
 *      - number
 *      - string
 *      - boolean
 *      - Date
 *      - null
 *      - undefined
 */

// number,string, boolean
(function () {
  let n: number, s: string, b: boolean;
  
  // allowed
  n = 8;
  
  // compiler error
  // n = '5';
  
})();

// Date
(function () {
  let d: Date;
  
  // allowed
  d = new Date();
  
  // compiler error
  // d = '5';
  // d = 5;
  // d = true;
  // d = {};
  
})();



// null
(function () {
  
  let n: null;
  
  // allowed
  

  // compiler error
  // n = undefined;
  // n = 8;
  // n = '5';
  
})();
