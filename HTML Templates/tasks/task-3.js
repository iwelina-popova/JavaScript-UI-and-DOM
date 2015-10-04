/* globals $ */

/*
Having the HTML:

<ul id="books-list" data-template="book-item-template"></ul>
<script id="book-item-template" type="…">
  <li class="book-item">
    <a href="/#books/{{id}}">
      <strong>{{title}}</strong>
    </a>
  </li> 
</script>  
         
And executing:

 $('#books-list').listview(books);
Should generate:

 <ul id="books-list" data-template="book-item-template">
  <li class="book-item">
    <a href="/#books/1">
      <strong>JavaScript: The Good Parts</strong>
    </a>
  </li>
  <li class="book-item">
    <a href="/#books/2">
      <strong>Secrets of the JavaScript Ninja</strong>
    </a>
  </li>
  <li class="book-item">
    <a href="/#books/3">
      <strong>Core HTML5 Canvas</strong>
    </a>
  </li>
  <li class="book-item">
    <a href="/#books/4">
      <strong>JavaScript Patterns</strong>
    </a>
  </li>
 </ul>
 */

function solve(){
  return function(){
    $.fn.listview = function(data){
      var $this = $(this),
          template = $('#' + $this.attr('data-template')).html(),
          exportedTemplate = handlebars.compile(template);
          
    for (var i = 0; i < data.length; i++) {
        $this.append(exportedTemplate(data[i]));
      }
	  
	  return this;
    
    };
  };
}

module.exports = solve;