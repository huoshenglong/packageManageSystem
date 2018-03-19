$(document).ready(function(){
	$("#login_div").hide();
	   layui.use(['layer','element','carousel','form'],function(){
			var layer=layui.layer,
			element=layui.element,
			carousel = layui.carousel,
			form=layui.form;
			
			//显示图片轮播
			carousel.render({
		    elem: '#test1'
		    ,width: '100%' //设置容器宽度
		    ,height:'500px'
		    //,arrow: 'always' //始终显示箭头
		     
	  		});

		 });

	   
	   $("#about").click(function(){//显示关于框
		  layer.open({
			  type: 2,
			  shade: false,
			  title:'软件信息', //不显示标题
			  content: '../webpage/login/login.html', //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
			  
			});
		   });
	   $("#infomation1").mouseover(function(){//提示框内容
	   	layer.tips('我司会密切关注天气情况，合理调配资源，尽快将快件送达客户手中。给您带来不便敬请谅解，谢谢！', '#infomation1', {
				  tips: [2, '#EE2C2C'],
				  time: 3000
				});
	   });
	   $("#infomation2").mouseover(function(){//提示框内容
	   	layer.tips('为了保护客户切身利益，特提醒广大客户，增强风险防范意识，遇到此类电话或短信，建议通过顺丰速运官方途径咨询确认，以免上当受骗，损失财物。', '#infomation2', {
				  tips: [2, '#EE2C2C'],
				  time: 3000
				});
	   });
	   $("#layui-btn").click(function(){//查询快递信息
	   	alert('aaa');
	   	 if ($("#input_radio_info1").checked()) {
	   	 	//选中以快递单号为查询方式
	   	 }
	   	  else if ($("#input_radio_info2").checked()) {
	   	 	//选中以手机号码为查询方式
	   	 }else{
	   	 	layer.msg('请选择一种查询方式！', {
	        time: 2000, //20s后自动关闭
	        btn: ['明白了']
	      });
	   	 }
	   });
	  
	   $("#login_button_admin").click(function(
	   	){
	    
	    $("#login_div").fadeIn('2000');
	   });

	   $("#close_btn").click(function(){
	   	 $("#login_div").fadeOut()('2000');
	   });
});
	  