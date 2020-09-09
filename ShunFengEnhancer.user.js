// ==UserScript==
// @name         ShunFengEnhancer
// @icon         https://www.sf-express.com/.gallery/favicon.ico
// @homepage     https://github.com/maoger/ShunFengEnhancer
// @version      0.2
// @description  Show all routes of ShunFeng.
// @author       Maoger
// @match        http*://*.sf-express.com/*
// @updateURL    https://openuserjs.org/meta/maoger/ShunFengEnhancer.meta.js
// @copyright    2020-2020, maoger (https://openuserjs.org/users/maoger)
// @license      MIT
// ==/UserScript==

var btn_show,tag_body;
btn_show = document.createElement("div");
tag_body = document.querySelector("body");
tag_body.appendChild(btn_show);
btn_show.innerHTML = "展开";
btn_show.style = "position:fixed;bottom:15px;right:15px;width:60px;height:60px;background:black;opacity:0.75;color:white;text-align:center;line-height:60px;cursor:pointer;";

function show_routes(){
    document.getElementsByClassName("routes-wrapper")[0].style = "max-height:100%";
}

btn_show.onclick = function(){
    this.style.display = "none";
    show_routes();
};

