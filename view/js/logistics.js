$(document).ready(function(){
 //logistics.html页面的设计js
    $('#form-send').hide();
    $('#find-order').hide();
    $('#time-order').hide();
    $('#allmap').hide();
    $('#strand-div').hide();
    $('#exchange').hide();
    $('#result-cash').hide();
    $('#com-table').hide();
    $('#cashquery').hide();
    
	$('#cp1').hide();
	$('#cp2').hide();
	$('#cp3').hide();
 
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
	 $('#send-btu').click(function(){
	 	$('#form-send').show();
	    $('#find-order').hide();
	    $('#time-order').hide();
	    $('#allmap').hide();
	    $('#strand-div').hide();
	    $('#exchange').hide();
	    $('#com-table').hide();
	    $('#cashquery').hide();
	 });
	 $('#find-btu').click(function(){
	 	$('#form-send').hide();
	    $('#find-order').show();
	    $('#time-order').hide();
	    $('#allmap').hide();
	    $('#strand-div').hide();
	    $('#exchange').hide();
	    $('#com-table').hide();
	    $('#cashquery').hide();
	 });
	 $('#time-btu').click(function(){
	 	$('#form-send').hide();
	    $('#find-order').hide();
	    $('#time-order').show();
	    $('#allmap').hide();
	    $('#strand-div').hide();
	    $('#exchange').hide();
	    $('#com-table').hide();
	    $('#cashquery').hide();
	 });
	 $('#neets-btu').click(function(){
	 	$('#form-send').hide();
	    $('#find-order').hide();
	    $('#time-order').hide();
	    $('#allmap').show();
	    $('#strand-div').hide();
	    $('#exchange').hide();
	    $('#com-table').hide();
	    $('#cashquery').hide();
	 });
	 $('#strand-btu').click(function(){
	 	$('#form-send').hide();
	    $('#find-order').hide();
	    $('#time-order').hide();
	    $('#allmap').hide();
	    $('#strand-div').show();
	    $('#exchange').hide();
	    $('#com-table').hide();
	    $('#cashquery').hide();
	 });
	 $('#exchange-query').click(function(){
	 	$('#form-send').hide();
	    $('#find-order').hide();
	    $('#time-order').hide();
	    $('#allmap').hide();
	    $('#strand-div').hide();
	    $('#exchange').show();
	    $('#com-table').hide();
	    $('#cashquery').hide();
	 });
	 $('#comment-table').click(function(){
	 	$('#form-send').hide();
	    $('#find-order').hide();
	    $('#time-order').hide();
	    $('#allmap').hide();
	    $('#strand-div').hide();
	    $('#exchange').hide();
	    $('#com-table').show();
	    $('#cashquery').hide();
	 });

	 $('#cash-query').click(function(){
	 	$('#form-send').hide();
	    $('#find-order').hide();
	    $('#time-order').hide();
	    $('#allmap').hide();
	    $('#strand-div').hide();
	    $('#exchange').hide();
	    $('#com-table').hide();
	    $('#cashquery').show();
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
		form.on('select(f-province)', function(provinceid){			 
		 
		   $.ajax({
			 
		        type: "POST",//方法类型
		        dataType: "json",//预期服务器返回的数据类型
		        url: "http://localhost:8080/springmvc/city.do" ,//url
		        data:  "provinceid="+provinceid.value,
		        success: function (data) {	
		          
		         $("#f-select-city-id").empty();     
		         for (var i = 0; i <= data.length - 1; i++) {
		         	var options="<option value='"+data[i].cityId+"'>"+data[i].city+"</option>";
	      
	         		$("#f-select-city-id").append(options);
	   
 		         }       	 
		         	
	         		form.render('select');
		        },
		        
		        error : function(data) {	                	     
		        }
	    	});
		});
		form.on('select(t-province)', function(provinceid){			 
	 
		   $.ajax({
			 
		        type: "POST",//方法类型
		        dataType: "json",//预期服务器返回的数据类型
		        url: "http://localhost:8080/springmvc/city.do" ,//url
		        data:  "provinceid="+provinceid.value,
		        success: function (data) {	
		          
		         $("#t-select-city-id").empty();     
		         for (var i = 0; i <= data.length - 1; i++) {
		         	var options="<option value='"+data[i].cityId+"'>"+data[i].city+"</option>";
	      
	         		$("#t-select-city-id").append(options);
	   
 		         }       	 
		         	
	         		form.render('select');
		        },
		        
		        error : function(data) {	                	     
		        }
	    	});
		});
		form.on('select(s-province)', function(provinceid){			 
		  console.log(provinceid.value); //得到被选中的值
		   $.ajax({
			 
		        type: "POST",//方法类型
		        dataType: "json",//预期服务器返回的数据类型
		        url: "http://localhost:8080/springmvc/city.do" ,//url
		        data:  "provinceid="+provinceid.value,
		        success: function (data) {	
		          
		         $("#s-select-city-id").empty(); 

		         for (var i = 0; i <= data.length - 1; i++) {
		         	var options="<option value='"+data[i].cityId+"'>"+data[i].city+"</option>";
	      
	         		$("#s-select-city-id").append(options);
	   
 		         }       	 
		         	
	         		form.render('select');
		        },
		        
		        error : function(data) {	                	     
		        }
	    	});
		});
		form.on('select(e-province)', function(provinceid){			 
		  console.log(provinceid.value); //得到被选中的值
		   $.ajax({
			 
		        type: "POST",//方法类型
		        dataType: "json",//预期服务器返回的数据类型
		        url: "http://localhost:8080/springmvc/city.do" ,//url
		        data:  "provinceid="+provinceid.value,
		        success: function (data) {	
		          
		         $("#e-select-city-id").empty();     
		         for (var i = 0; i <= data.length - 1; i++) {
		         	var options="<option value='"+data[i].cityId+"'>"+data[i].city+"</option>";
	      
	         		$("#e-select-city-id").append(options);
	   
 		         }       	 
		         	
	         		form.render('select');
		        },
		        
		        error : function(data) {	                	     
		        }
	    	});
		});
		$.ajax({
		 	 
	        type: "POST",//方法类型
	        dataType: "json",//预期服务器返回的数据类型
	        url: "http://localhost:8080/springmvc/province.do" ,//url
	        // data:  "emailnum="+emailnumber,
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
	$('#email-input-number').blur(function(event) {	 
		var reg =  /\w+[@]{1}\w+[.]\w+/; 
	    var value=$('#email-input-number').val();	 
	    if (reg.test(value)==false) {
				layer.tips('邮箱格式不正确！', '#email-input-number', {
				  tips: [2, '#EE2C2C'],
				  time: 5000
				});
			}

	});
	var emaileCode='';
	$('#get-iden-code').click(function(){//用于邮箱验证
		var emailnumber=$('#email-input-number').val();		 
		 $.ajax({
		 	// email-input-number
	            type: "POST",//方法类型
	            dataType: "json",//预期服务器返回的数据类型
	            url: "http://localhost:8080/springmvc/email.do" ,//url
	            data:  "emailnum="+emailnumber,
	            success: function (result) {	            	 
	             	emaileCode=result;
	            },
	            error : function(result) {	                	 
	                
	            }
	        }); 
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
					        data: $('#i-want-send-pack').serialize()+"&sendaddress="+sendaddress+"&receiveaddress="+receiveaddress+"&things="+things,
					        url: "http://localhost:8080/springmvc/addpack.do" ,//url   
					        success: function (result) {
					        	alert('您的快递单号为：'+result+'<br>'+'请记下，以便日后查询！');
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
	
});