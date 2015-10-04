/* globals $ */

/*
Create a function that takes a selector and:
* Finds all elements with class `button` or `content` within the provided element
  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string` 

*/

function solve() {
  return function (selector) {
    var $element = $(selector);
    
    function buttonClickEvent() {
      var $this = $(this),
          $content,
          $button;
          
      $content = $this.nextAll('.content').first();
      $button = $content.nextAll('.button');
      
      if($content.length && $button.length) {
        if($content.css('display') === 'none') {
          $this.text('hide');
          $content.css('display', '')
        } else {
          $this.text('show');
          $content.css('display', 'none');
        }
      }
    }
    
    if(typeof selector !== 'string' ||
      $element.length == 0) {
        throw Error('Invalid selector!');
      }
      
    $element.children('.button')
            .click(buttonClickEvent)
            .text('hide');
      
  };
};

module.exports = solve;