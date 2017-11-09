/**
 * Created by Administrator on 2017/9/15.
 */
//运动函数
/**
 *
 * @param tag
 * @param styleName
 * @param target
 */
function animate(tag, styleName, target) {
    clearInterval(tag.timer);//防止加速
    tag.timer = setInterval(function () {
        var current = parseInt(getStyle(tag, styleName)) || 0;
        var step = (target - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current = current + step;
        tag.style[styleName] = current + "px";
        if (current == target) {
            clearInterval(tag.timer);
        }
    }, 20);
}

function getStyle(tag, styleName) {
    if (tag.currentStyle) {
        return tag.currentStyle[styleName];
    } else {
        return getComputedStyle(tag, null)[styleName];
    }
}




//点击生成大图
/**
 *
 * @param outerdiv
 * @param innerdiv
 * @param bigimg
 * @param _this
 */
function imgShow(outerdiv, innerdiv, bigimg, _this){

    var src = _this.attr("src");

    $(bigimg).attr("src", src);

    $("<img/>").attr("src", src).load(function(){
        var windowW = $(window).width();
        var windowH = $(window).height();
        var realWidth = this.width;
        var realHeight = this.height;
        var imgWidth, imgHeight;
        var scale =0.9;

        if(realHeight>windowH*scale) {
            imgHeight = windowH*scale;
            imgWidth = imgHeight/realHeight*realWidth;
            if(imgWidth>windowW*scale) {
                imgWidth = windowW*scale;
            }
        } else if(realWidth>windowW*scale) {
            imgWidth = windowW*scale;
            imgHeight = imgWidth/realWidth*realHeight;
        } else {
            imgWidth = realWidth;
            imgHeight = realHeight;
        }
        $(bigimg).css("width",imgWidth);

        var w = (windowW-imgWidth)/2;
        var h = (windowH-imgHeight)/2;
        $(innerdiv).css({"top":h, "left":w});
        $(outerdiv).fadeIn("fast");
    });

    $(outerdiv).click(function(){
        $(this).fadeOut("fast");
    });
}