$(function () {
    /*重要备注：

     imgOrigArr 和 imgRanfArr这两个数组分别存放正确顺序排列和乱序排列的碎片信息
     数组结构：arr[碎片节点下标] = 碎片显示位置

     */
    /************* 方法 ******************/
    /**
     * [imgSplit 将图片拆分为碎片]
     * @param  {[type]} img    [图片,路径+名称]
     * @param  {[type]} cellW  [碎片宽度]
     * @param  {[type]} cellH  [碎片高度]
     * @return {[type]}        [记录正确排序的数组]
     */
    function imgSplit(img, cellW, cellH) {
        //必须清空图片区域的碎片代码，否则每一次拆分图片是与之前拆分的累积
        //例如第一次拆分3x3,插入了9个div，但没有清空，第二次拆分4x4，此时是在前9个div之后再插入14个div，共9+16个div
        imgArea.html("");

        var arr = [];//存储真确排序的数组
        var cell;//记录单个图片碎片的变量
        for (var i = 0; i < levelArr[levelNow][0]; i++) {
            for (var j = 0; j < levelArr[levelNow][1]; j++) {
                arr.push(i * levelArr[levelNow][1] + j);//将碎片所属div的下标存入数组，用于校验是否排序完成
                cell = document.createElement("div");
                cell.className = "imgCell";
                $(cell).css({
                    'width': cellW - 2,
                    'height': cellH - 2,
                    'left': j * cellW + 'px',
                    'top': i * cellH + 'px',
                    "background":"url('"+img+"') no-repeat",
                    'backgroundPosition': (-j) * cellW + 'px ' + (-i) * cellH + 'px'
                });
                imgArea.append(cell);
            }
        }
        return arr;
    }

    /**
     * [randomArr 产生随机数组的函数]
     * @param  {[type]} len [数组长度]
     * @return {[type]}     [返回随机数组]
     */
    function randomArr(len) {
        var order = '';//记录排序随机数的变量
        var arr = [];//记录随机数的数组变量
        //产生随机数组
        for (var i = 0; i < len; i++) {
            order = Math.floor(Math.random() * len);
            if (arr.length > 0) {
                while (arr.indexOf(order) > -1) {
                    order = Math.floor(Math.random() * len);
                    console.log(order);
                }
            }
            arr.push(order);
        }
        return arr;
    }

    /**
     * [cellOrder 图片碎片排序的函数]
     * @param  {[type]} imgObj   [碎片对象]
     * @param  {[type]} orderArr [排序依据，是一个数组，有序或无序(数组结构：arr[碎片]=位置)]
     * @param  {[type]} time     [碎片移动时间]
     * @return {[type]}          [无]
     */
    function cellOrder(imgObj, orderArr, time) {
        for (var j = 0, randLen = orderArr.length; j < randLen; j++) {
            imgObj.eq(j).animate({
                'top': Math.floor(orderArr[j] / levelArr[levelNow][0]) * cellHeight + 'px',
                'left': (orderArr[j] % levelArr[levelNow][0]) * cellWidth + 'px'
            }, time);
        }
    }

    /**
     * [cellChangeIndex 获得鼠标移至位置显示的碎片的下标]
     * @param  {[type]} x        [鼠标相对整体图片的x位置]
     * @param  {[type]} y         [鼠标相对整体图片的y位置]
     * @param  {[type]} oriIndex [被拖动的碎片的下标，防止没有交换对象时返回原位置]
     * @return {[type]}          [碎片下标]
     */
    function cellChangeIndex(x, y, oriIndex) {
        //鼠标拖动碎片移至大图区域外
        if (x < 0 || x > imgWidth || y < 0 || y > imgHeight) {
            return oriIndex;
        }
        //鼠标拖动碎片在大图内移动
        var row = Math.floor(y / cellHeight), col = Math.floor(x / cellWidth);
        var i = 0, len = imgRandArr.length, location = levelArr[levelNow][1] * row + col;
        while ((i < len) && (imgRandArr[i] != location)) {
            i++;
        }
        return i;
    }

    /**
     * [cellExchange 两块碎片交换位置]
     * @param  {[type]} obj  [操作的碎片对象]
     * @param  {[type]} from [鼠标拖动的碎片的下标]
     * @param  {[type]} to   [被交换的碎片的下标]
     * @return {[type]}      [无]
     */
    function cellExchange(obj, from, to) {
        //被操作图片碎片、被交换图片碎片所在的行、列
        var rowFrom = Math.floor(imgRandArr[from] / levelArr[levelNow][1]);
        var colFrom = imgRandArr[from] % levelArr[levelNow][1];
        var rowTo = Math.floor(imgRandArr[to] / levelArr[levelNow][1]);
        var colTo = imgRandArr[to] % levelArr[levelNow][1];

        var temp = imgRandArr[from];//被拖动图片的下标

        //被操作图片移动
        obj.eq(from).animate({
            'top': rowTo * cellHeight + 'px',
            'left': colTo * cellWidth + 'px'
        });
        //被交换图片移动
        obj.eq(to).animate({
            'top': rowFrom * cellHeight + 'px',
            'left': colFrom * cellWidth + 'px'
        }, moveTime, function () {
            //随机数组中两块碎片的位置数据交换
            imgRandArr[from] = imgRandArr[to];
            imgRandArr[to] = temp;
            //判断是否完成移动
            if (complete(imgOrigArr, imgRandArr) == 1) {
                success();
            }
        });
    }

    /**
     * [cellReturn 被操作图片返回原位置的函数]
     * @param  {[type]} obj   [操作的碎片对象]
     * @param  {[type]} index [鼠标拖动的碎片的下标]
     * @return {[type]}       [无]
     */
    function cellReturn(obj, index) {
        var row = Math.floor(imgRandArr[index] / levelArr[levelNow][1]);
        var col = imgRandArr[index] % levelArr[levelNow][1];
        obj.eq(index).animate({
            'top': row * cellHeight + 'px',
            'left': col * cellWidth + 'px'
        });
    }

    /**
     * [complete 判断拼图是否完成的函数]
     * @param  {[type]} rightArr  [拼图的正确排序]
     * @param  {[type]} puzzleArr [每一次移动碎片后的拼图排序]
     * @return {[type]}           [正确(1)或错误(-1)]
     */
    function complete(rightArr, puzzleArr) {
        if (rightArr.toString() == puzzleArr.toString()) {
            return 1;
        } else {
            return -1;
        }
    }

    /**
     * [success 成功完成游戏后处理函数]
     * @return {[type]} [无]
     */
    function success() {
        for (var i = 0, len = imgOrigArr.length; i < len; i++) {
            if (imgCells.eq(i).has('mouseOn')) {
                imgCells.eq(i).removeClass('mouseOn');
            }
        }
        imgCells.unbind('mousedown').unbind('mouseover').unbind('mouseout');
        hasStart = 0;
        btnStart.text('开始');
        alert('win！');
    }

    /************* 节点 ******************/
    var btnStart = $('#wrap #left ul #start span');//开始游戏选项按钮
    var btnLevel = $('#wrap #left ul #level span');//难度选择选项按钮
    var imgArea = $('#wrap #right #imgArea');//图片显示区域

    /************* 变量 ******************/
    var levelArr = [[3, 3], [4, 4], [6, 6]];//记录游戏难度的数组,存储为[行数，列数]格式
    var levelNow = 0;//记录当前难度的数组下标

    //图片的整体宽高
    var imgWidth = parseInt(imgArea.css('width'));
    var imgHeight = parseInt(imgArea.css('height'));

    //图片拆分为碎片后相关变量
    var cellWidth = imgWidth / levelArr[levelNow][1];//每块碎片的宽度
    var cellHeight = imgHeight / levelArr[levelNow][0];//每块碎片的高度
    var imgCells = '';//图片碎片节点

    var imgOrigArr = new Array();//拆解后存储碎片数据的数组
    var imgRandArr = new Array();//打乱后存储碎片数据的数组

    var hasStart = 0;//记录是否开始游戏，默认0，未开始
    var moveTime = 300;//图片位置改变时，运动时间
    /************* 初始化，此处为将图片拆为图片并显示难度 ******************/
    imgOrigArr = imgSplit('images/food2.jpg', cellWidth, cellHeight);//拆分图片
    btnLevel.text(levelArr[levelNow][0] + 'x' + levelArr[levelNow][1]);//页面显示的难度
    imgCells = $('#wrap #right #imgArea div.imgCell');//所有碎片节点


    /*************  事件  ******************/
    /*开始游戏 按钮的事件*/
    btnStart.bind('mousedown', function () {
        $(this).addClass('mouseOn');
    }).bind('mouseup', function () {
        $(this).removeClass('mouseOn');
    }).bind('click', function () {
        if (hasStart == '1') {
            //取消开始游戏状态下的值、样式设定
            $(this).text('开始');
            hasStart = 0;

            imgCells.css({
                'cursor': 'default'
            }).unbind('mouseover').unbind('mouseout').unbind('mousedown');

            //图片恢复
            cellOrder(imgCells, imgOrigArr, moveTime);
            return;
        } else if (hasStart == '0') {
            //开始游戏后 值、样式设定
            $(this).text('复原');
            hasStart = 1;

            imgCells.css({
                'cursor': 'pointer'
            }).bind('mouseover', function () {
                $(this).addClass('hover');
            }).bind('mouseout', function () {
                $(this).removeClass('hover');
            });

            //图片打乱
            imgRandArr = randomArr(imgOrigArr.length);
            cellOrder(imgCells, imgRandArr, moveTime);

            //图片碎片添加事件
            imgCells.bind('mousedown', function (e) {
                //鼠标所在的碎片
                var cellIndex_1 = $(this).index();
                //按下鼠标时，鼠标距离图片碎片左、上边界的距离
                var cell_mouse_x = e.pageX - imgCells.eq(cellIndex_1).offset().left;
                var cell_mouse_y = e.pageY - imgCells.eq(cellIndex_1).offset().top;

                $(document).bind('mousemove', function (e2) {
                    imgCells.eq(cellIndex_1).css({
                        'left': (e2.pageX - cell_mouse_x - imgArea.offset().left) + 'px',
                        'top': (e2.pageY - cell_mouse_y - imgArea.offset().top) + 'px'
                    });
                }).bind('mouseup', function (e3) {
                    //获得鼠标移至位置显示的是那一块碎片
                    var cellIndex_2 = cellChangeIndex((e3.pageX - imgArea.offset().left), (e3.pageY - imgArea.offset().top), cellIndex_1);
                    //碎片位置改变（交换位置或返回）
                    if (cellIndex_1 == cellIndex_2) {
                        cellReturn(imgCells, cellIndex_1);
                    } else {
                        cellExchange(imgCells, cellIndex_1, cellIndex_2);
                    }
                    //取消拖动过程中事件绑定
                    $(document).unbind('mousemove');
                    $(document).unbind('mouseup');
                });
            });
        }
    });

    /*难度选择 按钮的事件*/
    btnLevel.bind('mousedown', function () {
        $(this).addClass('mouseOn');
    }).bind('mouseup', function () {
        $(this).removeClass('mouseOn');
    }).bind('click', function () {
        //更改显示的难度等级
        if (levelNow < levelArr.length - 1) {
            levelNow++;
            btnLevel.text(levelArr[levelNow][0] + 'x' + levelArr[levelNow][1]);
        } else {
            levelNow = 0;
            btnLevel.text(levelArr[levelNow][0] + 'x' + levelArr[levelNow][1]);
        }
        //根据新的难度，设置碎片显示
        cellWidth = imgWidth / levelArr[levelNow][1];
        cellHeight = imgHeight / levelArr[levelNow][0];
        imgOrigArr = imgSplit('images/food2.jpg', cellWidth, cellHeight);
        imgCells = $('#wrap #right #imgArea div.imgCell');
    });
});
