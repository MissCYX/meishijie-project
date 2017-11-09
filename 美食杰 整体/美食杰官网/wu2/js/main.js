/**
 * Created by Administrator on 2017/9/17.
 */
//1、获取元素
var daLunBo=document.getElementById("daLunBo")
var lunBo=document.getElementById("lunBo");//可视区域
var imgWid=lunBo.offsetWidth;//图片宽度
var ul=lunBo.children[0]//要滚动的ul
var lisUl=ul.children//所有的图片li
var ol=lunBo.children[1]//放置小圆点的位置
var lisOl=ol.children//所有的小圆点（默认没有内容，添加后会自动增加）
var arrBox=document.getElementById("arr")//左右箭头的父盒子
var left=arrBox.children[0]//左箭头
var right=arrBox.children[1]//右箭头
var count;

//    2、动态创建小圆点
var li;
for (var i = 0; i < lisUl.length; i++) {
    li=document.createElement("li");
    ol.appendChild(li);
}
//    2.1给第一个小圆点设置颜色
lisOl[0].className="current";

//    3、简单轮播图
for (var i = 0; i < lisOl.length; i++) {
    lisOl[i].index=i;
    lisOl[i].onclick=function(){

        //点击设置按钮变色
        for (var i = 0; i < lisOl.length; i++) {
            lisOl[i].className="";
        }
        lisOl[this.index].className="current";
//         将当前索引值暂存在一个变量中

        //根据索引值判断运动的位置
        animate(ul,-this.index*imgWid);
        count=this.index;
    }

};

//4、左右焦点图
//   添加一个假的第一张在最后一张后面
count=0;
ul.appendChild(ul.children[0].cloneNode(true));

//给右箭头设置点击事件
right.onclick=fun;
//给左箭头设置点击事件
left.onclick=function(){
//       当第一张，那么就抽回到假的第一张
    if(count==0){
        ul.style.left=-(lisOl.length)*imgWid+"px";
        count=lisOl.length;
    }
    count--;
    animate(ul,-count*imgWid);

    for (var i = 0; i < lisOl.length; i++) {
        lisOl[i].className = "";
    }
    lisOl[count].className = "current";
}


//5、自动播放
var timer=null;
timer=setInterval(function(){
    right.click();
},2000)
//   左右箭头设置移入移出事件

daLunBo.onmouseover=function(){
    arrBox.style.display="block";
    clearInterval(timer);

};
daLunBo.onmouseout=function(){
    arrBox.style.display="none"
    timer = setInterval(function(){
        right.click();
    },2000)
}


function fun(){
    //当显示了假的第一张，需要进行抽回操作
    if(count==lisOl.length){
        ul.style.left=0+"px";
        count=0;
    }
    count++;
    animate(ul,-count*imgWid);

    for (var i = 0; i < lisOl.length; i++) {
        lisOl[i].className = "";
    }

    if(count==lisOl.length){
        lisOl[0].className="current";
    }else{
        //当显示假的第一张，让第一个小圆点变色
        lisOl[count].className = "current";
    }
};

function animate(element, target) {
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        //1 获取元素当前位置
        var current = element.offsetLeft;
        //2 设置变速运动公式
        var step = (target - current) / 10;
        //对步长进行取整操作,正数向上取整，负数向下取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        current = current + step;
        //3 设置给left属性
        element.style.left = current + "px";
        //4 到达指定位置清除定时器即可
        if (current == target) {
            clearInterval(element.timer);
        }
    }, 20);
}