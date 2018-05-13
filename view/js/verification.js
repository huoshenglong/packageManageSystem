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
	});
});
