import { logger } from '../utils';

/**
 *         Types
 *          - class
 *          - method
 *          - property
 *          - accessor
 *          - method param
 */

const PREAMBLE = 'decorators -> basics.ts -> ';

// class decorator

(function () {
  // toString override
  function withToString<T extends { new (...args: any[]): {} }>(BaseClass: T) {
    return class extends BaseClass {
      toString() {
        return JSON.stringify(this);
      }
    };
  }

  @withToString
  class Car {
    constructor(public model: string, public make: string) {}
  }

  const c = new Car('Honda', 'Civic');

  logger(`\n[ ${PREAMBLE} class decorator ] withToString: `, `${c}`);

  // addition of a field
  function withUrl(env: string) {
    let urlString: string;
    switch (env) {
      case 'dev':
        urlString = 'http://domain:4000/api/dev';
        break;
      case 'test':
        urlString = 'http://domain:5000/api/test';
        break;
      case 'prod':
        urlString = 'http://domain:6000/api/prod';
        break;
      default:
        break;
    }
    return function <T extends { new (...args: any[]): {} }>(BaseClass: T) {
      return class extends BaseClass {
        url = urlString;

        toString() {
          return JSON.stringify(this);
        }
      };
    };
  }

  @withUrl('dev')
  class User {
    url: string;
  }

  const u = new User();
  logger(`\n[ ${PREAMBLE} withUrl ] u: `, `${u.url}`);
})();

// method decorator
(function () {
  function validateEmail(
    target: any,
    propetyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const origFunction = descriptor.value;

    descriptor.value = (...args: any[]) => {
      const regex = /(?=.*@)\w+/;
      const username: string = args[0];

      if (regex.test(username)) {
        return origFunction.apply(this, args);
      } else {
        throw new Error(`Invalid username: ${username}`);
      }
    };
    return descriptor;
  }
  class MyClass {
    @validateEmail
    login(email: string) {
      console.log('Making an login request for', email);
    }
  }

  try {
    const m = new MyClass();
    m.login('a@b.com');
    m.login('ab.com');
  } catch (error) {
    console.log(error);
  }
})();

// property decorator
(function () {
  function validate(target: any, propertyKey: string) {
    const regex = /^\w+@\w+.\w{2,3}$/;
    let value: string;
    const getter = () => {
      return value;
    };

    const setter = (val: string) => {
      if (regex.test(val)) {
        value = val;
      } else {
        target.error = 'Invalid format';
      }
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  }

  class MyClass {
    @validate
    username: string;
    error: string;
  }

  const u = new MyClass();
  u.username = 'avadhut';
  console.log(u.username);
  console.log(u.error);
})();

// method decorator
(function () {
  function Autobind(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const orig = descriptor.value;
    return {
      configurable: true,
      enumerable: true,
      get() {
        return orig.bind(this);
      },
    };
  }

  class MyClass {
    message = 'This Works!';

    @Autobind
    showMessage() {
      console.log(this.message);
    }
  }

  const u = new MyClass();
  document.getElementById('button')!.addEventListener('click', u.showMessage);
})();
