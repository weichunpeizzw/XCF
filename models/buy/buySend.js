$(function(){
    var pid=$.cookie('pid');
    //获取点击id
    $.ajax({
        type: 'get',
        dataType: 'json',
        url:"buy.php",
        data:{pid:pid},
        success:function(data){
            console.log(data)
            $('#smallImg').attr('src','../goodsPic/'+data.pimage);
            $('#bigImg').attr('src','../goodsPic/'+data.pimage);
            $('.prodcutsPrice>p>span').html('￥'+data.shop_price)
        }
    })
})