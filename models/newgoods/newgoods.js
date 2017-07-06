$(function() {
	var n = 0
	$.ajax({
		type: 'get',
		url: 'http://lihuanting.gz01.bdysite.com/project/xcf/ishow_api.php',
		dataType: 'jsonp',
		jsonp: "jsoncallback",

		success: function(data) {
			var arr = [];
			var ndata = [];

			for(var i in data) {
				if(data[i].is_hot == '9') {
					arr.push(data[i]);
				}
			}
			console.log(arr);
			for(var k = 0; k < arr.length; k++) {
				ndata[k] = [arr[k].pimage, arr[k].pname, arr[k].shop_price];
				var str = '<li data=' + arr[k].pid + '>' +
					'<div class="goods-img">' +
					'<a href="#">' +
					'<img src="../goodsPic/' + arr[k].pimage + '"/>' +
					'</a>' +
					'</div>' +
					'<p class="goods-name"><a href="#">' + arr[k].pname + '</a></p>' +
					'<p class="goods-price"><span>价格</span><span>&yen;' + arr[k].shop_price + '</span></p>' +
					'</li>'
				$(".goods-show ul").append($(str));

			}
			console.log(ndata)
			init(ndata);
			//点击跳转 到详情页
			$('.goods-show').on('click', 'li', function() {
				var data = $(this).attr('data');
				console.log(data);
				window.location.href = '../buy/buy.html?pid=' + data;
			})
		}
	});

	function init(data) {
		var data = data,
			lowPrice,
			heighPrice,
			productQuery;
		//价格排序
		$(".goods-order tr>td:nth-of-type(2)").on('click', function() {
			$(".goods-show ul").html('');
			if($(this).find('img').attr('src') == 'images/down.gif') {
				$(this).find('img').attr('src', 'images/up.gif');
				orderUp();

			} else {
				$(this).find('img').attr('src', 'images/down.gif');
				orderDown();
			}
			render(data);
		});
		//价格筛选
		$("#price-filter").on('click', function() {
			lowPrice = $("#low-price").val();
			heighPrice = $("#heigh-price").val();
			if(lowPrice && heighPrice) {
				$(".goods-show ul").html('');
				var res = priceFilter(lowPrice, heighPrice);
				render(res);
			} else {
				alert('请输入价格区间')
			}
		})
		//查询具体商品
		$("#query-box").on('click', function() {
			productQuery = $("#product-query").val();
			if(productQuery) {
				$(".goods-show ul").html('');
				var res = queryProduct(productQuery);
				console.log(res);
				if(res) {
					render(res);
				} else {
					console.log(111);
					//				$(".goods-show ul").text('暂无此商品记录');
					alert('暂无此商品记录');
				}
			} else {
				alert('请输入商品名');
			}

		})

		//页面渲染函数
		function render(data) {
			for(var i = 0; i < data.length; i++) {
				var str = '<li>' +
					'<div class="goods-img">' +
					'<a href="#">' +
					'<img src="../goodsPic/' + data[i][0] + '"/>' +
					'</a>' +
					'</div>' +
					'<p class="goods-name"><a href="#">' + data[i][1] + '</a></p>' +
					'<p class="goods-price"><span>价格</span><span>&yen;' + data[i][2] + '</span></p>' +
					'</li>'
				$(".goods-show ul").append($(str));
			}
		}
		// render(data);

		//数据排序 从小到大
		function orderUp() {
			for(var i = 0; i < data.length - 1; i++) {
				for(var j = 0; j < data.length - i - 1; j++) {
					//			console.log(data[j][2]);
					if(parseFloat(data[j][2]) > parseFloat(data[j + 1][2])) {
						var tmp = data[j];
						data[j] = data[j + 1];
						data[j + 1] = tmp;
					}
				}
			}
		}
		//数据排序 从大到小
		function orderDown() {
			for(var i = 0; i < data.length - 1; i++) {
				for(var j = 0; j < data.length - i - 1; j++) {
					//			console.log(data[j][2]);
					if(parseFloat(data[j][2]) < parseFloat(data[j + 1][2])) {
						var tmp = data[j];
						data[j] = data[j + 1];
						data[j + 1] = tmp;
					}
				}
			}
		}
		//数据筛选
		function priceFilter(arg1, arg2) {
			arg1 = arg1 - 0;
			arg2 = arg2 - 0;
			var res = [];
			console.log(data);
			for(var i = 0; i < data.length; i++) {

				if(arg1 <= data[i][2] - 0 && data[i][2] - 0 <= arg2) {
					res.push(data[i]);
				}
			}
			console.log(res);
			return res;
		}

		function queryProduct(arg) {
			console.log(arg);
			var res = [];
			eval("var reg = /" + arg + "/g;");
			for(var i = 0; i < data.length; i++) {
				if(reg.test(data[i][1])) {
					res.push(data[i]);
				}
			}
			return res;
		}
	}
})