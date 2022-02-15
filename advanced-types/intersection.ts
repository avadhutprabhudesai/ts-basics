import { logger } from '../utils';
/**
 *
 *      Intersection types
 *        - with primitive unions
 *        - with types
 *        - with interfaces
 *
 */

const PREAMBLE = 'advanced-types -> intersection.ts -> ';

// with primitives types
(function () {
  type StringOrNumber = string | number;
  type NumberOrBoolean = number | boolean;

  type intersection = StringOrNumber & NumberOrBoolean;

  const val: intersection = 10;

  logger(`\n[ ${PREAMBLE} with primitve unions ]: `, `${val}`);

  // compiler errors
  // const val: intersection = true; // any value other than number results in compilation error
})();

// with types
(function () {
  type DevOps = {
    linuxFlavor: string;
  };
  type Backend = {
    database: string;
  };
  type Cloud = {
    hosting: string;
  };
  type Frontend = {
    jsFramework: string;
  };
  type Fullstack = DevOps & Frontend & Backend & Cloud;

  const f: Fullstack = {
    linuxFlavor: 'Redhat',
    database: 'Mongodb',
    hosting: 'AWS',
    jsFramework: 'React',
  };

  logger(`\n[ ${PREAMBLE} with type unions ]: `, `${f}`);

  // compiler errors
  // any object which does not have all props from Devops, Frontend, Backend and Cloud
})();

// with interfaces
(function () {
  interface DevOps {
    linuxFlavor: string;
  }
  interface Backend {
    database: string;
  }
  interface Cloud {
    hosting: string;
  }
  interface Frontend {
    jsFramework: string;
  }
  type FullstackType = DevOps & Frontend & Backend & Cloud;

  interface FullstackInterface extends DevOps, Frontend, Backend, Cloud {}

  const f1: FullstackType = {
    linuxFlavor: 'Redhat',
    database: 'Mongodb',
    hosting: 'AWS',
    jsFramework: 'React',
  };

  const f2: FullstackInterface = {
    linuxFlavor: 'Redhat',
    database: 'Mongodb',
    hosting: 'AWS',
    jsFramework: 'React',
  };

  logger(`\n[ ${PREAMBLE} with interface extends ]: `, `${f1}`);
  logger(`\n[ ${PREAMBLE} with interface extends ]: `, `${f2}`);

  // compiler errors
  // any object which does not have all props from Devops, Frontend, Backend and Cloud
})();
