
Heading Anchors
===============

Heading Anchors automatically creates and handles “¶” anchors on a web page.


Features
--------
- Handles multiple identical headings nicely.
- Has a great default selector that can be overwritten.
- Doesn’t add any extra “¶” to the clipboard, because it uses `content: '¶'`.
- Executes JavaScript at page load only, so no tiny bit of CPU is wasted when links are hovered and clicked.
- Demonstrates no love at all for IE 6 and 7… yet doesn’t crash them.


Usage
-----
1. Link to, or copy and paste the content of `heading-anchors.js` and `heading-anchors.css` anywhere in your JavaScript and CSS files.
2. Call `HeadingAnchors.init()` on page load and pass it a selector string if the default `'h2, h3, h4, h5, h6'` doesn’t fit you needs.
3. Tweet this URL: <http://github.com/rafBM/heading-anchors>. ☺
