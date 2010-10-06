(function() {

    var nice = function( notNiceString ) {
        return notNiceString.replace('’','').replace(/[^a-z0-9]+/ig, '-');
    };
    
    var $ = function( selector ) {
        var domElements   = document.querySelectorAll( selector ),
            elementsArray = [];
        for ( var i = 0; i < domElements.length; i++ ) {
            elementsArray.push( domElements[i] );
        }
        return elementsArray;
    };
    
    window.onload = function() {
        
        $('h2, h3, h4, h5, h6').forEach(function( titleElement ) {
            
            var anchor    = document.createElement('a'),
                niceTitle = nice( titleElement.innerHTML );
            
            anchor.href = '#-'+ niceTitle;
            
            titleElement.className += ' heading-anchor';
            titleElement.id = '-'+ niceTitle;
            titleElement.appendChild( anchor );
        });
    
    };

})();