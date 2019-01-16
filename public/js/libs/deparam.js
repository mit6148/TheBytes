/**
 * jQuery.deparam - The oposite of jQuery param. Creates an object of query string parameters.
 *
 * Credits to https://github.com/ethanbrimhall/kahoot-clone-nodejs .The author gave credits 
 * to the following website for the code
 * http://stevenbenner.com/2010/03/javascript-regex-trick-parse-a-query-string-into-an-object/
*/
(function($){
    $.deparam = $.deparam || function(uri){
      if(uri === undefined){
        uri = window.location.search;
      }
      var queryString = {};
      uri.replace(
        new RegExp(
          "([^?=&]+)(=([^&#]*))?", "g"),
          function($0, $1, $2, $3) {
              queryString[$1] = decodeURIComponent($3.replace(/\+/g, '%20'));
          }
        );
        return queryString;
      };
  })(jQuery);
  