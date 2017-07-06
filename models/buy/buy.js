/**
 * Created by Administrator on 2017/7/3.
 */

$(function(){
    var i= 1,num=10;
    $(".controlNumber a:last-child").on("click",function(e){
        e.preventDefault();

        if($(".prodcutsSize a").hasClass('selectbox')){
            if(i<num){
                i++;
            }
        }else{
            alert("请先选择:规格!");
        }
        $(".controlNumber input").val(i);
    })


    $(".controlNumber a:first-child").on("click",function(e){
        e.preventDefault();
        if($(".prodcutsSize a").hasClass('selectbox')) {
            if (i > 0) {
                i--;
            }
        }else{
            alert("请先选择:规格!");
        }
        $(".controlNumber input").val(i);
    })

    $(".controlNumber input").on("keyup",function(){
        if($(".controlNumber input").val()>10){
            $(".controlNumber input").val(10);
        }
    })


    var guige;
    $(function(){
        $(".prodcutsSize a").click(function(e){
            e.preventDefault();
            $(this).siblings().removeClass("selectbox");
            $(this).toggleClass("selectbox");

            if($(this).attr('data')==0&&$(this).hasClass('selectbox')){
                $(".checkedbox").addClass("show");
            }
            else{
                $(".checkedbox").removeClass("show");
            };

            if($(this).attr('data')==1&&$(this).hasClass('selectbox')){
                $(".checkedbox1").addClass("show");
            }else{
                $(".checkedbox1").removeClass("show");
            };

            if($(".prodcutsSize a").hasClass('selectbox')){
                $(".prodcutsPay>span").css("cursor","pointer");

            }else{
                $(".prodcutsPay>span").css("cursor","not-allowed");
            }

            guige=$(this).html()
        })


        //tab切换
        $('#tabs a').click(function(e) {
            e.preventDefault();
            $('#tabs li').removeClass("current");
            $(this).parent().addClass("current");
            $("#content div").removeClass("show");
            $('#' + $(this).attr('title')).addClass('show');
        });


        $('.tab-main>ul>li>a').click(function(e) {
            e.preventDefault();
            $('.tab-main>ul>li').removeClass("current");
            $(this).parent().addClass("current");
            $(".tab-con>div").removeClass("show");
            $('#' + $(this).attr('title')).addClass('show');
        });


        var data=[
            {"url":"img/b61.gif","name":"张一","level":"银牌会员","recommed":"评价评价评价评价评价评价评价评价评价"
                ,"variety":"妃子笑荔枝","weight":"2斤装","time":"2017-05-25 12:05"},
            {"url":"img/b61.gif","name":"张三","level":"银牌会员","recommed":"好吃真的很好吃"
                ,"variety":"芒果","weight":"2斤装","time":"2017-06-25 12:05"}]

        $.each(data,function(index,value) {
                var str = '<div class="comment-item">' +
                    '<div class="user-column">' +
                    '<div class="user-info">' +
                    '<img src="' + value.url + '" alt=""/>' +
                    '<span>' + value.name + '</span>' +
                    '</div>' +
                    '<div class="user-level">' +
                    '<span>' + value.level + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="comment-column">' +
                    '<div class="comment-star">' +
                    '<i></i>' +
                    '</div>' +
                    '<p>' + value.recommed + '</p>' +
                    '<div class="pic-list">' +
                    '<a href=""></a>' +
                    '<a href=""></a>' +
                    '</div>' +
                    '<div class="comment-message">' +
                    '<div class="order-info">' +
                    '<span>' + value.variety + '</span>' +
                    '<span>' + value.weight + '</span>' +
                    '<span>' + value.time + '</span>' +
                    '</div>' +
                    '<div class="comment-op">' +
                    '<a href="">举报</a>' +
                    '<a href="">' +
                    '<i class="sprite-praise"></i>' +
                    '33' +
                    '</a>' +
                    '<a href="">' +
                    '<i class="sprite-comment"></i>' +
                    '1' +
                    '</a>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
                $(str).appendTo("#comment-0");
            }
        )
    });

    //放大镜效果
    $("#smallBox").on("mouseover",function(e){
        $("#mask").css("display","block");
        $("#bigBox").css("display","block");

        //获取鼠标在页面中的坐标,设置mask的位置
        var pageX=  e.pageX;
        var pageY = e.pageY;
        //获取鼠标在盒子中的坐标
        var smallBoxoffset=$("#smallBox").offset();
        var boxX=pageX-smallBoxoffset.left;
        var boxY=pageY-smallBoxoffset.top;
        //计算mask的坐标
        var maskX=boxX-$("#mask")[0].offsetWidth/2;
        var maskY=boxY-$("#mask")[0].offsetHeight/2;
        //限制遮罩的运动范围
        if(maskX<0){
            maskX=0;
        }
        if(maskX>$("#smallBox")[0].offsetWidth-$("#mask")[0].offsetWidth){
            maskX=$("#smallBox")[0].offsetWidth-$("#mask")[0].offsetWidth;
        }
        if(maskY<0){
            maskY=0;
        }
        if(maskY>$("#smallBox")[0].offsetHeight-$("#mask")[0].offsetHeight){
            maskY=$("#smallBox")[0].offsetHeight-$("#mask")[0].offsetHeight;
        }
        //设置mask的位置
        $("#mask").css("left",maskX+"px");
        $("#mask").css("top",maskY+"px");
        //设置大盒子的位置
        $("#bigBox").css("left",maskX+$("#mask")[0].offsetWidth+"px");


        //按照比例移动大图
        //大图能够移动的总距离=大图的宽度-大盒子的宽度
        var bigToMove=$("#bigBox img")[0].offsetWidth-$("#bigBox")[0].offsetWidth;
        //mask能够移动的总距离=小盒子的宽度-mask的宽度
        var maskToMove=$("#smallBox")[0].offsetWidth-$("#mask")[0].offsetWidth;

        var rate=bigToMove/maskToMove;
        $("#bigBox img").css("left",- rate * maskX+"px");
        $("#bigBox img").css("top",- rate * maskY+"px");
    })


    $("#smallBox").on("mouseout",function(){
        $("#mask").css("display","none");
        $("#bigBox").css("display","none");
    })

    //点击我要提问 切换大盒子
    console.log($("#tab4 .Myask"));
    $("#tab4 .Myask").on("click",function(){
        $(".askquestion").toggleClass("show");
    })

    //选择规格和数量 加到购物车中
    $(".prodcuts-detailRight .prodcutsPay span").on('click',function(){
        console.log(1);
        var img =$(".prodcuts-detailLeft #smallBox").find("img").attr("src");

        var title=$(".prodcuts-detailRight #p-name").html();
        var price=$('.prodcutsPrice p span').html();
        var number=$(".controlNumber").find("input").val();

        console.log(img);
        console.log(title);
        console.log(price.slice(1));
        console.log(number);
        console.log(guige);

        var obj={
            "img":img,
            "title":title,
            "price":price.slice(1),
            "number":number,
            "guige":guige
        }

        var str='';
        str+='<label>'+
            '<input type="checkbox" value="全选"><img src="'+img+'" alt="">'+
            '</label>'+
            '<span>'+title+'&nbsp;'+guige+'</span>'+
            '<span>'+price+'</span>'+
            '<span><button>-</button><input type="text" value="'+number+'"><button>+</button></span>'+
            '<span>'+price.slice(1)*number+'</span>'+
            '<span>移除</span>'

        $(".p-account span:eq(3)").html(price.slice(1)*number);
        $(".p-account span:eq(4)").html("结算("+number+")");
        $(".h-car .colorRed").html(number);
        $(".p-mess").append(str);

        console.log(JSON.stringify(obj));
        sessionStorage.setItem("key", JSON.stringify(obj));
    })




})


