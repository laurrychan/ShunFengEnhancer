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
    // $("body,html").scrollTop(0);

    html2canvas(document.body, {
        // allowTaint : true,
        // useCORS : true,
        // taintTest : false,
        background : "#fff",
        onrendered : function(canvas) {
            // canvas.id = "mycanvas";
            // 生成base64图片数据
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
