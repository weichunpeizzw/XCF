$(function() {
	//  var pid=$.cookie('pid');
	var pid=GetQueryString('pid');
	console.log(pid);
	//获取点击id
	$.ajax({
		type: 'get',
		dataType: 'jsonp',
		jsonp:"jsoncallback", 
		url: "http://lihuanting.gz01.bdysite.com/project/xcf/models/buy/buy_api.php",
		data: {
			pid: pid
		},
		success: function(data) {
			console.log(data)
			$('#smallImg').attr('src', '../goodsPic/' + data.pimage);
			$('#bigImg').attr('src', '../goodsPic/' + data.pimage);
			$('.prodcutsPrice>p>span').html('￥' + data.shop_price)
			$('#p-name').text(data.pname);
		}
	})
	//url地址解析
	function GetQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
		var context = "";
		if(r != null)
			context = r[2];
		reg = null;
		r = null;
		return context == null || context == "" || context == "undefined" ? "" : context;
	}
})