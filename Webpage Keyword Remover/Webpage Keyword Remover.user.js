// ==UserScript==
// @name         Webpage Keyword Remover
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Blocks any mention of any keyword the user desires. May break websites so whitelist those.
// @author       Justin
// @match        https://github.com
// @grant        nonex
// ==/UserScript==

(function() {
    'use strict';
    var el = document.body;
    el.innerHTML = el.innerHTML.replace(/words|you|want|to|remove|should|be|seperated|like|this/gi, '');
})();

