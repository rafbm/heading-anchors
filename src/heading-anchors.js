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
        
        var niceTitles = {};
        $('h2, h3, h4, h5, h6').forEach(function( titleElement ) {
            
            var anchor    = document.createElement('a'),
                niceTitle = nice( titleElement.innerHTML );
            
            if ( niceTitle in niceTitles ) {
                anchor.href = '#-'+ niceTitle +'-'+ niceTitles[niceTitle];
                titleElement.id = '-'+ niceTitle +'-'+ niceTitles[niceTitle];
                niceTitles[niceTitle] = niceTitles[niceTitle] += 1;
            } else {
                anchor.href = '#-'+ niceTitle;
                titleElement.id = '-'+ niceTitle;
                niceTitles[niceTitle] = 2;
            }
            
            titleElement.className += ' heading-anchor';
            titleElement.appendChild( anchor );
        });
        
        var headingInHash = document.getElementById( window.location.hash.substr(1) )
        if ( headingInHash ) {
            window.scrollTo( 0, headingInHash.offsetTop );
        }
    
    };

})();