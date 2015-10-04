/* globals $ */

/* 

Create a function that takes an id or DOM element and:
  
If an id is provided, select the element
Finds all elements with class button or content within the provided element
Change the content of all .button elements with "hide"
When a .button is clicked:
Find the topmost .content element, that is before another .button and:
If the .content is visible:
Hide the .content
Change the content of the .button to "show"
If the .content is hidden:
Show the .content
Change the content of the .button to "hide"
If there isn't a .content element after the clicked .button and before other .button, do nothing
Throws if:
The provided DOM element is non-existant
The id is either not a string or does not select any DOM element

*/

function solve(){
  return function (selector) {
    var element,
        elementChildren,
        i, len,
        currentElement;
    
    function buttonClickEvent (event) {
      var nextContent = this.nextElementSibling,
                nextBtn = this.nextElementSibling;

            while (nextContent.className !== 'content') {
                nextContent = nextContent.nextElementSibling;
            }

            if (nextContent && nextContent.className === 'content') {
                while (nextBtn.className !== 'button') {
                    nextBtn = nextBtn.nextElementSibling;
                }
            }

            if (nextBtn.className === 'button') {
                if (nextContent.style.display === 'none') {
                    nextContent.style.display = '';
                    this.innerHTML = 'hide';
                } else {
                    nextContent.style.display = 'none';
                    this.innerHTML = 'show';
                }
            }
    }
    
    if(typeof selector !== 'string' &&
      !(selector instanceof HTMLElement)) {
        throw Error('Invalid selector!');
      }
    
    if(typeof selector === 'string') {
      element = document.getElementById(selector);
      if(!element) {
        throw Error('Element with such an id is not found!');
      }
    } else {
      element = selector;
    }
    
    elementChildren = element.childNodes;
    
    for(i = 0, len = elementChildren.length; i < len; i += 1) {
      currentElement = elementChildren[i];
      
      if(currentElement.className === 'button'){
           currentElement.innerHTML = "hide";
           currentElement.addEventListener('click', buttonClickEvent);
      }
    }
    
    //element.addEventListener('click', buttonClickEvent, false);
    
  };
};

module.exports = solve;