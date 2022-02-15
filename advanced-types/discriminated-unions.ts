import { logger } from '../utils';

/*
 *      Discriminated Unions
 */

const PREAMBLE = 'advanced-types -> discriminated-unions.ts -> ';

(function () {
  interface FreeUser {
    type: 'free';
    name: string;
    trialDays: number;
  }

  interface PaidUser {
    type: 'paid';
    name: string;
    subscriptionAmount: number;
  }

  type User = FreeUser | PaidUser;

  function displayUser(user: User) {
    logger(`\n[ ${PREAMBLE} discriminated unions ] name: `, `${user.name}`);
    switch (user.type) {
      case 'free':
        logger(
          `\n[ ${PREAMBLE} discriminated unions ] Trial period: `,
          `${user.trialDays}`
        );

        break;
      case 'paid':
        logger(
          `\n[ ${PREAMBLE} discriminated unions ] Subscription amount: `,
          `${user.subscriptionAmount}`
        );

        break;

      default:
        break;
    }
  }

  displayUser({
    type: 'free',
    name: 'John Wick',
    trialDays: 7,
  });

  displayUser({
    type: 'paid',
    name: 'John Wick',
    subscriptionAmount: 70,
  });

  // compiler errors
  // displayUser({
  //   name: 'John Wick',
  //   trialDays: 7,
  // });

  // displayUser({
  //   type: 'paid',
  //   name: 'John Wick',
  //   trialDays: 70,
  // });
})();
