$(document).ready(function(){
	$.ajax({ 
	    type: "POST", 
	    dataType: "json", 
	    url: "http://localhost:8080/springmvc/packState.do" , 
	    success: function (result) {	            	 
	     	var str=new Array();
	     	str=result.split('+');
	     	$('#need-receive').text('待揽'+str[0]);
	     	$('#need-delive').text('待发'+str[1]);
	    },
	    error : function(result) {
	        
	    }
	});
	$('#pack-need-receive').click(function(){
		$('#need-receive').hide();
	});
	$('#pack-need-delive').click(function(){
		$('#need-delive').hide();
	});
 
});