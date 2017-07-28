$(function () {
	//导航栏的切换
	$(".nav-list li").on('click', function () {
		$(this).siblings().removeClass('active');
		$(this).addClass("active");
	})

	//动态生成导航栏
	var nav_data = [
		['水饺系列', '云吞系列', '汤圆系列', '混沌系列'],
		['云吞系列', '包点系列', '干炒系列'],
		['水饺系列', '汤圆系列'],
		['混沌系列'],
		['小吃系列', '汤圆系列', '包点系列'],
		['包点系列', '小吃系列'],
		['汤圆系列', '包点系列', '水饺系列'],
		['包点系列', '火锅系列', '汤圆系列'],
		['汤圆系列', '包点系列'],
		['小吃系列', '八宝饭系列'],
	];
	$(".detail-classify>ul>li").each(function (i, v) {
		var ul = document.createElement('ul'),
			li;
		$.each(nav_data[i], function (k, val) {
			li = document.createElement('li'),
				a = document.createElement('a');
			a.innerHTML = val;
			li.appendChild(a);
			ul.appendChild(li);
		})

		$(".detail-classify>ul>li").get(i).appendChild(ul);
	})
	var flag = true;
	//加载登录页面
	console.log($(".h-login"));
	$(".h-login").on('click', function () {
		console.log(flag);
		if (flag) {
			$('.mask').css('display', 'block');
			$('.mask').load('models/login/login.html');
//			$('.mask').load('../login/login.html');
		}
		if (!flag) {
			console.log(111);
//			$('.mask').load('models/user/user.html');
//			 window.location.href='models/user/user.html'
			 window.open('models/user/user.html')
		}
	});
	$(".h-register").on('click', function () {
		$('.mask').css('display', 'block');
		if (flag) {
			$('.mask').load('models/register/register.html');
		}
		if (!flag) {
			sessionStorage.removeItem('sessionToken');
			sessionStorage.removeItem('username');
			window.location.href='index.html';
		}
	})

	var sessionToken = sessionStorage.getItem('sessionToken');
	var username = sessionStorage.getItem('username');
	if (sessionToken && username) {
		$('.h-login').html('您好, ' + username + '<span style="color: blue;margin-left:10px">用户中心</span>');
		$('.h-register').html('退出');
		flag = false;
	}
	//购物车的显示隐藏
	$('.h-car').on('click',function(){
		$('.buycar-bg').css('display','block');
	})
	$('.close').on('click',function(){
		$('.buycar-bg').css('display','none');
	})
	//购物车全选功能的实现
	$("#check").on('click',function(){
		console.log($(this).prop('checked'));
		$('.p-mess').find('input[type=checkbox]').prop('checked',$(this).prop('checked'));
	});
	$("#checkall").on('click',function(){
		console.log($(this).prop('checked'));
		$('.p-mess').find('input[type=checkbox]').prop('checked',$(this).prop('checked'));
	})



	var read=JSON.parse(sessionStorage.getItem('key'));

	console.log(read);
if(read){ 
	var str='';
	str+='<label>'+
		'<input type="checkbox" value="全选"><img src="'+read.img+'" alt="">'+
		'</label>'+
		'<span>'+read.title+'&nbsp;'+read.guige+'</span>'+
		'<span>'+read.price+'</span>'+
		'<span><button>-</button><input type="text" value="'+read.number+'"><button>+</button></span>'+
		'<span>'+read.price.slice(1)*read.number+'</span>'+
		'<span>移除</span>'

	$(".p-account span:eq(3)").html(read.price.slice(1)*read.number);
	$(".p-account span:eq(4)").html("结算("+read.number+")");
	$(".h-car .colorRed").html(read.number);
	$(".p-mess").append(str);
}
	

})