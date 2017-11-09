/**
 * Created by Administrator on 2017/9/15.
 */

/*------------今日推荐-*/

/*---------------*/
$(function () {
    /*最新菜单轮播部分*/
    (function () {
        var count = 0;
        var arrRight = document.getElementsByClassName("arrow-right")[0];
        var $lis = $(".newCaiMain>.fl li");
        $(".arrow-right").click(function () {
            count++;
            (count == $lis.length) && (count = 0);
            $lis.eq(count).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
        });
        $(".arrow-left").click(function () {
            count--;
            (count == -1) && (count = $lis.length - 1);
            $lis.eq(count).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
        });
        var newCaiTimer = setInterval(function () {
            arrRight.click();
        }, 3000);
        window.newCaiTimer = newCaiTimer;
    })();
    /*最新菜单轮播右侧点击事件部分*/
    (function () {
        $(".baiyechuang").prepend("<div class='maoni'></div>");
        //往猫腻里面再次添加p
        for (var i = 0; i <= 15; i++) {
            $(".maoni").append("<p></p>");   //又添加p
            $(".maoni p").eq(i).css("left", 40 * i); //又设置p的left值
            $(".maoni p").eq(i).css("background-position", -40 * i + "px 0px"); //又设置p的left值
        }
        ;
        /*点击事件*/
        $(".newCaiMain>.fl li").click(function () {
            var index = $(this).index();
            $(".maoni p").css("background-image", "url(img/newCai0" + index + ".png)");
            $(".maoni p").animate({"width": 40}, 1200, function () {
                $(".zhentu").attr("src", "img/newCai0" + index + ".png");
                $(".maoni p").css("width", 0);
            });
        });
        $(".newCaiMain>.fl li").mouseenter(function () {
            clearInterval(newCaiTimer);
        });
    })();

    /*卷轴动态效果*/
    (function () {
        $("#fourCai .content").ready(function () {
            //卷轴展开效果
            $(".l-pic-index").animate({'left': '30px'}, 1500);
            $(".r-pic-index").animate({'right': '-90px'}, 1500);
            $(".l-bg-index").animate({'width': '400px'}, 1500);
            $(".r-bg-index").animate({'width': '400px'}, 1500);
        });


        $("#fourCai .content,.left").mouseenter(function () {
            $("#fourCai .left").css("display", "block");
        });
        $("#fourCai .content,.left").mouseleave(function () {
            $("#fourCai .left").css("display", "none");
        });
        var fourCaiCount = 4;
        $("#fourCai .left").click(function () {
            fourCaiCount--;
            if (fourCaiCount < 1) {
                fourCaiCount = 4;
            }
            $(".l-pic-index").stop().animate({'left': '430px'}, 1000);
            $(".r-pic-index").stop().animate({'right': '310px'}, 1000);
            $(".l-bg-index").stop().animate({'width': '0px'}, 1000);
            $(".r-bg-index").stop().animate({'width': '0px'}, 1000, function () {
                $(".l-bg-index").stop().css("background-image", "url(img/" + fourCaiCount + "r.jpg)");
                $(".r-bg-index").stop().css("background-image", "url(img/" + fourCaiCount + "l.jpg)");
                $(".l-pic-index").stop().animate({'left': '50px'}, 1500);
                $(".r-pic-index").stop().animate({'right': '-90px'}, 1500);
                $(".l-bg-index").stop().animate({'width': '400px'}, 1500);
                $(".r-bg-index").stop().animate({'width': '400px'}, 1500);
            });
        });
    })();
});

