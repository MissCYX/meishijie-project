$(document).ready(function() {
    var interval = 2000;	//�Զ��ֲ����
    var s = 600;			//��������ʱ��
    var nowimg = 0;
    var $imageslistLis = $(".BIGBANNER li");
    var $circles = $(".gun span");
    var liAmount = $imageslistLis.length;

    //�Ұ�ť��ҵ������
    function rightButFunc() {
        if(!$imageslistLis.is(":animated")){
            //�ϵ��ź���Ԫ�ص���
            $imageslistLis.eq(nowimg).fadeOut(s);
            //�ź���
            nowimg++;
            if (nowimg > liAmount - 1) {
                nowimg = 0;
            }
            //�µ��ź���Ԫ�ص���
            $imageslistLis.eq(nowimg).fadeIn(s);
            //СԲ���curҵ��
            changeCircle();
        }
    }

    //СԲ��
    $circles.click(function(){
        if(!$imageslistLis.is(":animated")){
            //�ϵ��ź���Ԫ�ص���
            $imageslistLis.eq(nowimg).fadeOut(s);
            //�ź���
            nowimg = $(this).index();
            //�µ��ź���Ԫ�ص���
            $imageslistLis.eq(nowimg).fadeIn(s);
            //СԲ���curҵ��
            changeCircle();
        }
    });

    function changeCircle() {
        $circles.eq(nowimg).addClass("cur").siblings().removeClass("cur");
    }

    //��ʱ��
    var timer = setInterval(rightButFunc,interval);

    $(".BIGBANNER , .gun").mouseenter(function(){
        clearInterval(timer);
    });

    $(".BIGBANNER , .gun").mouseleave(function(){
        clearInterval(timer);
        timer = setInterval(rightButFunc,interval);
    });
});