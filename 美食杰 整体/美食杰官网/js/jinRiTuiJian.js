/**
 * Created by Dell on 2017/9/19.
 */
/*$(function () {
    (function(){
        $(".zuoyouAnJian .right").click(function(){
            $(".wuDaCan").animate({left:-810},600,function(){
                $(".wuDaCan").css("left",-1800);
                $(".wuDaCan div:last-child").detach().prependTo($(".wuDaCan"));
            });
        });
        $(".zuoyouAnJian .left").click(function(){
            $(".wuDaCan").animate({left:-2790},600,function(){
                $(".wuDaCan div:first-child").detach().appendTo($(".wuDaCan"));
                $(".wuDaCan").css("left",-1800);
            });
        });
        $("#jinRiTuiJian").mouseenter(function(){
            $("#jinRiTuiJian .zuoyouAnJian > span").css("display","block");
        });
        $("#jinRiTuiJian").mouseleave(function(){
            $("#jinRiTuiJian .zuoyouAnJian > span").css("display","none");
        });
    })();
});*/
$(function () {
    (function(){
        var $lis=$("#jinRiTuiJian .shizhong ol li")
        $lis.eq(2).addClass("active").children().css("opacity",1);
        var count=0;
        $(".zuoyouAnJian .right").click(function(){
            count==2?count=-2:count++;

            $(".wuDaCan").animate({left:-810},600,function(){
                $(".wuDaCan").css("left",-1800);
                $(".wuDaCan div:last-child").detach().prependTo($(".wuDaCan"));
            });
            //时钟表
            $lis.removeClass().children().animate({opacity:0},1000);
            $lis.eq(2-count).addClass("active").children().animate({opacity:1},100);
        });
        $(".zuoyouAnJian .left").click(function(){
            count==2?count=-2:count++;
            $(".wuDaCan").animate({left:-2790},600,function(){
                $(".wuDaCan div:first-child").detach().appendTo($(".wuDaCan"));
                $(".wuDaCan").css("left",-1800)
            });
            //时钟表
            $lis.removeClass().children().animate({opacity:0},1000);
            $lis.eq(2+count).addClass("active").children().animate({opacity:1},100);
        });
        //自动播放
        var timer=null;
        timer=setInterval(function(){
            $(".zuoyouAnJian .left").click();
        },2000)
        //左右按键
        $("#jinRiTuiJian").mouseenter(function(){
            $("#jinRiTuiJian .zuoyouAnJian > span").css("display","block");
            clearInterval(timer);
        });
        $("#jinRiTuiJian").mouseleave(function(){
            $("#jinRiTuiJian .zuoyouAnJian > span").css("display","none");
            timer=setInterval(function(){
                $(".zuoyouAnJian .left").click();
            },3000)
        });
    })();
});

