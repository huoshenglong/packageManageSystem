$(document).ready(function(){
 
	$('#right-display >div').hide();
	$('.morechose').hide();
	$('#find-more').click(function(){
		var l_he=$('#lots').height();
		if (l_he<190) {
			$('#lots').height(150);
		}
		if (l_he==150) {
			$('#lots').height(30);
		}
		$('#cp1').fadeToggle( );
		$('#cp2').fadeToggle( );
		$('#cp3').fadeToggle( );
		 
	});

	$('#scope1').mouseenter(function(event) {
		$("#scope1").attr("src","../images/m2.png");
	}).mouseleave(function(event) {
		$("#scope1").attr("src","../images/m1.png");
	});
	
	$('#scope2').mouseenter(function(event) {
		$("#scope2").attr("src","../images/add2.png");
	}).mouseleave(function(event) {
		$("#scope2").attr("src","../images/add1.png");
	});

	$('#scope1').click(function(event) {
		var num=$("#right-input-weight").val();
		if (num>1) {
			num=num*1-1*1;
			$("#right-input-weight").val(num);
		}
		
	});
	$('#scope2').click(function(event) {
		var num=$("#right-input-weight").val();
		num=num*1+1*1;
		$("#right-input-weight").val(num)
	});
	$("#left-chose > div").click(function(){
	    $(`.${this.id}-div`).show();
	    $(`.${this.id}-div`).siblings('div').hide();
	});
	$("#lots >div").click(function(){
	    $(`.${this.id}-div`).show();
	    $(`.${this.id}-div`).siblings('div').hide();
	});
	$('#exchange-cash').click(function() {
		var start_cash=$('#start-cash').children('option:selected').val();
		var end_cash=$('#end-cash').children('option:selected').val();
		var count=$('#input-number-cash').val();
		if (start_cash==end_cash) {
			alert("请选择不同的币种！")
			$('#cash-result-number').text(1);
		}
		$.ajax({
	        type: "POST",//方法类型
	        dataType: "json",//预期服务器返回的数据类型
	        url: "http://localhost:8080/springmvc/cash.do" ,//url
	        data: $('#form-cash').serialize(),
	        success: function (result) {
	        var value=count*1*result;                                         
	            $('#cash-result-number').text(value);
	        },
	        error : function(result) {	                	 
	            
	        }
	    });
			$('#result-cash').show();
			
	}); 
	

	layui.use('form',function(){
		var form=layui.form;
		function getCity(cityIdTarg,provinceid){
			$.ajax({
			    type: "POST",//方法类型
			    dataType: "json",//预期服务器返回的数据类型
			    url: "http://localhost:8080/springmvc/city.do" ,//url
			    data:  "provinceid="+provinceid.value,
			    success: function (data) {
			     $("#"+cityIdTarg).empty();
			     for (var i = 0; i <= data.length - 1; i++) {
			     	var options="<option value='"+data[i].cityId+"'>"+data[i].city+"</option>";	      
			 		$("#"+cityIdTarg).append(options);	   
			         }
			 		form.render('select');
			    },
			    error : function(data) {             	     
			    }
			});
		};
		function transCity(provinceid){
			var cityId=	provinceid.elem.id.split("-");
			cityId=cityId[0]+'-'+cityId[1]+'-'+'city'+'-'+cityId[3];
		 
			return cityId;
		};
		form.on('select(f-province)', function(provinceid){		 		 
			getCity(transCity(provinceid),provinceid);
		});
		form.on('select(t-province)', function(provinceid){	
			getCity(transCity(provinceid),provinceid);
		});
		form.on('select(s-province)', function(provinceid){	
			getCity(transCity(provinceid),provinceid);;
		});
		form.on('select(e-province)', function(provinceid){	
			getCity(transCity(provinceid),provinceid);
		});
  
		$.ajax({		 	 
	        type: "POST",//方法类型
	        dataType: "json",//预期服务器返回的数据类型
	        url: "http://localhost:8080/springmvc/province.do" ,//url
	        success: function (result) { 
	         	for (var i =0 ; i <= result.length - 1; i++) {
	         		var options="<option value='"+result[i].provinceId+"'>"+result[i].province+"</option>";	         		
	         		$("#f-select-province-id").append(options);
	         		$("#t-select-province-id").append(options);
	         		$("#s-select-province-id").append(options);
	         		$("#e-select-province-id").append(options);
	         	} 
	         	form.render('select');	
	        },
	        error : function(result) {	                	     
	        }
	    });		
	});
	// 快递表单验证
	var emaileCode='';
	$('#get-iden-code').click(function(){//用于邮箱验证
		var emailnumber=$('#email-input-number').val();	
		if (emailnumber!="") {	 
		 $.ajax({ 
	            type: "POST",//方法类型
	            dataType: "json",//预期服务器返回的数据类型
	            url: "http://localhost:8080/springmvc/email.do" , 
	            data:  "emailnum="+emailnumber,
	            success: function (result) {
	             	emaileCode=result;
	             	alert('请注意查收验证码！');
	            },
	            error : function(result) {
	            }
	        }); 
		}else{
			alert('请先输入邮箱！');
		}

	});
    $('#submit-package-button').click(function(){
    	
    	var s_province=$('#f-select-province-id').children('option:selected').text();
    	var s_city=$('#f-select-city-id').children('option:selected').text();
    	var s_add_detail=$('#sender-right-input-address').val();
    	var sendaddress=s_province+s_city+s_add_detail;
    	var r_province=$('#t-select-province-id').children('option:selected').text();
    	var r_city=$('#t-select-city-id').children('option:selected').text();
    	var r_add_detail=$('#receive-right-input-address').val();
    	var receiveaddress=r_province+r_city+r_add_detail;

    	var things="";  
		$("input:checkbox[name='thingsType']:checked").each(function() { // 获取物品类型
		  things+=$(this).val()+',';  // 每一个被选中项的值
		});

		if ($('#r-right-input-name').val()!=""&&$('#r-right-input-phone').val()!="") {
			if ($('#s-name-input').val()!=""&&$('#s-phone-input').val()!="") {
				if (emaileCode!="") {
					if ($('#email-input-iden').val()==emaileCode) {
						$.ajax({
					        type: "POST",//方法类型
					        dataType: "json",//预期服务器返回的数据类型
					        data:$('#i-want-send-pack').serialize()+"&sendaddress="+sendaddress+"&receiveaddress="+receiveaddress+"&things="+things,
					        url: "http://localhost:8080/springmvc/addpack.do" ,//url   
					        success: function (result) {
					        	alert('您的快递单号为：'+result+'\n请记下，以便日后查询！');
					        	//同时将提交按钮设为不可用
					        	$('#submit-package-button').attr("disabled","disabled");
					        },
					        error : function(result) {
					            console.log(result);
					        }
				    	});
					}else{
						alert('您输入的邮箱验证码不正确！')
					}
				}else{
					alert('请正确填写邮箱后，获取验证码！')
				}
			}else{
				alert('请将寄件人的信息补充完整！')
			}		 
		}else{
			alert('请将收件人的信息补充完整！')
		}				 
	 
    	
    });
   
    $('#select-date').click(function(){
    	var str=new Array('820000','810000','710000','650000','460000','540000','150000') ;
    	var sprovince=$('#s-select-province-id').val();
    	var tprovince=$('#e-select-province-id').val();
    	var weight=$('#right-input-weight-date').val();
    	var stand=true;
    	var data=new Array();
    	date=$('#senddate2').val().split("-");
    	var year=date[0];
    	var month=date[1];
    	var day=date[2];
    	for (var i = str.length - 1; i >= 0; i--) {
			if (sprovince==str[i]||tprovince==str[i]) {
				stand=false;
				break;
			}
    	} 
    	if (stand) { 
    		var cost=(weight*1-1)*5+13; 
    		day=day*1+3;
    		if (day*1>30) {
    			month=month*1+1;
    			day=3;
    		}
    		if (month*1>12) {
    			year=year*1+1;
    			month=1;
    			day=3;
    		} 
    	}
    	if (!stand) { 
    		var cost=(weight*1-1)*8+15;
    		day=day*1+7;
    		if (day*1>30) {
    			month=month*1+1;
    			day=7;
    		}
    		if (month*1>12) {
    			year=year*1+1;
    			month=1;
    			day=7;
    		}
    		
    	}
    	$('#abouttime').text('大约'+year+'-'+month+'-'+day+'左右可到达！');
    	$('#aboutcost').text('费用大约为：'+cost+"元");
    });
    $('#selectLogistic-btn').click(function(){
    	$('#showloginfo').text("");
    	var right='/^\d{15}$/';
    	var number=$('#right-input-package').val();
    	 
    	$.ajax({
    		type:"post",
    		dataType:"json",
    		url:"http://localhost:8080/springmvc/selectPackLogisticInfo.do",
    		data:{
    			"packnumber":number
    		},
    		success:function(data){
    		  console.log(data);
    		 if (data.length!=0) {
				var time = data.map(function(item) {
    				return item.split('*')[0];
    			});
    			var point = data.map(function(item) {
    				return item.split('*')[1];
    			}); 
    			for (var i = 0; i<=time.length-1; i++) { 
    				 $('#showloginfo').append(`<ul class="layui-timeline">           
			          <li class="layui-timeline-item">
			            <i class="layui-icon layui-timeline-axis" style="font-size: 15px; color: #008080;line-height: 20px;" ></i>
			            <div class="layui-timeline-content layui-text">
			              <h3 class="layui-timeline-title">`+time[i]+`</h3>
			              <p>
							`+point[i]+` 
			              </p>
			            </div>
			          </li>
			        </ul>  `);
    			}	
    		 }
    		 if (data.length==0) {
    		 	$('#showloginfo').append(`<ul class="layui-timeline">           
			          <li class="layui-timeline-item">
			            <i class="layui-icon layui-timeline-axis" style="font-size: 15px; color: #008080;line-height: 20px;" ></i>
			            <div class="layui-timeline-content layui-text">
			              <h3 class="layui-timeline-title">提示：</h3>
			              <p>
							暂时没有物流信息！ 
			              </p>
			            </div>
			          </li>
			        </ul>  `);
    		 }
    			
    		},
    		error:function(data){
    			console.log('查找快递信息失败！');
    		}
    	});
    });
    
	
});