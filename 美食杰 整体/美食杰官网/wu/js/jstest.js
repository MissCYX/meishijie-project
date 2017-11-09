$(document).ready(function() {
    var interval = 2000;	//自动轮播间隔
    var s = 600;			//淡出淡入时间
    var nowimg = 0;
    var $imageslistLis = $(".BIGBANNER li");
    var $circles = $(".gun span");
    var liAmount = $imageslistLis.length;

    //右按钮的业务函数：
    function rightButFunc() {
        if(!$imageslistLis.is(":animated")){
            //老的信号量元素淡出
            $imageslistLis.eq(nowimg).fadeOut(s);
            //信号量
            nowimg++;
            if (nowimg > liAmount - 1) {
                nowimg = 0;
            }
            //新的信号量元素淡出
            $imageslistLis.eq(nowimg).fadeIn(s);
            //小圆点的cur业务：
            changeCircle();
        }
    }

    //小圆点
    $circles.click(function(){
        if(!$imageslistLis.is(":animated")){
            //老的信号量元素淡出
            $imageslistLis.eq(nowimg).fadeOut(s);
            //信号量
            nowimg = $(this).index();
            //新的信号量元素淡出
            $imageslistLis.eq(nowimg).fadeIn(s);
            //小圆点的cur业务：
            changeCircle();
        }
    });

    function changeCircle() {
        $circles.eq(nowimg).addClass("cur").siblings().removeClass("cur");
    }

    //定时器
    var timer = setInterval(rightButFunc,interval);

    $(".BIGBANNER , .gun").mouseenter(function(){
        clearInterval(timer);
    });

    $(".BIGBANNER , .gun").mouseleave(function(){
        clearInterval(timer);
        timer = setInterval(rightButFunc,interval);
    });
});