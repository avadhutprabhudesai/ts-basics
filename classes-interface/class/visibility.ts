import { logger } from './../../utils';

/**
 *      - visibility
 *        - private
 *        - public
 *        - protected
 *        - shorthand
 *        - static
 */

const PREAMBLE = 'classes-interfaces -> visibility.ts -> ';

// private/public/static/shorthand
(function () {
  class Access {
    static staticField: string = 'The Static Field';

    constructor(private id: number, public name: string) {}

    displayUser() {
      logger(
        `\n[ ${PREAMBLE} visibility ]: private public:`,
        `${this.id}: ${this.name}`
      );
    }
  }

  const a = new Access(1, 'John');
  a.displayUser();
  logger(`\n[ ${PREAMBLE} visibility ]: static: `, `${Access.staticField}`);
  Access.staticField = 'Accessed via className';
  logger(`\n[ ${PREAMBLE} visibility ]: static: `, `${Access.staticField}`);

  // compiler errors
  // a.id = 2;
  // a.staticField = 'Accessed via instance';
})();

// protected
(function () {
  class User {
    constructor(
      private id: number,
      public name: string,
      protected activeDevices: number
    ) {}

    protected blockUser() {
      logger(
        `\n[ ${PREAMBLE} visibility ]: protected method`,
        `${this.id}, ${this.name} has been blocked`
      );
    }
  }
  class PaidUser extends User {
    displayUser() {
      logger(
        `\n[ ${PREAMBLE} visibility ]: PaidUser displayUser(): `,
        `${this.activeDevices}`
      );
    }
  }

  const p = new PaidUser(1, 'John', 2);
  p.displayUser();

  // compiler errors
  // p.activeDevices = 4;
})();
