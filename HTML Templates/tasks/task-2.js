/* globals $ */

/*
<div class="container">
  <h1>Animals</h1>
  <ul class="animals-list">             
    <li>
      <a href="https://susanmcmovies.files.wordpress.com/2014/12/the-lion-king-wallpaper-the-lion-king-2-simbas-pride-4685023-1024-768.jpg">See a Lion</a>                
    </li>                
    <li>
      <a href="http://www.enkivillage.com/s/upload/images/a231e4349b9e3f28c740d802d4565eaf.jpg">See a Turtle</a>
    </li>                
    <li>
      <a href="http://cdn.playbuzz.com/cdn/3170bee8-985c-47bc-bbb5-2bcb41e85fe9/d8aa4750-deef-44ac-83a1-f2b5e6ee029a.jpg">No link for Dog, here is Batman!</a>                
    </li>                
    <li>
      <a href="http://i.imgur.com/Ruuef.jpg">See a Cat</a>                
    </li>             
    <li>
      <a href="http://cdn.playbuzz.com/cdn/3170bee8-985c-47bc-bbb5-2bcb41e85fe9/d8aa4750-deef-44ac-83a1-f2b5e6ee029a.jpg">No link for Dog Again, here is Batman!</a>                
    </li>              
  </ul>
</div> 
*/

function solve() {
  
  return function (selector) {
    var template = '',
        data,
        defaultUrl = 'http://cdn.playbuzz.com/cdn/3170bee8-985c-47bc-bbb5-2bcb41e85fe9/d8aa4750-deef-44ac-83a1-f2b5e6ee029a.jpg';
        
    data = {
    animals: [{
     name: 'Lion',
     url: 'https://susanmcmovies.files.wordpress.com/2014/12/the-lion-king-wallpaper-the-lion-king-2-simbas-pride-4685023-1024-768.jpg'
    }, {
     name: 'Turtle',
     url: 'http://www.enkivillage.com/s/upload/images/a231e4349b9e3f28c740d802d4565eaf.jpg'
     }, {
    name: 'Dog'              
    }, {
    name: 'Cat',
    url: 'http://i.imgur.com/Ruuef.jpg'
  }, {
    name: 'Dog Again'              
  }] 
  };

    template = '<div class="container">' +
    '<h1>Animals</h1>' + 
    '<ul class="animals-list">' + 
    '{{#each this.animals}}' +
    '<li>' + 
    '{{#if this.url}}' +
    '<a href="{{this.url}}">See a {{this.name}}' + 
    '{{else}}' +
    '<a href="' + defaultUrl + '">No link for {{this.name}} , here is Batman!' +
    '{{/if}}' +
    '</li>' +
    '{{/each}}' +
    '</ul>' + 
    '</div>';
  
    $(selector).html(template);   
  };
};

module.exports = solve;