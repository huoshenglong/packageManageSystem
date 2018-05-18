// 表单的验证
$(document).ready(function(){
	layui.use('form',function(){
		var form=layui.form;
		//logistics.html页面的快递表单验证
		/*邮箱验证*/
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



		/**/
		$('#s-phone-input').change(function(){
			var reg =  /^1[3|4|5|8|7][0-9]\d{8}$/; 
			var value=$('#s-phone-input').val();	
			 if (reg.test(value)==false) {
					layer.tips('手机号格式不正确！', '#s-phone-input', {
					  tips: [2, '#EE2C2C'],
					  time: 5000
					});
					$('#s-phone-input').val("");
				}
		});
		$('#r-right-input-phone').change(function(){
			var reg =  /^1[3|4|5|8|7][0-9]\d{8}$/; 
			var value=$('#r-right-input-phone').val();	
			 if (reg.test(value)==false) {
					layer.tips('手机号格式不正确！', '#r-right-input-phone', {
					  tips: [2, '#EE2C2C'],
					  time: 5000
					});
					$('#r-right-input-phone').val("");
				}
		});
	});
});
