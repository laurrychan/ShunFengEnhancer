// ==UserScript==
// @name         ShunFengEnhancer
// @icon         https://www.sf-express.com/.gallery/favicon.ico
// @homepage     https://github.com/maoger/ShunFengEnhancer
// @version      0.5.3
// @description  顺丰助手
// @author       Maoger
// @match        http*://*.sf-express.com/*
// @require      https://cdn.bootcdn.net/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.min.js
// @grant        GM_openInTab
// @run-at       document-idle
// @updateURL    https://openuserjs.org/meta/maoger/ShunFengEnhancer.meta.js
// @copyright    2020-2021, maoger (https://openuserjs.org/users/maoger)
// @license      MIT
// ==/UserScript==

var btn_show = document.createElement("div");
var tag_body = document.querySelector("body");
tag_body.appendChild(btn_show);
btn_show.innerHTML = "展开";
btn_show.style = "position:fixed;bottom:50%;right:15px;width:60px;height:60px;background:black;opacity:0.75;color:white;text-align:center;line-height:60px;cursor:pointer;";
var btn_webshot = document.createElement("div");
tag_body.appendChild(btn_webshot);
btn_webshot.innerHTML = "截图";
btn_webshot.style = "position:fixed;bottom:40%;right:15px;width:60px;height:60px;background:black;opacity:0.75;color:white;text-align:center;line-height:60px;cursor:pointer;";
function show_routes(){
    document.getElementsByClassName("routes-wrapper")[0].style = "max-height:100%";
}
btn_show.onclick = function(){
    this.style.display = "none";
    show_routes();
    setTimeout(function(){
        btn_show.style.display = "block";
    },100)
};
function webshot(){
    window.scrollTo(0,0);
    html2canvas(document.body, {
        background : "#fff",
        onrendered : function(canvas) {
            var imgUrl = canvas.toDataURL();
            GM_openInTab(imgUrl);
        }
    });
}
btn_webshot.onclick = function(){
    this.style.display = "none";
    btn_show.style.display = "none";
    webshot();
    setTimeout(function(){
        btn_webshot.style.display = "block";
        btn_show.style.display = "block";
    },2000)
};
