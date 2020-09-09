// ==UserScript==
// @name         ShunFengEnhancer
// @icon         https://www.sf-express.com/.gallery/favicon.ico
// @homepage     https://github.com/maoger/ShunFengEnhancer
// @version      0.1
// @description  Show all routes of ShunFeng.
// @author       Maoger
// @match        http*://*.sf-express.com/*
// @updateURL    https://openuserjs.org/meta/maoger/ShunFengEnhancer.meta.js
// @copyright    2020-2020, maoger (https://openuserjs.org/users/maoger)
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    document.getElementsByClassName("routes-wrapper")[0].style = "max-height:100% ";
})();