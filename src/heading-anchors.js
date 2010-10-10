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
    
    window.addEventListener('load', function() {
        
        var niceHeadings = {};
        $('h2, h3, h4, h5, h6').forEach(function( titleElement ) {
            
            var anchor    = document.createElement('a'),
                niceHeading = nice( titleElement.innerHTML );
            
            if ( niceHeading in niceHeadings ) {
                anchor.href = '#-'+ niceHeading +'-'+ niceHeadings[niceHeading];
                titleElement.id = '-'+ niceHeading +'-'+ niceHeadings[niceHeading];
                niceHeadings[niceHeading] = niceHeadings[niceHeading] += 1;
            } else {
                anchor.href = '#-'+ niceHeading;
                titleElement.id = '-'+ niceHeading;
                niceHeadings[niceHeading] = 2;
            }
            
            titleElement.className += ' heading-anchor';
            titleElement.appendChild( anchor );
        });
        
        var headingInHash = document.getElementById( window.location.hash.substr(1) )
        if ( headingInHash ) {
            window.scrollTo( 0, headingInHash.offsetTop );
        }
    
    }, false);

})();