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
});