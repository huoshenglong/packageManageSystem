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
		alert('aaa');
		renderWaitTable();
		$('#need-receive').hide();
	});
	$('#pack-need-delive').click(function(){
		alert('bbb');
		renderDispatchTable();
		$('#need-delive').hide();
	});
	layui.use(['table','element','laypage'], function(){
  var table = layui.table,
  element = layui.element,
  laypage=layui.laypage; 
	  table.render({
	    elem: '#idTest'
	    ,height: 560
	    ,width:'100%'
	    ,url: 'http://localhost:8080/springmvc/queryWaitInfo.do' //数据接口
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
	    ,done: function(res, curr, count){  
	        console.log(res.count+'****'+curr+'****'+count);
	        laypage.render({
	          elem: 'pageDemo' //分页容器的id
	          ,count: 100 //总页数
	          ,skin: '#1E9FFF' //自定义选中色值
	          ,skip: true //开启跳页
	          ,jump: function(obj, first){
	            if(!first){
	              layer.msg('第'+ obj.curr +'页');
	            }
	          }
	        });
	    } 
  });
 
  //监听表格复选框选择
  table.on('checkbox(demo)', function(obj){
    console.log(obj)
  });
  //监听工具条
  table.on('tool(demo)', function(obj){
    var data = obj.data;
    if(obj.event === 'detail'){
      layer.msg('ID：'+ data.id + ' 的查看操作');
    } else if(obj.event === 'del'){
      layer.confirm('真的删除行么', function(index){
        obj.del();
        layer.close(index);
      });
    } else if(obj.event === 'edit'){
      layer.alert('编辑行：<br>'+ JSON.stringify(data.rname))
    }
  });
  
  var $ = layui.$, active = {
    getCheckData: function(){ //获取选中数据
      var checkStatus = table.checkStatus('idTest')
      ,data = checkStatus.data;
      layer.alert(JSON.stringify(data));
    }
    ,getCheckLength: function(){ //获取选中数目
      var checkStatus = table.checkStatus('idTest')
      ,data = checkStatus.data;
      layer.msg('选中了：'+ data.length + ' 个');
    }
    ,isAll: function(){ //验证是否全选
      var checkStatus = table.checkStatus('idTest');
      layer.msg(checkStatus.isAll ? '全选': '未全选')
    }
  };
  
  $('.demoTable .layui-btn').on('click', function(){
    var type = $(this).data('type');
    active[type] ? active[type].call(this) : '';
  });
});
 
});