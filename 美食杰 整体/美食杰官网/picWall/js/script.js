/**
 * Created by Administrator on 2017/9/20.
 */
$(function() {

    // 得到丢�个介于两个数中的随机�?
    function rand(array) {
        var min = array[0];
        var max = array[1];
        var diff = max - min;
        return Math.ceil(min + Math.random() * diff);
    }

    // 记录丢�些常�?
    var constant = {
        box : {
            width : $(".wrap").innerWidth(),
            height : $(".wrap").innerHeight()
        },
        photo : {
            width : $(".photo").innerWidth(),
            height : $(".photo").innerHeight()
        }
    }

    // 1.模板替换与dom渲染
    // var photo_html = $("#tpl_photo").html();
    var photo_html = tpl;
    $.each(data, function(index, value) {
        $(".wrap").append(photo_html.replace(/\{\{src\}\}/g, value.src)
            .replace(/\{\{desc\}\}/g, value.desc));
    });

    // 2.让任意一个照片居中显�?
    var center = rand([1, data.length]);
    $(".photo").eq(center).siblings('div').removeClass('photo-center');

    // 3.计算左右侧图片范�?
    var range = {
        left : {
            x : [-constant.photo.width, Math.ceil((constant.box.width - constant.photo.width) / 3)],
            y : [-constant.photo.height, constant.box.height-200]
        },
        right : {
            x : [constant.box.width / 3, constant.box.width],
            y : [-constant.photo.height, constant.box.height-200]
        },
        angle : [0, 360]
    }

    // 4.随机在左右两侧摆放照片?
    function shuttlePhotos(center) {
        var leftPhotos = $(".photo").splice(0, center);
        var rightPhotos = $(".photo").splice(center + 1);
        $.each(leftPhotos, function(index, value) {
            var top = rand(range.left.y);
            var left = rand(range.left.x);
            var angle = rand(range.angle);
            $(value).css({
                top: top,
                left: left,
                transform : "rotate("+ angle +"deg)",
                webkitTransform : "rotate("+ angle +"deg)",
                mozTransform : "rotate("+ angle +"deg)",
            });
        });
        $.each(rightPhotos, function(index, value) {
            var top = rand(range.right.y);
            var left = rand(range.right.x);
            var angle = rand(range.angle);
            $(value).css({
                top: top,
                left: left,
                transform : "rotate("+ angle +"deg)",
                webkitTransform : "rotate("+ angle +"deg)",
                mozTransform : "rotate("+ angle +"deg)",
            });
        });
    }
    shuttlePhotos(center);

    // 5.给照片添加点击事件?
    $(".photo").on('click', function(event) {
        event.preventDefault();
        $(this).css({
            top: '50%',
            left: '50%',
            transform: 'rotate(0deg)',
            webkitTransform : "rotate(0deg)",
            mozTransform : "rotate(0deg)",
        });
        $(this).addClass('photo-center').siblings('.photo').removeClass('photo-center');
        shuttlePhotos($(this).index());
    });
})
