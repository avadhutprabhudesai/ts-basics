import { logger } from '../utils';

/*
 *      Index properties
 */

const PREAMBLE = 'advanced-types -> index-properties.ts -> ';

(function () {
  interface FormData {
    [id: string]: string;
  }

  const signUpForm: FormData = {
    username: (document.getElementById('username') as HTMLInputElement).value,
    email: (document.getElementById('email') as HTMLInputElement).value,
    password: (document.getElementById('password') as HTMLInputElement).value,
  };

  logger(
    `\n[ ${PREAMBLE} Index properties ] Form data: `,
    `${signUpForm.username}`
  );
  logger(
    `\n[ ${PREAMBLE} Index properties ] Form data: `,
    `${signUpForm.email}`
  );
  logger(
    `\n[ ${PREAMBLE} Index properties ] Form data: `,
    `${signUpForm.password}`
  );
})();
