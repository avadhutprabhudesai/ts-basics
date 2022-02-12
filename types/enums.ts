import { logger } from './../utils';

const PREAMBLE = 'types -> enums.ts -> ';

/**
 *    Numeric enums
 *    String based enums
 */


// Numeric enums
(function () {
  enum Roles {
    ADMIN,
    FREE_USER,
    PREMIUM_USER,
  }
  logger(`[ ${PREAMBLE} numeric enums ]: Roles :`, Roles)  
  logger(`[ ${PREAMBLE} numeric enums ]: Roles.ADMIN :`, Roles.ADMIN)  
  logger(`[ ${PREAMBLE} numeric enums ]: Roles.FREE_USER :`, Roles.FREE_USER)  
  logger(`[ ${PREAMBLE} numeric enums ]: Roles.PREMIUM_USER :`, Roles.PREMIUM_USER)  
  
})();

// String based enums
(function () {
  enum Roles {
    ADMIN="ADMIN",
    FREE_USER="FREE_USER",
    PREMIUM_USER="PREMIUM_USER",
  }
  logger(`[ ${PREAMBLE} string-based enums ]: Roles :`, Roles)  
  logger(`[ ${PREAMBLE} string-based enums ]: Roles.ADMIN :`, Roles.ADMIN)  
  logger(`[ ${PREAMBLE} string-based enums ]: Roles.FREE_USER :`, Roles.FREE_USER)  
  logger(`[ ${PREAMBLE} string-based enums ]: Roles.PREMIUM_USER :`, Roles.PREMIUM_USER)  
  
})();
