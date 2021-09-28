// ==UserScript==
// @name         ShunFengEnhancer
// @icon         https://www.sf-express.com/.gallery/favicon.ico
// @homepage     https://github.com/maoger/ShunFengEnhancer
// @version      0.5.5
// @description  顺丰助手
// @author       Maoger
// @match        http*://*.sf-express.com/*
// @require      https://cdn.bootcdn.net/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.min.js
// @run-at       document-idle
// @updateURL    https://openuserjs.org/meta/maoger/ShunFengEnhancer.meta.js
// @copyright    2020-2021, maoger (https://openuserjs.org/users/maoger)
// @license      MIT
// ==/UserScript==

var tag_body = document.querySelector("body");
var btn_webshot = document.createElement("div");
tag_body.appendChild(btn_webshot);
btn_webshot.innerHTML = "截图";
var currentHeight = document.body.clientHeight;
var height_screenshot = currentHeight / 2;
btn_webshot.style = "position:fixed;z-index:999;top:" + height_screenshot.toString() + "px;right:15px;width:60px;height:60px;background:black;opacity:0.75;color:white;text-align:center;line-height:60px;cursor:pointer;";
btn_webshot.onclick = function(){
    this.style.display = "none";
    webshot();
    setTimeout(function(){
        btn_webshot.style.display = "block";
    },2000)
};
function webshot(){
    var eles = document.getElementsByClassName("delivery");
    for(var j=0; j<eles.length; j++){
        eles[j].getElementsByClassName("routes-wrapper")[0].style = "max-height:100%";
        download_img(eles[j]);
    }
};
function download_img(ele){
    var billNum = ele.querySelector('span.number').innerText;
    html2canvas(ele, {
        background : "#fff",
        onrendered : function(canvas) {
            var img = document.createElement('a');
            img.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            img.download = billNum + '.png';
            img.click();
        }
    });
};
