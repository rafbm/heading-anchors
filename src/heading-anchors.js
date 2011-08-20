/*
 *  Heading Anchors v1.0
 *  Copyright (c) 2010 Rafaël Blais Masson <http://twitter.com/rafBM>
 *  
 *  Freely distributable under the terms of the MIT license.
 *  <http://github.com/rafBM/heading-anchors>
 *
 */

window.HeadingAnchors = {

  init: function( customHeadingsSelector ) {
    
    if ( document.querySelectorAll ) {
      
      var $ = function( selector ) {
        var elements    = document.querySelectorAll( selector ),
          elementsArray = [];
        
        for (var l = elements.length, e = 0; e < l; e++) {
          elementsArray.push( elements[e] );
        }
        return elementsArray;
      };
      
      var nice = function( notNiceString ) {
        return notNiceString.replace(/['’]/g,'').replace(/[^a-z0-9]+/ig, '-');
      };
      
      var niceHeadings = {}, headingsSelector;
      
      if ( typeof customHeadingsSelector == "string" && customHeadingsSelector.length ) {
        headingsSelector = customHeadingsSelector;
      } else {
        headingsSelector = 'h2, h3, h4, h5, h6';
      }
      
      $( headingsSelector ).forEach(function( headingElement ) {
        
        var anchor    = document.createElement('a'),
          niceHeading = nice( headingElement.id ? headingElement.id : headingElement.innerHTML.replace(/<([^ ]+)[^<>]*>([^<>]*)<\/\1>/ig, '$2') );
        
        anchor.className = 'heading-anchor';
        
        if ( niceHeadings[ niceHeading ] ) {
          anchor.href = '#'+ niceHeading +'-'+ niceHeadings[ niceHeading ];
          headingElement.id = niceHeading +'-'+ niceHeadings[ niceHeading ];
          niceHeadings[ niceHeading ] = niceHeadings[ niceHeading ] += 1;
        } else {
          anchor.href = '#'+ niceHeading;
          headingElement.id = niceHeading;
          niceHeadings[ niceHeading ] = 2;
        }
        
        anchor.innerHTML = '<span>¶</span>';
        headingElement.appendChild( anchor );
      });
      
      var headingInHash = document.getElementById( window.location.hash.substr(1) )
      if ( headingInHash ) {
        window.scrollTo( 0, headingInHash.offsetTop );
      }
    
    }
  
  }

};
