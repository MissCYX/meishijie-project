$(function () {
    //$a = $(".fhr-top").find("a")
    //$jianada = $a.find(".jianada")

    //加拿大
    $(".jia").mouseenter(function () {
        $(".jianada").stop().animate({
            height: 80,
            paddingBottom: 5,
            paddingTop: 5
        })
        $(".jia").stop().animate({
            //$(".jia").css("box-shadow","5px 5px 1px 1px black"),
            //$(".jia").css("margin-top","-5px")
            marginTop: -10,
        })
        $(".jia").css("box-shadow", "5px 5px 10px black")
    })

    $(".jia").mouseleave(function () {
        $(".jianada").animate({
            height: 45,
            paddingBottom: 0,
            paddingTop: 0
        })
        $(".jia").animate({
            //$(".jia").css("box-shadow","5px 5px 1px 1px black"),
            //$(".jia").css("margin-top","-5px")
            marginTop: 0,
        })
        $(".jia").css("box-shadow", "0px 0px 0px black")
    })

    //爱丁堡
    $(".ai").mouseenter(function () {
        $(".aidingbao").animate({
            height: 80,
            paddingBottom: 5,
            paddingTop: 5
        })
        $(".ai").animate({
            //$(".jia").css("box-shadow","5px 5px 1px 1px black"),
            //$(".jia").css("margin-top","-5px")
            marginTop: -10,
        })
        $(".ai").css("box-shadow", "5px 5px 10px black")
    })

    $(".ai").mouseleave(function () {
        $(".aidingbao").animate({
            height: 45,
            paddingBottom: 0,
            paddingTop: 0
        })
        $(".ai").animate({
            //$(".jia").css("box-shadow","5px 5px 1px 1px black"),
            //$(".jia").css("margin-top","-5px")
            marginTop: 0,
        })
        $(".ai").css("box-shadow", "0px 0px 0px black")
    })


    //新西兰
    $(".xin").mouseenter(function () {
        $(".xinxilan").animate({
            height: 80,
            paddingBottom: 5,
            paddingTop: 5
        })
        $(".xin").animate({
            //$(".jia").css("box-shadow","5px 5px 1px 1px black"),
            //$(".jia").css("margin-top","-5px")
            marginTop: -10,
        })
        $(".xin").css("box-shadow", "5px 5px 10px black")
    })

    $(".xin").mouseleave(function () {
        $(".xinxilan").animate({
            height: 45,
            paddingBottom: 0,
            paddingTop: 0
        })
        $(".xin").animate({
            //$(".jia").css("box-shadow","5px 5px 1px 1px black"),
            //$(".jia").css("margin-top","-5px")
            marginTop: 0,
        })
        $(".xin").css("box-shadow", "0px 0px 0px black")
    })

    //原宿店
    $(".ys").mouseenter(function () {
        $(".ysd").animate({
            height: 60,
            paddingBottom: 5,
            paddingTop: 5
        })
        $(".ys").animate({
            //$(".jia").css("box-shadow","5px 5px 1px 1px black"),
            //$(".jia").css("margin-top","-5px")
            marginTop: -10,
        })
        $(".ys").css("box-shadow", "5px 5px 10px black")
    })

    $(".ys").mouseleave(function () {
        $(".ysd").animate({
            height: 45,
            paddingBottom: 0,
            paddingTop: 0
        })
        $(".ys").animate({
            //$(".jia").css("box-shadow","5px 5px 1px 1px black"),
            //$(".jia").css("margin-top","-5px")
            marginTop: 0,
        })
        $(".ys").css("box-shadow", "0px 0px 0px black")
    })


    $(".bu").mouseenter(function () {
        $(".bufalo").animate({
            height: 60,
            paddingBottom: 5,
            paddingTop: 5
        })
        $(".bu").animate({
            //$(".jia").css("box-shadow","5px 5px 1px 1px black"),
            //$(".jia").css("margin-top","-5px")
            marginTop: -10,
        })
        $(".bu").css("box-shadow", "5px 5px 10px black")
    })

    $(".bu").mouseleave(function () {
        $(".bufalo").animate({
            height: 45,
            paddingBottom: 0,
            paddingTop: 0
        })
        $(".bu").animate({
            //$(".jia").css("box-shadow","5px 5px 1px 1px black"),
            //$(".jia").css("margin-top","-5px")
            marginTop: 0,
        })
        $(".bu").css("box-shadow", "0px 0px 0px black")
    })



    $(".sup").mouseenter(function () {
        $(".supanniga").animate({
            height: 60,
            paddingBottom: 5,
            paddingTop: 5
        })
        $(".sup").animate({
            //$(".jia").css("box-shadow","5px 5px 1px 1px black"),
            //$(".jia").css("margin-top","-5px")
            marginTop: -10,
        })
        $(".sup").css("box-shadow", "5px 5px 10px black")
    })

    $(".sup").mouseleave(function () {
        $(".supanniga").animate({
            height: 45,
            paddingBottom: 0,
            paddingTop: 0
        })
        $(".sup").animate({
            //$(".jia").css("box-shadow","5px 5px 1px 1px black"),
            //$(".jia").css("margin-top","-5px")
            marginTop: 0,
        })
        $(".sup").css("box-shadow", "0px 0px 0px black")
    })


    $(".ri").mouseenter(function () {
        $(".river").animate({
            height: 60,
            paddingBottom: 5,
            paddingTop: 5
        })
        $(".ri").animate({
            //$(".jia").css("box-shadow","5px 5px 1px 1px black"),
            //$(".jia").css("margin-top","-5px")
            marginTop: -10,
        })
        $(".ri").css("box-shadow", "5px 5px 10px black")
    })

    $(".ri").mouseleave(function () {
        $(".river").animate({
            height: 45,
            paddingBottom: 0,
            paddingTop: 0
        })
        $(".ri").animate({
            //$(".jia").css("box-shadow","5px 5px 1px 1px black"),
            //$(".jia").css("margin-top","-5px")
            marginTop: 0,
        })
        $(".ri").css("box-shadow", "0px 0px 0px black")
    })

    $(".ch").mouseenter(function () {
        $(".chole").animate({
            height: 60,
            paddingBottom: 5,
            paddingTop: 5
        })
        $(".ch").animate({
            //$(".jia").css("box-shadow","5px 5px 1px 1px black"),
            //$(".jia").css("margin-top","-5px")
            marginTop: -10,
        })
        $(".ch").css("box-shadow", "5px 5px 10px black")
    })

    $(".ch").mouseleave(function () {
        $(".chole").animate({
            height: 45,
            paddingBottom: 0,
            paddingTop: 0
        })
        $(".ch").animate({
            //$(".jia").css("box-shadow","5px 5px 1px 1px black"),
            //$(".jia").css("margin-top","-5px")
            marginTop: 0,
        })
        $(".ch").css("box-shadow", "0px 0px 0px black")
    })


    $(".hu").mouseenter(function () {
        $(".huwai").animate({
            height: 60,
            paddingBottom: 5,
            paddingTop: 5
        })
        $(".hu").animate({
            //$(".jia").css("box-shadow","5px 5px 1px 1px black"),
            //$(".jia").css("margin-top","-5px")
            marginTop: -10,
        })
        $(".hu").css("box-shadow", "5px 5px 10px black")
    })

    $(".hu").mouseleave(function () {
        $(".huwai").animate({
            height: 45,
            paddingBottom: 0,
            paddingTop: 0
        })
        $(".hu").animate({
            //$(".jia").css("box-shadow","5px 5px 1px 1px black"),
            //$(".jia").css("margin-top","-5px")
            marginTop: 0,
        })
        $(".hu").css("box-shadow", "0px 0px 0px black")
    })


    $(".xg").mouseenter(function () {
        $(".xianggang").animate({
            height: 60,
            paddingBottom: 5,
            paddingTop: 5
        })
        $(".xg").animate({
            //$(".jia").css("box-shadow","5px 5px 1px 1px black"),
            //$(".jia").css("margin-top","-5px")
            marginTop: -10,
        })
        $(".xg").css("box-shadow", "5px 5px 10px black")
    })

    $(".xg").mouseleave(function () {
        $(".xianggang").animate({
            height: 45,
            paddingBottom: 0,
            paddingTop: 0
        })
        $(".xg").animate({
            //$(".jia").css("box-shadow","5px 5px 1px 1px black"),
            //$(".jia").css("margin-top","-5px")
            marginTop: 0,
        })
        $(".xg").css("box-shadow", "0px 0px 0px black")
    })


    $(".wgh").mouseenter(function () {
        $(".wengehua").animate({
            height: 60,
            paddingBottom: 5,
            paddingTop: 5
        })
        $(".wgh").animate({
            //$(".jia").css("box-shadow","5px 5px 1px 1px black"),
            //$(".jia").css("margin-top","-5px")
            marginTop: -10,
        })
        $(".wgh").css("box-shadow", "5px 5px 10px black")
    })

    $(".wgh").mouseleave(function () {
        $(".wengehua").animate({
            height: 45,
            paddingBottom: 0,
            paddingTop: 0
        })
        $(".wgh").animate({
            //$(".jia").css("box-shadow","5px 5px 1px 1px black"),
            //$(".jia").css("margin-top","-5px")
            marginTop: 0,
        })
        $(".wgh").css("box-shadow", "0px 0px 0px black")
    })
})

