/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

module.exports = function () {
  return function (element, contents) {
    var domElement,
    i, len,
    dFrag,
    div,
    currentDiv;
    
    function checkContent(element, index, array){
      return typeof element !== 'string' &&
        typeof element !== 'number';
    }
    
    if(arguments.length != 2) {
      throw Error('Provided params are not two!');
    }
    
    if(typeof element !== 'string' && !(element instanceof HTMLElement)) {
      throw Error('Element must be string or DOM element!');
    }
    
    if(!Array.isArray(contents)) {
      throw Error('Contents must be an array!');
    }
        
    if(typeof element === 'string') {
      domElement = document.getElementById(element);
      if(typeof domElement === 'undefined') {
        throw Error('There is no element with this id!');
      } 
    } else {
      domElement = element;      
    }
    
    if(contents.some(checkContent)) {
      throw Error('Content must be string or number!');
    } 
    
    domElement.innerHTML = "";
    
    dFrag = document.createDocumentFragment();
    div = document.createElement("div");
    for(i = 0, len = contents.length; i < len; i += 1) {        
      currentDiv = div.cloneNode(true);
      currentDiv.innerHTML = contents[i];
      dFrag.appendChild(currentDiv);
    }
    
    domElement.appendChild(dFrag);
  };
};

