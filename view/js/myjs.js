$(document).ready(function(){
	   layui.use(['layer','element','carousel'],function(){
			var layer=layui.layer,
			element=layui.element,
			carousel = layui.carousel;

			//显示图片轮播
			carousel.render({
		    elem: '#test1'
		    ,width: '100%' //设置容器宽度
		    ,height:'600px'
		    ,arrow: 'always' //始终显示箭头
		     
	  		});
		});

	   //显示关于框
	   $("#about").click(function(){
		  layer.open({
			  type: 2,
			  shade: false,
			  title:'软件信息', //不显示标题
			  content: '../webpage/login/login.html', //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
			  
			});
		   });
});
	  