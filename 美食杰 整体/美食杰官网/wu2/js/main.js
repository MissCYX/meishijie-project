/**
 * Created by Administrator on 2017/9/17.
 */
//1����ȡԪ��
var daLunBo=document.getElementById("daLunBo")
var lunBo=document.getElementById("lunBo");//��������
var imgWid=lunBo.offsetWidth;//ͼƬ���
var ul=lunBo.children[0]//Ҫ������ul
var lisUl=ul.children//���е�ͼƬli
var ol=lunBo.children[1]//����СԲ���λ��
var lisOl=ol.children//���е�СԲ�㣨Ĭ��û�����ݣ���Ӻ���Զ����ӣ�
var arrBox=document.getElementById("arr")//���Ҽ�ͷ�ĸ�����
var left=arrBox.children[0]//���ͷ
var right=arrBox.children[1]//�Ҽ�ͷ
var count;

//    2����̬����СԲ��
var li;
for (var i = 0; i < lisUl.length; i++) {
    li=document.createElement("li");
    ol.appendChild(li);
}
//    2.1����һ��СԲ��������ɫ
lisOl[0].className="current";

//    3�����ֲ�ͼ
for (var i = 0; i < lisOl.length; i++) {
    lisOl[i].index=i;
    lisOl[i].onclick=function(){

        //������ð�ť��ɫ
        for (var i = 0; i < lisOl.length; i++) {
            lisOl[i].className="";
        }
        lisOl[this.index].className="current";
//         ����ǰ����ֵ�ݴ���һ��������

        //��������ֵ�ж��˶���λ��
        animate(ul,-this.index*imgWid);
        count=this.index;
    }

};

//4�����ҽ���ͼ
//   ���һ���ٵĵ�һ�������һ�ź���
count=0;
ul.appendChild(ul.children[0].cloneNode(true));

//���Ҽ�ͷ���õ���¼�
right.onclick=fun;
//�����ͷ���õ���¼�
left.onclick=function(){
//       ����һ�ţ���ô�ͳ�ص��ٵĵ�һ��
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


//5���Զ�����
var timer=null;
timer=setInterval(function(){
    right.click();
},2000)
//   ���Ҽ�ͷ���������Ƴ��¼�

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
    //����ʾ�˼ٵĵ�һ�ţ���Ҫ���г�ز���
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
        //����ʾ�ٵĵ�һ�ţ��õ�һ��СԲ���ɫ
        lisOl[count].className = "current";
    }
};

function animate(element, target) {
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        //1 ��ȡԪ�ص�ǰλ��
        var current = element.offsetLeft;
        //2 ���ñ����˶���ʽ
        var step = (target - current) / 10;
        //�Բ�������ȡ������,��������ȡ������������ȡ��
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        current = current + step;
        //3 ���ø�left����
        element.style.left = current + "px";
        //4 ����ָ��λ�������ʱ������
        if (current == target) {
            clearInterval(element.timer);
        }
    }, 20);
}