Heading Anchors
===============

Heading Anchors automatically creates and handles “¶” anchors on a web page. As seen on [Google Code](http://code.google.com/p/zen-coding/), [Trac](http://trac.cyberduck.ch/), etc.


Features
--------
- Handles multiple identical headings nicely.
- Has a great default selector that can be overwritten.
- Doesn’t add any extra “¶” to the clipboard, because it uses `content: '¶'`.
- Executes JavaScript at page load only, so no tiny bit of CPU is wasted when links are hovered and clicked.
- Demonstrates no love at all for IE < 9, yet doesn’t crash them.


Usage
-----
1. Link to, or copy and paste the content of `heading-anchors.js` and `heading-anchors.css` anywhere in your JavaScript and CSS files.
2. Call `HeadingAnchors.init()` on dom ready and pass it a selector string if the default `'h2, h3, h4'` doesn’t fit your needs.
