/**
 *    Arrays
 *     - fixed length fixed type
 *     - fixed length variable type
 *     - variable length fixed type
 *     - variable length variable type
 */

// fixed length fixed type
(function () {
  
  let arr: [string];
  
  // allowed
  arr = ['John'];
  arr[0] = 'Charlie';
  arr.push('Smith'); //only push is allowed for fixed length array which can alter its length
  
  
  // compiler error
  // arr = ['John', 'Bob', 'Smith', 1,2,3,4];
  // arr.push('Brian', 1);
  // arr[0] = 10;
  // arr = ['Charlie', 10];
  // arr.push(true);
  // arr[0] = true;
  // arr = [1, 2, 3, {id: 1}];
  
})();

// fixed length variable type
(function () {
  
  let arr: [string|number];
  
  // allowed
  arr = ['John'];
  arr = [1];
  arr[0] = 'Charlie';
  arr[0] = 10;
  arr.push('Smith'); //only push is allowed for fixed length array which can alter its length
  arr.push(100); //only push is allowed for fixed length array which can alter its length
  
  
  // compiler error
  // arr = [1 1];
  // arr = [true];
  // arr = ['John', 'Bob', 'Smith', 1,2,3,4];
  // arr.push('Brian', 1);
  // arr[0] = 10;
  // arr = ['Charlie', 10];
  // arr.push(true);
  // arr[0] = true;
  // arr = [1, 2, 3, {id: 1}];
  
})();

  // variable length fixed type
  (function () {
    
    let arr: string[];
    
    // allowed
    arr = ['John', 'Bob', 'Smith'];
    arr.push('Brian');
    arr[0] = 'Json';
    arr = ['Charlie', 'Miller'];
    
    // compiler error
    // arr.push(1);
    // arr[0] = true;
    // arr = [1, 2, 3, 4];
    
  })();
  
  // variable length variable type
  (function () {
    
    let arr: (string | number)[];
    
    // allowed
    arr = ['John', 'Bob', 'Smith', 1, 2, 3, 4];
    arr.push('Brian', 1);
    arr[0] = 10;
    arr = ['Charlie', 10];
    
    // compiler error
    // arr.push(true);
    // arr[0] = true;
    // arr = [1, 2, 3, {id: 1}];
    
  })();
  