//-----------------九月中秋---------------------
var zhongQiuJiuYue = document.getElementById("zhongQiuJiuYue");
var zqjymain = zhongQiuJiuYue.children[1];
var ul = zqjymain.children[0];
var lis = ul.children;
for (var i = 0; i < lis.length; i++) {
    lis[i].style.left = i * 200 + "px";
    lis[i].index = i;
    lis[i].onmouseover = function () {
        for (var j = 0; j < lis.length; j++) {
            if (j <= this.index) {
                animate(lis[j], "left", 80 * j);
            } else {
                animate(lis[j], "left", 80 * j + 600);
            }
        }
    }
    lis[i].onmouseout = function () {
        for (var k = 0; k < lis.length; k++) {
            animate(lis[k], "left", k * 200);

        }
    };
}

/*--------------------手风琴--------------------*/

$(function () {
    $(".zqjymain li").click(function () {
        var index = $(this).index()
        $("#outerdiv").css("display", "block")
        $("#outerdiv #innerdiv .bigimg").eq(index).css("display", "block").siblings().css("display", "none")


        var $img = $("#innerdiv img")
        $img.css("top", 0);
        $img.stop().animate({top: -3140}, 30000, "linear");
        $img.mouseenter(function () {
            $img.stop();
        })
        $img.mouseleave(function () {
            $img.stop().animate({top: -3140}, 50000, "linear");
        })
    })
    $("#outerdiv").click(function () {
        $("#outerdiv").css("display", "none")

    });
})

/*--------------------手风琴end--------------------*/

/*-----------------------各地小吃start---------------------------*/
$(function () {
    $("#geDiXiaoChi .xcmeishi .diqu").eq(0).show();
    $("#geDiXiaoChi .xcmeishi .diqu").eq(1).hide();
    $("#geDiXiaoChi .xcmeishi .diqu").eq(2).hide();
    $("#geDiXiaoChi .xcmeishi .diqu").eq(3).hide();
    $("#geDiXiaoChi .xcmeishi .diqu").eq(4).hide();
    $("#geDiXiaoChi .xcmeishi .diqu").eq(5).hide();
    $("#geDiXiaoChi .gdxcmain li").click(function () {
        var index = $(this).index();
        $("#geDiXiaoChi .xcmeishi .diqu").eq(index).slideDown(2000).siblings().slideUp(2000)
            //, function () {
        //    $("#geDiXiaoChi .xcmeishi .diqu").eq(index).siblings().slideup(2000);
        //})
    });
    var $img = $("#geDiXiaoChi .xcmeishi .diqu .img")
    $img.mouseenter(function () {
        var widthda = 1.05 * 242;
        var heigthtda = 1.05 * 232;
        $(this).children("img").stop().animate({
            width: widthda,
            height: heigthtda,
            left: -5,
            top: -10
        }, 500);
    })
    $img.mouseleave(function () {
        $(this).children("img").stop().animate({width: 242, height: 232, top: 0, left: 0}, 500);
    })
});

/*固定导航栏*/
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 560 && $(window).scrollTop() < 3000) {
            $("#gdNav li").slideDown(1000);
        }
        else {
            $("#gdNav li").hide(1000);
        }
    });
    /*$("body>div").index();
     $("#gdNav li").index();
     $("#gdNav li").click(function () {
     console.log($("div").eq($(this.index)));
     $(window).animate({scrollTop:$("div").eq($(this.index)).offsetTop},1000);
     });*/
});
(function () {
    //1 获取元素
    var navdivs = document.getElementsByClassName("gudingNav");
    var gudinglis = document.getElementsByClassName("navli");
    console.log(navdivs);
    console.log(gudinglis);
    var timer=null;
    for (var i = 0; i < gudinglis.length; i++) {
        gudinglis[i].index = i;
        if(i!=6){
            gudinglis[i].onclick = function () {
                var target = navdivs[this.index].offsetTop;
                clearInterval(timer);
                timer = setInterval(function () {
                    var current = myScroll().scrollTop;
                    var step = (target - current) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    current = current + step;
                    window.scrollTo(0, current);
                    if (current == target) {
                        clearInterval(timer);
                    }
                }, 20);
            };
        }else{

        }
    };
    function myScroll() {
        return {
            scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
            scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        }
    }
})();

