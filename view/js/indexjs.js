$(document).ready(function(){
//页面开始初始化，进行验证码的生成、各div的隐藏，加载登录页面并将其隐藏
	$('body').append(`

		<div id="login_div">
			 <div id="close_btn" id="close_btn"   title="关闭窗口"><!--关闭按钮--></div>  
			<form id="form1" action="#" method="post" accept-charset="utf-8">
				<div id="view1">
					<label id="view_title">管理员登录</label>
					<div id="info">			 
					 	<label class="info_input"><img src="../images/user.png" alt="用户名" title="用户名">
					 		<input id="user_login" type="text"  required  lay-verify="required" name="username" placeholder="在此输入用户名"  autofocus="autofocus" value=""></label>		 
					  
						 <br> <br>  
					 	<label class="info_input"><img src="../images/psw.png" alt="密码" title="密码"><input id="psw_login" type="password"  lay-verify="pass" placeholder="在此输入密码"   name="password" value=""></label>
					 	<br>
					  <br>
						<label for="iden_code">验证码： </label><label id="iden_code"> </label>
						 
					  <br><br>
					 	<input id="submit_login" type="button" lay-submit value="登录">	 
					 	 
					</div>
					<div id="img_info">
						<img src="../images/info.png"  alt="">
						<label for="">关注微信<br>
						看更多资讯</label>
						 
					</div>
				</div>
			</form>
		</div>
	`);
	$("#login_div").hide();
	$("#intro1",).hide();
	$("#intro2").hide();
	$("#intro3").hide();
	$("#intro4").hide();
	$("#intro5").hide();
	$("#intro6").hide();
	$("#s-left").hide();
	$("#s-middle").hide();
	$("#s-right").hide(); 
	var identcode="";
	var index1="query_pack";//我要寄件
	var index2="query_books";//订单查询
    var index3="query_neets";//网点查询
    var index4="query_time";//时效查询
    var index5="query_strand";//收寄标准查询
	//生成4位数验证码
	
		var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
		'R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k',
		'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
		'0','1','2','3','4','5','6','7','8','9'];      
	        for(var i = 0 ; i < 4 ; i ++ )
	            identcode += ''+arr[Math.floor(Math.random() * arr.length)];        
	   
	    $("#iden_code").text(identcode);
	// 页面初始化完毕
	//以下是layui得代码
	layui.use(['layer','element','carousel','form','laydate'],function(){
		var layer=layui.layer,
		element=layui.element,
		carousel = layui.carousel,
		form=layui.form,
	 	laydate = layui.laydate;
		  element.on('docDemoTabBrief', function(data){
			  console.log(this); //当前Tab标题所在的原始DOM元素
			  console.log(data.index); //得到当前Tab的所在下标
			  console.log(data.elem); //得到当前的Tab大容器
			});
		   laydate.render({
		    elem: '#senddate',
		  
		  });
		//显示图片轮播
		carousel.render({
	    elem: '#test1'
	    ,width: '100%' //设置容器宽度
	    ,height:'550px'
	    //,arrow: 'always' //始终显示箭头
  		});
  		carousel.render({
	    elem: '#cold-transportation'
	    ,width: '100%' //设置容器宽度
	    ,height:'200px',	    
	    anim:'updown',
	    indicator:'none'
  		});
  		carousel.render({
	    elem: '#warehousing'
	    ,width: '100%' //设置容器宽度
	    ,height:'200px',	    
	    anim:'updown',
	    indicator:'none'
  		});
  		carousel.render({
	    elem: '#express'
	    ,width: '100%' //设置容器宽度
	    ,height:'200px',	  
	    anim:'fade',
	    indicator:'none'
  		});

  		carousel.render({
	    elem: '#international-service'
	    ,width: '100%' //设置容器宽度
	    ,height:'200px',	  
	    anim:'fade',
	    indicator:'none'
  		});

  		carousel.render({
	    elem: '#medicin-service'
	    ,width: '100%' //设置容器宽度
	    ,height:'200px',	  
	    anim:'updown',
	    indicator:'none'
  		});

  		carousel.render({
	    elem: '#time-define-service'
	    ,width: '100%' //设置容器宽度
	    ,height:'200px',
	    anim:'fade',
	    indicator:'none'
  		});
  		form.on('radio(input_radio_info)', function (data) {
			alert(data.value);//判断单选框的选中值
			var inputvalue=$('#input_value').val();
			alert(inputvalue);
			$('#query-pack-bytype').click(function(event) {
				$.ajax({ 
				    type: "POST", 
				    dataType: "json", 
				    data:$('#form1-byphone').serialize();
				    url: "http://localhost:8080/springmvc/phoneOrNumber.do" , 
				    success: function (result) {	            	 
				     	 alert(result);
				    },
				    error : function(result) {
				        
				    }
				});
			});	 
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
	$("#img_info").mouseover(function(){
			layer.tips('微信扫码关注我！了解更多资讯吧！', '#img_info');
	});
	$("#user_login").mouseover(function(){
			layer.tips('手机号码/QQ号/QQ邮箱/字母数字组合', '#user_login');
	});
	$("#iden_code").mouseover(function(){
			layer.tips('点我更换验证码！', '#iden_code');
	});

	//用户名和密码输入验证
	$("#user_login").on('input propertychange',function(){		
		var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;//验证不合法字符
		var length=/^[\u4e00-\u9fa5a\w]{3,9}$/;
		var user_value=$("#user_login").val();
	 
		if (regEn.test(user_value)) {
			 layer.tips('用户名含有不合法字符！', '#user_login', {
			  tips: [2, '#EE2C2C'],
			  time: 1000
			});	 
		}
	 
		if (user_value.length<5||user_value.length>12) {
			layer.tips('请输入4-18位用户名！', '#user_login', {
			  tips: [2, '#EE2C2C'],
			  time: 1000
			});	
			 }			  
	});
	$("#psw_login").on('input propertychange',function(){		
		var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;//验证不合法字符
		var length=/^[\u4e00-\u9fa5a\w]{3,9}$/;			 
		var psw_value=$("#psw_login").val();
		 
		if (regEn.test(psw_value)) {
			 layer.tips('密码含有不合法字符！', '#psw_login', {
			  tips: [2, '#EE2C2C'],
			  time: 1000
			});	 
		}
			 
			 if (psw_value.length>15) {
			layer.tips('密码这么长，能记住吗?！', '#psw_login', {
			  tips: [2, '#EE2C2C'],
			  time: 1000
			});	
			 }
	});

	// index.html的所有点击事件
	$("#iden_code").click(function(){
		identcode="";
		var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
		'R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k',
		'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
		'0','1','2','3','4','5','6','7','8','9'];      
	    for(var i = 0 ; i < 4 ; i ++ )
	        identcode += ''+arr[Math.floor(Math.random() * arr.length)];        
			$("#iden_code").text(identcode);
	});
	$("#about").click(function(){//显示关于框
	  layer.alert('<center>'+'信息与电气工程学院'+'<br>'+'软件工程1402'+'<br>'+
	  '霍胜龙'+'<br>'+'</center>', {
		  skin: 'layui-layer-molv' //样式类名
		  ,closeBtn: 0,
		  title:'快递管理系统',
		  offset: '200px'
		});
	   });

	$("#login_button_admin").click(function(
		){ 
			  $("#login_div").fadeIn('2000');
	});
	$("#close_btn").click(function(){//关闭登录窗口
		$("#login_div").fadeOut()('2000');
	});
	$("#submit_login").click(function(){
		if ($("#user_login").val()!="") {
			if ($("#psw_login").val()!="") {
				layer.prompt({title: '请输入验证码，并确认', formType: 1}, function(pass, index){	   		
	   		if (pass.toUpperCase()!=identcode.toUpperCase()) {
	   			layer.msg('验证码错误！');
	   		}else{
	   			//ajax提交表单信息进行验证
	   		 
	   		$.ajax({
	            type: "POST",//方法类型
	            dataType: "json",//预期服务器返回的数据类型
	            url: "http://localhost:8080/springmvc/login.do" ,//url
	            data: $('#form1').serialize(),
				// contentType: "application/json; charset=utf-8",
	            success: function (result) {	                   
	                if (result=="success") {
	                    // alert("SUCCESS");
	                    window.location.href="../webpage/console/console.html";
	                }
	                ;
	            },
	            error : function(result) {	                	 
	                alert("密码或用户名错误！");
	            }

	        });

	   			 layer.close(index);
	   		}
			 
		  });
			}else{
				  layer.tips('密码还没填！', '#psw_login', {
			  tips: [2, '#EE2C2C'],
			  time: 2000
			});
		}
		}else{
			layer.tips('用户名不能为空！', '#user_login', {
			  tips: [2, '#EE2C2C'],
			  time: 2000
			});
		}			
	});
	$("#return-top").click(function(){//返回顶部事件
		$("html,body").animate({scrollTop:0}, 500);
	});


	//传入下一个页面的参数
	$('.query-pack').click(function(){//我要寄件
		window.location.href = 'logistics.html?index='+index1;
	});
	$('.query-books').click(function(){//订单查询
		window.location.href = 'logistics.html?index='+index2;
	});
	$('.select-time').click(function(){//时效查询
		window.location.href = 'logistics.html?index='+index4;
	});
	$('.query-neets').click(function(){//网点查询
		window.location.href = 'logistics.html?index='+index3;
	});
	$('.select-strand').click(function(){//收寄标准查询
		window.location.href = 'logistics.html?index='+index5;
	});
  
});