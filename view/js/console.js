$(document).ready(function(){
	{//登录和退出的动作
		var username="";
		var credential="";
		username=window.location.href.split("=")[1];//获取用户名
		$('#username').text(username);
		$('#username-info').text(username);
		$('#loginout').click(function(event) {		 
			window.location.replace("../index.html");
		});
	}
	{//将div先默认隐藏，等待调取显示
		$('#query-div').hide();
		$('#employee-div').hide();
		$('#infomation-div').hide();
		$('#logistics-div').hide();
		$('#state-div').hide();
		$('#pack-next-console').hide();
		$('#myinfo').hide();
		$('#changepsw').hide();
	}

	{//加载显示快递的状态
		$.ajax({ 
		    type: "POST", 
		    dataType: "json", 
		    url: "http://localhost:8080/springmvc/packState.do" , 
		    success: function (result) {	            	 
		     	var str=new Array();
		     	str=result.split('+');
		     	$('#need-receive').text('待揽'+str[0]);
		     	$('#need-delive').text('待发'+str[1]);
		     	$('#need-sign').text('待签'+str[2]);
		    },
		    error : function(result) {
				console.log('快递状态加载失败');		        
		    }
		}); 
		$.ajax({ 
		    type: "POST", 
		    dataType: "json", 
		    url: "http://localhost:8080/springmvc/selectUserInfo.do" , 
		    data:{
		    	username:$('#username').text()
		    },
		    success: function (result) {	    
		    $('#phone-info').val(result[0].phone);
		    $('#email-info').val(result[0].email);
		    $('#address-info').val(result[0].address);
		    $('#imgbackage').attr("src",result[0].imgurl); 
		    $('#userinfoimg').attr("src",result[0].imgurl);
		    credential=result[0].password;
		    },
		    error : function(result) {
				     console.log('用户信息加载错误！');    
		    }
		});
	}
	{
		// 加载系统时间
		setInterval(function(){   
		var date=new Date();   		 
		var mon=date.getMonth()+1; //获取当前月份   
		var week=new Array('日','一','二','三','四','五','六');
		var weekday=week[date.getDay()];  
		$('#Date').text(date.getFullYear()+'-'+mon+'-'+date.getDate()+' '+'星期'+weekday+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds());
		},500); 
		function getNowTime(){
			var date=new Date(); 
			var mon=date.getMonth()+1;
			var time=mon+'月'+date.getDate()+'日'+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
			return time;
		} ;
	}
	function appendInfo(nowtime,pointinfo){
		$('#logistic-packInfo').append(`<ul class="layui-timeline">           
          <li class="layui-timeline-item">
            <i class="layui-icon layui-timeline-axis"></i>
            <div class="layui-timeline-content layui-text">
              <h3 class="layui-timeline-title">`+nowtime+`</h3>
              <p>
				`+pointinfo+'已处理，正在发往下一站...'+` 
              </p>
            </div>
          </li>
        </ul>  `);
	};

    
	layui.use(['table','element','laypage','laydate'], function(){
		var $ = layui.$;
		var table = layui.table,
		element = layui.element,
		laypage=layui.laypage,
		laydate=layui.laydate; 		
		//监听表格复选框选择
		table.on('checkbox(demo)', function(obj){
			console.log(obj);

		});
		 table.on('edit(changelogitic)', function(obj){

		    var value = obj.value //得到修改后的值
		    ,data = obj.data //得到所在行所有键值
		    ,field = obj.field; //得到字段
		    layer.msg('[ID: '+ data.packnumber +'] ' + field + ' 字段更改为：'+ value);
		    $.ajax({
		    	type:'POST',
		    	dataType:'json',
		    	url:'http://localhost:8080/springmvc/updatePackInfo.do',
		    	data:{
		    		"packnumber":data.packnumber,
		    		"field":field,
		    		"value":value
		    	},
		    	success:function(result){

		    	},
		    });
		  });
		 laydate.render({
		    elem: '#senddate'
		  });
		//监听工具条
		
		$('.demoTable .layui-btn').on('click', function(){
			var type = $(this).data('type');
			active[type] ? active[type].call(this) : '';
		});
		table.render({
			elem: '#idTest'
			,height: 'full-200'
			,width:'100%'
			,url: 'http://localhost:8080/springmvc/queryAllInfo.do' //数据接口
			,page: true //开启分页
			,cols: [[ //表头
				{field:'packnumber', width:150, title:'快递单号'}
				,{field:'sname', width:80, sort: true, title: '发件人'}
				,{field:'sphone', width:120, title: '发件人手机'}
				,{field:'saddress', width:160, title: '发件地址'} 
				,{field:'rname', width:80, title: '收件人'}
				,{field:'rphone', width:120, title: '收件人手机'}
				,{field:'raddress', width:160, title: '收件人地址'}
				,{field:'thingsType', width:160 , title: '物品类型'}
				,{field:'describe', width:180 , title: '备注'}
				,{field:'weight', width:40, title: '重量'}
				]]
		});
		 
		function getPackStateWait(tablename,packState){
			table.render({
			elem: tablename
			,height: 'full-200'
			,width:'100%'
			,url: 'http://localhost:8080/springmvc/packstate.do?type='+packState //数据接口
			,page: true //开启分页
			,cols: [[ //表头 
				{field:'packnumber', width:150, title:'快递单号'}
				,{field:'sname', width:80, sort: true, title: '发件人'}
				,{field:'sphone', width:120, title: '发件人手机'}
				,{field:'saddress', width:200, title: '发件地址'} 
				,{field:'rname', width:80, title: '收件人'}
				,{field:'rphone', width:120, title: '收件人手机'}
				,{field:'raddress', width:200, title: '收件人地址'}
				,{field:'thingsType', width:200 , title: '物品类型'} 
				,{fixed: 'right', width:100, align:'center',title: '操作选项', toolbar: '.takePack'}
				]]
			});
		}
		function getPackStateDispatch(tablename,packState){
			table.render({
			elem: tablename
			,height: 'full-200'
			,width:'100%'
			,url: 'http://localhost:8080/springmvc/packstate.do?type='+packState //数据接口
			,page: true //开启分页
			,cols: [[ //表头 
				{field:'packnumber', width:150, title:'快递单号'}
				,{field:'sname', width:80, sort: true, title: '发件人'}
				,{field:'sphone', width:120, title: '发件人手机'}
				,{field:'saddress', width:200, title: '发件地址'} 
				,{field:'rname', width:80, title: '收件人'}
				,{field:'rphone', width:120, title: '收件人手机'}
				,{field:'raddress', width:200, title: '收件人地址'}
				,{field:'thingsType', width:200 , title: '物品类型'}
				,{fixed: 'right', width:100, align:'center',title: '操作选项', toolbar: '.dispatch'}
				]]
			});
		}
		function getPackStateWaitSign(tablename,packState){
			table.render({
			elem: tablename
			,height: 'full-200'
			,width:'100%'
			,url: 'http://localhost:8080/springmvc/packstate.do?type='+packState //数据接口
			,page: true //开启分页
			,cols: [[ //表头 
				{field:'packnumber', width:150, title:'快递单号'}
				,{field:'sname', width:80, sort: true, title: '发件人'}
				,{field:'sphone', width:120, title: '发件人手机'}
				,{field:'saddress', width:200, title: '发件地址'} 
				,{field:'rname', width:80, title: '收件人'}
				,{field:'rphone', width:120, title: '收件人手机'}
				,{field:'raddress', width:200, title: '收件人地址'}
				,{field:'thingsType', width:200 , title: '物品类型'}
				,{fixed: 'right', width:100, align:'center',title: '操作选项', toolbar: '.waitsignpack'}
				]]
			});
		}

		table.on('tool(waitpack)', function(obj){
			var data = obj.data;
			$.ajax({
				type:"POST",
				dataType:"json",
				data:"packnumber="+data.packnumber+"&type=toWait",
				url:"http://localhost:8080/springmvc/updatePackState.do",
				success:function(data){
					console.log(data);
					obj.del();
		 			layer.msg('揽件成功！');
				},
				faile:function(data){
				}
			});
		});
		table.on('tool(dispatch)', function(obj){
			var data = obj.data;
			$.ajax({
				type:"POST",
				dataType:"json",
				data:"packnumber="+data.packnumber+"&type=toDispatch",
				url:"http://localhost:8080/springmvc/updatePackState.do",
				success:function(data){
					console.log(data);
					obj.del(); 
		 			layer.msg('正在派件，请耐心等待！');
				},
				faile:function(data){

				}
			}); 
		});
		table.on('tool(sign)', function(obj){
			var data = obj.data;
			console.log(data.packnumber);
			$.ajax({
				type:"POST",
				dataType:"json",
				data:"packnumber="+data.packnumber,
				url:"http://localhost:8080/springmvc/deletePack.do",
				success:function(data){
					console.log(data);
					obj.del(); 
		 			layer.msg('快递已签收！');
				},
				faile:function(data){

				}
			}); 
		});
		table.on('tool(cancel)', function(obj){
			var data = obj.data;
			console.log(data.packnumber);
			$.ajax({
				type:"POST",
				dataType:"json",
				data:"packnumber="+data.packnumber,
				url:"http://localhost:8080/springmvc/deletePack.do",
				success:function(data){
					console.log(data);
					obj.del(); 
		 			layer.msg('订单已取消！');
				},
				faile:function(data){

				}
			}); 
		});
	var packnumber="";
	var endpoint="";
	var page=0;
	var saddress=""; 
	$('#pack-get-console').click(function(){
		$('#pack-get-console').text('下一条');
		$('#logistic-packInfo').html("");
		page+=1;
		$.ajax({
			type:"POST",
			dataType:"json",
			data:{
				"page":page,
				"limit":'1',
				"type":'dispatch'
			},
			url:"http://localhost:8080/springmvc/packstate.do",
			success:function(result){
				$("#pack-number-console").val(result.data[0].packnumber) ;
				packnumber=result.data[0].packnumber;
				$("#pack-send-console").val(result.data[0].saddress);
				saddress=result.data[0].saddress;
				$("#pack-receive-console").val(result.data[0].raddress);
				console.log(result.count); 
				$('#need-delive-count').text('共计'+(result.count-page+1));
				endpoint=result.data[0].raddress;
				appendInfo(getNowTime(),result.data[0].saddress);
				if ((result.count-page+1)==0){
					$('#pack-get-console').hide();
				}
				
			},
			error:function(result){

			}
		});
		$('#pack-submit-take').click(function(event) {
			$.ajax({
					type:"POST",
					dataType:"json",
					data:{
						"packnumber": packnumber,
						"logistic":getNowTime()+'*'+saddress+'已揽件，正发往下一站...',
						"type":'startpoint'
					},
					url:"http://localhost:8080/springmvc/insertlogistic.do",
					success:function(result){
						appendInfo(getNowTime(),saddress+'已揽件，正发往下一站...');
						 	console.log(result);
					},
					error:function(result){

					}
				});	
		});
		
		$('#pack-submit-console').click(function(){
			$.ajax({
				type:"POST",
				dataType:"json",
				data:{
					"packnumber": packnumber,
					"logistic":getNowTime()+'*'+endpoint+'正在派件，请耐心等待...',
					"type":'addinfo'
				},
				url:"http://localhost:8080/springmvc/insertlogistic.do",
				success:function(result){
					 	console.log(result);					 	
					 	$.ajax({
							type:"POST",
							dataType:"json",
							data:"packnumber="+packnumber+"&type=toDispatch",
							url:"http://localhost:8080/springmvc/updatePackState.do",
							success:function(data){
								 layer.msg('派件成功！');
							},
							faile:function(data){

							}
						});
					 	getPoint();
				},
				error:function(result){

				}
			});	
		});
	});
	function getPoint(){
    	// 百度地图API
	   var map = new BMap.Map("allmap");
	    // var poi = new BMap.Point(116.307852,40.057031);
	    map.centerAndZoom("酒泉", 6);  
	    var overlays = [];
		var overlaycomplete = function(e){
	        overlays.push(e.overlay);
	    };
	    var styleOptions = {
	        strokeColor:"blue",    //边线颜色。
	        fillColor:"red",      //填充颜色。当参数为空时，圆形将没有填充效果。
	        strokeWeight: 3,       //边线的宽度，以像素为单位。
	        strokeOpacity: 0.8,	   //边线透明度，取值范围0 - 1。
	        fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
	        strokeStyle: 'solid' //边线的样式，solid或dashed。
	    }
	    map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
	    //实例化鼠标绘制工具
	    var drawingManager = new BMapLib.DrawingManager(map, {
	        isOpen: false, //是否开启绘制模式
	        enableDrawingTool: true, //是否显示工具栏
	        drawingToolOptions: {
	            anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
	            offset: new BMap.Size(5, 5), //偏离值
	        },
	        circleOptions: styleOptions, //圆的样式
	        polylineOptions: styleOptions, //线的样式
	        polygonOptions: styleOptions, //多边形的样式
	        rectangleOptions: styleOptions //矩形的样式
	    });  	 
	    var geoc = new BMap.Geocoder();    
	    map.addEventListener("rightclick", function(e){   
	        //通过点击百度地图，可以获取到对应的point, 由point的lng、lat属性就可以获取对应的经度纬度     
	        var pt = e.point;
	        geoc.getLocation(pt, function(rs){
	            //addressComponents对象可以获取到详细的地址信息
	            var addComp = rs.addressComponents;
	            var cityinfo="";
	            var site = addComp.province + ", " +addComp.city ;
	            //将对应的HTML元素设置值
	            cityinfo+=site;
	            console.log(cityinfo);
	            // $("#pack-number-console").val
	             
		        appendInfo(getNowTime(),cityinfo);
		        $.ajax({
					type:"POST",
					dataType:"json",
					data:{
						"packnumber": packnumber,
						"logistic":getNowTime()+'*'+cityinfo+'已揽件，正发往下一站...',
						"type":'addinfo'
					},
					url:"http://localhost:8080/springmvc/insertlogistic.do",
					success:function(result){
						 	console.log(result);
					},
					error:function(result){

					}
				});	 
	        }); 
	    });
	    $.ajax({ 
		    type: "POST", 
		    dataType: "json", 
		    url: "http://localhost:8080/springmvc/packpoint.do" , 
		    success: function (result) {	
		    // console.log(result);          
	     		for(var i=0;i<result.size;i++){
			        var marker = new BMap.Marker(new BMap.Point(result.point[i].longitude,result.point[i].latitude));  // 创建标注
			        var content = result.point[i].discription;
			        // console.log(content);
			        map.addOverlay(marker);// 将标注添加到地图中
			       addClickHandler(content,marker);

			    }
			    function addClickHandler(content,marker){
			        marker.addEventListener("click",function(e){
			            openInfo(content,e)}
			        );
			    };
		    },
		    error : function(result) {
		        console.log('获取站点信息失败');
		    }
		});
    };
		$('#console-wait-pack').on('click',  function(event) {
			getPackStateWait('#wait-receive','wait');
			$('#need-receive').hide();		 
		});
		$('#console-deliver-pack').on('click',  function(event) {			 
			getPackStateDispatch('#wait-delive','dispatch');						
			$('#need-delive').hide();	 
		});
		$('#console-waitsign-pack').on('click',  function(event) {			 
			getPackStateWaitSign('#wait-sign','waitsign');						
			$('#need-sign').hide();	 
		});
		$('#passwords').click(function(event) {
		
			layer.open({
				  type: 1,
				  title:'修改密码',
				  skin: 'layui-layer-rim', //加上边框
				  area: ['370px', '330px'], //宽高
				  content:$('#changepsw')
				});
			
		});
		$('#oldpsw').blur(function(event) {

			 var oldpsw=$('#oldpsw').val();
			 if (oldpsw!=credential) {
			 	alert('原密码错误！');
			 	$('#oldpsw').val("");
			 }
			 
		});
		$('#sublit-psw').click(function(event) {
			
			var newpsw=$('#newpsw').val();
			var submitpsw=$('#confirmpsw').val();
			if (newpsw!=submitpsw) {
				alert('两次密码输入不一致！');
			}
			if (newpsw==submitpsw) {
				$.ajax({
			    url: 'http://localhost:8080/springmvc/changePsw.do',
			    type: 'POST',
			    cache: false,
			    data:{
			    	"username":username,
			    	"psw":newpsw
			    },
			    success:function(data){ 
			    	console.log(data);
			    	layer.close(layer.index);
					layer.msg('密码修改成功！');
			    }
			}) ;
		  
			}
		});
		$('#baseInfo').click(function(){
				layer.open({
				  type: 1,
				  title:'个人信息',
				  skin: 'layui-layer-rim', //加上边框
				  area: ['420px', '370px'], //宽高
				  content:$('#myinfo')
				});
		});
		var imgurl="";
		$('#file').on('change',  function(event) {	
			var file = this.files[0];

		     //限定上传文件的类型，判断是否是图片类型
		     if (!/image\/\w+/.test(file.type)) {
		         alert("只能选择图片");
		         return false;
		    }
		     var reader = new FileReader();
		     reader.readAsDataURL(file);
		     reader.onload = function (e) {
		       base64Code=this.result;
		        //把得到的base64赋值到img标签显示
		       $("#imgbackage").attr("src",base64Code);
		       $("#userinfoimg").attr("src",base64Code);
		       
		     }
		    $.ajax({
			    url: 'http://localhost:8080/springmvc/fileupload.do',
			    type: 'POST',
			    cache: false,
			    data: new FormData($('#uploadForm')[0]),
			    processData: false,
			    contentType: false,
			    success:function(data){
			    	imgurl=data.split('"')[3];
			    	console.log(data.split('"')[3]);
			    }
			}).done(function(res) {
			}).fail(function(res) {});
		});
		
		$('#submit_btn_info').click(function(event) {
			var phone=$('#phone-info').val();
			var username=$('#username-info').text();
			var email=$('#email-info').val();
			var address=$('#address-info').val();
			$.ajax({
				type:"POST",
				dataType:"json",
				url:'http:/localhost:8080/springmvc/updateuserinfo.do',
				data:{
					"phone":phone,
					"username":username,
					"email":email,
					"address":address,
					"imgurl":imgurl
				},
				success:function(data){

					console.log(data);
					layer.close(layer.index);
					layer.msg('信息修改成功！');
				}
			});
		});	
		function selectInfoByNumber(packurl){
			table.render({
				elem: '#search-result'
				,height:'500px'
				,width:'100%'
				,url: packurl //数据接口
				//,page: true //开启分页
				,cols: [[ //表头
				{field:'packnumber', width:150, title:'快递单号'}
				,{field:'sname', width:80, sort: true, title: '发件人'}
				,{field:'sphone', width:120, title: '发件人手机'}
				,{field:'saddress', width:160, title: '发件地址'} 
				,{field:'rname', width:80, title: '收件人'}
				,{field:'rphone', width:120, title: '收件人手机'}
				,{field:'raddress', width:160, title: '收件人地址'}
				,{field:'thingsType', width:160 , title: '物品类型'}
				,{field:'nowtime', width:180 , title: '发件时间'}
				,{field:'weight', width:40, title: '重量'}
				]]
			});

		};
		function selectInfoByOthers(packurl){
			table.render({
				elem: '#search-result-others'
				,height:'full-200'
				,width:'100%'
				,url: packurl //数据接口
				//,page: true //开启分页
				,cols: [[ //表头
				{field:'packnumber', width:150, title:'快递单号'}
				,{field:'sname', width:80, sort: true, title: '发件人'}
				,{field:'sphone', width:120, title: '发件人手机'}
				,{field:'saddress', width:160, title: '发件地址'} 
				,{field:'rname', width:80, title: '收件人'}
				,{field:'rphone', width:120, title: '收件人手机'}
				,{field:'raddress', width:160, title: '收件人地址'}
				,{field:'thingsType', width:160 , title: '物品类型'}
				,{field:'nowtime', width:180 , title: '发件时间'}
				,{field:'weight', width:40, title: '重量'}
				]]
			});

		};
		$('#select-button').click(function(event) {
			var packnumber=$('#select-number').val();
			var phone=$('#select-phone').val();

			var packurl='http:/localhost:8080/springmvc/selectByPhoneOrNumber.do?packnumber='+packnumber+'&phone='+phone;
			selectInfoByNumber(packurl);
		});
		$('#select-condition').click(function(event) {
			
			var saddress=$('#select-saddress').val();
			var raddress=$('#select-raddress').val();
			var nowdate=$('#senddate').val();
			var packurl='http:/localhost:8080/springmvc/selectByPhoneOthers.do?sendpoint='+saddress+'&receivepoint='+raddress+'&senddate='+nowdate;
			selectInfoByOthers(packurl);
		});


		{//div的点击事件，将隐藏的div显示
			$('#console-pack').click(function(event) {
				$('#pack-div').show();
				$('#query-div').hide();
				$('#employee-div').hide();
				$('#infomation-div').hide();
				$('#logistics-div').hide();
				$('#state-div').hide();
			});
			$('#console-query').click(function(event) {
				$('#pack-div').hide();
				$('#query-div').show();
				$('#employee-div').hide();
				$('#infomation-div').hide();
				$('#logistics-div').hide();
				$('#state-div').hide();
			});
			$('#console-infomation').click(function(event) {
				$('#pack-div').hide();
				$('#query-div').hide();
				$('#employee-div').hide();
				$('#infomation-div').show();
				$('#logistics-div').hide();
				$('#state-div').hide();
			});
			$('#console-logistics').click(function(event) {
				$('#pack-div').hide();
				$('#query-div').hide();
				$('#employee-div').hide();
				$('#infomation-div').hide();
				$('#logistics-div').show();
				$('#state-div').hide();
				getPoint();
			});
			$('#console-state').click(function(event) {
				$('#pack-div').hide();
				$('#query-div').hide();
				$('#employee-div').hide();
				$('#infomation-div').hide();
				$('#logistics-div').hide();
				$('#state-div').show();
				
				
			});
			$('#console-employee').click(function(event) {
				$('#pack-div').hide();
				$('#query-div').hide();
				$('#employee-div').show();
				$('#infomation-div').hide();
				$('#logistics-div').hide();
				$('#state-div').hide();
			});

	    }		
	});
});