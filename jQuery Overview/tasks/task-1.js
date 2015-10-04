/* globals $ */

/* 

Create a function that takes a selector and COUNT, then generates inside a UL with COUNT LIs:   
  * The UL must have a class `items-list`
  * Each of the LIs must:
    * have a class `list-item`
    * content "List item #INDEX"
      * The indices are zero-based
  * If the provided selector does not selects anything, do nothing
  * Throws if
    * COUNT is a `Number`, but is less than 1
    * COUNT is **missing**, or **not convertible** to `Number`
      * _Example:_
        * Valid COUNT values:
          * 1, 2, 3, '1', '4', '1123'
        * Invalid COUNT values:
          * '123px' 'John', {}, [] 
*/

function solve() {
  return function (selector, count) {
   var validator,
       $element = $(selector),
       $ul, $li,
       i;
   
   validator = {
     validateSelector: function(selector) {
       if(typeof selector !== 'string') {
         throw Error('Selector cannot be null or undefined!');
       }
     },
     validateCount: function(count) {
       if(isNaN(count) ||
          Array.isArray(count) ||
          count == '') {
              throw Error('Count must be a number or convertable to number!');
       }
       
       if(count < 1) {
         throw Error('Count must be a positive number!');
       } 
     }
   }
   
   validator.validateCount(count);
   validator.validateSelector(selector);
   
   $element = $(selector);
   $ul = $('<ul />').addClass('items-list');
   
   for(i = 0; i < count; i += 1) {
     $li = $('<li />')
            .addClass('list-item')
            .text('List item #' + i)
            .appendTo($ul);
   }
   
   $ul.appendTo($element);
  };
};

module.exports = solve;