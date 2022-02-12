import { logger } from './../utils';

const PREAMBLE = 'types -> objects.ts -> ';

/**
 *  property modifiers
 *    - type
 *    - optional
 *    - readonly
 *  
 */

// property type
(function () {
  let o: {
    id: number;
    name: string;
  };

  // allowed
  o = {
    id: 1,
    name: 'John Doe'
  };

  o.id = 3;
  o.name = 'John Wick';

  
  
  
  // compiler errors
  // o = 's'
  // o = 1
  // o = true
  // o = []
  // o = null
  // o = undefined
  // o = {}
  // o = {id: 1}
  // o = {name: 'John Doe'}
  // o.title = 'Developer';
})();

// optional
(function () {
  let o: {
    id: number;
    name?: string;
  };
  
  // allowed
  o = {
    id: 1,
    name: 'John Doe'
  }
  o = {id: 1}
  o.name = 'John Wick'
  
  // compiler errors
  // o = 's'
  // o = 1
  // o = true
  // o = []
  // o = null
  // o = undefined
  // o = {}
  // o = {name: 'John Doe'}
  // o.title = 'Developer';
})();

// read-only
(function () {
  let o: {
    id: number;
    readonly name: string;
  };
  
  // allowed
  o = {
    id: 1,
    name: 'John Doe'
  }
  let name = o.name;
  
  // compiler errors
  // o = 's'
  // o = 1
  // o = true
  // o = []
  // o = null
  // o = undefined
  // o = {}
  // o = {name: 'John Doe'}
  // o.title = 'Developer';
  // o.name = 'John Wick'
  
})();
