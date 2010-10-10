window.HeadingAnchors = {

    init: function() {
        
        var $ = function( selector ) {
            var domElements   = document.querySelectorAll( selector ),
                elementsArray = [];
            for ( var i = 0; i < domElements.length; i++ ) {
                elementsArray.push( domElements[i] );
            }
            return elementsArray;
        };
        
        var nice = function( notNiceString ) {
            return notNiceString.replace('’','').replace(/[^a-z0-9]+/ig, '-');
        };
        
        var niceHeadings = {};
        
        $('h2, h3, h4, h5, h6').forEach(function( headingElement ) {
            
            var anchor    = document.createElement('a'),
                niceHeading = nice( headingElement.innerHTML );
            
            if ( niceHeading in niceHeadings ) {
                anchor.href = '#-'+ niceHeading +'-'+ niceHeadings[niceHeading];
                headingElement.id = '-'+ niceHeading +'-'+ niceHeadings[niceHeading];
                niceHeadings[niceHeading] = niceHeadings[niceHeading] += 1;
            } else {
                anchor.href = '#-'+ niceHeading;
                headingElement.id = '-'+ niceHeading;
                niceHeadings[niceHeading] = 2;
            }
            
            headingElement.className += ' heading-anchor';
            headingElement.appendChild( anchor );
        });
        
        var headingInHash = document.getElementById( window.location.hash.substr(1) )
        if ( headingInHash ) {
            window.scrollTo( 0, headingInHash.offsetTop );
        }
    
    }

};
